import Head from 'next/head'
import Image from 'next/image'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import styles from '../styles/Home.module.css'
import Link from 'next/link'

export default function Home() {
  return (
  <>
    <Head>
      <title>
        User List | Home
      </title>
      <meta name="keywords" content="users"></meta>
    </Head>
   
    <div>
  
      <h1 className={styles.title}>HomePage</h1>
      <p className={styles.text}>Converting a part of your user base to self-serve can be hugely beneficial: it saves resources and helps you focus on high-value customers. Automated onboarding is, hands down, a critical part of this undertaking.</p>
            <p className={styles.text}>A book is a medium for recording information in the form of writing or images, typically composed of many pages bound together and protected by a cover.</p>
      
      <Link href="\users">
      <a className={styles.btn}>See User Listing</a>
      </Link>
    
    </div>

  </>
  )
}
