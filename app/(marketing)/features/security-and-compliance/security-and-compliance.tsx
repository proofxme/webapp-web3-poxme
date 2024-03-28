"use client";

import { Button } from "@/components/ui/button";
import Image from 'next/image';
import List from "../components/List";
import featuresData from '../featuresData.json';

const slug = 'security-and-compliance';
const feature = featuresData.features.find(feature => feature.slug === slug);

export default function SecurityComplianceFeature() {
    return (
        <><section className="relative h-auto w-full mx-auto mt-8">
            <div className="mb-12 text-left">
                <div className="pb-12 mb-12 lg:ml-12 lg:pl-12">
                    <Image
                        alt="Image"
                        className=" overflow-hidden ml-5"
                        height="130"
                        src="/images/squaredecoration.svg"
                        width="160"
                    />
                    <div className="m-8">
                        <h1 className="max-w-2xl mb-4 text-4xl lg:text-6xl font-extrabold tracking-tight leading-none dark:text-white mt-8 sm:bg-white">
                            Embrace the Future of Digital Identity Security
                        </h1>
                        <p className="max-w-2xl mb-6 font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl dark:text-gray-400 sm:bg-white">Join the revolution of secure, compliant, and user-centric digital identity management.</p>
                        <Button>Explore the Future Now</Button>
                    </div>
                </div>
            </div>
            <div className="clipped absolute inset-0 hidden lg:block"></div>
        </section>
            <section className="bg-gray-100 py-16">
                <div className="container mx-auto m-9">
                    <div className="flex flex-col lg:flex-row items-center justify-center">
                        <div className="lg:w-1/2 mb-8 lg:mb-0">
                            <Image
                                alt="Image"
                                className="mx-auto overflow-hidden lg:order-last"
                                height="250"
                                src="/images/loginscreen-icon.svg"
                                width="250"
                            />
                        </div>
                        <div className="lg:w-1/2">
                            <h1 className="relative max-w-2xl mb-4 text-4xl lg:text-5xl font-extrabold tracking-tight leading-none dark:text-white">Simplified Username Authentication</h1>
                            <p className="max-w-2xl mb-6 font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl dark:text-gray-400 text-base/7 leading-loose mt-6">Transition to a simpler and more secure login method. With our username-based authentication, experience both convenience and enhanced security, minimizing the reliance on emails.</p>
                        </div>
                    </div>
                </div>
            </section>
            <section className="py-16 bg-white">
                <div className="container mx-auto m-9">
                    <div className="flex flex-col lg:flex-row items-center justify-center">
                        <div className="lg:w-1/2">
                            <h1 className="relative max-w-2xl mb-4 text-4xl lg:text-5xl font-extrabold tracking-tight leading-none dark:text-white">Your Credentials, Your Control</h1>
                            <p className="max-w-2xl mb-6 font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl dark:text-gray-400 text-base/7 leading-loose mt-6">Leverage your credentials for a fortified recovery and security system. Whether it&apos;s account recovery or preventing unauthorized access, your credentials are the key to safeguarding your digital presence.</p>
                        </div>
                        <div className="lg:w-1/2 mb-8 lg:mb-0">
                            <Image
                                alt="Image"
                                className="mx-auto overflow-hidden lg:order-last"
                                height="250"
                                src="/images/credential-control.svg"
                                width="250"
                            />
                        </div>
                    </div>
                </div>
            </section>
            <section className="py-16 bg-gray-100">
                <div className="container mx-auto m-9">
                    <div className="flex flex-col lg:flex-row items-center justify-center">
                        <div className="lg:w-1/2 mb-8 lg:mb-0">
                            <Image
                                alt="Image"
                                className="mx-auto overflow-hidden lg:order-last"
                                height="250"
                                src="/images/share-screen.svg"
                                width="250"
                            />
                        </div>
                        <div className="lg:w-1/2">
                            <h1 className="relative max-w-2xl mb-4 text-4xl lg:text-5xl font-extrabold tracking-tight leading-none dark:text-white">Share, Don&apos;t Just Send</h1>
                            <p className="max-w-2xl mb-6 font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl dark:text-gray-400 text-base/7 leading-loose mt-6">Transform your communication methods. Our platform allows you to share verified information seamlessly, moving beyond traditional email methods and reducing inbox clutter.</p>
                        </div>
                    </div>
                </div>
            </section>
            <section className="py-16 text-center">
                <div className="container mx-auto px-1 pt-5 pb-12 mb-12">
                    <div className="max-w-3xl mx-auto mb-12 mt-12">
                        <h1 className="relative max-w-2xl mx-auto mb-4 text-4xl lg:text-5xl font-extrabold tracking-tight leading-none dark:text-white">
                            Self-Custody <span className="bg-indigo-200">Features</span>
                        </h1>
                    </div>
                    <section className="flex justify-center items-center h-auto bg-gray-50 border-dashed border-2 border-indigo-200">
                        <List features={feature && feature.cards ? feature.cards : []} />
                    </section>
                </div>
            </section>
            <section className="py-16 bg-gray-100 text-center">
                <div className="container px-1 pt-5 pb-12 mb-12 flex flex-col justify-center items-center">
                    <div className="max-w-3xl mb-12 mt-12">
                    <Image
                        alt="Image"
                        className="mx-auto overflow-hidden"
                        height="100"
                        src="/images/squaredecoration.svg"
                        width="100"
                    />
                        <h2 className="relative max-w-2xl mb-4 text-4xl lg:text-5xl font-extrabold tracking-tight leading-none dark:text-white">
                            Unrivaled Security with PGP Encryption
                        </h2>
                        <p className="max-w-2xl mb-6 font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl dark:text-gray-400 text-base/7 leading-loose mt-6">Dive deeper into the world of PGP encryption. Discover how our cutting-edge technology ensures the integrity and confidentiality of your digital interactions.</p>
                    </div>
                    <Image width="800" height="1000" className="border-dashed border-2 border-indigo-200" src="/images/encryption-process.png" alt={"Encryption process image"}></Image>
                </div>
            </section>

            <section className="py-16 bg-gray-900 text-white">
                <div className="container mx-auto px-4 mt-12">
                    <div className="max-w-3xl mx-auto text-center">
                        
                        <h2 className="text-4xl lg:text-5xl font-bold mb-4 ">
                            Step into a Secure Digital Tomorrow
                        </h2>
                        <p className="text-lg mb-8 text-blue-200">
                            Join our community of secure digital pioneers.
                        </p>
                        <Image
                        alt="Image"
                        className="mx-auto overflow-hidden mb-6"
                        height="50"
                        src="/images/down-arrow.svg"
                        width="50"
                    />
                        <Button className="px-8 py-6 text-white font-medium rounded-lg bg-blue-700 hover:bg-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-opacity-50">Start Your Journey</Button>
                    </div>
                </div>
            </section>
        </>
    );
}

