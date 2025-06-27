import { NextResponse } from 'next/server';
import { supabase } from '@/lib/supabase';


export async function POST(req: Request) {
  try {
    const body = await req.json();
    const {
      nama,
      email,
      whatsapp,
      akunUtama,
      akunTambahan,
      paket,
      tagihan,
    } = body;

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
      return NextResponse.json({ success: false, message: dbError.message || 'Gagal simpan ke database' }, { status: 500 });
    }

    const insertedId = data?.[0]?.id;
    const invoiceUrl = `https://jobseek.com/invoice/${insertedId}`;


    const token = process.env.FONNTE_TOKEN;
    if (!token) {
      return NextResponse.json({ success: false, message: 'Token Fonnte tidak tersedia' }, { status: 500 });
    }

    const message = `📋 Pendaftaran Job Seek
        Nama: ${nama}
        Email: ${email}
        WhatsApp: ${whatsapp}
        Akun Utama: ${akunUtama}
        Akun Tambahan: ${akunTambahan?.join(', ') || '-'}
        Paket: ${paket}
        Total Tagihan: Rp${Number(tagihan).toLocaleString('id-ID')}
        
        📄 Invoice: ${invoiceUrl}`;

        

    const targets = [
      whatsapp.replace(/^0/, '62'),
      process.env.ADMIN_WA || '6281234567890',
    ];

    for (const target of targets) {
      const payload = {
        target,
        message,
        delay: '3',
      };

      const response = await fetch('https://api.fonnte.com/send', {
        method: 'POST',
        headers: {
          Authorization: token,
          'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: new URLSearchParams(payload).toString(),
      });

      const text = await response.text();
      let result;
      try {
        result = JSON.parse(text);
      } catch (e) {
        console.error('❌ Gagal parse respons Fonnte:', text);
        return NextResponse.json({ success: false, message: 'Respons Fonnte tidak valid' }, { status: 500 });
      }

      if (!result.status) {
        console.error(`❌ Gagal kirim ke ${target}:`, result.reason);
        return NextResponse.json({ success: false, message: `Gagal kirim ke ${target}` }, { status: 500 });
      }
    }

    return NextResponse.json({
      success: true,
      message: 'Berhasil disimpan dan dikirim ke WhatsApp',
      id: insertedId, // ⬅️ ini penting
    });

  } catch (err: any) {
    console.error('❌ Server error:', err);
    return NextResponse.json({ success: false, message: 'Terjadi kesalahan server', error: err.message }, { status: 500 });
  }
}
