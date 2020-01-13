import React from "react"
import Navbar from "./Navbar"


function Header() {
    return (
        <header>
            <Navbar />
            <h1 className="title">Clean Blog</h1>
                <span className="subHeading" >A Blog Theme by Start Bootstrap </span>
        </header>
    )    
}

export default Header