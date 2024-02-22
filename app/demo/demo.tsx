'use client';

import Header from "./components/Header";
import InfoBox from "./components/InfoBox";
import Card from "./components/Card";
import {  affiliateData, membershipData, CollageData  } from "./components/Data"

export default function Demo() {
  return (
    <div>
      <main className="bg-zinc-100">
        <header className="sticky top-0 bg-white">
          <Header />
        </header>
        <section>
          <div className="animate-gradient bg-gradient-to-br from-slate-900 via-indigo-800 to-gray-900 text-white flex min-h-svh justify-around">
            <div className="self-center min-w-fit">
              <div className="text-6xl font-semibold my-7 ml-14">Own your Digital <span className="text-violet-800">Identity</span></div>
              <div className="text-xl my-7 ml-14 font-medium max-w-xl">Embrace the evolution of digital identity: integrate the steadfast reliability of email with the dynamic possibilities of Web3.</div>
            </div>
            <div className="self-center flex justify-center flex-wrap">
              {
                CollageData.map((val) => {
                  return (
                    <Card id={val.id} src={val.src} title={val.title} text={val.text} alt={val.alt}/>
                  )
                })
              }
            </div>
          </div>
        </section>
        <section>
          <div className="bg-slate-800 min-h-svh flex flex-col items-center">
            <div className="text-4xl font-semibold text-white my-20">
              Explore the POX.ME identity management system
            </div>
            <InfoBox title={"Affiliate NFTs"} text={affiliateData} src="./images/nft-images/affiliate" alt="Affiliate nft" />
            <InfoBox title={"Membership NFTs"} text={membershipData} src="./images/nft-images/membership" alt="Membership nft" />
          </div>
        </section>
      </main>
      <footer>
        <div className="bg-slate-900 min-h-60 flex justify-evenly">
          <div className="text-white mt-10 flex justify-center font-bold grow">
            POX<span className=" text-violet-800 font-bold">ME</span>
          </div>
          <div className="mt-10 text-slate-400 flex justify-center gap-20 grow">
            <div>
              <ul>
                <li className="mb-3">Resources</li>
                <li className="mb-3">Whitepaper</li>
              </ul>
            </div>
            <div>
              <ul>
                <li className="mb-3">Community</li>
                <li className="mb-3">Governance</li>
                <li className="mb-3">Telegram</li>
                <li className="mb-3">Discord</li>
              </ul>
            </div>
            <div>
              <ul>
                <li className="mb-3">Privacy Policy</li>
                <li className="mb-3">Terms of use</li>
                <li className="mb-3">Contact</li>
              </ul>
            </div>
          </div>
        </div>
        <div className="bg-slate-900 text-slate-400 flex justify-center text-xs">
          © Proof of X. All right reserved.
        </div>
      </footer>
    </div>
  );
}
