import { NextResponse } from 'next/server';

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
      id, // ini ID dari Supabase, dikirimkan dari frontend
      token, // ini token UUID dari Supabase
    } = body;

    if (!nama || !email || !whatsapp || !akunUtama || !paket || !tagihan || !id || !token) {
      return NextResponse.json({ success: false, message: 'Data tidak lengkap' }, { status: 400 });
    }

    const invoiceUrl = `https://jobseekindonesia.com/invoices/${id}`; // pakai id (bukan token UUID)
    const kelengkapanUrl = `${invoiceUrl}/kelengkapan`;

    const tokenFonnte = process.env.FONNTE_TOKEN;
    const adminWA = process.env.ADMIN_WA;

    const userMessage = `✅ Pendaftaran Berhasil!
Nama: ${nama}
Email: ${email}
WA: ${whatsapp}
Akun Utama: ${akunUtama}
Akun Tambahan: ${akunTambahan?.join(', ') || '-'}
Paket: ${paket}
Tagihan: Rp${Number(tagihan).toLocaleString('id-ID')}

Link kelengkapan :  

Silahkan melakukan pembayaran pada salah satu rekening ini :
Seabank : 901484983783 a.n Andoyo
Bank BCA Digital : 0086 0694 2105 a.n Andoyo

Konfirmasi kenomer ini ya kak ${adminWA}

📄 Invoice: ${invoiceUrl}

website : jobseekindonesia.com
whatsapp : ${adminWA}`;

    const adminMessage = `📥 Pendaftar Baru:
Nama: ${nama}
Email: ${email}
WA: ${whatsapp}
Akun Utama: ${akunUtama}
Akun Tambahan: ${akunTambahan?.join(', ') || '-'}
Paket: ${paket}
Tagihan: Rp${Number(tagihan).toLocaleString('id-ID')}
TOKEN: ${token}`; // token di sini bisa jadi UUID

    const sendTo = async (target: string, message: string) => {
      const payload = {
        target,
        message,
        delay: '2',
      };

      const response = await fetch('https://api.fonnte.com/send', {
        method: 'POST',
        headers: {
          Authorization: tokenFonnte!,
          'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: new URLSearchParams(payload).toString(),
      });

      const resultText = await response.text();
      const result = JSON.parse(resultText);
      if (!result.status) {
        throw new Error(`Gagal kirim ke ${target}: ${result.reason}`);
      }
    };

    await sendTo(whatsapp.replace(/^0/, '62'), userMessage); // ke user
    if (!adminWA) {
      throw new Error('Admin WA number is not defined');
    }
    await sendTo(adminWA, adminMessage); // ke admin

    return NextResponse.json({ success: true, message: 'Pesan berhasil dikirim' });
  } catch (err: any) {
    console.error('❌ Error WA:', err);
    return NextResponse.json({ success: false, message: err.message }, { status: 500 });
  }
}
