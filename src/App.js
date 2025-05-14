import React from "react";
import {
    BrowserRouter as Router,
    Routes,
    Route,
    Link,
    useNavigate,
    Outlet,
} from "react-router-dom";
import Basic1 from "./components/Basic1";
import Basic2 from "./components/Basic2";
import CRUD from "./components/crud/CRUD";
import TaskManager from "./components/taskManager/TaskManager";
import TicTacToe from "./components/ticTacToe/TicTacToe";
import FunctionalComponentsCRUD from "./components/FunctionalComponentsCRUD";
import ClassComponentsCRUD from "./components/ClassComponentsCRUD";
import AppWithRedux from "./components/AppWithRedux";
import AppWithContext from "./components/AppWithContext";
import bootstrap from 'bootstrap';

// Home Page Component
const Home = () => {
    const navigate = useNavigate();
    return (
        <div className="container-fluid mt-3">
            <h2>Home Page</h2>
            <button type="button" className="btn btn-light" onClick={() =>
                 navigate("/contact")}>Go to Contact</button>
        </div>
    );
};

// About Page Component 
const About = () => (
    <div className="container-fluid mt-3">
        <h2>About Page</h2>
        <nav>
            <ul>
                <li>
                    <Link to="team">Our Team</Link>
                </li>
                <li>
                    <Link to="company">Our Company</Link>
                </li>
            </ul>
        </nav>
        <Outlet />
    </div>
);

// Components for other pages
const Contact = () => <div className="container-fluid mt-3"><h2>Contact Page</h2></div>;
const Team = () => <div className="container-fluid mt-3"><h2>Team Page</h2></div>;
const Company = () => <div className="container-fluid mt-3"><h2>Company Page</h2></div>;

function App() {
    return (
        <Router className="justify-content-center">
            <nav className="navbar navbar-expand-lg bg-light navbar-light justify-content-center">
                <div className="container-fluid justify-content-center">
                    <ul  className="navbar-nav">
                        <li className="nav-item">
                            <Link className="nav-link" to="/">Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/about">About</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/contact">Contact</Link>
                        </li>
                        {/* <li className="nav-item">
                            <Link className="nav-link" to="/basic1">Basic1</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/basic2">Basic2</Link>
                        </li> */}
                        <li className="nav-item">
                            <Link className="nav-link" to="/CRUD">CRUD</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/taskManager">task Manager</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/ticTacToe">Tic Tac Toe</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/functionalComponentsCRUD"> functionalComponentsCRUD </Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/classComponentsCRUD"> classComponentsCRUD </Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/AppWithRedux"> AppWithRedux </Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/AppWithContext"> AppWithContext </Link>
                        </li>
                    </ul>
                </div>
            </nav>
            {/*Implementing Routes for respective Path */}
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />}>
                    <Route path="team" element={<Team />} />
                    <Route path="company" element={<Company />} />
                </Route>
                <Route path="/contact" element={<Contact />} />
                <Route path="/basic1" element={<Basic1 />} />
                <Route path="/basic2" element={<Basic2 />} />
                <Route path="/CRUD" element={<CRUD />} />
                <Route path="/taskManager" element={<TaskManager />} />
                <Route path="/ticTacToe" element={<TicTacToe />} />
                <Route path="/functionalComponentsCRUD" element={<FunctionalComponentsCRUD />} />
                <Route path="/classComponentsCRUD" element={<ClassComponentsCRUD />} />
                <Route path="/AppWithRedux" element={<AppWithRedux />} />
                <Route path="/AppWithContext" element={<AppWithContext />} />
            </Routes>
        </Router>
    );
}

export default App;