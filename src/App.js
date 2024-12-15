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
            <nav className="navbar navbar-expand-sm bg-light navbar-light justify-content-center">
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
                        <li className="nav-item">
                            <Link className="nav-link" to="/basic1">Basic1</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/basic2">Basic2</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/CRUD">CRUD</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/taskManager">task Manager</Link>
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
            </Routes>
        </Router>
    );
}

export default App;