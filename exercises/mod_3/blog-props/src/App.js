import React from "react"

// import Header from "./Components/Header"
import BlogPost from "./Components/BlogPost"
// import Footer from "./Components/Footer"
import blogList from "./blogList"

function App() {
    const mappedBlogList = blogList.map(blog => <BlogPost title={blog.title} subTitle={blog.subTitle} author={blog.author} date={blog.date}/>)
    return (
        <div>
            {mappedBlogList}
        </div>
    )
}

export default App