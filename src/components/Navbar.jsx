import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div className="">
      <div>
       
      </div>

      <div className="row mx-1 navbar">
        {/* Nav brand */}
        <div className="col-lg-4 col-xl-4 logo">
          <a className="navbar-brand" href="#">
            <h2>Contacts</h2>
          </a>
        </div>
        {/* Search */}
        <div className="col-lg-4 col-xl-4 text-center">
          <form action="" className="d-flex mx-2" role="search">
            <input
              className="form-control me-2"
              type="search"
              placeholder="search"
              name=""
              id=""
            />
            <button className="btn btn-outline-success" type="submit">
              Search
            </button>
          </form>
        </div>
        {/* Add User */}
        <div className="col-lg-4 col-xl-4 mt-2 gap-1 d-flex d-flex">
          <div className="ms-auto">
            <Link to={`/add-contact`} className="btn btn-dark ">
              Create New Contact
            </Link>
          </div>
        </div>

        <nav className="navbar navbar-primary bg-light d-flex ">
          <div> </div>
          {/* search */}
        </nav>
      </div>
    </div>
  );
}

export default Navbar;
