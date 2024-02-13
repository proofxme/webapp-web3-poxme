"use client";

import Head from "next/head";
import { Button } from "@/components/ui/button";
import { Card, CardHeader } from "@/components/ui/card";
import SocialIconsSection from "@/components/socialIconsSection";

const ContactPage = () => {
  return (
    <>
      <Head>
        <title>Proof of X | Contact</title>
        <meta name="description" content="Proof of X | Contact" />

        <meta property="og:url" content="https://pox.me/contact" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Proof of X | Contact" />
        <meta
          property="og:description"
          content="Got a technical issue? Want to send feedback about a beta feature? Need details about our Business plan? Let us know."
        />
        <meta property="og:image" content="/images/home-hero.jpg" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta property="twitter:domain" content="pox.me" />
        <meta property="twitter:url" content="https://pox.me/contact" />
        <meta name="twitter:title" content="Proof of X | Contact" />
        <meta
          name="twitter:description"
          content="Got a technical issue? Want to send feedback about a beta feature? Need details about our Business plan? Let us know."
        />
        <meta name="twitter:image" content="/images/home-hero.jpg" />
      </Head>
      <div className="py-8 lg:py-16 px-4 mx-auto max-w-screen-md">
        <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-center text-gray-900 dark:text-white">
          Contact Us
        </h2>
        <p className="mb-8 lg:mb-16 font-light text-center text-gray-500 dark:text-gray-400 sm:text-xl">
          Got a technical issue? Want to send feedback about a beta feature?
          Need details about our Business plan? Let us know.
        </p>
        <Card>
          <CardHeader>
            <form action="#" className="space-y-8">
              <div>
                <label
                  htmlFor="email"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                >
                  Your email
                </label>
                <input
                  type="email"
                  id="email"
                  className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
                  placeholder="name@email.com"
                  required
                />
              </div>
              <div>
                <label
                  htmlFor="subject"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                >
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  className="block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
                  placeholder="Let us know how we can help you"
                  required
                />
              </div>
              <div className="sm:col-span-2">
                <label
                  htmlFor="message"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400"
                >
                  Your message
                </label>
                <textarea
                  id="message"
                  rows={6}
                  className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg shadow-sm border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                  placeholder="Leave a comment..."
                ></textarea>
              </div>
              <Button>Send Message</Button>
            </form>
          </CardHeader>
        </Card>
      </div>
      <SocialIconsSection />
    </>
  );
};

export default ContactPage;
