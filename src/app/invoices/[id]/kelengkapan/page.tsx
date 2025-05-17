'use client';

import { useState } from 'react';
import { useParams } from 'next/navigation';

export default function KelengkapanPage() {
  const params = useParams();
  const id = typeof params.id === 'string' ? params.id : Array.isArray(params.id) ? params.id[0] : '';

  const [token, setToken] = useState('');
  const [posisi, setPosisi] = useState('');
  const [lokasi, setLokasi] = useState('');
  const [deskripsi, setDeskripsi] = useState('');
  const [syarat, setSyarat] = useState('');
  const [kontak, setKontak] = useState('');
  const [batasAkhir, setBatasAkhir] = useState('');
  const [poster, setPoster] = useState<File | null>(null);

  const [error, setError] = useState('');
  const [sukses, setSukses] = useState('');

  const handlePosterChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setPoster(e.target.files[0]);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setSukses('');

    if (!id) {
      setError('❌ ID invoice tidak ditemukan.');
      return;
    }

    const formData = new FormData();
    formData.append('invoiceId', id);
    formData.append('token', token);
    formData.append('batasAkhir', batasAkhir);
    formData.append('posisi', posisi);
    formData.append('lokasi', lokasi);
    formData.append('deskripsi', deskripsi);
    formData.append('syarat', syarat);
    formData.append('kontak', kontak);
    if (poster) {
      formData.append('poster', poster);
    }

    try {
      const res = await fetch('/api/kirim-kelengkapan', {
        method: 'POST',
        body: formData,
      });

      const result = await res.json();
      if (!res.ok || !result.success) {
        throw new Error(result.message || 'Gagal kirim data');
      }

      setSukses('✅ Data kelengkapan berhasil dikirim!');
    } catch (err: any) {
      setError('❌ ' + err.message);
    }
  };

  return (
    <div className="max-w-2xl mx-auto p-6">
      <h1 className="text-2xl font-bold mb-4">📝 Form Kelengkapan Lowongan</h1>

      {error && <p className="text-red-500">{error}</p>}
      {sukses && <p className="text-green-600">{sukses}</p>}

      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="text"
          placeholder="Token dari Admin"
          value={token}
          onChange={(e) => setToken(e.target.value)}
          required
          className="w-full p-2 border rounded"
        />

        <input
          type="text"
          placeholder="Posisi/Jabatan"
          value={posisi}
          onChange={(e) => setPosisi(e.target.value)}
          required
          className="w-full p-2 border rounded"
        />

        <input
          type="date"
          value={batasAkhir}
          onChange={(e) => setBatasAkhir(e.target.value)}
          className="w-full p-2 border rounded"
          required
        />

        <input
          type="text"
          placeholder="Lokasi Penempatan"
          value={lokasi}
          onChange={(e) => setLokasi(e.target.value)}
          required
          className="w-full p-2 border rounded"
        />

        <textarea
          placeholder="Deskripsi Pekerjaan"
          value={deskripsi}
          onChange={(e) => setDeskripsi(e.target.value)}
          className="w-full p-2 border rounded"
          rows={4}
        />

        <textarea
          placeholder="Syarat Kualifikasi"
          value={syarat}
          onChange={(e) => setSyarat(e.target.value)}
          className="w-full p-2 border rounded"
          rows={4}
        />

        <input
          type="text"
          placeholder="Kontak atau Link Pendaftaran"
          value={kontak}
          onChange={(e) => setKontak(e.target.value)}
          className="w-full p-2 border rounded"
          required
        />

        <input
          type="file"
          accept="image/*"
          onChange={handlePosterChange}
          className="w-full p-2 border rounded"
        />

        <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded">
          Kirim Kelengkapan
        </button>
      </form>
    </div>
  );
}
