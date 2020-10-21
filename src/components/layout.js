import React from "react"
import PropTypes from "prop-types"
import "./layout.css"
import NavBar from "./Navbar"
import Footer from "./Footer"

const Layout = ({ children }) => {
 
  return (
    <>
        <NavBar/> 
        <main>{children}</main>  
        <Footer/>
    </>
  )
}



export default Layout
