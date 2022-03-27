import type { NextPage } from 'next'
import Head from "next/head"
import Header from '../app/components/modules/header'
import MainLayout from '../app/components/layouts/main'
import styles from '../styles/Home.module.css'

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
      <link rel="icon" type="image/png" sizes="32x32" href="/logo.png" />
      </Head>
      <MainLayout/>
    </div>
  )
}

export default Home
