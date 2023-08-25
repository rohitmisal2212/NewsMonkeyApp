import React from 'react'

const NewsItem = (props) => {
    let { title, description, imageUrl, url, author, date, source } = props
    return (
        <div className='my-3'>
            <div className="card" >
                <img src={imageUrl ? imageUrl : "https://images.barrons.com/im-696240/social"} className="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">{title}</h5>
                    <p className="card-text">{description}</p>
                    <p className="card-text"><small className="text-body-secondary">{author ? author : "Unknown"} on date {new Date(date).toUTCString()} </small></p>
                    <a href={url} target="_blank" rel="noreferrer" className="btn btn-sm btn-success">Read More</a>
                    <span className="position-absolute top-0 translate-middle badge rounded-pill bg-danger" style={{ left: "90%", zIndex: 1 }}>
                        {source}
                    </span>
                </div>
            </div>
        </div>
    )
}

export default NewsItem
