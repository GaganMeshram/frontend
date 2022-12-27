//import './App.css';
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import UserList from "./components/UserList";
import AddUser from "./components/AddUser";

export const URL = process.env.REACT_APP_SERVER_URL;

function App() {
  
  return (
    <div>
      <Routes>
        <Route path="/" element={<UserList />} />
        <Route path="/Add-contact" element={<AddUser />} />
      </Routes>
    </div>
  );
}

export default App;
