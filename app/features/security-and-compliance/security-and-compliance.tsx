"use client";

import { Button } from "@/components/ui/button";
import Image from 'next/image';


export default function SecurityComplianceFeature() {
    return (
        <><section className="relative h-auto w-full mx-auto p-12 mt-10">
            <div className="flex justify-left items-center text-center w-full mb-12">
                <div className="pb-12 mb-10 ml-10">
                <Image
                                alt="Image"
                                className="mx-auto overflow-hidden lg:order-last mb-3"
                                height="70"
                                src="/images/squaredecoration.svg"
                                width="70"
                            />
                    <h1 className="max-w-2xl mb-4 text-4xl lg:text-6xl font-extrabold tracking-tight leading-none dark:text-white">
                        Embrace the Future of Digital Identity Security
                    </h1>
                    <p className="max-w-2xl mb-6 font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl dark:text-gray-400">Join the revolution of secure, compliant, and user-centric digital identity management.</p>
                    <Button>Explore the Future Now</Button>
                </div>
            </div>
            <div className="clipped absolute inset-0"></div>
        </section>
            <section className="bg-gray-100 py-16" >
                <div className="container mx-auto px-4">
                    <div className="flex flex-col lg:flex-row items-center justify-center">
                        <div className="lg:w-1/2 mb-8 lg:mb-0">
                            <Image
                                alt="Image"
                                className="mx-auto overflow-hidden w-8/12 lg:order-last"
                                height="70"
                                src="/images/loginIcon.svg"
                                width="70"
                            />
                        </div>
                        <div className="lg:w-1/2 lg:ml-16">
                            <h1 className="relative max-w-2xl mb-4 text-4xl lg:text-5xl font-extrabold tracking-tight leading-none dark:text-white">Simplified Username Authentication</h1>
                            <p className="max-w-2xl mb-6 font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl dark:text-gray-400 text-base/7 leading-loose mt-6">Transition to a simpler, more secure login method. With our username-based authentication, experience both convenience and enhanced security, minimizing the reliance on emails.</p>
                        </div>
                    </div>
                </div>
            </section>
            <section className="py-16 bg-white">
                <div className="container mx-auto px-4">
                    <div className="max-w-3xl mx-auto text-center">
                        <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-8">
                            Your Credentials, Your Control
                        </h2>
                        <p className="text-lg text-gray-700 mb-8">
                            Leverage your credentials for a fortified recovery and security system. Whether it's account recovery or preventing unauthorized access, your credentials are the key to safeguarding your digital presence.
                        </p>
                    </div>
                </div>
            </section>
            <section className="py-16 bg-gray-100">
                <div className="container mx-auto px-4">
                    <div className="max-w-3xl mx-auto text-center">
                        <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-8">
                            Share, Don't Just Send
                        </h2>
                        <p className="text-lg text-gray-700 mb-8">
                            Transform your communication methods. Our platform allows you to share verified information seamlessly, moving beyond traditional email methods and reducing inbox clutter.
                        </p>
                    </div>
                </div>
            </section>
            <section className="py-16">
                <div className="container mx-auto px-4">
                    <div className="max-w-3xl mx-auto text-center mb-12">
                        <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-8">
                            Self-Custody Features
                        </h2>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <div className="bg-white p-8 rounded-lg shadow-lg">
                            <h3 className="text-xl font-bold text-gray-900 mb-4">Customizable Data Encryption</h3>
                            <p className="text-gray-700 mb-6">Personalize your security. Encrypt your data according to your specific needs, ensuring maximum privacy and protection.</p>
                        </div>
                        <div className="bg-white p-8 rounded-lg shadow-lg">
                            <h3 className="text-xl font-bold text-gray-900 mb-4">Diverse Storage Solutions</h3>
                            <p className="text-gray-700 mb-6">Choose your preferred storage method. From personal devices to blockchain storages, our platform supports various options for you to securely store your data.</p>
                        </div>
                        <div className="bg-white p-8 rounded-lg shadow-lg">
                            <h3 className="text-xl font-bold text-gray-900 mb-4">PGP: The Gold Standard</h3>
                            <p className="text-gray-700 mb-6">Employ PGP technology for unmatched security in signing and encrypting your data and communications.</p>
                        </div>
                    </div>
                </div>
            </section>
            <section className="py-16 bg-gray-100">
                <div className="container mx-auto px-4">
                    <div className="max-w-3xl mx-auto text-center mb-12">
                        <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-8">
                            Unrivaled Security with PGP Encryption
                        </h2>
                        <p className="text-lg text-gray-700 mb-8">
                            Dive deeper into the world of PGP encryption. Discover how our cutting-edge technology ensures the integrity and confidentiality of your digital interactions.
                        </p>
                    </div>
                </div>
            </section>
            <section className="py-16 bg-gray-700 text-white">
                <div className="container mx-auto px-4">
                    <div className="max-w-3xl mx-auto text-center">
                        <h2 className="text-4xl lg:text-5xl font-bold mb-4">
                            Step into a Secure Digital Tomorrow
                        </h2>
                        <p className="text-lg mb-8">
                            Join our community of secure digital pioneers.
                        </p>
                        <a href="#" className="inline-block px-8 py-4 bg-primary text-white font-semibold rounded-lg shadow-lg transition duration-300 ease-in-out hover:bg-primary-dark hover:shadow-xl">Start Your Journey</a>
                    </div>
                </div>
            </section>
        </>
    );

}