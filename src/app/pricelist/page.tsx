// pages/index.tsx
'use client'

import PriceList from '../components/pricelist-comp'
import RegistrationForm from '../components/formulir'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFile } from '@fortawesome/free-solid-svg-icons'

export default function Home() {
  return (
    <>
   
      <PriceList />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 px-4 md:px-8 py-8 items-center justify-center">
    {/* Kolom Kiri: Syarat dan Ketentuan */}
    <div className="container mx-auto px-4 max-w-3xl">
      <div className="flex flex-col items-center text-center mb-4">
        <FontAwesomeIcon className="text-blue-500 fa-8x" icon={faFile} />
        <h2 className="text-2xl font-bold text-blue-500 mt-10">Syarat dan Ketentuan Pendaftaran</h2>
      </div>
      <ul className="space-y-3 text-sm md:text-xl text-gray-700">
        <li>✔️ Iklan tidak memiliki batas waktu tayang unlimited, tetapi akan tergeser jika ada iklan baru.</li>
        <li>✔️ Jeda tiap posting adalah 3 hari sekali untuk paket iklan &gt; 2x posting.</li>
        <li>✔️ Bisa request jadwal posting maksimal 3 hari dari jadwal sebelumnya.</li>
        <li>✔️ Jam posting ditentukan admin sesuai antrian.</li>
        <li>✔️ Post di website & Telegram tayang min. 1 hari setelah materi diterima.</li>
        <li>✔️ Channel Instagram lebih diutamakan dibanding feed.</li>
        <li>✔️ Iklan tayang 30 hari, setelah itu otomatis nonaktif.</li>
        <li>✔️ Materi & poster bebas (bisa dari klien atau dari tim).</li>
        <li>✔️ Invoice jika diperlukan untuk klaim ke pimpinan.</li>
        <li>✔️ Free desain tidak untuk revisi typo / info penting yang keliru.</li>
        <li>✔️ Harga bisa berubah sesuai peningkatan followers.</li>
      </ul>
    </div>

        {/* Kolom Kanan: Form Pendaftaran */}
        <div className="bg-white p-6 rounded-2xl shadow-md">
        <RegistrationForm />
      </div>
    </div>
     

    </>
  )
}
