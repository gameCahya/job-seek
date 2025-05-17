// 🧾 Formulir.tsx (updated handleSubmit untuk 2 endpoint)
'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';

const extraAccounts = [
  '@loker.engineering',
  '@lokerdigitalmarketing',
  '@loker_mengajar',
  '@loker_akuntansikeuangan',
  '@lokerjawatimur_official',
  '@lokerjawatengah_official',
  '@loker_dokterkesehatan',
];

const RegistrationForm = () => {
  const router = useRouter();

  const [nama, setNama] = useState('');
  const [email, setEmail] = useState('');
  const [whatsapp, setWhatsapp] = useState('');
  const [mainAccount, setMainAccount] = useState('');
  const [selectedPackage, setSelectedPackage] = useState(45000);
  const [selectedExtras, setSelectedExtras] = useState<string[]>([]);
  const [totalCost, setTotalCost] = useState(45000);
  const [errorMsg, setErrorMsg] = useState('');
  const [successMsg, setSuccessMsg] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMsg('');
    setSuccessMsg('');

    try {
      // 1️⃣ Simpan ke Supabase
      const res = await fetch('/api/registrasi', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          nama,
          email,
          whatsapp,
          akunUtama: mainAccount,
          akunTambahan: selectedExtras,
          paket: `Paket ${selectedPackage}`,
          tagihan: totalCost,
        }),
      });

      const regData = await res.json();
      if (!res.ok || !regData.success || !regData.id) {
        throw new Error(regData.message || 'Gagal menyimpan data');
      }

      const insertedId = regData.id;
      const insertedToken = regData.token;

      // 2️⃣ Kirim pesan WA
      const resWa = await fetch('/api/send-wa', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          nama,
          email,
          whatsapp,
          akunUtama: mainAccount,
          akunTambahan: selectedExtras,
          paket: `Paket ${selectedPackage}`,
          tagihan: totalCost,
          id: insertedId, // hanya dikirim ke backend, tidak ditampilkan ke user
          token: insertedToken, // ID dari Supabase
        }),
      });

      const waData = await resWa.json();
      if (!resWa.ok || !waData.success) {
        throw new Error(waData.message || 'Gagal kirim pesan WhatsApp');
      }

      // ✅ Redirect ke invoice
      router.push(`/invoices/${insertedId}`);
    } catch (err: any) {
      setErrorMsg('❌ ' + err.message);
      console.error('⛔ Error:', err);
    }
  };
  return (

    <section>
       <h2 className="text-2xl font-bold text-center mb-6">Form Pendaftaran</h2>
       <form className="space-y-6" onSubmit={handleSubmit}>
         {errorMsg && <p className="text-red-500">{errorMsg}</p>}
         {successMsg && <p className="text-green-600">{successMsg}</p>}

         <div>
           <label className="block text-gray-700 mb-2">Nama Lengkap:</label>
           <input
             type="text"
             value={nama}
             onChange={(e) => setNama(e.target.value)}
             className="w-full px-4 py-2 border rounded-lg"
             required
           />
         </div>

         <div>
           <label className="block text-gray-700 mb-2">Email:</label>
           <input
             type="email"
             value={email}
             onChange={(e) => setEmail(e.target.value)}
             className="w-full px-4 py-2 border rounded-lg"
             required
           />
         </div>

         <div>
           <label className="block text-gray-700 mb-2">Nomor WhatsApp:</label>
           <input
             type="tel"
             value={whatsapp}
             onChange={(e) => setWhatsapp(e.target.value)}
             className="w-full px-4 py-2 border rounded-lg"
             required
           />
         </div>

       <div>
         <label className="block text-gray-700 mb-2">Akun Instagram Utama:</label>
         <select
           value={mainAccount}
           onChange={(e) => setMainAccount(e.target.value)}
           className="w-full px-4 py-2 border rounded-lg"
          
           required
         >
           <option value="" disabled >Pilih akun utama</option>
           <option value="loker.engineering">@loker.engineering</option>
           <option value="lokerdigitalmarketing">@lokerdigitalmarketing</option>
           <option value="loker_mengajar">@loker_mengajar</option>
           <option value="lokerjawatengah_official">@lokerjawatengah_official</option>
           <option value="loker_akuntansikeuangan">@loker_akuntansikeuangan</option>
           <option value="lokerjawatimur_official">@lokerjawatimur_official</option>
           <option value="loker_dokterkesehatan">@loker_dokterkesehatan</option>
         </select>
       </div>

       <div>
 <h4 className="text-gray-700 mb-2">Akun Tambahan (+ Rp 5.000/akun):</h4>
 {extraAccounts.map((acc) => (
   <label key={acc} className="block text-gray-600">
     <input
       type="checkbox"
       className="mr-2"
       checked={selectedExtras.includes(acc)}
       onChange={() => {
         let updated = [...selectedExtras];
         if (updated.includes(acc)) {
           updated = updated.filter((item) => item !== acc);
         } else {
           updated.push(acc);
         }
         setSelectedExtras(updated);
         setTotalCost(selectedPackage + updated.length * 5000);
       }}
     />
     {acc}
   </label>
 ))}
</div>

         <div>
           <label className="block text-gray-700 mb-2">Pilih Paket:</label>
           <select
             value={selectedPackage}
             onChange={(e) => {
               const price = parseInt(e.target.value);
               setSelectedPackage(price);
               setTotalCost(price + selectedExtras.length * 5000);
             }}
             className="w-full px-4 py-2 border rounded-lg"
           >
             <option value={45000}>STARTER - Rp 45.000</option>
             <option value={95000}>BASIC - Rp 95.000</option>
             <option value={135000}>PREMIUM - Rp 135.000</option>
           </select>
         </div>

         <div className="text-lg font-semibold">
           <p>Total Tagihan: <span className="text-blue-600">Rp {totalCost.toLocaleString()}</span></p>
         </div>

         <button
           type="submit"
           className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700"
         >
           Daftar
         </button>
       </form>
       </section>
  );
};

export default RegistrationForm;




