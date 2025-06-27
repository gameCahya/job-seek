import React from 'react';
import bgLayanan from '../../../public/assets/img/bg-Layanan.webp';
import bgLayanan1 from '../../../public/assets/img/bg-Layanan-1.webp';
import bgLayanan2 from '../../../public/assets/img/bg-Layanan-2.webp';
import Image from 'next/image';


const LayananPage: React.FC = () => {
    return (
        <><section className="relative min-h-screen bg-[linear-gradient(rgba(0,0,0,0.3),rgba(0,0,0,0.3))] bg-center bg-cover flex items-center justify-center text-center text-white p-5">
            <Image
                src={bgLayanan}
                alt="Background Image"
                fill
                style={{ objectFit: 'cover' }}
                className="absolute inset-0 z-[-1] opacity-100" />

            <div className="flex flex-col items-center justify-center text-center space-y-6">
                <h1 className="max-w-4xl text-4xl md:text-5xl font-extrabold mb-4 text-white [text-shadow:2px_2px_6px_rgba(0,0,0,0.7)]">
                    Buka Pintu <span className="text-sky-400">Masa Depan</span> Gemilang di <span className="text-sky-400">Negeri Sakura!</span>
                </h1>

                <h2 className="max-w-2xl bg-sky-400 text-white rounded-full text-2xl font-semibold px-6 py-3 shadow-lg">
                    Lulusan Kesehatan, Teknik, atau Bidang Lain?
                </h2>

                <p className="text-lg md:text-xl leading-relaxed font-medium text-white [text-shadow:1px_1px_4px_rgba(0,0,0,0.7)]">
                    Jangan Biarkan Keraguan Mengubur<br />
                    Impian – Mari Wujudkan Bersama!
                </p>

                <div className="flex flex-wrap gap-4 justify-center">
                    <a href="#layanan1" className="bg-sky-400 hover:bg-sky-600 text-white px-6 py-3 rounded-full font-bold uppercase shadow-md transition-transform transform hover:scale-105">
                        Layanan Program Kerja
                    </a>
                    <a href="#layanan2" className="bg-sky-400 hover:bg-sky-600 text-white px-6 py-3 rounded-full font-bold uppercase shadow-md transition-transform transform hover:scale-105">
                        Layanan Advertising
                    </a>
                    <a href="#layanan3" className="bg-sky-400 hover:bg-sky-600 text-white px-6 py-3 rounded-full font-bold uppercase shadow-md transition-transform transform hover:scale-105">
                        Layanan Professional
                    </a>
                </div>
            </div>
        </section>
        
        <section id="layanan1" className="relative min-h-[800px] py-12 bg-cover bg-center">
            <Image
            src={bgLayanan1}
            alt="Background Image"
            fill
            style={{ objectFit: 'cover' }}
            className="absolute inset-0 z-[-1] opacity-100" />

            <div className="container mx-auto px-4 relative z-10">
                <h1 className="text-orange-500 text-5xl font-bold text-center mb-8 animate-fade-in">
                Layanan Program Kerja</h1>
                <h2 className="text-white text-3xl font-bold text-center mb-8 animate-fade-in">
                Program Magang & Program Kerja (Tokutei Ginou)</h2>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {/* Paket 1 */}
                <div className="bg-black/[50%] text-white rounded-xl shadow-lg overflow-hidden animate-fade-in-left">
                    <div className="bg-orange-400 text-white text-center py-6">
                    <h3 className="text-2xl font-bold">SYARAT PENDAFTARAN</h3>
                    </div>
                    <div className="p-6 flex flex-col h-full">
                    <ul className="space-y-4 mb-6 flex-grow">
                        <li className="flex items-center">
                        Sehat jasmani dan Rohani
                        </li>
                        <li className="flex items-center">
                        Pria/Wanita Usia 18-35 tahun
                        </li>
                        <li className="flex items-center">
                        TB dan BB proporsional
                        </li>
                        <li className="flex items-center">
                        Tidak ada tato
                        </li>
                        <li className="flex items-center">
                        Ada ijin dari orang tua / wali
                        </li>
                    </ul>
                    </div>
                </div>

                {/* Paket 2 */}
                <div className="bg-black/[50%] text-white rounded-xl shadow-lg overflow-hidden animate-fade-in-left">
                    <div className="bg-orange-500 text-white text-center py-6">
                    <h3 className="text-2xl font-bold">FASILITAS</h3>
                    </div>
                    <div className="p-6 flex flex-col h-full">
                    <ul className="space-y-4 mb-6 flex-grow">
                        <li className="flex items-center">
                        Pengajar bersertifikasi (JLPT N1) & Berpengalaman
                        </li>
                        <li className="flex items-center">
                        Asrama gratis
                        </li>
                        <li className="flex items-center">
                        Air dan listrik gratis
                        </li>
                        <li className="flex items-center">
                        Wifi area
                        </li>
                        <li className="flex items-center">
                        Linkungan bersih dan tenang
                        </li>
                    </ul>
                    </div>
                </div>

                {/* Paket 3 */}
                <div className="bg-black/[50%] text-white rounded-xl shadow-lg overflow-hidden animate-fade-in-left">
                    <div className="bg-orange-600 text-white text-center py-6">
                    <h3 className="text-2xl font-bold">JENIS PEKERJAAN</h3>
                    </div>
                    <div className="p-6 flex flex-col h-full">
                    <ul className="space-y-4 mb-6 flex-grow">
                        <li className="flex items-center">
                        Manufaktur
                        </li>
                        <li className="flex items-center">
                        Restoran
                        </li>
                        <li className="flex items-center">
                        Perawat
                        </li>
                        <li className="flex items-center">
                        Pengolahan makanan
                        </li>
                        <li className="flex items-center">
                        Pertanian
                        </li>
                        <li className="flex items-center">
                        Konstruksi dll
                        </li>
                    </ul>
                    </div>
                </div>
                </div>
            </div>
            </section>
            
            <section id="layanan2" className="relative min-h-[800px] bg-gray-50 flex items-center justify-center overflow-hidden px-4 py-16">
                {/* <!-- Content Container --> */}
                <div className="max-w-6xl w-full space-y-8 lg:space-y-12">
                    {/* <!-- Header Section --> */}
                    <div className="max-w-3xl space-y-4">
                        <span className="inline-block bg-sky-500 text-white px-6 py-2 rounded-full text-lg font-bold">
                            Layanan Advertising
                        </span>
                        <h1 className="text-4xl md:text-5xl font-bold text-gray-900">
                            Promosi Lowongan Kerja
                        </h1>
                    </div>

                    {/* <!-- Two Columns Layout --> */}
                    <div className="grid lg:grid-cols-2 gap-12 items-start">
                        {/* <!-- Left Column - Content --> */}
                        <div className="space-y-8">
                            {/* <!-- Specialization --> */}
                            <div className="space-y-4">
                                <h3 className="text-2xl font-bold text-sky-600">
                                    Khusus Bidang:
                                </h3>
                                <div className="flex flex-wrap gap-3">
                                    <span className="px-4 py-2 bg-sky-100 text-sky-800 rounded-full font-medium">
                                        Kesehatan
                                    </span>
                                    <span className="px-4 py-2 bg-sky-100 text-sky-800 rounded-full font-medium">
                                        Pendidikan
                                    </span>
                                    <span className="px-4 py-2 bg-sky-100 text-sky-800 rounded-full font-medium">
                                        Keuangan
                                    </span>
                                    <span className="px-4 py-2 bg-sky-100 text-sky-800 rounded-full font-medium">
                                        Marketing
                                    </span>
                                    <span className="px-4 py-2 bg-sky-100 text-sky-800 rounded-full font-medium">
                                        Teknik
                                    </span>
                                </div>
                            </div>

                            {/* <!-- Features Grid --> */}
                            <div className="grid md:grid-cols-2 gap-6">
                                <div className="p-6 bg-white rounded-xl shadow-lg">
                                    <h3 className="text-xl font-bold text-gray-900 mb-3">Keunggulan Kami</h3>
                                    <ul className="space-y-2 text-gray-600">
                                        <li className="flex items-center gap-2">
                                            <svg className="w-5 h-5 text-sky-500 shrink-0" fill="currentColor" viewBox="0 0 20 20">
                                                <path d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"/>
                                            </svg>
                                            Target Spesifik - Tepat ke kandidat relevan
                                        </li>
                                        <li className="flex items-center gap-2">
                                            <svg className="w-5 h-5 text-sky-500 shrink-0" fill="currentColor" viewBox="0 0 20 20">
                                                <path d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"/>
                                            </svg>
                                            Jangkauan Nasional - Ribuan pencari kerja
                                        </li>
                                    </ul>
                                </div>

                                <div className="p-6 bg-white rounded-xl shadow-lg">
                                    <h3 className="text-xl font-bold text-gray-900 mb-3">Proses Instan</h3>
                                    <ul className="space-y-2 text-gray-600">
                                        <li className="flex items-center gap-2">
                                            <svg className="w-5 h-5 text-sky-500 shrink-0" fill="currentColor" viewBox="0 0 20 20">
                                                <path d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"/>
                                            </svg>
                                            Iklan tayang dalam 1×24 jam
                                        </li>
                                        <li className="flex items-center gap-2">
                                            <svg className="w-5 h-5 text-sky-500 shrink-0" fill="currentColor" viewBox="0 0 20 20">
                                                <path d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"/>
                                            </svg>
                                            Optimisasi iklan profesional
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                        {/* <!-- Right Column - Process --> */}
                        <div className="bg-sky-50 p-8 rounded-2xl space-y-6">
                            <h2 className="text-3xl font-bold text-gray-900">
                                Cara Kerja
                            </h2>
                            <ol className="space-y-6">
                                <li className="flex gap-4">
                                    <div className="w-8 h-8 bg-sky-500 text-white rounded-full flex items-center justify-center font-bold">
                                        1
                                    </div>
                                    <div>
                                        <h3 className="font-semibold text-lg">Kirim Detail Lowongan</h3>
                                        <p className="text-gray-600">Formulir sederhana & konsultasi kebutuhan</p>
                                    </div>
                                </li>
                                <li className="flex gap-4">
                                    <div className="w-8 h-8 bg-sky-500 text-white rounded-full flex items-center justify-center font-bold">
                                        2
                                    </div>
                                    <div>
                                        <h3 className="font-semibold text-lg">Optimisasi Iklan</h3>
                                        <p className="text-gray-600">Tim ahli kami akan memaksimalkan visibilitas</p>
                                    </div>
                                </li>
                                <li className="flex gap-4">
                                    <div className="w-8 h-8 bg-sky-500 text-white rounded-full flex items-center justify-center font-bold">
                                        3
                                    </div>
                                    <div>
                                        <h3 className="font-semibold text-lg">Terima Kandidat</h3>
                                        <p className="text-gray-600">Filter otomatis & sistem ranking cerdas</p>
                                    </div>
                                </li>
                            </ol>
                            
                            {/* <!-- CTA Button --> */}
                            <a href="price-list.html#registration" className="inline-flex items-center justify-center px-8 py-4 bg-sky-600 hover:bg-sky-700 text-white font-bold rounded-lg transition-all duration-300 transform hover:scale-[1.02] shadow-lg w-full">
                                Mulai Sekarang →
                            </a>
                        </div>
                    </div>
                </div>
            </section>

            <section id="layanan3" className="relative min-h-[800px] flex items-center justify-center overflow-hidden">
                {/* <!-- Background overlay & image --> */}
                <Image
                    src={bgLayanan2}
                    alt="Background Image"
                    fill
                    style={{ objectFit: 'cover' }}
                    className="absolute inset-0 z-[-1] opacity-100" />
                <div className="absolute inset-0 bg-gradient-to-r from-gray-900/90 to-sky-900/70"></div>

                {/* <!-- Content container --> */}
                <div className="relative max-w-6xl mx-4 lg:mx-8 xl:mx-auto text-white">
                    <div className="max-w-3xl space-y-8">
                        {/* <!-- Badge --> */}
                        <span className="inline-block bg-sky-400 text-white px-6 py-3 rounded-full text-lg font-semibold shadow-lg">
                            Layanan Professional
                        </span>

                        {/* <!-- Main heading --> */}
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight">
                            Konsultasi Program Kerja
                            <span className="block mt-4 text-2xl md:text-3xl font-medium text-sky-200">
                                End-to-End Career Guidance
                            </span>
                        </h1>

                        {/* <!-- Description --> */}
                        <div className="space-y-6 max-w-2xl">
                            <p className="text-xl md:text-2xl leading-relaxed md:leading-loose font-medium text-gray-100">
                                Kami menyediakan pendampingan lengkap mulai dari konsultasi karier, 
                                pelatihan bahasa Jepang intensif, hingga penempatan profesional di perusahaan ternama.
                            </p>

                            {/* <!-- Features list --> */}
                            <ul className="space-y-4 text-lg md:text-xl">
                                <li className="flex items-center gap-3">
                                    <svg className="w-6 h-6 text-sky-400 shrink-0" fill="currentColor" viewBox="0 0 20 20">
                                        <path d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"/>
                                    </svg>
                                    Garansi pendampingan hingga tandatangani kontrak
                                </li>
                                <li className="flex items-center gap-3">
                                    <svg className="w-6 h-6 text-sky-400 shrink-0" fill="currentColor" viewBox="0 0 20 20">
                                        <path d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"/>
                                    </svg>
                                    Pelatihan bahasa dan budaya profesional
                                </li>
                                <li className="flex items-center gap-3">
                                    <svg className="w-6 h-6 text-sky-400 shrink-0" fill="currentColor" viewBox="0 0 20 20">
                                        <path d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"/>
                                    </svg>
                                    Jaringan perusahaan mitra strategis
                                </li>
                            </ul>

                            {/* <!-- CTA Button --> */}
                            <a href="#" className="inline-block bg-sky-500 hover:bg-sky-600 text-white px-8 py-4 rounded-lg font-bold text-lg transition-all duration-300 transform hover:scale-105 shadow-lg">
                                Mulai Konsultasi Sekarang →
                            </a>
                        </div>
                    </div>
                </div>
            </section>
            </>
    );
};

export default LayananPage;