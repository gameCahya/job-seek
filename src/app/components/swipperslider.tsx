"use client";

import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation, Autoplay } from 'swiper/modules'; // Import Autoplay module
import Image from 'next/image';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

const SwipperSlider: React.FC = () => {
    const judul = [
        'Loker Engineering Indonesia',
        'Loker Digital Marketing',
        'Loker Jawa Timur Official',
        'Loker Akuntansi dan Keuangan',
        'Loker Mengajar',
        'Loker Dokter dan Kesehatan',
        'Loker Jawa Tengah Official'
    ];
    const username = [
        '@loker.engineering',
        '@lokerdigitalmarketing',
        '@lokerjawatimur_official',
        '@loker_akuntansikeuangan',
        '@loker_mengajar',
        '@loker_dokterkesehatan',
        '@lokerjawatengah_official'
    ];
    const deskripsi = [
        'Your Gateway to Engineering Opportunities',
        'Mulai Kariermu Disini',
        'Loker Jawa Timur & Bali Sekitarnya. Temukan Pekerjaan, Wujudkan Mimpimu',
        'Loker Akuntansi dan Keuangan No. 1. Tidak Menerima Loker Penipuan',
        'Loker Mengajar No. #1',
        'Loker Dokter dan Kesehatan No. #1. Loker Kesehatan Terpercaya',
        'Loker Jateng & Yogyakarta. Jembatan Kariermu, Dimulai di sini'
    ];
    const gambar = [
        '/assets/img/lokerEngineering.png',
        '/assets/img/lokerDigitalMarketing.png',
        '/assets/img/lokerJawaTimurOfficial.png',
        '/assets/img/lokerAkuntansiKeuangan.png',
        '/assets/img/lokerMengajar.png',
        '/assets/img/lokerDokterKesehatan.png',
        '/assets/img/lokerJawaTengahOfficial.png'
    ];
    const link_ig = [
        'https://www.instagram.com/loker.engineering/',
        'https://www.instagram.com/lokerdigitalmarketing/',
        'https://www.instagram.com/lokerjawatimur_official/',
        'https://www.instagram.com/loker_akuntansikeuangan/',
        'https://www.instagram.com/loker_mengajar/',
        'https://www.instagram.com/loker_dokterkesehatan/',
        'https://www.instagram.com/lokerjawatengah_official/'
    ]
    const cards = [
        {
            id: 1,
            title: judul[0],
            description: deskripsi[0],
            content: (
                <div className="bg-white rounded-xl shadow-lg p-6 mx-2 flex flex-col transition-all hover:shadow-xl hover:-translate-y-2">
                    <a
                        href={link_ig[0]}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="block mb-4 group"
                    >
                        <div className="flex items-center space-x-3 p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
                            <img
                                src="https://upload.wikimedia.org/wikipedia/commons/9/95/Instagram_logo_2022.svg"
                                alt="Instagram Logo"
                                className="w-8 h-8"
                            />
                            <div>
                                <p className="font-semibold text-left text-gray-700">{judul[0]}</p>
                                <p className="text-sm text-left text-gray-500">{username[0]}</p>
                            </div>
                        </div>
                    </a>
                    <div className="relative w-full h-100 mb-4">
                        <Image
                            src={gambar[0]}
                            width={979} // Replace with the actual width of your image
                            height={912} // Replace with the actual height of your image
                            className="w-full object-cover rounded-lg mb-4"
                            alt="Gambar 2"
                            loading="lazy"
                        />
                    </div>
                    <div className="flex flex-col flex-1 justify-between">
                        <h3 className="text-xl text-left font-bold mb-2">{judul[0]}</h3>
                        <p className="text-gray-600 text-left mb-4">{deskripsi[0]}</p>
                        <a
                            href={link_ig[0]}
                            className="inline-block bg-blue-500 text-white px-6 py-2 rounded-lg hover:bg-blue-600 transition-colors mb-4"
                        >
                            Selengkapnya
                        </a>
                    </div>
                </div>
            ),
        },
        {   id: 2, 
            title: judul[1], 
            description: deskripsi[1], 
            content: (
                <div className="bg-white rounded-xl shadow-lg p-6 mx-2 flex flex-col transition-all hover:shadow-xl hover:-translate-y-2">
                    <a
                        href={link_ig[1]}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="block mb-4 group"
                    >
                        <div className="flex items-center space-x-3 p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
                            <img
                                src="https://upload.wikimedia.org/wikipedia/commons/9/95/Instagram_logo_2022.svg"
                                alt="Instagram Logo"
                                className="w-8 h-8"
                            />
                            <div>
                                <p className="font-semibold text-left text-gray-700">{judul[1]}</p>
                                <p className="text-sm text-left text-gray-500">{username[1]}</p>
                            </div>
                        </div>
                    </a>
                    <div className="relative w-full h-100 mb-4">
                        <Image
                            src={gambar[1]}
                            width={978} // Replace with the actual width of your image
                            height={919} // Replace with the actual height of your image
                            className="w-full object-cover rounded-lg mb-4"
                            alt="Gambar 2"
                            loading="lazy"
                        />
                    </div>
                    <div className="flex flex-col flex-1 justify-between">
                        <h3 className="text-xl text-left font-bold mb-2">{judul[1]}</h3>
                        <p className="text-gray-600 text-left mb-4">{deskripsi[1]}</p>
                        <a
                            href={link_ig[1]}
                            className="inline-block bg-blue-500 text-white px-6 py-2 rounded-lg hover:bg-blue-600 transition-colors mb-4"
                        >
                            Selengkapnya
                        </a>
                    </div>
                </div>
            ), 
        },
        {   id: 3, 
            title: judul[2], 
            description: deskripsi[2], 
            content: (
                <div className="bg-white rounded-xl shadow-lg p-6 mx-2 flex flex-col transition-all hover:shadow-xl hover:-translate-y-2">
                    <a
                        href={link_ig[2]}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="block mb-4 group"
                    >
                        <div className="flex items-center space-x-3 p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
                            <img
                                src="https://upload.wikimedia.org/wikipedia/commons/9/95/Instagram_logo_2022.svg"
                                alt="Instagram Logo"
                                className="w-8 h-8"
                            />
                            <div>
                                <p className="font-semibold text-left text-gray-700">{judul[2]}</p>
                                <p className="text-sm text-left text-gray-500">{username[2]}</p>
                            </div>
                        </div>
                    </a>
                    <div className="relative w-full h-100 mb-4">
                        <Image
                            src={gambar[2]}
                            width={978} // Replace with the actual width of your image
                            height={919} // Replace with the actual height of your image
                            className="w-full object-cover rounded-lg mb-4"
                            alt="Gambar 2"
                            loading="lazy"
                        />
                    </div>
                    <div className="flex flex-col flex-1 justify-between">
                        <h3 className="text-xl text-left font-bold mb-2">{judul[2]}</h3>
                        <p className="text-gray-600 text-left mb-4">{deskripsi[2]}</p>
                        <a
                            href={link_ig[1]}
                            className="inline-block bg-blue-500 text-white px-6 py-2 rounded-lg hover:bg-blue-600 transition-colors mb-4"
                        >
                            Selengkapnya
                        </a>
                    </div>
                </div>
            ), 
        },
        {  id: 4, 
            title: judul[3], 
            description: deskripsi[3], 
            content: (
                <div className="bg-white rounded-xl shadow-lg p-6 mx-2 flex flex-col transition-all hover:shadow-xl hover:-translate-y-2">
                    <a
                        href={link_ig[3]}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="block mb-4 group"
                    >
                        <div className="flex items-center space-x-3 p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
                            <img
                                src="https://upload.wikimedia.org/wikipedia/commons/9/95/Instagram_logo_2022.svg"
                                alt="Instagram Logo"
                                className="w-8 h-8"
                            />
                            <div>
                                <p className="font-semibold text-left text-gray-700">{judul[2]}</p>
                                <p className="text-sm text-left text-gray-500">{username[2]}</p>
                            </div>
                        </div>
                    </a>
                    <div className="relative w-full h-100 mb-4">
                        <Image
                            src={gambar[3]}
                            width={978} // Replace with the actual width of your image
                            height={919} // Replace with the actual height of your image
                            className="w-full object-cover rounded-lg mb-4"
                            alt="Gambar 2"
                            loading="lazy"
                        />
                    </div>
                    <div className="flex flex-col flex-1 justify-between">
                        <h3 className="text-xl text-left font-bold mb-2">{judul[3]}</h3>
                        <p className="text-gray-600 text-left mb-4">{deskripsi[3]}</p>
                        <a
                            href={link_ig[3]}
                            className="inline-block bg-blue-500 text-white px-6 py-2 rounded-lg hover:bg-blue-600 transition-colors mb-4"
                        >
                            Selengkapnya
                        </a>
                    </div>
                </div>
            ), 
        },
        {  id: 5, 
            title: judul[4], 
            description: deskripsi[4], 
            content: (
                <div className="bg-white rounded-xl shadow-lg p-6 mx-2 flex flex-col transition-all hover:shadow-xl hover:-translate-y-2">
                    <a
                        href={link_ig[4]}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="block mb-4 group"
                    >
                        <div className="flex items-center space-x-3 p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
                            <img
                                src="https://upload.wikimedia.org/wikipedia/commons/9/95/Instagram_logo_2022.svg"
                                alt="Instagram Logo"
                                className="w-8 h-8"
                            />
                            <div>
                                <p className="font-semibold text-left text-gray-700">{judul[4]}</p>
                                <p className="text-sm text-left text-gray-500">{username[4]}</p>
                            </div>
                        </div>
                    </a>
                    <div className="relative w-full h-100 mb-4">
                        <Image
                            src={gambar[4]}
                            width={978} // Replace with the actual width of your image
                            height={919} // Replace with the actual height of your image
                            className="w-full object-cover rounded-lg mb-4"
                            alt="Gambar 2"
                            loading="lazy"
                        />
                    </div>
                    <div className="flex flex-col flex-1 justify-between">
                        <h3 className="text-xl text-left font-bold mb-2">{judul[4]}</h3>
                        <p className="text-gray-600 text-left mb-4">{deskripsi[4]}</p>
                        <a
                            href={link_ig[4]}
                            className="inline-block bg-blue-500 text-white px-6 py-2 rounded-lg hover:bg-blue-600 transition-colors mb-4"
                        >
                            Selengkapnya
                        </a>
                    </div>
                </div>
            ), 
        },
        {  id: 6, 
            title: judul[5], 
            description: deskripsi[5], 
            content: (
                <div className="bg-white rounded-xl shadow-lg p-6 mx-2 flex flex-col transition-all hover:shadow-xl hover:-translate-y-2">
                    <a
                        href={link_ig[5]}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="block mb-4 group"
                    >
                        <div className="flex items-center space-x-3 p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
                            <img
                                src="https://upload.wikimedia.org/wikipedia/commons/9/95/Instagram_logo_2022.svg"
                                alt="Instagram Logo"
                                className="w-8 h-8"
                            />
                            <div>
                                <p className="font-semibold text-left text-gray-700">{judul[5]}</p>
                                <p className="text-sm text-left text-gray-500">{username[5]}</p>
                            </div>
                        </div>
                    </a>
                    <div className="relative w-full h-100 mb-4">
                        <Image
                            src={gambar[5]}
                            width={978} // Replace with the actual width of your image
                            height={919} // Replace with the actual height of your image
                            className="w-full object-cover rounded-lg mb-4"
                            alt="Gambar 2"
                            loading="lazy"
                        />
                    </div>
                    <div className="flex flex-col flex-1 justify-between">
                        <h3 className="text-xl text-left font-bold mb-2">{judul[5]}</h3>
                        <p className="text-gray-600 text-left mb-4">{deskripsi[5]}</p>
                        <a
                            href={link_ig[5]}
                            className="inline-block bg-blue-500 text-white px-6 py-2 rounded-lg hover:bg-blue-600 transition-colors mb-4"
                        >
                            Selengkapnya
                        </a>
                    </div>
                </div>
            ), 
        },
        {   id: 7, 
            title: judul[6], 
            description: deskripsi[6], 
            content: (
                <div className="bg-white rounded-xl shadow-lg p-6 mx-2 flex flex-col transition-all hover:shadow-xl hover:-translate-y-2">
                    <a
                        href={link_ig[6]}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="block mb-4 group"
                    >
                        <div className="flex items-center space-x-3 p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
                            <img
                                src="https://upload.wikimedia.org/wikipedia/commons/9/95/Instagram_logo_2022.svg"
                                alt="Instagram Logo"
                                className="w-8 h-8"
                            />
                            <div>
                                <p className="font-semibold text-left text-gray-700">{judul[6]}</p>
                                <p className="text-sm text-left text-gray-500">{username[6]}</p>
                            </div>
                        </div>
                    </a>
                    <div className="relative w-full h-100 mb-4">
                        <Image
                            src={gambar[6]}
                            width={978} // Replace with the actual width of your image
                            height={919} // Replace with the actual height of your image
                            className="w-full object-cover rounded-lg mb-4"
                            alt="Gambar 2"
                            loading="lazy"
                        />
                    </div>
                    <div className="flex flex-col flex-1 justify-between">
                        <h3 className="text-xl text-left font-bold mb-2">{judul[6]}</h3>
                        <p className="text-gray-600 text-left mb-4">{deskripsi[6]}</p>
                        <a
                            href={link_ig[6]}
                            className="inline-block bg-blue-500 text-white px-6 py-2 rounded-lg hover:bg-blue-600 transition-colors mb-4"
                        >
                            Selengkapnya
                        </a>
                    </div>
                </div>
            ), 
        },
    ];

    return (
        <section className="bg-white dark:bg-gray-900 py-10 width:100%">
            <div style={{ width: '100%', maxWidth: '1640px', height: '840px', margin: '0 auto' }}>
                <Swiper
                    modules={[Pagination, Navigation, Autoplay]} // Add Autoplay module
                    spaceBetween={20}
                    slidesPerView={3}
                    breakpoints={{
                        0: {
                            slidesPerView: 1,
                        },
                        800: {
                            slidesPerView: 2,
                        },
                        1024: {
                            slidesPerView: 3,
                        },
                    }}
                    pagination={{ clickable: true }}
                    navigation
                    autoplay={{
                        delay: 3000, // Delay between slides in milliseconds
                        disableOnInteraction: false, // Continue autoplay after user interaction
                    }}
                    loop={true} // Enable looping
                >
                    {cards.map((card) => (
                        <SwiperSlide key={card.id}>
                            <div
                                style={{
                                    padding: '20px',
                                    border: '1px solid #ddd',
                                    borderRadius: '8px',
                                    textAlign: 'center',
                                    backgroundColor: '#f9f9f9',
                                }}
                            >
                                <div>{card.content}</div>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </section>
    );
};

export default SwipperSlider;