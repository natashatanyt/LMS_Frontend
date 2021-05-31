import Head from 'next/head'
import Image from 'next/image'
import { useRouter } from 'next/router'
import { useEffect, useContext } from 'react'

import { AuthContext } from '../../contexts/Auth.Context'

const StudentHome = () => {
    const router = useRouter()
    const { auth, setAuth } = useContext(AuthContext)

    return (
        <div>
            <Head>
                <title>Student | LMS</title>
                <meta name="description" content="Generated by create next app" />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <main className="mt-8 mx-8">
                <h1 className="text-5xl mb-8">Student Dashboard</h1>
                <p>You are authenticated!</p>
            </main>

            <footer>
            </footer>
        </div>
    )
}

export default StudentHome
