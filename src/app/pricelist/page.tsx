'use client'

import PriceList from '../components/pricelist-comp'
import RegistrationForm from '../components/formulir'
import RegistrationStep from '../components/RegistrationStep'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFile } from '@fortawesome/free-solid-svg-icons'

export default function Home() {
  const steps = [
    {
      number: 1,
      title: 'Tentukan Paket Iklan',
      description:
        'Pilih salah satu paket iklan yang tersedia: STARTER (Rp 50.000), BASIC (Rp 85.000), atau PREMIUM (Rp 125.000).',
    },
    {
      number: 2,
      title: 'Lengkapi Formulir',
      description:
        'Isi formulir pendaftaran dengan detail perusahaan dan informasi lowongan pekerjaan.',
    },
    {
      number: 3,
      title: 'Kirim Formulir',
      description:
        'Kirimkan formulir pendaftaran melalui platform atau kontak yang telah disediakan.',
    },
    {
      number: 4,
      title: 'Konfirmasi Pembayaran',
      description:
        'Lakukan pembayaran sesuai paket yang dipilih, lalu konfirmasikan pembayaran ke admin JobSeek Indonesia.',
    },
    {
      number: 5,
      title: 'Verifikasi & Publikasi',
      description:
        'Iklan akan diverifikasi dan diterbitkan setelah pembayaran berhasil dikonfirmasi.',
    },
    {
      number: 6,
      title: 'Tunggu Pelamar Masuk',
      description:
        'Setelah iklan tayang, pelamar dapat mulai mengirimkan lamaran kerja.',
    },
  ]



  return (
    <>
      {/* Bagian Daftar Harga */}
      <PriceList />

      {/* Konten Utama - Langkah, Syarat, Form */}
      <div className="container mx-auto px-4 py-10 max-w-7xxl">
       
        {/* Grid Layout (3 Kolom) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">

          {/* Kolom 1: Langkah Pendaftaran */}
          <section className="md:col-span-1 space-y-6">
           <h1 className="text-3xl font-bold text-center mb-12">Langkah-Langkah Pendaftaran</h1>

            {steps.map((step) => (
              <RegistrationStep key={step.number} step={step} />
            ))}
          </section>

          {/* Kolom 2: Syarat dan Ketentuan */}
          <section className="md:col-span-1 space-y-6">
            <div className="flex flex-col items-center text-center mb-8">
              <FontAwesomeIcon className="text-blue-500 text-7xl" icon={faFile} />
              <h2 className="text-2xl font-bold text-blue-500 mt-6">Syarat dan Ketentuan</h2>
            </div>

            <ul className="space-y-3 text-sm md:text-base text-gray-700 list-disc pl-5">
              <li>Iklan tidak memiliki batas waktu tayang unlimited, tetapi akan tergeser jika ada iklan baru.</li>
              <li>Jeda tiap posting adalah 3 hari sekali untuk paket iklan > 2x posting.</li>
              <li>Bisa request jadwal posting maksimal 3 hari dari jadwal sebelumnya.</li>
              <li>Jam posting ditentukan admin sesuai antrian.</li>
              <li>Post di website & Telegram tayang min. 1 hari setelah materi diterima.</li>
              <li>Channel Instagram lebih diutamakan dibanding feed.</li>
              <li>Iklan tayang 30 hari, setelah itu otomatis nonaktif.</li>
              <li>Materi & poster bebas (bisa dari klien atau dari tim).</li>
              <li>Invoice jika diperlukan untuk klaim ke pimpinan.</li>
              <li>Free desain tidak untuk revisi typo / info penting yang keliru.</li>
              <li>Harga bisa berubah sesuai peningkatan followers.</li>
            </ul>
          </section>

          {/* Kolom 3: Form Pendaftaran */}
          <section className="md:col-span-1 bg-white p-6 rounded-xl shadow-md">
            <RegistrationForm />
          </section>
        </div>
      </div>
    </>
  )
}
