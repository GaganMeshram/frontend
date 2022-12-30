//import './App.css';
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import UserList from "./components/UserList";
import AddUser from "./components/AddUser";
import EditUser from './components/EditUser'

export const URL = process.env.REACT_APP_SERVER_URL;

function App() {
  
  return (
    <div>
      <Routes>
        <Route path="/" element={<UserList />} />
        <Route path="/add-contact" element={<AddUser />} />
        <Route path="/edit-user" element={<EditUser />} />

      </Routes>
    </div>
  );
}

export default App;
