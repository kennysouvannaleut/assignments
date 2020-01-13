import React from "react"

function Navbar() {
    return (
    <div>
        <nav>
            <a className="navbar-brand" href="">Start Bootstrap</a>
            <ul className="navbar-nav">
                <li className="active"><a href="#">HOME</a></li>
                <li className="active"><a href="#">ABOUT</a></li>
                <li className="active"><a href="#">SAMPLE POST</a></li>
                <li className="active"><a href="#">CONTACT</a></li>
            </ul>
        </nav>
    </div>
    )
}

export default Navbar