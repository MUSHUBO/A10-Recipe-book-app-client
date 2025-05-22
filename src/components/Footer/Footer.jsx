import React from 'react';
import { FaFacebook, FaTwitter, FaInstagram, FaEnvelope, FaLinkedin, FaPhone } from "react-icons/fa";
import logo from '../../assets/Recipe_Book-nav-logo.png'

const Footer = () => {
    return (
        <footer className="bg-base-200 text-base-content p-6 md:p-10">
            <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 py-10">
                {/* Site Info */}
                <div className='flex gap-2'>
                    <div>
                        <img className='w-15' src={logo} alt="" />
                    </div>
                    <div>
                        <h2 className="text-xl font-bold">RECIPE BOOK</h2>
                        <p className="mt-2 text-sm">Your ultimate cooking companion.</p>
                    </div>
                </div>

                {/* Contact Info */}
                <div>
                    <h3 className="text-lg font-semibold mb-2">Contact Us</h3>
                    <p className="flex items-center gap-2 text-sm">
                        <FaEnvelope /> support@recipebook.com
                    </p>
                    <p className="flex items-center gap-2 text-sm mt-1">
                        <FaPhone /> +880 1*-***-*40.
                    </p>
                </div>

                {/* Social Media */}
                <div>
                    <h3 className="text-lg font-semibold mb-2">Follow Us</h3>
                    <div className="flex space-x-4 text-2xl">
                        <a href="https://www.facebook.com/Sheikhshubo333" target="_blank" rel="noopener noreferrer">
                            <FaFacebook className="hover:text-blue-600" />
                        </a>
                        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                            <FaTwitter className="hover:text-sky-500" />
                        </a>
                        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                            <FaInstagram className="hover:text-pink-500" />
                        </a>
                        <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:text-blue-800">
                            <FaLinkedin />
                        </a>
                    </div>
                </div>
            </div>

            {/* Copyright */}
            <div className="text-center mt-10 border-t border-base-300 pt-4 text-sm">
                © {new Date().getFullYear()} RECIPE BOOK. All rights reserved.
            </div>
        </footer>
    );
};

export default Footer;