import React from 'react';
import Link from 'next/link';
import Card from '@/components/socialIconsSection'

const Footer = () => {
    return (
        
        <footer className="bg-gray-800 text-white p-12 flex flex-col items-center justify-center">
            <div className="container mx-auto grid grid-cols-1 md:grid-cols-5 gap-5 text-center mt-12">
                <div className="mb-4 md:mb-0">
                    <h3 className="text-xl font-bold mb-2">Pox Me Icon</h3>
                    <img src=".../app/assets/apple-touch-icon.png" alt="dd" />
                </div>
                <div className="mb-4 md:mb-0 vertical-line">
                    <h3 className="text-xl font-bold mb-2">Information</h3>
                    <ul>
                        <li>
                            <Link className="text-md hover:underline underline-offset-4" href="#">
                                Product
                            </Link>
                        </li>
                    </ul>
                </div>
                <div className="mb-4 md:mb-0 vertical-line">
                    <h3 className="text-xl font-bold mb-2">Contact</h3>
                    <ul>
                        <li>
                            <Link className="text-md hover:underline underline-offset-4" href="#">
                                Link 1
                            </Link>
                        </li>
                        <li>
                            <Link className="text-md hover:underline underline-offset-4" href="#">
                                Link 2
                            </Link>
                        </li>
                    </ul>
                </div>
                <div className="mb-4 md:mb-0 vertical-line">
                    <h3 className="text-xl font-bold mb-2">News</h3>
                    <ul>
                        <li>
                            <Link className="text-md hover:underline underline-offset-4" href="#">
                                Link 1
                            </Link>
                        </li>
                        <li>
                            <Link className="text-md hover:underline underline-offset-4" href="#">
                                Link 2
                            </Link>
                        </li>
                        <li>
                            <Link className="text-md hover:underline underline-offset-4" href="#">
                                Link 3
                            </Link>
                        </li>
                    </ul>
                </div>
                <div className="mb-4 md:mb-0">
                    <Card />
                </div>
            </div>
            <div>
                <div className="w-full text-center mt-12 pt-8">
                    <Link className="text-xs hover:underline underline-offset-4" href="#">
                        Terms of Service
                    </Link>
                    <span className="mx-2 text-xs text-gray-500 dark:text-gray-400">|</span>
                    <Link className="text-xs hover:underline underline-offset-4" href="#">
                        Privacy
                    </Link>
                </div>
                <div className="w-full text-center mt-4">
                    <p className="text-xs text-gray-500 dark:text-gray-400">© 2024 Acme Inc. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
