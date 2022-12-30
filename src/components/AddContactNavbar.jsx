import React from "react";
import { Link } from "react-router-dom";

function AddContactNavbar() {
  return (
    <div className="row p-2 align-baseline bg-light">
      {/* col 1 navbar */}
      <div className="bg-light text-center col-sm-12 mt-1 col-lg-4 col-md-4">
        <h1 className="navbar-brand text-center">Contacx</h1>
      </div>
      {/* col2 Serch bar*/}
      <div className="bg-success rounded-3 col-sm-12 mt-1 col-lg-4 col-md-4">
        <h1 className="navbar-brand text-center my-2 mx-2">Add Contact</h1>
      </div>

      {/* col3 */}
      <div className="bg-light text-center mt-3 col-sm-12 col-lg-4 col-md-4">
        <Link to={`/`} className="btn btn-dark">
          Go Back
        </Link>
      </div>
    </div>
  );
}

export default AddContactNavbar;
