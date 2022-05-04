import Head from 'next/head'
import { useState } from 'react'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

import Searchbox from '../components/Searchbox';

export default function Home() {
  const [ name, setName ] = useState('')
  function handleSubmit(target) {
    target.preventDefault()
    console.log(target)
  }

  function handleChange(event) {
    const { target } = event;
    const { value } = target;
    setName(value);
  }

  return (
    <div className={styles.container}>
      <Head>
        <title>Github Repository finder</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          <a href="https://nextjs.org">Github Repository finder</a>
        </h1>
        <a href="/">Github Repository finder</a>
        <Searchbox
          title='Repository'
          onSubmit={handleSubmit}
          onChange={handleChange}
          value={name}
        />
      </main>

      <footer className={styles.footer}>
      </footer>
    </div>
  )
}
