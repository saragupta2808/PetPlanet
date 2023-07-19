import React from "react";
import {
  BsFacebook,
  BsLinkedin,
  BsTwitter,
  BsInstagram,
  BsFillEnvelopeFill,
} from "react-icons/bs";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <div
      className="container-fluid pb-0 mb-0 justify-content-center text-light "
      id="footer"
    >
      <footer>
        <div className="row my-5 justify-content-center py-5">
          <div className="col-11">
            <div className="row ">
              <div className="col-xl-8 col-md-4 col-sm-4 col-12 my-auto mx-auto a">
                <h3 className="mb-md-0 mb-5">
                  Dr Gupta's Pet Planet & Surgical Center
                </h3>
              </div>
              <div className="col-xl-2 col-md-4 col-sm-4 col-12">
                <h6 className="mb-3 mb-lg-4">
                  <b>MENU</b>
                </h6>
                <ul className="list-unstyled">
                  <li>
                    <Link
                      to="/"
                      style={{ textDecoration: "none", color: "white" }}
                    >
                      Home
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/buyapet"
                      style={{ textDecoration: "none", color: "white" }}
                    >
                      Pets
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/contact"
                      style={{ textDecoration: "none", color: "white" }}
                    >
                      Contact
                    </Link>
                  </li>
                </ul>
              </div>
              <div className="col-xl-2 col-md-4 col-sm-4 col-12">
                <h6 className="mb-3 mb-lg-4 mt-sm-0 mt-5">
                  <b>ADDRESS</b>
                </h6>
                <p className="mb-1">
                  6, Cross Rd, near SBI main branch, Race Course, Dehradun,
                </p>
                <p> Uttarakhand 248001</p>
              </div>
            </div>
            <div className="row ">
              <div className="col-xl-8 col-md-4 col-sm-4 col-auto  my-md-0 mt-5 order-sm-1 order-3 align-self-end">
                <p className="social text-muted mb-0 pb-0">
                  <span className="mx-2">
                    <BsFacebook
                      style={{ color: "#627482", cursor: "pointer" }}
                    />
                  </span>
                  <span className="mx-2">
                    <BsLinkedin
                      style={{ color: "#627482", cursor: "pointer" }}
                    />
                  </span>
                  <span className="mx-2">
                    <BsTwitter
                      style={{ color: "#627482", cursor: "pointer" }}
                    />
                  </span>
                  <span className="mx-2">
                    <BsInstagram
                      style={{ color: "#627482", cursor: "pointer" }}
                    />
                  </span>
                </p>
                <small className="rights">
                  <span>&#174;</span> PetPlanet All Rights Reserved.
                </small>
              </div>

              <div className="col-xl-2 col-md-4 col-sm-4 col-auto order-2 align-self-end mt-3  ">
                <h6>
                  <b>DR SANJEEV KUMAR GUPTA</b>
                </h6>
                <small>
                  <span>
                    <BsFillEnvelopeFill
                      style={{ color: "#627482", cursor: "pointer" }}
                    />
                  </span>
                  skguptadr@gmail.com
                </small>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
