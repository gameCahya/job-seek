'use client';

import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck } from '@fortawesome/free-solid-svg-icons';
import addAccount from './tabel-akun';

const Formulir: React.FC = () => {
    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        // Handle form submission logic here
        alert('Form submitted!');
    };
    return (
      <section id="registration" className="py-12 bg-gray-50">
      <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              {/* <!-- Bagian Kiri: Ilustrasi --> */}
          <div className="animate-fade-in-left">
                <svg xmlns="http://www.w3.org/2000/svg" 
                className="max-w-[100px] md:max-w-[200px] mx-auto size-5" 
                viewBox="0 0 20 20" 
                fill="currentColor">
                  <path className="fill-blue-500" 
                  fill-rule="evenodd" 
                  d="M3 3.5A1.5 1.5 0 0 1 4.5 2h6.879a1.5 1.5 0 0 1 1.06.44l4.122 4.12A1.5 1.5 0 0 1 17 7.622V16.5a1.5 1.5 0 0 1-1.5 1.5h-11A1.5 1.5 0 0 1 3 16.5v-13Zm10.857 5.691a.75.75 0 0 0-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 0 0-1.06 1.061l2.5 2.5a.75.75 0 0 0 1.137-.089l4-5.5Z" 
                  clip-rule="evenodd" />
                </svg>
  
                  <h3 className="text-xl font-bold mt-6 text-left max-w-md mx-auto ">Syarat dan Ketentuan Pendaftaran</h3>
                  {/* <div className=" mt-2 max-w-md mx-auto text-left"> */}
          <div className="p-6 flex flex-col h-full text-gray-600 text-left ">
                      <ul className="space-y-4 mb-6 flex-grow">
              <li className="flex items-center"> <FontAwesomeIcon icon={faCheck} className="text-blue-600 mr-2" />Iklan tidak memiliki batas waktu tayang unlimited, tetapi akan tergeser jika ada iklan baru.</li>
              <li className="flex items-center"> <FontAwesomeIcon icon={faCheck} className="text-blue-600 mr-2" />Jeda tiap posting adalah 3 hari sekali untuk paket iklan {">"} 2x posting, kecuali permintaan khusus.</li>
              <li className="flex items-center"> <FontAwesomeIcon icon={faCheck} className="text-blue-600 mr-2" />Bisa request jadwal posting dengan jeda maksimal 3 hari dari posting sebelumnya.</li>
              <li className="flex items-center"> <FontAwesomeIcon icon={faCheck} className="text-blue-600 mr-2" />Jam posting ditentukan ole admin sesuai antrian.</li>
              <li className="flex items-center"> <FontAwesomeIcon icon={faCheck} className="text-blue-600 mr-2" />Posting di website dan Telegram akan dipublish minimal 1 hari setelah materi diterima.</li>
              <li className="flex items-center"> <FontAwesomeIcon icon={faCheck} className="text-blue-600 mr-2" />Posting di Channel Instagram lebih diutamakan dibanding feed.</li>
              <li className="flex items-center"> <FontAwesomeIcon icon={faCheck} className="text-blue-600 mr-2" />Iklan di website akan tayang selama 30 hari, setelah itu otomatis nonaktif.</li>
              <li className="flex items-center"> <FontAwesomeIcon icon={faCheck} className="text-blue-600 mr-2" />Materi iklan dan poster bebas (bisa dari klien atau dibuat oleh tim).</li>
              <li className="flex items-center"> <FontAwesomeIcon icon={faCheck} className="text-blue-600 mr-2" />Invoice iklan tersedia jika diperlukan untuk klaim ke pimpinan perusahaan. </li>
              <li className="flex items-center"> <FontAwesomeIcon icon={faCheck} className="text-blue-600 mr-2" />Free desain poster tidak dapat direvisi (kecuali jika ada typo atau tambahan informasi penting.</li>
              <li className="flex items-center"> <FontAwesomeIcon icon={faCheck} className="text-blue-600 mr-2" />Harga dapat berubah sewaktu-waktu sesuai dengan jumlah peningkatan followers.</li>
                      </ul>
                  </div>
              </div>
  
              {/* <!-- Bagian Kanan: Form --> */}
              <div className="animate-fade-in-right">
                  <div className="bg-white rounded-xl shadow-lg p-6 md:p-8">
                      <h2 className="text-2xl font-bold text-center mb-6">Form Pendaftaran</h2>
                      <form id="registrationForm" action="send-message.php" method="POST" className="space-y-6" noValidate>
      {/* <!-- Nama Lengkap --> */}
      <div>
          <label htmlFor="name" className="block text-gray-700 mb-2">Nama Lengkap:</label>
          <input type="text" id="name" name="nama" 
              className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              pattern=".{3,}" 
              title="Minimal 3 karakter"
              required />
          <p className="text-red-500 text-sm mt-1 hidden" id="nameError">Nama harus diisi (minimal 3 karakter)</p>
      </div>
  
      {/* <!-- Email --> */}
      <div>
          <label htmlFor="email" className="block text-gray-700 mb-2">Email:</label>
          <input type="email" id="email" name="email" 
              className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500"
              required />
          <p className="text-red-500 text-sm mt-1 hidden" id="emailError">Email tidak valid</p>
      </div>
  
      {/* <!-- WhatsApp --> */}
      <div>
          <label htmlFor="whatsapp" className="block text-gray-700 mb-2">Nomor WhatsApp Aktif:</label>
          <input type="tel" id="whatsapp" name="whatsapp" 
              className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500"
              pattern="^08[0-9]{9,12}$"
              title="Format: 08xxxxxxxxxx"
              required />
          <p className="text-red-500 text-sm mt-1 hidden" id="whatsappError">Format nomor tidak valid (contoh: 081234567890)</p>
      </div>
  
      {/* <!-- Akun Instagram Utama --> */}
      <div>
          <label htmlFor="mainAccount" className="block text-gray-700 mb-2">Akun Instagram Utama:</label>
          <select id="mainAccount" name="mainAccount" 
              className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500" 
              required>
              <option value="" disabled selected>Pilih akun utama</option>
              <option value="loker.engineering">@loker.engineering</option>
              <option value="lokerdigitalmarketing">@lokerdigitalmarketing</option>
              <option value="loker_mengajar">@loker_mengajar</option>
              <option value="lokerjawatengah_official">@lokerjawatengah_official</option>
              <option value="loker_akuntansikeuangan">@loker_akuntansikeuangan</option>
              <option value="lokerjawatimur_official">@lokerjawatimur_official</option>
              <option value="loker_dokterkesehatan">@loker_dokterkesehatan</option>
          </select>
      </div>
  
      {/* <!-- Akun Tambahan --> */}
      <div>
          <h5 className="text-gray-700 mb-3">Akun Tambahan (+ Rp 5.000/akun):</h5>
          <div className="overflow-x-auto">
          <table className="w-full border-collapse">
          <thead className="bg-gray-50">
              <tr>
              <th className="border p-2 text-left">Pilih</th>
              <th className="border p-2 text-left">Nama Akun</th>
              </tr>
          </thead>
          <tbody id="extraAccounts">
              {addAccount()}
          </tbody>
          </table>
          </div>
          <div className="mt-4">
          </div>
      </div>

      
  
      {/* <!-- Pilih Paket --> */}
      <div>
          <label htmlFor="package" className="block text-gray-700 mb-2">Pilih Paket:</label>
          <select id="package" name="package" 
              className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500" 
              required>
              <option value="45000">STARTER - Rp 45.000</option>
              <option value="95000">BASIC - Rp 95.000</option>
              <option value="135000">PREMIUM - Rp 135.000</option>
          </select>
      </div>
  
      {/* <!-- Total Tagihan --> */}
      <div className="text-lg font-semibold">
          <p>Total Tagihan: <span id="totalCost" className="text-blue-600">Rp 45.000</span></p>
      </div>
  
      {/* <!-- Tombol Daftar --> */}
      <button type="submit" 
          className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition-colors disabled:bg-gray-400"
          id="submitBtn">
          Daftar
      </button>
  </form>
                  </div>
              </div>
          </div>
      </div>
  </section>
        
    );
};

export default Formulir;