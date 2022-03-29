import Image from "next/image";
import cryptoImg from "../../../public/assets/cryptocurrencies.png";
import Typewriter from "typewriter-effect";

import styles from "./featured.module.scss";
import Button from "../elements/button";

const Featured = () => {
  return (
    <div className={styles.featured}>
    <div className={styles.leftSide}>
      <h1>
        The <span>Ultimate</span> Crypto Wallet
      </h1>
      <Typewriter
        options={{
          autoStart: true,
          loop: true,
        }}
        onInit={(typewriter) => {
          typewriter
            .typeString("Crypto")
            .pauseFor(2000)
            .deleteAll()
            .typeString("NFTs")
            .pauseFor(2000)
            .deleteAll()
            .typeString("DeFi")
            .pauseFor(2000)
            .deleteAll()
            .typeString("Staking")
            .pauseFor(2000)
            .deleteAll()
            .start();
        }}
      />
      <h2>all your <span>digital assets</span> in one place.</h2>
      <p>Secure. Fast. Reliable</p>
      <div>
        <a href="https://purplecats.tech/" target={"_blank"} rel="noreferrer">
        <Button text="Discover"></Button>
        </a>
      </div>
    </div>
    <div className={styles.rightSide}>
      <Image alt="crypto" src={cryptoImg} ></Image>
    </div>
  </div>
  )
};

export default Featured;
