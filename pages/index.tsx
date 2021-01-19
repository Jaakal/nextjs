import Head from 'next/head'
import Link from 'next/link'

import { useState } from 'react'
import jwt from 'jsonwebtoken'

import styles from '../styles/Home.module.scss'

const Home = () => {
  // const [formData, setFormData] = useState<{ username: string, password: string }>({
  //   username: '',
  //   password: ''
  // })

  // const [message, setMessage] = useState<string>('You are not logged in!')

  // const { username, password } = formData

  // const onChange = event =>
  //   setFormData({
  //     ...formData,
  //     [event.target.name]: event.target.value
  //   })

  // const onSubmit = async (event) => {
  //   event.preventDefault()

  //   const res = await fetch('/api/login', {
  //     method: 'POST',
  //     headers: {
  //       'Content-Type': 'application/json'
  //     },
  //     body: JSON.stringify({ username, password })
  //   })

  //   const data = await res.json()

  //   const { token } = data

  //   if (token) {
  //     const json = jwt.decode(token) as { [key: string]: string }
  //     setMessage(`Welcome ${json.username} and you are ${json.admin ? 'an admin!' : 'not an admin!'}`)
  //   } else {
  //     setMessage('Something went wrong!')
  //   }
  // }

  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to{' '}
          <Link href="/page1/activities">
            <a>Next.js!</a>
          </Link>
        </h1>

        <p className={styles.description}>
          Get started by editing{' '}
          <code className={styles.code}>pages/index.js</code>
        </p>

        <div className={styles.grid}>
          <a href="https://nextjs.org/docs" className={styles.card}>
            <h3>Documentation &rarr;</h3>
            <p>Find in-depth information about Next.js features and API.</p>
          </a>

         
        </div>
      </main>
    </div>

    // <div>
    //   <h1>{message}</h1>
    //   <form>
    //     <input type="text" name="username" onChange={onChange} value={username} />
    //     <br />
    //     <input type="password" name="password" onChange={onChange} value={password}/>
    //     <br />
    //     <input type="submit" onClick={onSubmit} value="Login"/>
    //   </form>
    // </div>
  )
}

export default Home
