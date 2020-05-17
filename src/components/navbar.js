import React from 'react'
import {Link} from 'react-router-dom'

const NavBar = (props) => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light navbar-fixed-top sticky-top">
        <Link className="navbar-brand" to="/">Flycatch</Link>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div className="navbar-nav ml-auto">
            <Link className={`nav-item nav-link ${props.currentRoute === '/' ? 'active' : undefined}`} to="/">Home</Link>
            <Link className={`nav-item nav-link ${props.currentRoute === '/post' ? 'active' : undefined}`} to="/post">Blog Posts Here</Link>
          </div>
        </div>
    </nav>
)

}
export default NavBar