import React from "react";
import "./NavBarr.css";
import { Navbar, Nav, Container } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import { FaLinkedin } from "react-icons/fa";
import { signOut, getAuth } from 'firebase/auth';

const NavBarr = () => {
  const navigate = useNavigate();
  const logginuser = JSON.parse(localStorage.getItem("loggInRecruiter"));

  const handleLogout = async () => {
    const auth = getAuth();
    try {
      await signOut(auth);
      localStorage.removeItem("loggInRecruiter");
      alert("Logged out successfully");
      navigate('/login');
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div>
      <Navbar expand="lg" className="bg-body-tertiary">
        <Container fluid>
          <Navbar.Brand href="#">
            <h1>
              LinkedIn <FaLinkedin />
            </h1>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav className="ms-auto my-2 my-lg-0" navbarScroll>
              {logginuser ? (
                <>
                  <span className="nav-link">Welcome <strong>{logginuser.user.displayName}</strong></span>
                  <button className="btn btn-outline-danger ms-2" onClick={handleLogout}>
                    Logout
                  </button>
                </>
              ) : (
                <>
                  <Link to="/Signup" className="nav-link">Signup</Link>
                  <Link to="/login" className="nav-link">Login</Link>
                </>
              )}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default NavBarr;
