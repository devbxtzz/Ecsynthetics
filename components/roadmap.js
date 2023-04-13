import React from "react";
import Container from "./container";
import Image from "next/image";
import { FaCheckCircle } from "react-icons/fa";

const Roadmap = () => {
  return (
    <>
      <Container className="flex flex-wrap ">
        <div className="py-16 lg:py-24">
          <div className="container mx-auto px-4 lg:px-16">
            <div className="max-w-xl mx-auto mb-12 text-center">
              <h1 className="text-4xl font-bold leading-snug tracking-tight text-gray-800 lg:text-4xl lg:leading-tight xl:text-6xl xl:leading-tight dark:text-white">
                <span className="text-blue-400">Roadmap </span>
              </h1>
            </div>
            <div className="flex flex-wrap -mx-4">
              <div className="w-full md:w-1/2 px-4 mb-8">
                <div className="flex items-center mb-2">
                  <div className="w-10 h-10 bg-green-500 rounded-full flex items-center justify-center">
                    <FaCheckCircle className="text-white text-lg" />
                  </div>
                  <h2 className="text-xl font-bold ml-4">
                    Phase 1: Market Research and Testnet
                  </h2>
                </div>
                <p className="py-5 text-xl leading-normal text-gray-500 lg:text-xl xl:text-2xl dark:text-gray-300">
                  Conduct market research and develop a business model. Create a
                  live website for the testnet, deploy and audit smart contracts. Establish partnerships, securing
                  funding, releasing official Docs and Tokenomics
                </p>
              </div>
              <div className="w-full md:w-1/2 px-4 mb-8">
                <div className="flex items-center mb-2">
                  <div className="w-10 h-10 bg-gray-300 rounded-full flex items-center justify-center">
                    <span className="text-lg text-white">2</span>
                  </div>
                  <h2 className="text-xl font-bold ml-4">
                    Phase 2: Mainnet Trading and Community Building
                  </h2>
                </div>
                <p className="py-5 text-xl leading-normal text-gray-500 lg:text-xl xl:text-2xl dark:text-gray-300">
                  Launch trading on mainnet, and conduct IDO/IFO on Glitch DEXes.
                  Publish an official whitepaper and get listed on
                  CoinMarketCap, CoinGecko, and other DEXs. Build a community of
                  10,000 users across Telegram, Twitter, and Discord.
                </p>
              </div>
              <div className="w-full md:w-1/2 px-4 mb-8">
                <div className="flex items-center mb-2">
                  <div className="w-10 h-10 bg-gray-300 rounded-full flex items-center justify-center">
                    <span className="text-lg text-white">3</span>
                  </div>
                  <h2 className="text-xl font-bold ml-4">
                    Phase 3: Expansion and Governance
                  </h2>
                </div>
                <p className="py-5 text-xl leading-normal text-gray-500 lg:text-xl xl:text-2xl dark:text-gray-300">
                  Launch staking pools, add more synthetic assets, and develop a
                  governance protocol. Establish partnerships with liquidity
                  providers, expand into new markets, and integrate with other
                  DeFi protocols. Market campaigns targeting institutional
                  investors and retail traders, and continue community building
                  and engagement.
                </p>
              </div>
              <div className="w-full md:w-1/2 px-4 mb-8">
                <div className="flex items-center mb-2">
                  <div className="w-10 h-10 bg-gray-300 rounded-full flex items-center justify-center">
                    <span className="text-lg text-white">4</span>
                  </div>
                  <h2 className="text-xl font-bold ml-4">
                    Phase 4: AMM Launch and Growth
                  </h2>
                </div>
                <p className="py-5 text-lg leading-normal text-gray-500 lg:text-xl xl:text-2xl dark:text-gray-300">
                  Launch Ecsynths's own AMM, expand the ecosystem through
                  strategic partnerships and acquisitions. Research and develop
                  new synthetic asset classes, and continue marketing campaigns
                  targeting institutional investors and retail traders. Build
                  community and engagement on a global scale and develop
                  educational resources for new users entering the DeFi space.
                </p>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </>
  );
};

export default Roadmap;
