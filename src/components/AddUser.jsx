import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import "../css/App.css";
import axios from "axios";
import { URL } from "../App";
import AddContactNavbar from "./AddContactNavbar";
import Footer from "./Footer";

function AddUser() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [Lname, setLname] = useState("");
  const [age, setAge] = useState(null);
  const [phone, setPhone] = useState(null);

  const sendData = (e) => {
    setLoading(true);
    e.preventDefault();

    axios
      .post(URL, {
        name: name,
        lastname: Lname,
        phoneNumber: phone,
        age: age,
      })
      .then(() => {
        setName("");
        setLname("");
        setAge("");
        setPhone("");
        setLoading(false);
        navigate("/");
      })
      .catch((error) => setError(error));
  };

  if (loading) {
    return <p>Please wait...</p>;
  }

  if (error) {
    return (
      <div className="container p-3 d-flex justify-content-between bg-dark">
        <p className="text-light">{error.message}</p>
        <Link to="/" className="btn btn-light">
          Go Back
        </Link>
      </div>
    );
  }

  return (
    
    <div className="container-fluid">
      {/* Navbar */}
      <AddContactNavbar></AddContactNavbar>
      
      {/* form */}
      <div className="container my-5">
        <form onSubmit={sendData} className="shadow rounded-3 form p-5 bg-info">
          <div className="mb-3">
            <label htmlFor="" className="form-label">
              Name
            </label>
            <input
              onChange={(e) => {
                setName(e.target.value);
              }}
              value={name}
              type="text"
              className="form-control"
            />
          </div>
          <div className="mb-3">
            <label className="form-label">Last Name</label>
            <input
              onChange={(e) => {
                setLname(e.target.value);
              }}
              value={Lname}
              type="text"
              className="form-control"
            />
          </div>
          <div className="mb-3">
            <label htmlFor="exampleInputPassword1" className="form-label">
              Age
            </label>
            <input
              onChange={(e) => {
                setAge(e.target.value);
              }}
              value={age}
              type="age"
              className="form-control"
            />
          </div>
          <div className="mb-3">
            <label htmlFor="exampleInputPassword1" className="form-label">
              Phone Number
            </label>
            <input
              onChange={(e) => {
                setPhone(e.target.value);
              }}
              value={phone}
              type="phone"
              className="form-control"
            />
          </div>
          <div id="emailHelp" className="form-text">
            We'll never share your email with anyone else.
          </div>
          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </form>
      </div>

      {/* Footer */}
      <Footer></Footer>
    </div>
  );
}

export default AddUser;
