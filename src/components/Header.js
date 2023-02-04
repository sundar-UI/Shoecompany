import React from 'react'
import 'bootstrap/dist/css/bootstrap.css'
import { Link } from "react-router-dom";


function Header() {
  return (
    <section className = "head">
       <nav className="navbar navbar-expand-sm">
           <div className="container">
                <Link className="navbar-brand" to='/'><img src="./images/logo.png" alt="logo"/></Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#mynavbar">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse menu" id="mynavbar">
                    <ul className="navbar-nav ms-auto">
                        <li className="nav-item">
                            <Link to="/">Home</Link>
                         </li>
                        <li className="nav-item">
                            <Link to="/create">Create</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/list">List</Link>
                        </li>
                    </ul>
                </div>
           </div>
       </nav>
    </section>
  )
}

export default Header
