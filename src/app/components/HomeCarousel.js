import React from 'react'
const OwlCarousel = dynamic(() => import("react-owl-carousel"), {
    ssr: false,
});
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import dynamic from 'next/dynamic';
import { NewsCarousel } from './NewsCarousel';

export default () => {
    return (
        <div className="w-[80%] flex-[100%] flex items-center mx-auto h-full">
            <OwlCarousel loop items={1} dots={false}>
                <div className='item px-5'>
                    <div className="skew--20 bg-white h-full w-full">
                        <NewsCarousel />
                    </div>
                </div>
            </OwlCarousel>
        </div>
    )
}
