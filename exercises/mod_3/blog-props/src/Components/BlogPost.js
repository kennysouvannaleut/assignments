import React from "react"

function BlogPost(props) {
    return (
        <div className="container">
            <h2>{props.data.title}</h2>
            <h3>{props.data.subTitle}</h3>
            <p>Posted by {props.data.author} on {props.data.date}</p>
        </div>
    )
}

export default BlogPost