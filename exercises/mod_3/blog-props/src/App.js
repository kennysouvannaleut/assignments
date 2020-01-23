import React from "react"

import Header from "./Components/Header"
import BlogPost from "./Components/BlogPost"
import Footer from "./Components/Footer"
import blogList from "./blogList"

function App() {
    const mappedBlogList = blogList.map((blog, index) => <BlogPost data={blog}/>)
    return (
        <div>
            <Header />
                {mappedBlogList}
            <Footer />
        </div>
    )
}

export default App