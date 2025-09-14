'use client';

import { useEffect, useState } from 'react';
import { useParams, useRouter } from 'next/navigation';
import { supabase } from '@/lib/supabase';
import { PDFDownloadLink } from '@react-pdf/renderer';
import InvoiceDocument from '@/app/components/pdf/InvoiceDocument';

export default function InvoicePage() {
  const params = useParams();
  const router = useRouter();
  const id = params?.id as string;
  
  const [data, setData] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchInvoice = async () => {
      const { data, error } = await supabase
        .from('registration')
        .select('*')
        .eq('id', id)
        .single();

      if (error || !data) {
        console.error(error);
        return;
      }
      setData(data);
      setLoading(false);
    };

    fetchInvoice();
  }, [id]);

  if (loading) return <div className="p-6">Loading...</div>;
  if (!data) return <div className="p-6 text-red-600">Invoice tidak ditemukan.</div>;

  const akunTambahanCount = data.akun_tambahan?.length || 0;
  const akunTambahanSubtotal = akunTambahanCount * 5000;
  const paketHarga = data.tagihan - akunTambahanSubtotal;

  return (
    <section className="h-dvh max-w-3xl mx-auto p-6">
      {/* Judul */}
      <h1 className="text-3xl font-bold text-blue-600 mb-6">INVOICE</h1>

      {/* Info Penerima */}
      <div className="mb-8">
        <p><strong>Invoice ID:</strong> {data.id}</p>
        <p><strong>Date:</strong> {new Date().toLocaleDateString('id-ID')}</p>
        <p><strong>Issued to:</strong> {data.nama}</p>
        <p>{data.email}</p>
        <p>{data.whatsapp}</p>
      </div>

      {/* Tabel Pembayaran */}
      <div className="border border-blue-600 rounded-lg overflow-hidden mb-8">
        <table className="w-full text-sm">
          <thead className="bg-blue-600 text-white">
            <tr>
              <th className="py-2 px-3 text-center">No</th>
              <th className="py-2 px-3 text-left">Description</th>
              <th className="py-2 px-3 text-center">Qty</th>
              <th className="py-2 px-3 text-center">Price</th>
              <th className="py-2 px-3 text-center">Subtotal</th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-t">
              <td className="py-2 px-3 text-center">1</td>
              <td className="py-2 px-3">{data.paket}</td>
              <td className="py-2 px-3 text-center">1</td>
              <td className="py-2 px-3 text-center">Rp{paketHarga.toLocaleString('id-ID')}</td>
              <td className="py-2 px-3 text-center">Rp{paketHarga.toLocaleString('id-ID')}</td>
            </tr>

            {akunTambahanCount > 0 && (
              <tr className="border-t">
                <td className="py-2 px-3 text-center">2</td>
                <td className="py-2 px-3">
                  Tambahan Akun ({akunTambahanCount} akun × Rp5.000)
                </td>
                <td className="py-2 px-3 text-center">{akunTambahanCount}</td>
                <td className="py-2 px-3 text-center">Rp5.000</td>
                <td className="py-2 px-3 text-center">Rp{akunTambahanSubtotal.toLocaleString('id-ID')}</td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

      {/* Total */}
      <div className="text-right text-xl font-bold text-blue-600 mb-8">
        Grand Total: Rp{data.tagihan.toLocaleString('id-ID')}
      </div>

      {/* Note */}
      <div className="text-gray-500 text-sm mb-8">
        <p>Seabank : 901484983783 a.n Andoyo </p>
        <p>Bank BCA Digital : 0086 0694 2105 a.n Andoyo </p>
        <p>Jobseek Indonesia</p>
      </div>

      {/* Tombol Download PDF */}
      <PDFDownloadLink
        document={<InvoiceDocument data={data} />}
        fileName={`invoice-${data.id}.pdf`}
      >
        {({ loading }) => (
          <button
            disabled={loading}
            className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 mb-4"
          >
            {loading ? 'Preparing PDF...' : 'Download Invoice (PDF)'}
          </button>
        )}
      </PDFDownloadLink>

      {/* Tombol Isi Kelengkapan */}
      <button
        onClick={() => router.push(`/invoices/${id}/kelengkapan`)}
        className="w-full bg-green-600 text-white py-3 rounded-lg hover:bg-green-700"
      >
        Isi Kelengkapan Lowongan
      </button>
    </section>
  );
}
