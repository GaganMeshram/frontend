import React, { useState, useEffect } from "react";
import { Link, NavLink, redirect } from "react-router-dom";
import "../css/App.css";
import axios from "axios";
function AddUser() {
  const [name, setName] = useState("");
  const [Lname, setLname] = useState("");
  const [age, setAge] = useState();
  const [phone, setPhone] = useState();

  const sendData = (e) => {
    e.preventDefault();

    axios
      .post("http://localhost:8088/users", {
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
        redirect("/");
        alert("User created");
      })
      .catch((error) => console.log(error));
  };

  return (
    <div>
      {/* navbar */}
      <div className="row addnav mx-2 bg-light">
        <div className="col-3">
          <h1 className="">Contax</h1>
        </div>
        <div className="col d-flex justify-content-between bg-dark text-white">
          <div className="">
            <h1>Create Contact</h1>
          </div>

          <div className="mt-2">
            <Link to={"/"} className="btn btn-primary">
              Go back
            </Link>
          </div>
        </div>
      </div>
      {/* form */}
      <div className="container my-5">
        <form onSubmit={sendData} className="shadow form p-5 bg-info">
          <div className="mb-3">
            <label htmlFor="" className="form-label">
              Name
            </label>
            <input
              onChange={(e) => {
                setName(e.target.value);
                console.log(name);
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
                console.log(Lname);
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
                console.log(age);
              }}
              value={age}
              type="number"
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
                console.log(phone);
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
    </div>
  );
}

export default AddUser;
