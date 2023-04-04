import React from "react";
import Container from "./container";
import Image from "next/image";
import { FaCheckCircle } from "react-icons/fa";

const Roadmap = () => {
  return (
    <>
      <Container className="flex flex-wrap ">
        <div className="bg-white py-16 lg:py-24">
          <div className="container mx-auto px-4 lg:px-16">
            <div className="max-w-xl mx-auto mb-12 text-center">
              <h2 className="text-3xl font-bold text-gray-800 mb-4">
                Ecsynthetic Roadmap
              </h2>
              <p className="text-gray-600">
                Here are the four phases of our project's development.
              </p>
            </div>
            <div className="flex flex-wrap -mx-4">
              <div className="w-full md:w-1/2 px-4 mb-8">
                <div className="flex items-center mb-2">
                  <div className="w-10 h-10 bg-green-500 rounded-full flex items-center justify-center">
                    <FaCheckCircle className="text-white text-lg" />
                  </div>
                  <h3 className="text-lg font-bold ml-4">
                    Phase 1: Launch and Market Research
                  </h3>
                </div>
                <p className="text-gray-600">
                  Conduct market research and develop a business model. Create a
                  live website and deploy smart contracts, audited by reputable
                  firms. Establish partnerships and release tokenomics.
                </p>
              </div>
              <div className="w-full md:w-1/2 px-4 mb-8">
                <div className="flex items-center mb-2">
                  <div className="w-10 h-10 bg-gray-300 rounded-full flex items-center justify-center">
                    <span className="text-lg text-white">2</span>
                  </div>
                  <h3 className="text-lg font-bold ml-4">
                    Phase 2: Trading and Community Building
                  </h3>
                </div>
                <p className="text-gray-600">
                  Launch trading on mainnet, and conduct IDO/IFO on Glitch DEXs.
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
                  <h3 className="text-lg font-bold ml-4">
                    Phase 3: Expansion and Governance
                  </h3>
                </div>
                <p className="text-gray-600">
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
                  <h3 className="text-lg font-bold ml-4">
                    Phase 4: AMM Launch and Growth
                  </h3>
                </div>
                <p className="text-gray-600">
                  Launch Ecsynthetic's own AMM, expand the ecosystem through
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
