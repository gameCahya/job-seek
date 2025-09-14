'use client';

import { useEffect, useState } from 'react';
import { useParams, useRouter } from 'next/navigation';
import { supabase } from '@/lib/supabase';
import Image from 'next/image';

export default function JobDetailPage() {
  const params = useParams();
  const router = useRouter();
  const id = params?.id as string;
  
  const [job, setJob] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchJob = async () => {
      const { data, error } = await supabase
        .from('kelengkapan')
        .select('*')
        .eq('id', id)
        .single();

      if (error || !data) {
        console.error(error);
        return;
      }
      setJob(data);
      setLoading(false);
    };

    fetchJob();
  }, [id]);

  if (loading) return <div className="p-6">Loading...</div>;
  if (!job) return <div className="p-6 text-red-600">Lowongan tidak ditemukan.</div>;

  return (
    <div className="max-w-3xl mx-auto p-6 space-y-6">
      <h1 className="text-3xl font-bold text-blue-600">{job.posisi}</h1>

      {job.poster_url && (
        <div className="relative w-full h-64 rounded overflow-hidden">
          <Image
            src={job.poster_url}
            alt={job.posisi}
            fill
            style={{ objectFit: 'cover' }}
            className="rounded-lg"
          />
        </div>
      )}

      <div>
        <h2 className="text-xl font-semibold mb-2">📍 Lokasi</h2>
        <p>{job.lokasi}</p>
      </div>

      <div>
        <h2 className="text-xl font-semibold mb-2">📝 Deskripsi Pekerjaan</h2>
        <p className='break-words whitespace-pre-line'>{job.deskripsi || '-'}</p>
      </div>

      <div>
        <h2 className="text-xl font-semibold mb-2">✅ Syarat & Kualifikasi</h2>
        <p className='break-words whitespace-pre-line'>{job.syarat || '-'}</p>
      </div>

      <div>
        <h2 className="text-xl font-semibold mb-2">📞 Kontak Pendaftaran</h2>
        <p>{job.kontak}</p>
      </div>

      <button
        onClick={() => router.push('/jobs')}
        className="mt-6 bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
      >
        Kembali ke Daftar Lowongan
      </button>
    </div>
  );
}