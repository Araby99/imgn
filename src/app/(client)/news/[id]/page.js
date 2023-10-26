"use client"
import axios from 'axios';
import Head from 'next/head';
import React, { useEffect, useState } from 'react'

export default ({ params }) => {
    const { id } = params;
    const [news, setNews] = useState();
    useEffect(() => {
        if (id) {
            axios.get(`/news/${id}`).then(result => {
                setNews(result.data)
            })
        }
    }, [id])
    if (!news) {
        return (
            <p>spinner</p>
        )
    }
    return (
        <>
            <Head>
                <title>IMGN | {news.title}</title>
            </Head>
            <div className='text-right container mx-auto py-20 text-white'>
                <p className="font-bold text-3xl pb-3">{news.title}</p>
                <p className="text-2xl">{news.subTitle}</p>
                <div className="w-full py-10">
                    <img src={news.hero} alt={news.title} className='w-full h-1/2 object-contain' />
                </div>
                <div dangerouslySetInnerHTML={{ __html: news.description }} />
            </div>
        </>
    )
}
