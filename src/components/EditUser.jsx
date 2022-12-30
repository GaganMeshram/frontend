import React, { useState, useEffect } from "react";
import { useLocation, Link, useNavigate } from "react-router-dom";
import "../css/App.css";
import axios from "axios";
import { URL } from "../App";
import EditContactNavbar from "./EditContactNavbar";
import Footer from "./Footer";

function AddUser(props) {
  const navigation = useNavigate();
  const location = useLocation();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [data, setData] = useState({
    name: "",
    lastname: "",
    phoneNumber: "",
    age: "",
  });

  useEffect(() => {
    setData(location.state);
  }, []);

  const updateData = (value) => {
    setData({ ...data, ...value });
  };

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

  if (loading) {
    return <p className="text-warning">Please wait...</p>;
  }

  const sendData = (e) => {
    e.preventDefault();
    const updatedData = {
      name: data.name,
      lastname: data.lastname,
      phoneNumber: data.phoneNumber,
      age: data.age,
    };
    axios
      .patch(`${URL}/${data._id}`, updatedData)
      .then(() => {
        setLoading(true);
        navigation('/')
        
        
      })
      .catch((err) => setError(err));
  };

  return (
    <div className="container-fluid">
      {/* navbar */}
     <EditContactNavbar/>


      {/* form */}
      <div className="container my-5">
        <form onSubmit={sendData} className="shadow rounded-3 form p-5 bg-secondary">
          <div className="mb-3">
            <label htmlFor="" className="form-label">
              Name
            </label>
            <input
              value={data.name}
              onChange={(e) => updateData({ name: e.target.value })}
              type="text"
              className="form-control"
            />
          </div>
          <div className="mb-3">
            <label className="form-label">Last Name</label>
            <input
              value={data.lastname}
              onChange={(e) => updateData({ lastname: e.target.value })}
              type="text"
              className="form-control"
            />
          </div>
          <div className="mb-3">
            <label htmlFor="exampleInputPassword1" className="form-label">
              Age
            </label>
            <input
              value={data.age}
              onChange={(e) => updateData({ age: e.target.value })}
              type="age"
              className="form-control"
            />
          </div>
          <div className="mb-3">
            <label htmlFor="exampleInputPassword1" className="form-label">
              Phone Number
            </label>
            <input
              value={data.phoneNumber}
              onChange={(e) => updateData({ phoneNumber: e.target.value })}
              type="phone"
              className="form-control"
            />
          </div>
          <div id="emailHelp" className="form-text text-dark">
            We'll never share your email with anyone else.
          </div>
          <button type="submit" className="btn btn-dark">
            Update
          </button>
        </form>
      </div>
      <Footer></Footer>
      
    </div>
  );
}

export default AddUser;
