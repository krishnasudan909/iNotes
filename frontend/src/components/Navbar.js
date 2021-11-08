import React from 'react'
import {Link,useLocation, useHistory} from "react-router-dom";

export const Navbar = () => {
  let location = useLocation();
let history = useHistory();
  const handleLogout = ()=>{
    localStorage.removeItem('token');
    history.push("/login");
  }

    return (
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark sticky-top ">
  <div className="container-fluid">
    <Link className="navbar-brand" to="/">iNotes</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
    
        <li className="nav-item">
          <Link className={`nav-link ${location.pathname==="/"?"active": "" }`}   aria-current="page" to="/">Home</Link>
        </li>
        <li className="nav-item">
          <Link className={`nav-link ${location.pathname==="/notes"?"active": "" }`}   to="/notes">Notes</Link>
        </li>
        <li className="nav-item">
          <Link className={`nav-link ${location.pathname==="/about"?"active": "" }`}  to="/about">About</Link>
        </li>
      </ul>
          
        
      {!localStorage.getItem('token')?<form className="d-flex d-flex justify-content-center">
      <Link className="btn btn-outline-info mx-1" to="/login" role="button">Login</Link>
      <Link className="btn btn-outline-info mx-1" to="/signup" role="button">Sign up</Link>
      </form> : <form className="d-flex justify-content-center text-align-center">
      <Link className={`nav-link ${location.pathname==="/userdetails"?"active": "" }`}  to="/userdetails"><i className="fas fa-user-alt" style={{fontSize:"23px"}}></i></Link>
      <button className="btn btn-outline-danger mx-1"  onClick={handleLogout}>Logout</button>
      </form>}
    </div>
  </div>
</nav>
    )
}
