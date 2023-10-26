import React from 'react'

const NewsCarousel = () => {
    const [news, setNews] = useState([])
    useEffect(() => {
        axios.get("/news/getLastThree").then(result => setNews(result.data));
    }, [])
    return (
        <div className="skew-20">

        </div>
    )
}

export default NewsCarousel