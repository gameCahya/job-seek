// 📁 src/app/api/registrasi/route.ts
import { NextResponse } from 'next/server';
import { supabase } from '@/lib/supabase';

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { nama, email, whatsapp, akunUtama, akunTambahan, paket, tagihan } = body;

    if (!nama || !email || !whatsapp || !akunUtama || !paket || !tagihan) {
      return NextResponse.json({ success: false, message: 'Data tidak lengkap' }, { status: 400 });
    }

    const { data, error: dbError } = await supabase
      .from('registration')
      .insert([
        {
          nama,
          email,
          whatsapp,
          akun_utama: akunUtama,
          akun_tambahan: Array.isArray(akunTambahan) ? akunTambahan : [],
          paket,
          tagihan,
        },
      ])
      .select();

    if (dbError) {
      console.error('❌ Supabase insert error:', dbError);
      return NextResponse.json({ success: false, message: 'Gagal simpan data' }, { status: 500 });
    }

    const insertedId = data?.[0]?.id;
    const insertedToken = data?.[0]?.token;

    return NextResponse.json({
        success: true,
        message: 'Berhasil disimpan dan dikirim ke WhatsApp',
        id: insertedId,
        token: insertedToken, // ⬅️ tambahkan ini
      });

  } catch (err: any) {
    return NextResponse.json({ success: false, message: 'Terjadi kesalahan server', error: err.message }, { status: 500 });
  }
}
