"use client"
import Link from 'next/link'
import React, { useEffect, useState } from 'react'

export default ({ section, sectionName }) => {
    const [description, setdescription] = useState()
    const createElementFromHTML = (htmlString) => {
        const div = document.createElement('div');
        div.innerHTML = htmlString.trim();
        return div.firstChild;
    }
    useEffect(() => {
        if (section) {
            const htmlDescription = createElementFromHTML(`<div>${section.description}</div>`);
            while (htmlDescription.getElementsByTagName("img").length) htmlDescription.getElementsByTagName("img")[0].remove();
            while (htmlDescription.getElementsByTagName("video").length) htmlDescription.getElementsByTagName("video")[0].remove();
            setdescription(htmlDescription.outerHTML)
        }
    }, [section])
    return (
        <div className="flex-1 flex">
            <div className='flex-[2] flex justfy-center items-center relative overflow-hidden' >
                <div style={{ backgroundImage: `url(${section?.hero})`, backgroundSize: "cover", backgroundPosition: "center", backgroundRepeat: "no-repeat" }} className="absolute top-0 left-0 h-full w-[140%] left-[-20%] skew-20"></div>
                <img src={section?.hero} alt={section?.title} className='opacity-0' draggable={false} />
            </div>
            <div className="flex-[3] p-10 flex justify-center flex-col text-right carousel-text">
                <p className='text-4xl font-bold'>
                    أحدث {sectionName == "news" ? "الأخبار" : sectionName == "articles" ? "المقالات" : "الوسائط"}
                </p>
                <p className='text-3xl text-imgn-purple my-4 font-semibold'>{section?.title}</p>
                <p className='mb-3 font-semibold'>{section?.subTitle}</p>
                <div dangerouslySetInnerHTML={{ __html: description }} />
                <Link className='mt-3 text-imgn-purple text-xl font-bold' href={`/${sectionName}/${section?._id}`}>تابع القراءة</Link>
            </div>
        </div>
    )
}
