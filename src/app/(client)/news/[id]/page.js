"use client"
import axios from 'axios';
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
            <div className='text-right container mx-auto py-20 text-white w-[70%]'>
                <p className="font-bold text-3xl pb-3">{news.title}</p>
                <p className="text-2xl">{news.subTitle}</p>
                <div className="w-[50%] m-auto py-10">
                    <img src={news.hero} alt={news.title} className='w-full h-1/2 object-contain' />
                </div>
                <div dangerouslySetInnerHTML={{ __html: news.description }} />
            </div>
        </>
    )
}
