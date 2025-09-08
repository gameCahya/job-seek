'use client';

import { useEffect, useState } from 'react';
import { useParams, useRouter } from 'next/navigation';
import { supabase } from '@/lib/supabase';
import Image from 'next/image';
import Modal from 'react-modal';

// Setup modal root (wajib)
if (typeof window !== 'undefined') {
  Modal.setAppElement('body');
}

export default function JobDetailPage() {
  const params = useParams();
  const router = useRouter();
  const id = params?.id as string;

  const [job, setJob] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [modalIsOpen, setModalIsOpen] = useState(false); // untuk lightbox

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

  const openModal = () => setModalIsOpen(true);
  const closeModal = () => setModalIsOpen(false);

  return (
    <div className="max-w-3xl mx-auto p-6 space-y-6">
      <h1 className="text-3xl font-bold text-blue-600 dark:text-blue-400">{job.posisi}</h1>

      {/* Poster Thumbnail — Klik untuk perbesar */}
      {job.poster_url && (
        <div
          onClick={openModal}
          className="relative w-full h-64 md:h-80 rounded-xl overflow-hidden shadow-lg cursor-pointer group transition-transform duration-300 hover:scale-105"
        >
          <Image
            src={job.poster_url}
            alt={job.posisi}
            fill
            style={{ objectFit: 'cover' }}
            className="rounded-lg transition-opacity duration-300 group-hover:opacity-90"
            sizes="(max-width: 768px) 100vw, 50vw"
            priority
          />
          <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-opacity duration-300 flex items-center justify-center">
            <span className="text-white font-semibold opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
              Perbesar Gambar
            </span>
          </div>
        </div>
      )}

      <div>
        <h2 className="text-xl font-semibold mb-2 text-gray-800 dark:text-gray-200">📍 Lokasi</h2>
        <p className="text-gray-700 dark:text-gray-300">{job.lokasi}</p>
      </div>

      <div>
        <h2 className="text-xl font-semibold mb-2 text-gray-800 dark:text-gray-200">📝 Deskripsi Pekerjaan</h2>
        <p className="break-words whitespace-pre-line text-gray-700 dark:text-gray-300">{job.deskripsi || '-'}</p>
      </div>

      <div>
        <h2 className="text-xl font-semibold mb-2 text-gray-800 dark:text-gray-200">✅ Syarat & Kualifikasi</h2>
        <p className="break-words whitespace-pre-line text-gray-700 dark:text-gray-300">{job.syarat || '-'}</p>
      </div>

      <div>
        <h2 className="text-xl font-semibold mb-2 text-gray-800 dark:text-gray-200">📞 Kontak Pendaftaran</h2>
        <p className="text-gray-700 dark:text-gray-300">{job.kontak}</p>
      </div>

      <button
        onClick={() => router.push('/jobs')}
        className="mt-6 bg-blue-600 hover:bg-blue-700 dark:bg-blue-700 dark:hover:bg-blue-600 text-white px-6 py-3 rounded-lg font-medium transition-colors duration-300"
      >
        Kembali ke Daftar Lowongan
      </button>

      {/* Modal Lightbox */}
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        className="fixed inset-0 flex items-center justify-center p-4 bg-black bg-opacity-90 z-50"
        overlayClassName="fixed inset-0 bg-black bg-opacity-75 z-40"
        contentLabel="Zoom Poster"
      >
        <div className="relative max-w-4xl max-h-full">
          <button
            onClick={closeModal}
            className="absolute -top-12 right-0 text-white text-3xl font-bold hover:text-gray-300 z-50"
            aria-label="Close modal"
          >
            &times;
          </button>
          <div className="relative w-full h-[80vh] md:h-[90vh] rounded-lg overflow-hidden shadow-2xl">
            <Image
              src={job.poster_url}
              alt={job.posisi}
              fill
              style={{ objectFit: 'contain' }} // biar tidak crop, tapi scale sesuai
              className="rounded-lg"
              sizes="90vw"
            />
          </div>
        </div>
      </Modal>
    </div>
  );
}