import React, { useContext } from "react";
import "../App.css";
import { Link, NavLink, redirect, useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import { auth, provider } from "../firebase";
import { getAdditionalUserInfo, signInWithPopup, signOut } from "firebase/auth";
import { registerUser } from "../api";
import { UserContext } from "../context/user/userContext";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import logo from "../assets/logo.png";

export default function Header() {
  const { user, setUser } = useContext(UserContext);
  const [isAdmin, setIsAdmin] = React.useState(false);

  React.useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      if (user) {
        setUser(user);
        user.getIdTokenResult().then((idTokenResult) => {
          setIsAdmin(idTokenResult.claims.admin);
        });
      } else {
        setUser(null);
      }
    });

    return () => {
      unsubscribe();
    };
  }, []);
  let navigate = useNavigate();
  const activeStyles = {
    color: "#0A2239",
    letterSpacing: "1px",
    textTransform: "uppercase",
    paddingTop: "9px",
    paddingBottom: "9px",
    fontSize: "14px",
    fontWeight: "700",
    lineHeight: "20px",
  };
  const nonactiveStyles = {
    opacity: ".6",
    letterSpacing: "1px",
    textTransform: "uppercase",
    paddingTop: "9px",
    paddingBottom: "9px",
    fontSize: "14px",
    fontWeight: "600",
    lineHeight: "20px",
  };
  const [isOpen, setIsOpen] = React.useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleSignIn = async () => {
    try {
      const data = await signInWithPopup(auth, provider);
      // console.log(data);
      setUser(data.user);

      const isNewUser = getAdditionalUserInfo(data).isNewUser;
      data.user.getIdTokenResult().then((idTokenResult) => {
        // console.log('checking for admin')
        setIsAdmin(idTokenResult.claims.admin);
      });
      if (isNewUser) {
        const response = await registerUser({
          userId: data.user.uid,
          name: data.user.displayName,
          email: data.user.email,
          profilePhoto: data.user.photoURL,
        });

        if (response.status != 201) {
          throw new Error();
        }

        navigate(`profile/${data.user.uid}`);
      }

      toast.success(`Welcome, ${data.user.displayName}!`, {
        position: "top-right",
        autoClose: 1000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
      });
      navigate('/')
    } catch (error) {
      console.log(error);
      toast.error("Something went wrong, please try again later!", {
        position: "top-right",
        autoClose: 1000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
      });
    }
  };
  const handleLogOut = async () => {
    try {
      await signOut(auth);
      setUser(null);
      setIsAdmin(false);
      toast.success("Logged out successfully!", {
        position: "top-right",
        autoClose: 1000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
      });
      navigate("/");
    } catch (error) {
      toast.error("Something went wrong, please try again later!", {
        position: "top-right",
        autoClose: 1000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
      });
    }
  };
  return (
    <header>
      <nav className="navbar navbar-expand-lg ">
        <div className="container-fluid ">
          <>
            <img
              src={logo}
              alt="logo"
              style={{
                height: "75px",
                width: "90px",
                border: "2px solid #3b7db6",
                margin: "auto",
              }}
            />
            <NavLink
              to="/"
              style={{
                activeStyles,
                padding: "1rem",
                fontWeight: "600",
                fontSize: "20px",
              }}
            >
              DR GUPTA'S PET CLINIC
            </NavLink>
          </>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div
            className="collapse navbar-collapse justify-content-end"
            id="navbarSupportedContent"
          >
            <ul className="navbar-nav  ml-auto">
              <li className="nav-item mx-3 my-2">
                <NavLink
                  to="appointments/bookappointment"
                  style={({ isActive }) =>
                    isActive ? activeStyles : nonactiveStyles
                  }
                >
                  Book an Appointment
                </NavLink>
              </li>

              <li className="nav-item mx-3 my-2 ">
                <NavLink
                  to="services"
                  style={({ isActive }) =>
                    isActive ? activeStyles : nonactiveStyles
                  }
                >
                  Services
                </NavLink>
              </li>
              <li className="nav-item  mx-3 my-2">
                <NavLink
                  to="buyapet"
                  style={({ isActive }) =>
                    isActive ? activeStyles : nonactiveStyles
                  }
                >
                  Get a Pet
                </NavLink>
              </li>
              <li className="nav-item  mx-3 my-2">
                <NavLink
                  to="contact"
                  style={({ isActive }) =>
                    isActive ? activeStyles : nonactiveStyles
                  }
                >
                  Contact Us
                </NavLink>
              </li>

              <li className="nav-item  mx-3 my-2">
                {user ? (
                  <div className="dropdown">
                    <div
                      className="dropdown-toggle"
                      id="dropdownMenu"
                      onClick={toggleDropdown}
                      aria-haspopup="true"
                      aria-expanded={isOpen ? "true" : "false"}
                    >
                      <FontAwesomeIcon
                        icon={faUser}
                        size="xl"
                        style={{ color: "#003263", cursor: "pointer" }}
                      />
                    </div>

                    {isOpen && (
                      <div
                        className={`dropdown-menu ${isOpen ? "show" : ""}`}
                        aria-labelledby="dropdownMenu"
                      >
                        {/*   Dropdown menu items */}

                        <Link
                          className="dropdown-item"
                          to={`profile/${user.uid}`}
                        >
                          Profile
                        </Link>

                        <Link className="dropdown-item" onClick={handleLogOut}>
                          Logout
                        </Link>
                        {isAdmin && (
                          <Link
                            className="dropdown-item"
                            to={`admin/${user.uid}/appointments`}
                          >
                            Admin Portal
                          </Link>
                        )}
                      </div>
                    )}
                  </div>
                ) : (
                  <button
                    className="btn home-button"
                    style={{ padding: " 0.2rem 0.6rem", width: "10rem" }}
                    onClick={handleSignIn}
                  >
                    Login/Register
                  </button>
                )}
              </li>
            </ul>
          </div>
        </div>
      </nav>

      <div>
        <ToastContainer />
      </div>
    </header>
  );
}
