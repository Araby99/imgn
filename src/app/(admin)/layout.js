"use client"
import '../globals.css'
import axios from 'axios'
import localFont from 'next/font/local'
import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';

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
    const [admin, setAdmin] = useState();
    const router = useRouter();
    if (typeof window != undefined) {
        console.log(window?.location.hostname.split(".")[0]);
    }
    useEffect(() => {
        if (window.location.hostname.split(".")[0] == "admin") {
            setAdmin(true)
        } else {
            setAdmin(false)
        }
    }, [])
    if (admin && admin !== undefined) {
        return (
            <html lang="ar">
                <head>
                    <title>IMGN</title>
                    <link rel="shortcut icon" href="/images/favicon.png" type="image/x-icon" />
                </head>
                <body>
                    <div className={poppins.className}>
                        {children}
                    </div>
                </body>
            </html>
        )
    } else if (admin == false && admin !== undefined) {
        router.push("/404")
    }
}
