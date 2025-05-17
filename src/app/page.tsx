import Image from "next/image";
import HeroSection from "./components/hero-section";
import SwipperSlider from "./components/swipperslider";

export default function Home() {
  return (
  <main>
      <HeroSection />
      <section id="tentang-kami" className="text-gray-600 body-font">
      <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
      <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
        <p className="text-sky-500 text-base lg:text-3xl"><strong>Job Seek Indonesia</strong></p>
        <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900 lg:text-5xl">Apa Itu Job Seek Indonesia? 

        </h1>
        <p className="mb-8 leading-relaxed text-md lg:text-xl">
            Job Seek Indonesia adalah platform yang bergerak di bidang 
          <strong className="text-blue-600"> Training</strong>, 
          <strong className="text-blue-600"> Consulting</strong>, dan 
          <strong className="text-blue-600"> Advertising</strong>. 
          Kami menyediakan layanan pelatihan online, konsultasi HR, dan iklan lowongan kerja 
          untuk membantu Anda mencapai tujuan karir dan bisnis.
        </p>
        <div className="flex justify-center">
          
          {/* <!-- Button Perlu di linkkan dengan Form--> */}
        <button className="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">Hubungi Kami</button>
        
            </div>
        </div>
        <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
            <img className="hidden md:inline md:object-cover md:object-center md:rounded" alt="hero" src="/assets/img/illustration.png" />
        </div>
        </div>
        </section>

        <section className="bg-white dark:bg-gray-900">
        <div className="container px-6 py-10 mx-auto">
          <h1 className="text-3xl font-semibold text-gray-800 capitalize lg:text-5xl dark:text-white">Jelajahi<br /> <span className="underline decoration-blue-500">Layanan</span> Terbaik Kami</h1>
          
          <p className="mt-4 text-gray-500 xl:mt-6 dark:text-gray-300">
              Kami memiliki beberapa layanan sebagai berikut
          </p>
          
          <div className="grid grid-cols-1 gap-8 mt-8 xl:mt-12 xl:gap-12 md:grid-cols-2 xl:grid-cols-3">
              <div className="p-8 space-y-3 border-2 border-blue-400 dark:border-blue-300 rounded-xl">
                  <span className="inline-block text-blue-500 dark:text-blue-400">
                      <img src="/assets/img/training-icon.svg" className="w-10 h-10 md:w-16 md:h-16 sm:w-8 sm:h-8"/>                       
                  </span>

                  <h1 className="text-2xl font-semibold text-gray-700 capitalize dark:text-white">Training</h1>

                  <p className="text-gray-500 dark:text-gray-300">
                      Kegiatan pelatihan online yang dilaksanakan via zoom meeting dan offline.  
            Kami mengadakan berbagai pelatihan seperti kursus bahasa jepang, akuntansi keuangan dan bidang yang lainnya
                  </p>

                  <a href="layanan#layanan1" className="inline-flex p-2 text-blue-500 capitalize transition-colors duration-200 transform bg-blue-100 rounded-full dark:bg-blue-500 dark:text-white hover:underline hover:text-blue-600 dark:hover:text-blue-500">
                      <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 9l3 3m0 0l-3 3m3-3H8m13 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                  </a>
              </div>

              <div className="p-8 space-y-3 border-2 border-blue-400 dark:border-blue-300 rounded-xl">
                  <span className="inline-block text-blue-500 dark:text-blue-400">
                      <img src="/assets/img/mobile-ads-icon.svg" className="w-10 h-10 md:w-16 md:h-16 sm:w-8 sm:h-8" />                       
                    
                  </span>

                  <h1 className="text-2xl font-semibold text-gray-700 capitalize dark:text-white">Advertising</h1>

                  <p className="text-gray-500 dark:text-gray-300">
                      Kami menyediakan layanan jasa posting lowongan pekerjaan di berbagai bidang  
            via media sosial sebagai Instagram, Facebook, telepon, website dan WhatsApp.
                  </p>

                  <a href="layanan#layanan2" className="inline-flex p-2 text-blue-500 capitalize transition-colors duration-200 transform bg-blue-100 rounded-full dark:bg-blue-500 dark:text-white hover:underline hover:text-blue-600 dark:hover:text-blue-500">
                      <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 9l3 3m0 0l-3 3m3-3H8m13 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                  </a>
              </div>

              <div className="p-8 space-y-3 border-2 border-blue-400 dark:border-blue-300 rounded-xl">
                  <span className="inline-block text-blue-500 dark:text-blue-400">
                      <img src="/assets/img/consulting-icon.svg" className="w-10 h-10 md:w-16 md:h-16 sm:w-8 sm:h-8" />                       
                  </span>

                  <h1 className="text-2xl font-semibold text-gray-700 capitalize dark:text-white">Consulting</h1>

                  <p className="text-gray-500 dark:text-gray-300">
                    Kami menyediakan layanan jasa persiapan kerja ke Jepang di berbagai bidang  
                    seperti pertanian, konstruksi, restoran, care giver (perawat) dll.  
                    Memungkinkan Anda berangkat bekerja ke Jepang kurang dari 1 tahun.
                  </p>

                  <a href="layanan#layanan3" className="inline-flex p-2 text-blue-500 capitalize transition-colors duration-200 transform bg-blue-100 rounded-full dark:bg-blue-500 dark:text-white hover:underline hover:text-blue-600 dark:hover:text-blue-500">
                      <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 9l3 3m0 0l-3 3m3-3H8m13 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                    </a>
                </div>
            </div>
        </div>
        </section>
        
        <SwipperSlider />

  </main> 
  );
}
