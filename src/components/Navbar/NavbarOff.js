import React from 'react'
import { Link } from 'react-router-dom'

export default function NavbarOff() {
    return (
        <header>
        <nav className="navbar navbar-expand-lg navbar-light bg">
          <div className="container-fluid">
            <img src="img/groupomania.png" alt="" height="50px" />
            <button
              className="navbar-toggler"
              type="button"
              data-mdb-toggle="collapse"
              data-mdb-target="#navbarExample01"
              aria-controls="navbarExample01"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <i className="fas fa-bars"></i>
            </button>
            <div className="collapse navbar-collapse" id="navbarExample01">
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li>
                  <Link to="/">Home</Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </header>
    )
}
