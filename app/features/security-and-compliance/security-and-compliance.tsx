"use client";

import { Button } from "@/components/ui/button";
import Image from 'next/image';


export default function SecurityComplianceFeature() {
    return (
        <><section className="relative">
            <div className="px-6 py-12 text-center md:px-12 lg:my-12 lg:text-left">
                <div className="w-100 mx-auto sm:max-w-2xl md:max-w-3xl lg:max-w-5xl xl:max-w-7xl">
                    <div className="grid items-center gap-12 lg:grid-cols-2">
                        <div className="mt-12 lg:mt-0">
                            <h1 className="relative max-w-2xl mb-4 text-4xl lg:text-6xl font-extrabold tracking-tight leading-none dark:text-white">
                                Embrace the Future of Digital Identity Security
                            </h1>
                            <p className="max-w-2xl mb-6 font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl dark:text-gray-400">Join the revolution of secure, compliant, and user-centric digital identity management.</p>
                            <Button>Explore the Future Now</Button>
                        </div>
                        <div className="mb-12 ml-5 lg:mb-0">
                            <img
                                src="https://i.pinimg.com/564x/2e/4a/cc/2e4acca6b73bdd8734a158764e433b1e.jpg"
                                className="w-4/5 rounded-lg shadow-lg dark:shadow-black/20"
                                alt=""
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
            <section className="bg-gray-100 py-16">
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
            </section></>
    );

}