import React from 'react'
import {useState} from "react"
import {Link} from "react-scroll"


const Nav = () => {

    const [darkNav , setDarkNav] = useState(false)

    window.addEventListener("scroll" , () => {
        window.scrollY > 500 ? setDarkNav(true) : setDarkNav(false)
    })

  return (
        <nav className={darkNav ? "navContainer dark-nav" : "navContainer"}>
            <div className="edusity">
                <h2>🎓Edusity</h2>
            </div>
            <div className="linkContainer">
                <Link smooth={true} duration={400} to="header">Home</Link>
                <Link offset={-170} smooth={true} duration={400}  to="programs">Program</Link>
                <Link offset={-100} smooth={true} duration={400}  to="about">About us</Link>
                <Link offset={-100} smooth={true} duration={400}  to="campusContainer">Campus</Link>
                <Link className="responsive" offset={-100} smooth={true} duration={400}  to="testimonialsContainer">Testimonials</Link>
                <button className="btn"><Link smooth={true} duration={200} to="contactContainer">Contact Us</Link></button>
            </div>
        </nav>
  )
}

export default Nav
