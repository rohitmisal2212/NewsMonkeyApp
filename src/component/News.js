import React, { useState, useEffect } from 'react'
import NewsItem from './NewsItem'
import Spinner from './Spinner'
import propTypes from 'prop-types'
import InfiniteScroll from "react-infinite-scroll-component"

const News = (props) => {
    const [articles, setarticles] = useState([])
    const [loading, setloading] = useState(true)
    const [page, setpage] = useState(1)
    const [totalResults, settotalResults] = useState(0)

    const capitalizeFirstLetter = (string) => {
        return string.charAt(0).toUpperCase() + string.slice(1);
    }



    const newsUpdate = async () => {
        props.seeProgress(30);
        let url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=248e6cd325ab48ba85bb47821f52644b&page=${page}&pagesize=${props.pageSize}`
        setloading(true)
        let data = await fetch(url)
        props.seeProgress(60);
        let parsedData = await data.json()
        setarticles(parsedData.articles)
        settotalResults(parsedData.totalResults)
        setloading(false)
        props.seeProgress(100);
    }

    useEffect(() => {
        document.title = `${capitalizeFirstLetter(props.category)} - NewsMonkey  `
        newsUpdate();
        // eslint-disable-next-line
    }, [])



    const fetchMoreData = async () => {
        let url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=248e6cd325ab48ba85bb47821f52644b&page=${page + 1}&pagesize=${props.pageSize}`
        setpage(page + 1)
        let data = await fetch(url)
        let parsedData = await data.json()
        setarticles(articles.concat(parsedData.articles))
        settotalResults(parsedData.totalResults)
        setloading(false)
    };

    return (
        <>
            < h2 className='text-center' style={{ marginTop: "70px" }} > NewsMonkey Top {capitalizeFirstLetter(props.category)} News</h2 >
            {loading && <Spinner />}
            <InfiniteScroll
                dataLength={articles.length}
                next={fetchMoreData}
                hasMore={articles.length !== totalResults}
            >
                <div className="container">
                    <div className="row " >
                        {articles.map((element) => {
                            return <div className="col-md-3" key={element.url}>
                                <NewsItem title={element.title.slice(0, 30)} description={element.description ? element.description.slice(0, 60) : "For more info click read more ...."} imageUrl={element.urlToImage} url={element.url} author={element.author} date={element.publishedAt} source={element.source.name} />
                            </div>
                        })
                        }
                    </div>
                </div>
            </InfiniteScroll>
        </>
    )
}

News.defaultProps = {
    country: "in",
    pageSize: 24,
    category: "general"
}

News.propTypes = {
    country: propTypes.string,
    pageSize: propTypes.number,
    category: propTypes.string
}
export default News