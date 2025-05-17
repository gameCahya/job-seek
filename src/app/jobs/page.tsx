'use client';

import { useEffect, useState } from 'react';
import { supabase } from '@/lib/supabase';
import Image from 'next/image';
import { format } from 'date-fns';
import { id } from 'date-fns/locale';
import Link from 'next/link';


export default function JobsPage() {
  const [jobs, setJobs] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [searchPosisi, setSearchPosisi] = useState('');
  const [filterLokasi, setFilterLokasi] = useState('Semua');

  useEffect(() => {
    const fetchJobs = async () => {
      const { data, error } = await supabase
        .from('kelengkapan')
        .select('id, posisi, lokasi, deskripsi, poster_url, batas_akhir')
        .order('created_at', { ascending: false });

      if (!error && data) {
        setJobs(data);
      }
      setLoading(false);
    };

    fetchJobs();
  }, []);

  const lokasiUnik = Array.from(new Set(jobs.map((j) => j.lokasi))).sort();

  const filteredJobs = jobs.filter((job) => {
    const cocokPosisi = job.posisi.toLowerCase().includes(searchPosisi.toLowerCase());
    const cocokLokasi = filterLokasi === 'Semua' || job.lokasi === filterLokasi;
    return cocokPosisi && cocokLokasi;
  });

  return (
    <div className="max-w-6xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6 text-center">Lowongan Pekerjaan</h1>

      {/* Filter Bar */}
      <div className="flex flex-col md:flex-row items-center gap-4 mb-6">
        <input
          type="text"
          placeholder="Cari posisi..."
          value={searchPosisi}
          onChange={(e) => setSearchPosisi(e.target.value)}
          className="w-full md:w-1/2 px-4 py-2 border rounded"
        />

        <select
          value={filterLokasi}
          onChange={(e) => setFilterLokasi(e.target.value)}
          className="w-full md:w-1/2 px-4 py-2 border rounded"
        >
          <option value="Semua">Semua Lokasi</option>
          {lokasiUnik.map((lokasi) => (
            <option key={lokasi} value={lokasi}>
              {lokasi}
            </option>
          ))}
        </select>
      </div>

      {loading ? (
        <p>Loading...</p>
      ) : filteredJobs.length === 0 ? (
        <p className="text-gray-500">Tidak ada lowongan yang cocok.</p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredJobs.map((job) => {
            const batasAkhir = new Date(job.batas_akhir);
            const hariTersisa = Math.ceil((batasAkhir.getTime() - Date.now()) / (1000 * 60 * 60 * 24));

            return (
              
              <div
                key={job.id}
                className="border rounded-lg shadow hover:shadow-md transition bg-white overflow-hidden"
              >
                <Link href={`/jobs/${job.id}`}>
                {job.poster_url && (
                  <div className="relative w-full h-48">
                    <Image
                      src={job.poster_url}
                      alt={job.posisi}
                      fill
                      className="object-cover"
                    />
                  </div>
                )}
                <div className="p-4 flex flex-col">
                  <h2 className="text-lg font-bold">{job.posisi}</h2>
                  <p className="text-sm text-gray-600 mb-2">{job.lokasi}</p>
                  {hariTersisa <= 7 && (
                    <span className="bg-red-100 text-red-600 text-xs rounded-full px-3 py-1 mb-2 w-max">
                      Segera Ditutup
                    </span>
                  )}
                  <p className="text-sm text-gray-700 line-clamp-3">{job.deskripsi}</p>
                  <p className="text-xs text-gray-500 mt-3">
                    Batas Akhir: {format(batasAkhir, 'd MMMM yyyy', { locale: id })}
                  </p>
                </div>
                </Link>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}
