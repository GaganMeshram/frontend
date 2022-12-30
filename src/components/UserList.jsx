import axios from "axios";
import React, { useState, useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";
import { URL } from "../App";
import Navbar from "./Navbar";
import UserListFooter from "./UserListFooter";
import "../css/App.css";

function UserList() {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get(URL)
      .then((res) => {
        setLoading(true);
        setData(res.data);
        setLoading(false);
      })
      .catch((error) => {
        setError(error);
      });
  }, [data]);

  /* Loading */

  if (loading) {
    return <p>Loading data...</p>;
  }

  /* Data Loading */

  if (data === null) {
    return <p className="text-warning">Loading...</p>;
  }
  /* Error */
  if (error) {
    return (
      <p className="text-danger">
        {error.code} {error.message}
      </p>
    );
  }
  /* Handle Delete */
  const handleDelete = (id) => {
    axios.delete(`${URL}/${id}`).catch((err) => {
      setError(err);
      return;
    });
  };
  /* Redirect to */
  const redirectTo = (id) => {
    navigate("/edit-user", {
      state: id,
    });
  };

  return (
    <div className="">
      {/* Navbar */}
      <Navbar></Navbar>

      {/* Table */}
      <div className="mt-3">
        <table className="table table-striped">
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
                <td className="text-capitalize">{item.name}</td>
                <td className="text-capitalize">{item.lastname}</td>
                <td>{item.age}</td>
                <td>{item.phoneNumber}</td>
                <td>
                  <button
                    onClick={(id) => redirectTo(item)}
                    className="btn btn-warning"
                  >
                    Edit
                  </button>
                </td>
                <td>
                  <button
                    onClick={(id) => handleDelete(item._id)}
                    className="btn btn-danger"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        
      </div>
      {/* Footer */}
      <UserListFooter></UserListFooter>
      
    </div>
    
  );
}

export default UserList;
