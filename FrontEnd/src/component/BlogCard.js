import React from 'react'

export default function BlogCard(props) {
    const {src,title,desc} = props
    return (
        <div className='blogcard'>
            <div className="card" style={{width: "20rem", height:"400px"}}>
                <img src={src} className="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">{title}</h5>
                    <p className="card-text">{desc}</p>
                    <a href="#" className="btn btn-danger">Learn more</a>
                </div>
            </div>
        </div>
    )
}
