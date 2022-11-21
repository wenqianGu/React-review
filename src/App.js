import './App.css';
import AddUser from "./components/Users/AddUser";
import UsersList from "./components/Users/UsersList/UsersList";
import {useState} from "react";

function App() {
    const [users, setUsers] = useState([]);
    return (
        <div>
            <AddUser />
            <UsersList users={users}/>
        </div>
    );
}

export default App;
