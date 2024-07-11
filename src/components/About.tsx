import AboutCard from "./AboutCard";
import { SiHiveBlockchain, SiStrapi, SiFsecure } from "react-icons/si";
import { VscServerProcess } from "react-icons/vsc";

const About = () => {
  return (
    <>
      <div className="w-full bg-black left-0 right-0">
        <div className="max-w-[1240px] mx-auto px-4 py-16 text-white text-center">
          <h1 className="py-4">Growing Protocol</h1>
          <p className="py-4 text-xl">
            The Defi protocol system empowers developers, liquidity providers,
            and traders to participate in a financial marketplace that is open
            and accessible to all.
          </p>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            <AboutCard
              icon={SiHiveBlockchain}
              heading="Reliable, tamper-proof network"
              text="Use decentralization, trusted nodes, premium data, and
        cryptographic proofs to connect highly accurate and available
        data/APIs to any smart contract."
            />

            <AboutCard
              icon={SiFsecure}
              heading="Seamless connection to any API"
              text="Build on a flexible framework that can retrieve data from any API, connect with existing systems, and integrate with any current or future blockchain."
            />
            <AboutCard
              icon={SiStrapi}
              heading="Proven, ready-made solutions"
              text="Integrate pre-built, time-tested oracle solutions that already secure tens of billions in smart contract value for market-leading decentralized applications."
            />
            <AboutCard
              icon={VscServerProcess}
              heading="Secure off-chain computation"
              text="Use a decentralized network of DeFi Keeper nodes to automate contracts, mitigating risk of manual interventions and centralized servers."
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
