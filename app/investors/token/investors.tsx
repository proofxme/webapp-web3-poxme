"use client";

import { useRef } from "react";
import Image from "next/image";
import { JSX, SVGProps } from "react";
import dynamic from "next/dynamic";
import { Button } from "@/components/ui/button";
import TokenContract from "@/components/tokenContract";
import TokenPrice from "@/components/tokenPrice";

function ProofOfXIcon(
  props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>
) {
  return (
    <svg
      {...props}
      fill="none"
      height="50px"
      viewBox="0 0 24 24"
      width="50px"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M1.28966 24H22.7103C23.4227 24 24 23.4226 24 22.7103V1.28967C24 0.577353 23.4227 0 22.7103 0H1.28966C0.577346 0 0 0.577353 0 1.28967V22.7106C0 23.4226 0.577346 24 1.28966 24Z"
        fill="#6465f7"
      />
      <path
        d="M9.03865 18.9985L9.06226 18.9679L9.19667 18.7844L6.78953 15.5752L2.57593 21.1185H7.48712L9.04004 18.9982L9.03865 18.9985Z"
        fill="white"
      />
      <path
        d="M9.88227 17.8627L12.5199 14.4933L12.5177 14.4905L21.4236 2.88184H16.6435L10.1097 11.4627L7.82088 8.19632H2.78027L9.88227 17.8627Z"
        fill="white"
      />
      <path
        d="M10.5907 18.8485H10.5905L12.2464 21.0702L12.2819 21.1185H17.4531L13.1534 15.5469L10.5907 18.8485Z"
        fill="white"
      />
    </svg>
  );
}

export const LiFiWidgetNext = dynamic(
  () =>
    import("@/components/widgets/swap").then((module) => module.Swap) as any,
  {
    ssr: true,
    loading: () => <p>Loading...</p>,
  }
);

