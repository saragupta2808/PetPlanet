import React, { useContext } from "react";
import {
  Link,
  NavLink,
  redirect,
  useNavigate,
  useParams,
} from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import { UserContext } from "../context/user/userContext";
import { auth } from "../firebase";
import { signOut } from "firebase/auth";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import logo from "../assets/logo.png";

export default function AdminHeader() {
  const { user, setUser } = useContext(UserContext);
  React.useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      if (user) {
        setUser(user);
      } else {
        setUser(null);
      }
    });

    return () => {
      unsubscribe();
    };
  });
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = React.useState(false);
  const { adminId } = useParams();
  const activeStyles = {
    color: "#0A2239",
    letterSpacing: "1px",
    textTransform: "uppercase",
    paddingTop: "9px",
    paddingBottom: "9px",
    fontSize: "14px",
    fontWeight: "600",
    lineHeight: "20px",
  };
  const nonactiveStyles = {
    opacity: ".6",
    letterSpacing: "1px",
    textTransform: "uppercase",
    paddingTop: "9px",
    paddingBottom: "9px",
    fontSize: "14px",
    fontWeight: "500",
    lineHeight: "20px",
  };

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleLogOut = async () => {
    try {
      await signOut(auth);
      setUser(null);

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
                margin: "auto",
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
                  to="appointments"
                  style={({ isActive }) =>
                    isActive ? activeStyles : nonactiveStyles
                  }
                >
                  Appointments
                </NavLink>
              </li>

              <li className="nav-item  mx-3 my-2">
                <NavLink
                  to="getapet"
                  style={({ isActive }) =>
                    isActive ? activeStyles : nonactiveStyles
                  }
                >
                  Get a Pet
                </NavLink>
              </li>

              <li className="nav-item  mx-3 my-2">
                {user && (
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
                        style={{ color: "#05527c", cursor: "pointer" }}
                      />
                    </div>
                    {isOpen && (
                      <div
                        className={`dropdown-menu ${isOpen ? "show" : ""}`}
                        aria-labelledby="dropdownMenu"
                      >
                        {/* Dropdown menu items */}

                        <Link
                          className="dropdown-item"
                          to={`profile/${adminId}`}
                        >
                          Profile
                        </Link>

                        <Link className="dropdown-item" onClick={handleLogOut}>
                          Logout
                        </Link>
                      </div>
                    )}
                  </div>
                )}
              </li>
            </ul>
          </div>
        </div>
        <div>
          <ToastContainer />
        </div>
      </nav>
    </header>
  );
}
