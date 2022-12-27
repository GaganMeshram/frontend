import axios from "axios";
import React, { useState, useEffect } from "react";
import { URL } from "../App";
import Navbar from "./Navbar";

function UserList() {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    async function fetchData() {
      const response = await fetch(URL);
      const data = await response.json();
      setData(data);
    }
    fetchData();
  }, []);

  if (data === null) {
    return <p>Loading data...</p>;
  }

  const DeleteUser = (id) => {
    axios.delete("");
  };

  return (
    <div>
      <Navbar></Navbar>
      <table className="table table-striped ">
        <thead className="table-dark">
          <tr>
            <th scope="col">#</th>
            <th scope="col">First</th>
            <th scope="col">Last</th>
            <th scope="col">Age</th>
            <th scope="col">Phone</th>
            <th scope="col">Edit</th>
            <th scope="col">Delete</th>
          </tr>
        </thead>

        <tbody>
          {data.map((item) => (
            <tr key={item._id}>
              <th scope="row">#</th>
              <td>{item.name}</td>
              <td>{item.lastname}</td>
              <td>{item.age}</td>
              <td>{item.phoneNumber}</td>
              <td>Link</td>
              <td>{item.phoneNumber}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default UserList;
