// components/PriceList.tsx
import { FC } from 'react';

type Package = {
  name: string;
  price: number;
  originalPrice?: number;
  features: string[];
};

const packages: Package[] = [
  {
    name: 'STARTER',
    price: 50000,
    originalPrice: 125000,
    features: [
      '1x Post di Website',
      '1x Post Feed Instagram',
      'Tag Akun Instagram',
      '1x Post Channel Instagram',
      '1x Post Facebook',
      '1x Post Channel Telegram',
    ],
  },
  {
    name: 'BASIC',
    price: 85000,
    originalPrice: 300000,
    features: [
      '1x Post di Website',
      '2x Post Feed Instagram',
      'Tag Akun Instagram',
      '1x Post Channel Instagram',
      '2x Post Facebook',
      '1x Post Channel Telegram',
      'Free Design Poster',
    ],
  },
  {
    name: 'PREMIUM',
    price: 125000,
    originalPrice: 400000,
    features: [
      '1x Post di Website',
      'Dapat Semua Akun',
      '4x Post Feed Instagram',
      '6x Post Story Instagram',
      'Tag Akun Instagram',
      '1x Post Channel Instagram',
      '4x Post Facebook',
      '1x Post Channel Telegram',
      'Free Design Poster',
    ],
  },
];

const PriceList: FC = () => {
  return (
    <section className="py-12 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8">Paket Iklan Lowongan Pekerjaan</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {packages.map((pkg) => (
            <div key={pkg.name} className="bg-white rounded-xl shadow-lg overflow-hidden">
              <div className="bg-blue-600 text-white text-center py-6">
                <h3 className="text-2xl font-bold">{pkg.name}</h3>
              </div>
              <div className="p-6 flex flex-col h-full">
                <ul className="space-y-4 mb-6 flex-grow">
                  {pkg.features.map((f, idx) => (
                    <li key={idx} className="flex items-center text-gray-700">
                      <i className="fas fa-check text-blue-600 mr-2"></i>
                      {f}
                    </li>
                  ))}
                </ul>
                <div className="text-center mt-auto">
                  {pkg.originalPrice && (
                    <p className="text-gray-500 line-through">Rp {pkg.originalPrice.toLocaleString()}</p>
                  )}
                  <p className="text-2xl font-bold text-blue-600 my-4">Rp {pkg.price.toLocaleString()}</p>
                  <button className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition">
                    Pilih Paket
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PriceList;
