import React from 'react';
import Image from 'next/image';

const HeroSectionImage = '/assets/img/bg-hero-section.webp';

const HeroSection: React.FC = () => {
    return (
		<section className="relative min-h-screen bg-gray-600 flex items-center justify-center">
			<Image 
			src={HeroSectionImage} 
			alt="Hero Section Background" 
			className="absolute inset-0 object-cover w-full h-full" 
			fill 
			priority 
			/>

			{/* Overlay */}
			<div className="absolute inset-0 bg-black/50 z-10 animate-fade-in"></div> 
			
			{/* Content */}
			<div className="relative z-20 flex items-center justify-center text-center text-white container mx-auto px-4">
				<div className="space-y-6 max-w-3xl mx-auto">
					<h1 className="text-5xl font-extrabold leading-tight">
						Selamat Datang di <span className="text-sky-500">Job Seek Indonesia</span>
					</h1>
					<p className="text-lg sm:text-xl text-gray-300">
						Training, Consulting, and Advertising
					</p>
					<a 
						href="#tentang-kami" 
						className="inline-block bg-gradient-to-r from-sky-500 to-fuchsia-700 text-white px-8 py-3 rounded-lg font-semibold shadow-lg transform transition-transform duration-300 hover:scale-105"
					>
						Pelajari Lebih Lanjut
					</a>
				</div>
			</div>
		</section>
    );
};

export default HeroSection;