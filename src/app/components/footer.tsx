import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faFacebook, faTelegram, faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faCopyright, faPhone } from '@fortawesome/free-solid-svg-icons';


const Footer: React.FC = () => {
    return (
        <footer id="footer" className="py-12 bg-gray-800 text-white">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="text-center md:text-left">
                        <h4 className="text-xl font-bold mb-4">Job Seek Indonesia</h4>
                        <p className="text-gray-400">
                            Platform terbaik untuk pelatihan, konsultasi, dan iklan lowongan kerja.
                        </p>
                    </div>
                    <div className="text-center md:text-right">
                        <h4 className="text-xl font-bold mb-4">Ikuti Kami</h4>
                        <div className="flex justify-center md:justify-end space-x-4">
                            <a
                                href="https://www.instagram.com/jobseekindonesia"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-white hover:text-gray-400"
                            >
                                <FontAwesomeIcon icon={faInstagram} className="fa-2x" />    
                            </a>
                            <a
                                href="https://www.facebook.com/jobseekindonesia"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-white hover:text-gray-400"
                            >
                                <FontAwesomeIcon icon={faFacebook} className="fa-2x" />
                            </a>
                            <a
                                href="https://t.me/jobseekindonesia"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-white hover:text-gray-400"
                            >
                                <FontAwesomeIcon icon={faTelegram} className="fa-2x" />
                            </a>
                            <a
                                href={process.env.HUBUNGI_WA}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-white hover:text-gray-400"
                            >
                                <FontAwesomeIcon icon={faWhatsapp} className="fa-2x" />
                            </a>
                            <a
                                href="mailto:admin@jobseek.com"
                                className="text-white hover:text-gray-400"
                            >
                                <FontAwesomeIcon icon={faEnvelope} className="fa-2x" />
                            </a>
                        </div>
                    </div>
                </div>
                <div className="mt-8 text-center">
                    <p className="text-gray-400"><FontAwesomeIcon icon={faCopyright}/> 2023 Job Seek Indonesia. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;