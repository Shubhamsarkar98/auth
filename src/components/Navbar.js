import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div>
      <nav className="navbar navbar-expand-lg bg-primary">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">
            Pyzen
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavAltMarkup"
            aria-controls="navbarNavAltMarkup"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div className="navbar-nav">
              <Link className="nav-link active" aria-current="page" to="/">
                Home
              </Link>
              <Link className="nav-link" to="/sighup">
                Sigh Up
              </Link>
              <Link className="nav-link" to="/login">
                Login
              </Link>
              <Link className="nav-link" to="/">
                Cart
              </Link>
              
            </div>
            <form className="d-flex" role="search">
              <input
                className="form-control me-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
              <button className="btn btn-outline-success som" type="submit">
                Search
              </button>
            </form>
            <button type="button" class="btn btn-success do"><i class="fa-solid fa-cart-shopping"></i>Cart</button>
          </div>
          
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