export default function Investors() {
  const investSectionRef = useRef<HTMLHeadingElement>(null);

  const scrollToInvestSection = () => {
    if (investSectionRef.current) {
      investSectionRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };
  return (
    <div>
      <div className="flex justify-center w-full lg:py-12 xl:py-16">
        <div className="flex flex-col justify-center space-y-3">
          <h1 className="flex items-center gap-2 text-3xl font-bold tracking-tighter sm:text-5xl">
            <ProofOfXIcon className=" rounded-full"/>
            POXME token
          </h1>
          <p className="max-w-[600px] justify-center text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400 ">
            The Proof of X token represents investment in the project. Its
            primary purpose is to provide liquidity to the project and serve as
            a medium for lending and borrowing memberships.
          </p>
        </div>
      </div>
      <div className="flex flex-col sm:flex-row items-center justify-center gap-3 p-1">
        <TokenPrice scrollToInvestSection={scrollToInvestSection} />
        <TokenContract />
      </div>

      <section className="w-full py-12 lg:py-24">
        <div className="container px-4 md:px-6">
          <div className="space-y-4 text-center">
            <h2
              className="text-3xl font-bold tracking-tighter sm:text-5xl"
              ref={investSectionRef}
              id="invest"
            >
              Invest in Proof of X
            </h2>
            <p className="max-w-[500px] mx-auto text-gray-500 md:text-base/relaxed dark:text-gray-400">
              Actually you can invest buying $POXME on BNB Smart Chain. With our
              widget you can swap from any token on any chain:
            </p>
          </div>
        </div>
        <div className=" mx-auto grid gap-4 my-6 ">
          <div className="justify-center p-4">
            <LiFiWidgetNext />
          </div>
        </div>
      </section>
      <section className="flex-2 justify-center items-center">
        <div className="space-y-4 text-center ">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
            Latest news
          </h2>
          <p className=" mx-auto text-gray-500 md:text-base/relaxed dark:text-gray-400">
            Follow @proofxme on X or join our Telegram group for the latest
            news.
          </p>
        </div>
        <div className="flex flex-col gap-2 mt-2 justify-center items-center p-1">
          <Button
            className="bg-gradient-to-r from-blue-900 via-white-500 to-blue-500 hover:from-blue-400 hover:via-white-500 hover:to-blue-500"
            onClick={() => window.open("https://t.me/proofxme", "_blank")}
          >
            <svg
              className="h-5 w-5 mr-5"
              fill="currentColor"
              viewBox="0 0 24 24"
              version="1.1"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                id="telegram-1"
                d="M18.384,22.779c0.322,0.228 0.737,0.285 1.107,0.145c0.37,-0.141 0.642,-0.457 0.724,-0.84c0.869,-4.084 2.977,-14.421 3.768,-18.136c0.06,-0.28 -0.04,-0.571 -0.26,-0.758c-0.22,-0.187 -0.525,-0.241 -0.797,-0.14c-4.193,1.552 -17.106,6.397 -22.384,8.35c-0.335,0.124 -0.553,0.446 -0.542,0.799c0.012,0.354 0.25,0.661 0.593,0.764c2.367,0.708 5.474,1.693 5.474,1.693c0,0 1.452,4.385 2.209,6.615c0.095,0.28 0.314,0.5 0.603,0.576c0.288,0.075 0.596,-0.004 0.811,-0.207c1.216,-1.148 3.096,-2.923 3.096,-2.923c0,0 3.572,2.619 5.598,4.062Zm-11.01,-8.677l1.679,5.538l0.373,-3.507c0,0 6.487,-5.851 10.185,-9.186c0.108,-0.098 0.123,-0.262 0.033,-0.377c-0.089,-0.115 -0.253,-0.142 -0.376,-0.064c-4.286,2.737 -11.894,7.596 -11.894,7.596Z"
              />
            </svg>
            Join our telegram{" "}
          </Button>
          <a
            className=" twitter-timeline"
            data-width="500"
            data-height="400"
            href="https://twitter.com/proofxme?ref_src=twsrc%5Etfw"
          >
            Tweets by proofxme
          </a>
        </div>
      </section>
      <section className="w-full py-12 lg:py-15">
        <div className="container px-4 md:px-6">
          <div className="space-y-4 text-center">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
              Frequently Asked Questions
            </h2>
            <p className=" mx-auto text-gray-500 md:text-base/relaxed dark:text-gray-400">
              Have a question about Proof of X or the POXME token? Check out our
              FAQs below.
            </p>
          </div>
          <div className=" mx-auto grid gap-8 my-12 lg:grid-cols-2">
            <div className="space-y-2">
              <h3 className="text-xl font-semibold">
                What is the Proof of X token?
              </h3>
              <p className="text-sm text-gray-500 dark:text-gray-400">
                The Proof of X token represents investment in the project. Its
                primary purpose is to provide liquidity to the project and serve
                as a medium for lending and borrowing memberships.
              </p>
            </div>
            <div className="space-y-2">
              <h3 className="text-xl font-semibold">
                What is the POXME token migration?
              </h3>
              <p className="text-sm text-gray-500 dark:text-gray-400">
                The POXME token migration is a transition from our old token to
                a new one that complies with ERC/BEP-20 standards. This
                migration is to enhance security, utility, and overall user
                experience within the POXME ecosystem.
              </p>
            </div>

            <div className="space-y-2">
              <h3 className="text-xl font-semibold">
                What is the NFT membership?
              </h3>
              <p className="text-sm text-gray-500 dark:text-gray-400">
                The NFT membership signifies affiliation with the Proof of X
                project. It is a unique token used to access the project&apos;s
                features and benefits. Each account holder in the project
                requires a membership as they are distinct. Given the nature of
                memberships, an infinite number can exist, with each
                representing a different account name.
              </p>
            </div>
            <div className="space-y-2">
              <h3 className="text-xl font-semibold">
                What is the NFT affiliation?
              </h3>
              <p className="text-sm text-gray-500 dark:text-gray-400">
                The NFT affiliation denotes a connection to the Proof of X
                project. It is a unique token used to claim rewards from the
                protocol. Each account holder in the project requires an
                affiliation as they are unique. Affiliate NFTs are limited to
                2,500 units and are distributed on a first-come, first-served
                basis.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
