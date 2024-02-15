"use client";

import Questions from "@/components/widgets/questions";
import StakingDetails from "@/components/widgets/staking-details";
import { useAccount } from "wagmi";
import { Button } from "@/components/ui/button";
import MigrationDetails from "@/components/widgets/migration-details";

export default function Migration() {
  const { chain } = useAccount();

  return (
    <>
      <main className="flex min-h-screen flex-col lg:p-8 h-auto bg-gray-50">
        <div className="flex flex-col items-center justify-center w-full h-full py-14 px-12">
          <div className=" text-center w-full">
            <h2 className="text-5xl text-center font-bold tracking-tighter mt-9 mb-4">
              Migration Center
            </h2>
            <p className="mx-auto text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400 p-6">
              During the migration period, you can deposit{" "}
              <i style={{ color: "blue" }} className={"" + "font-bold"}>
                $EULER{" "}
              </i>
              to get the new token and claim your membership NFTs.
            </p>
            <p className="mx-auto text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400 md:w-10/12 mb-12">
              The migration process is a unique opportunity to continue
              supporting <strong>@tebayoso</strong> during the Proof of X
              development, while maintaining the value you deposited and have an
              opportunity to claim back the investment.
            </p>
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
          </div>
          <div
            className="bg-red-100 border-l-4 border-orange-500 text-orange-700 p-4 mt-8"
            role="alert"
          >
            <p className="font-bold">Irreversible Actions</p>
            <p className="text-sm">
              Please, read the FAQ section, or contact us in the official
              telegram channel if you have doubts.
              <br />
              This is an <b>irreversible migration process.</b>
            </p>
          </div>
          <div className="mt-12 lg:w-full">
            <ul
              className="relative m-0 w-full list-none p-0 transition-[height] duration-200 ease-in-out mr-10"
              data-te-stepper-init
              data-te-stepper-type="vertical"
            >
              <li
                data-te-stepper-step-ref
                className="relative h-fit after:absolute after:left-[2.45rem] after:top-[3.6rem] after:mt-px after:h-[calc(100%-2.45rem)] after:w-px after:bg-[#e0e0e0] after:content-[''] dark:after:bg-neutral-600"
              >
                <div
                  data-te-stepper-head-ref
                  className="flex items-center p-6  leading-[1.3rem] no-underline after:bg-[#e0e0e0] after:content-[''] focus:outline-none dark:after:bg-neutral-600"
                >
                  <span
                    data-te-stepper-head-icon-ref
                    className="mr-3 flex h-[1.938rem] w-[1.938rem] items-center justify-center rounded-full bg-[#ebedef] text-sm font-medium text-[#40464f]"
                  >
                    1
                  </span>
                  <span
                    data-te-stepper-head-text-ref
                    className="text-3xl after:absolute after:flex after:text-[0.8rem] after:content-[data-content] dark:text-neutral-300"
                  >
                    <strong>Withdraw the tokens from the staking</strong>
                  </span>
                </div>
                <div className="w-full">
                  {" "}
                  <StakingDetails />
                </div>
              </li>
              <li
                data-te-stepper-step-ref
                className="relative h-fit after:absolute after:left-[2.45rem] after:top-[3.6rem] after:mt-px after:h-[calc(100%-2.45rem)] after:w-px after:bg-[#e0e0e0] after:content-[''] dark:after:bg-neutral-600"
              >
                <div
                  data-te-stepper-head-ref
                  className="flex items-center p-6 leading-[1.3rem] no-underline after:bg-[#e0e0e0] after:content-[''] focus:outline-none dark:after:bg-neutral-600"
                >
                  <span
                    data-te-stepper-head-icon-ref
                    className="mr-3 flex h-[1.938rem] w-[1.938rem] items-center justify-center rounded-full bg-[#ebedef] text-sm font-medium text-[#40464f]"
                  >
                    2
                  </span>
                  <span
                    data-te-stepper-head-text-ref
                    className="text-3xl after:absolute after:flex after:text-[0.8rem] after:content-[data-content] dark:text-neutral-300"
                  >
                    <strong> Migrate the tokens to the new Protocol</strong>
                  </span>
                </div>
                <div className="m-6">
                  <MigrationDetails />
                </div>
              </li>
              <li data-te-stepper-step-ref className="relative h-fit">
                <div
                  data-te-stepper-head-ref
                  className="flex items-center p-6 leading-[1.3rem] no-underline after:bg-[#e0e0e0] after:content-[''] focus:outline-none dark:after:bg-neutral-600"
                >
                  <span
                    data-te-stepper-head-icon-ref
                    className="mr-3 flex h-[1.938rem] w-[1.938rem] items-center justify-center rounded-full bg-[#ebedef] text-sm font-medium text-[#40464f]"
                  >
                    3
                  </span>
                  <span
                    data-te-stepper-head-text-ref
                    className="text-3xl after:absolute after:flex after:text-[0.8rem] after:content-[data-content] dark:text-neutral-300"
                  >
                    <strong>You are done!</strong>
                  </span>
                </div>
              </li>
            </ul>
          </div>
          <div className="lg:flex pt-14 relative flex place-items-center m-5">
            <Questions />
          </div>
        </div>
      </main>
    </>
  );
}
