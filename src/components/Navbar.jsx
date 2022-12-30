import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div className="row p-2">
        {/* col 1 navbar */}
        <div className="bg-light text-center col-sm-12 mt-1 col-lg-4 col-md-4">
          <h1 className="navbar-brand">
            Contacx
          </h1>
        </div>
        {/* col2 Serch bar*/}
        <div className="bg-light mt-1 col-sm-12 col-lg-4 col-md-4">
          <form className="d-flex">
            <input
              className="form-control me-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
            <button class="btn btn-outline-success" type="submit">
              Search
            </button>
          </form>
        </div>
        {/* col3 */}
        <div className="bg-light text-center mt-1 col-sm-12 col-lg-4 col-md-4">
          <Link to={`/add-contact`} className="btn btn-dark">Create New Contact</Link>
        </div>
      </div>
  );
}

export default Navbar;
