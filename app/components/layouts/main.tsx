import Image from "next/image";
import Header from "../modules/header";
import cryptoImg from "../../../public/assets/cryptocurrencies.png";
import Typewriter from "typewriter-effect";
import styles from "./main.module.scss";
import Button from "../elements/button";
import Featured from "../modules/featured";

const MainLayout = () => {
  return (
    <div className={styles.main}>
      <Header />

      <Featured/>

     
    </div>
  );
};

export default MainLayout;
