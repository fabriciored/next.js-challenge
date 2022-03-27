import Image from 'next/image'
import logo from '../../../public/logo.png'
import Button from '../elements/button';

import styles from "./header.module.scss";

const Header = () => {
    return (
        <div className={styles.header}>
            <div className={styles.headerLeft}>
            <Image className={styles.logo} src={logo} width='80px' height='80px' alt='Logo'/>
            </div>
            <div className={styles.headerRight}>
                <Button dark text='About'/>
                <Button text='Contact'/>

            </div>
        </div>
    )
  };
  
  export default Header;
  