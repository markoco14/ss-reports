import type { NextPage } from 'next'
import { useRouter } from 'next/router'
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'

const Home: NextPage = () => {
  const [loading, setLoading] = useState<boolean>(false)
  const router = useRouter();
  console.log(router)

  function handleLogin(e: any) {
    e.preventDefault();
    setLoading(true)
    setTimeout(() => {
      
      router.push('/reports')
    }, 500);
  }

  return (
    <>
      <Head>
        <title>Sky Cloud</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className='landing-wrapper'>
          <main>
            <form 
              className='login-form'
              onSubmit={(e) => handleLogin(e)}
            >
              <h1 className='logo'>Sky Cloud</h1>
              <div className='form-control'>
                <label>Email</label>
                <input type="email"></input>
              </div>
              <div className='form-control'>
                <label>Password</label>
                <input type="password"></input>
              </div>
              <div className='form-control'>
                  <button className='form-link-button'>{loading ? 'Loading...' : 'Login'}</button>
              </div>
            </form>
          </main>

      </div>
    </>
  )
}

export default Home
