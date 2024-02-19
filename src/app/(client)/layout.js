"use client"
import '../globals.css'
import axios from 'axios'
import localFont from 'next/font/local'
import Nav from '../components/Nav';
import Footer from '../components/Footer';

axios.defaults.baseURL = process.env.NEXT_PUBLIC_SERVER;
const poppins = localFont({
    src: [
        {
            path: '../fonts/Cairo-Regular.ttf',
            weight: '400',
            style: 'normal'
        },
        {
            path: '../fonts/Cairo-Bold.ttf',
            weight: '700',
            style: 'normal'
        },
        {
            path: '../fonts/Cairo-ExtraBold.ttf',
            weight: '900',
            style: 'normal'
        },
        {
            path: '../fonts/Cairo-ExtraLight.ttf',
            weight: '200',
            style: 'normal'
        },
    ]
})

export default ({ children }) => {
    return (
        <html lang="ar">
            <head>
                <title>IMGN</title>
                <link rel="shortcut icon" href="/images/favicon.png" type="image/x-icon" />
                <meta http-equiv="Content-Security-Policy" content="upgrade-insecure-requests" />
            </head>
            <body>
                <main className={`${poppins.className} main-imgn`}>
                    <div className='flex-[100%] flex flex-col'>
                        <Nav />
                        {children}
                    </div>
                    <Footer />
                </main>
            </body>
        </html>
    )
}
