import type { NextPage } from 'next'
import Head from 'next/head'
import styles from '../../styles/Dashboard.module.css'
import { useState } from 'react'
import NavBar from '../../components/NavBar'

const ReportsHome: NextPage = () => {

    const navLinks = [
        {
            text: 'Home',
            href: '#',
        },
        {
            text: 'Games',
            href: '#',
        },
        {
            text: 'Reports',
            href: '#',
        },
        {
            text: 'Students',
            href: '#',
        },
    ]

    return (
        <>
            <Head>
                <title>Reports Dashboard</title>
                <meta name="description" content="Generated by create next app" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <div className='dashboard_grid'>
                <NavBar links={navLinks}></NavBar>
                <main className="dashboard_main">
                    <h1>This is the main</h1>
                </main>
            </div>
        </>
    )
}

export default ReportsHome