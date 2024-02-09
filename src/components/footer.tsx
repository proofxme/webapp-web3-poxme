import React from 'react';
import Link from 'next/link';
import { LinkedinIcon, TwitterIcon, TelegramIcon, GitHubIcon } from '@/components/socialIconsSection'
import footerData from './footerData.json';

const Footer = () => {
    return (
        <footer className="bg-gray-900 text-gray-400 p-8 flex flex-col items-center justify-center">
            <div className="container mx-auto grid grid-cols-1 md:grid-cols-5 gap-10 text-center mt-12">
                <div className="mb-4 md:mb-0">
                    <PoxIcon />
                </div>
                {footerData.sections.map((section, index) => (
                    <div key={index} className="mb-4 md:mb-0">
                        <h3 className="text-lg mb-2">{section.title}</h3>
                        <ul>
                            {section.links.map((link, index) => (
                                <li key={index} className='mb-2'>
                                    <Link className="text-sm hover:underline underline-offset-4" href={link.url}>
                                        {link.text}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                ))}
                <div className="mb-4 md:mb-0">
                    <h3 className="text-lg mb-3">Follow Us</h3>
                    <div className="flex gap-8 justify-center items-center">
                        <Link className="hover:underline" target="_blank" href="https://www.x.com/proofxme">
                            <TwitterIcon className="h-5 w-5" />
                        </Link>
                        <Link className="hover:underline" target="_blank" href="https://t.me/proofxme">
                            <TelegramIcon className="h-5 w-5" />
                        </Link>
                        <Link className="hover:underline" target="_blank" href="https://www.github.com/proofxme">
                            <GitHubIcon className="h-5 w-5" />
                        </Link>
                        <Link className="hover:underline" target="_blank" href="https://linkedin.com/company/proof-of-x">
                            <LinkedinIcon className="h-5 w-5" />
                        </Link>
                    </div>
                </div>
            </div>
            <div className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t">
                <p className="text-xs text-gray-500 dark:text-gray-400">© 2024 Acme Inc. All rights reserved.</p>
                <nav className="sm:ml-auto flex gap-4 sm:gap-6">
                    {footerData.footerLinks.map((link, index) => (
                        <Link key={index} className="text-xs hover:underline underline-offset-4" href={link.url}>
                            {link.text}
                        </Link>
                    ))}
                </nav>
            </div>
        </footer>
    );
};

export default Footer;

function PoxIcon(props: any) {
    return (
        <svg
            fill="none"
            height="55%"
            viewBox="0 0 24 24"
            width="100%"
            xmlns="http://www.w3.org/2000/svg"
        >
            <path
                d="M1.28966 24H22.7103C23.4227 24 24 23.4226 24 22.7103V1.28967C24 0.577353 23.4227 0 22.7103 0H1.28966C0.577346 0 0 0.577353 0 1.28967V22.7106C0 23.4226 0.577346 24 1.28966 24Z"
                fill="blue" />
            <path
                d="M9.03865 18.9985L9.06226 18.9679L9.19667 18.7844L6.78953 15.5752L2.57593 21.1185H7.48712L9.04004 18.9982L9.03865 18.9985Z"
                fill="white" />
            <path
                d="M9.88227 17.8627L12.5199 14.4933L12.5177 14.4905L21.4236 2.88184H16.6435L10.1097 11.4627L7.82088 8.19632H2.78027L9.88227 17.8627Z"
                fill="white" />
            <path d="M10.5907 18.8485H10.5905L12.2464 21.0702L12.2819 21.1185H17.4531L13.1534 15.5469L10.5907 18.8485Z"
                fill="white" />
        </svg>
    )
}
