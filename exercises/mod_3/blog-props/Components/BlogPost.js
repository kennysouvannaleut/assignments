import React from "react"

function BlogPost(props) {
    return (
        <div>
            <h2>{props.blog.title}</h2>
            <h2>{props.blog.subTitle}</h2>
            <h2>{props.blog.author}</h2>
            <h2>{props.blog.date}</h2>
        </div>
    )
}

export default BlogPost