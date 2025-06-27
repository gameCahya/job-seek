// 📁 /app/api/kirim-kelengkapan/route.ts
import { NextResponse } from 'next/server';
import { supabase } from '@/lib/supabase';
import { v4 as uuidv4 } from 'uuid';

export async function POST(req: Request) {
  const formData = await req.formData();

  const invoiceId = formData.get('invoiceId') as string;
  const token = formData.get('token') as string;
  const posisi = formData.get('posisi') as string;
  const lokasi = formData.get('lokasi') as string;
  const deskripsi = formData.get('deskripsi') as string;
  const syarat = formData.get('syarat') as string;
  const kontak = formData.get('kontak') as string;
  const batasAkhir = formData.get('batasAkhir') as string;
  const poster = formData.get('poster') as File | null;

  if (!invoiceId || !token || !posisi || !lokasi || !kontak || !batasAkhir) {
    return NextResponse.json({ success: false, message: 'Data tidak lengkap' }, { status: 400 });
  }

  // ✅ Validasi token
  const { data: regData, error: regError } = await supabase
    .from('registration')
    .select('token')
    .eq('id', invoiceId)
    .single();

  if (regError || !regData || regData.token !== token) {
    return NextResponse.json({ success: false, message: 'Token tidak valid' }, { status: 403 });
  }

  let posterUrl = null;

  // 🖼️ Upload poster jika ada
  if (poster) {
    const buffer = Buffer.from(await poster.arrayBuffer());
    const fileExt = poster.name.split('.').pop();
    const fileName = `poster-${uuidv4()}.${fileExt}`;

    const { data: uploadData, error: uploadError } = await supabase.storage
      .from('posters')
      .upload(fileName, buffer, {
        contentType: poster.type,
        upsert: true,
      });

    if (uploadError) {
      console.error('❌ Upload error:', uploadError);
      return NextResponse.json({ success: false, message: 'Gagal upload poster' }, { status: 500 });
    }

    posterUrl = supabase.storage.from('posters').getPublicUrl(fileName).data.publicUrl;
  }

  // 🔁 Cek apakah sudah ada kelengkapan
  const { data: existing } = await supabase
    .from('kelengkapan')
    .select('id')
    .eq('registration_id', invoiceId)
    .maybeSingle();

  if (existing) {
    // 🔄 Update jika sudah ada
    const { error: updateError } = await supabase
      .from('kelengkapan')
      .update({
        posisi,
        lokasi,
        deskripsi,
        syarat,
        kontak,
        batas_akhir: batasAkhir,
        poster_url: posterUrl,
      })
      .eq('id', existing.id);

    if (updateError) {
      console.error('❌ Update error:', updateError);
      return NextResponse.json({ success: false, message: 'Gagal update kelengkapan' }, { status: 500 });
    }
  } else {
    // ➕ Insert jika belum ada
    const { error: insertError } = await supabase.from('kelengkapan').insert({
      registration_id: invoiceId,
      posisi,
      lokasi,
      deskripsi,
      syarat,
      kontak,
      batas_akhir: batasAkhir,
      poster_url: posterUrl,
    });

    if (insertError) {
      console.error('❌ Insert error:', insertError);
      return NextResponse.json({ success: false, message: 'Gagal simpan kelengkapan' }, { status: 500 });
    }
  }

  return NextResponse.json({ success: true, message: 'Kelengkapan berhasil dikirim!' });
}
