import React from "react";
import { Link } from "react-router-dom";

function EditContactNavbar() {
  return (
    <div className="row text-center p-3 bg-light">
      {/* col 1 navbar */}
      <div className="bg-light text-center col-sm-12 mt-1 col-lg-4 col-md-4">
        <h1 className="navbar-brand">Contacx</h1>
      </div>
      {/* col2 Serch bar*/}
      <div className="bg-warning rounded-3 border-3 text-center col-sm-12 mt-1 col-lg-4 col-md-4">
        <h1 className="brand">Update Contact</h1>
      </div>

      {/* col3 */}
      <div className="bg-light text-center mt-1 col-sm-12 col-lg-4 col-md-4">
        <Link to={`/`} className="btn btn-dark">
          Go Back
        </Link>
      </div>
    </div>
  );
}

export default EditContactNavbar;
