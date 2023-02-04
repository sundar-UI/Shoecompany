import React from 'react'
import { Link } from "react-router-dom";

function Footer() {
  return (
    <section className = "footer">
        <div className="container">
            <div className="cont">
                <Link className="brand" to='/'><img src="./images/logo.png" alt="logo"/></Link>
                <p>&copy; 2023 Go shoes for right choice</p>
            </div>
        </div>
    </section>
  )
}

export default Footer
