import React from "react";
import icon5 from "../assets/icon5.png";
import icon6 from "../assets/icon6.png";
import icon7 from "../assets/icon7.png";
import icon8 from "../assets/icon8.png";
import icon9 from "../assets/icon9.png";
import icon10 from "../assets/icon10.png";
import icon11 from "../assets/icon11.png";
import tick from "../assets/tick.png";
import { Link } from "react-router-dom";
export default function Services() {
  return (
    <>
      <div>
        <div
          id="carouselExampleAutoplaying"
          className="carousel slide"
          data-bs-ride="carousel"
        >
          <div className="carousel-inner">
            <div className="carousel-item active" data-bs-interval="2000">
              <img
                src="https://images.unsplash.com/photo-1611173622933-91942d394b04?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2074&q=80"
                className="d-block w-100"
                alt="..."
              />
            </div>
            <div className="carousel-item" data-bs-interval="2000">
              <img
                src="https://images.unsplash.com/photo-1597603413826-cd1c06b05222?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2074&q=80"
                className="d-block w-100"
                alt="..."
              />
            </div>
            <div className="carousel-item" data-bs-interval="2000">
              <img
                src="https://images.unsplash.com/photo-1625321171045-1fea4ac688e9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2074&q=80"
                className="d-block w-100"
                alt="..."
              />
            </div>
          </div>
          <button
            className="carousel-control-prev"
            type="button"
            data-bs-target="#carouselExampleAutoplaying"
            data-bs-slide="prev"
          >
            <span
              className="carousel-control-prev-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button
            className="carousel-control-next"
            type="button"
            data-bs-target="#carouselExampleAutoplaying"
            data-bs-slide="next"
          >
            <span
              className="carousel-control-next-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      </div>

      <div className="home-container cc-heading-wrap">
        <div
          className="heading-jumbo section"
          style={{ color: "#0a2239", fontWeight: "500" }}
        >
          Give your pet the care they deserve
        </div>
        <div className="motto-wrap">
          <div className="heading-jumbo-small cc-bigger-light">
            Treat your furry friend to a luxurious grooming experience as our
            team of skilled groomers offers a range of services tailored to meet
            your pet's unique needs, ensuring your pet looks and feels their
            best.
          </div>
        </div>
      </div>

      <div className="grooming-container">
        <div className="grooming-card">
          <div className="price-card">
            <div className="price-card-content">
              <div className="package-card-heading">
                <div className="service-name">
                  <div>
                    <img src={icon9} alt="dog-spa" />
                  </div>
                  <p>Spa Bath</p>
                </div>

                <div className="service-price">
                  <s className="discount-price">₹999</s>
                  <p className="package-price">₹599</p>
                </div>
              </div>

              <hr className="line" />

              <ul className="services-list">
                <li className="list-item">
                  <div className="tick">
                    <img src={tick} />
                  </div>
                  <div className="content">
                    <p>Bath With Shampoo & Conditioner</p>
                  </div>
                </li>
                <li className="list-item">
                  <div className="tick">
                    <img src={tick} />
                  </div>
                  <div className="content">
                    <p>Blow Dry</p>
                  </div>
                </li>
                <li className="list-item">
                  <div className="tick">
                    <img src={tick} />
                  </div>
                  <div className="content">
                    <p>Nail Clipping</p>
                  </div>
                </li>
                <li className="list-item">
                  <div className="tick">
                    <img src={tick} />
                  </div>
                  <div className="content">
                    <p>Ear Cleaning</p>
                  </div>
                </li>
                <li className="list-item">
                  <div className="tick">
                    <img src={tick} />
                  </div>
                  <div className="content">
                    <p>Eyes Cleaning</p>
                  </div>
                </li>
                <li className="list-item">
                  <div className="tick">
                    <img src={tick} />
                  </div>
                  <div className="content">
                    <p>Paw Massage</p>
                  </div>
                </li>
                <li className="list-item">
                  <div className="tick">
                    <img src={tick} />
                  </div>
                  <div className="content">
                    <p>Combing/Brushing</p>
                  </div>
                </li>
              </ul>
              <div className="package-card-heading">
                <p className="extra-charges">
                  ₹200 extra charges for bigger dog
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="grooming-card">
          <div className="price-card">
            <div className="price-card-content">
              <div className="package-card-heading">
                <div className="service-name">
                  <div>
                    <img src={icon10} alt="dog-spa" />
                  </div>
                  <p>Bath + Basic Grooming</p>
                </div>

                <div className="service-price">
                  <s className="discount-price">₹1498</s>
                  <p className="package-price">₹999</p>
                </div>
              </div>

              <hr className="line" />

              <ul className="services-list">
                <li className="list-item">
                  <div className="tick">
                    <img src={tick} />
                  </div>
                  <div className="content">
                    <p>Bath With Shampoo & Conditioner</p>
                  </div>
                </li>
                <li className="list-item">
                  <div className="tick">
                    <img src={tick} />
                  </div>
                  <div className="content">
                    <p>Blow Dry</p>
                  </div>
                </li>
                <li className="list-item">
                  <div className="tick">
                    <img src={tick} />
                  </div>
                  <div className="content">
                    <p>Face Hair Cutting</p>
                  </div>
                </li>
                <li className="list-item">
                  <div className="tick">
                    <img src={tick} />
                  </div>
                  <div className="content">
                    <p>Sanitary Trim</p>
                  </div>
                </li>
                <li className="list-item">
                  <div className="tick">
                    <img src={tick} />
                  </div>
                  <div className="content">
                    <p>Nail Clipping</p>
                  </div>
                </li>
                <li className="list-item">
                  <div className="tick">
                    <img src={tick} />
                  </div>
                  <div className="content">
                    <p>Ear Cleaning</p>
                  </div>
                </li>
                <li className="list-item">
                  <div className="tick">
                    <img src={tick} />
                  </div>
                  <div className="content">
                    <p>Eye Cleaning</p>
                  </div>
                </li>
                <li className="list-item">
                  <div className="tick">
                    <img src={tick} />
                  </div>
                  <div className="content">
                    <p>Teeth Cleaning/ Mouth Spray</p>
                  </div>
                </li>
                <li className="list-item">
                  <div className="tick">
                    <img src={tick} />
                  </div>
                  <div className="content">
                    <p>Paw Massage</p>
                  </div>
                </li>
                <li className="list-item">
                  <div className="tick">
                    <img src={tick} />
                  </div>
                  <div className="content">
                    <p>Combing/Brushing</p>
                  </div>
                </li>
              </ul>
              <div className="package-card-heading">
                <p className="extra-charges">
                  ₹200 extra charges for bigger dog
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="grooming-card">
          <div className="price-card">
            <div className="price-card-content">
              <div className="package-card-heading">
                <div className="service-name">
                  <div>
                    <img src={icon11} alt="dog-spa" />
                  </div>
                  <p>Full Service</p>
                </div>

                <div className="service-price">
                  <s className="discount-price">₹2398</s>
                  <p className="package-price">₹1499</p>
                </div>
              </div>

              <hr className="line" />

              <ul className="services-list">
                <li className="list-item">
                  <div className="tick">
                    <img src={tick} />
                  </div>
                  <div className="content">
                    <p>Bath With Shampoo & Conditioner</p>
                  </div>
                </li>
                <li className="list-item">
                  <div className="tick">
                    <img src={tick} />
                  </div>
                  <div className="content">
                    <p>Blow Dry</p>
                  </div>
                </li>
                <li className="list-item">
                  <div className="tick">
                    <img src={tick} />
                  </div>
                  <div className="content">
                    <p>Full Body Hair Trimming/Zero Haircut</p>
                  </div>
                </li>
                <li className="list-item">
                  <div className="tick">
                    <img src={tick} />
                  </div>
                  <div className="content">
                    <p>Nail Clipping</p>
                  </div>
                </li>
                <li className="list-item">
                  <div className="tick">
                    <img src={tick} />
                  </div>
                  <div className="content">
                    <p>Ear Cleaning</p>
                  </div>
                </li>
                <li className="list-item">
                  <div className="tick">
                    <img src={tick} />
                  </div>
                  <div className="content">
                    <p>Eyes Cleaning</p>
                  </div>
                </li>
                <li className="list-item">
                  <div className="tick">
                    <img src={tick} />
                  </div>
                  <div className="content">
                    <p>Teeth Cleaning/ Mouth Spray</p>
                  </div>
                </li>
                <li className="list-item">
                  <div className="tick">
                    <img src={tick} />
                  </div>
                  <div className="content">
                    <p>Sanitary Trim</p>
                  </div>
                </li>
                <li className="list-item">
                  <div className="tick">
                    <img src={tick} />
                  </div>
                  <div className="content">
                    <p>Body Massage</p>
                  </div>
                </li>
                <li className="list-item">
                  <div className="tick">
                    <img src={tick} />
                  </div>
                  <div className="content">
                    <p>Paw Massage</p>
                  </div>
                </li>
                <li className="list-item">
                  <div className="tick">
                    <img src={tick} />
                  </div>
                  <div className="content">
                    <p>Combing/Brushing</p>
                  </div>
                </li>
              </ul>
              <div className="package-card-heading">
                <p className="extra-charges">
                  ₹300 extra charges for bigger dog
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="home-container" style={{ marginTop: "10vh" }}>
        <div className="motto-wrap">
          <h1 style={{ fontWeight: "500" }}>
            Home Grooming Services also available!
          </h1>
        </div>
      </div>

      <div className="grooming-grid-container ">
        <div className="img-container">
          <img
            src="https://plus.unsplash.com/premium_photo-1675881733580-5d9ef42f7b03?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
            alt="dog-icon"
          />
        </div>
        <div>
          <div className="service-row">
            <div className="svg-container">
              <img src={icon5} alt="Icon" />
            </div>
            <div className="description">
              <label className="title">Schedule and Book</label>
              <div className="content text-muted">
                Give us a call on 983700449 or book your grooming appointment
                online
              </div>
            </div>
          </div>
          <div className="service-row">
            <div className="svg-container">
              <img src={icon6} alt="Icon" />
            </div>
            <div className="description">
              <label className="title">Pet Groomer brings the equipment</label>
              <div className="content text-muted">
                Our professional pet groomer will arrive at your doorstep
              </div>
            </div>
          </div>
          <div className="service-row">
            <div className="svg-container">
              <img src={icon7} alt="Icon" />
            </div>
            <div className="description">
              <label className="title">No travel stress for your pets</label>
              <div className="content text-muted">
                Entire grooming service happens at your home
              </div>
            </div>
          </div>
          <div className="service-row">
            <div className="svg-container">
              <img src={icon8} alt="Icon" />
            </div>
            <div className="description">
              <label className="title">All Done</label>
              <div className="content text-muted">
                Your furry friend is all set!
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="section cc-cta">
        <div className="home-container">
          <div className="cta-wrap">
            <div>
              <div className="cta-text">
                <div className="heading-jumbo-small">
                  Give Us a Call
                  <br />
                </div>
                <div className="paragraph-bigger cc-bigger-light">
                  Whether you need veterinary services, pet grooming, or want to
                  explore our range of pet supplies at our pet shop, we are here
                  to assist you.
                  <br />
                </div>
              </div>
              <Link to="/contact" className="home-button w-inline-block">
                <div>Contact Us</div>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
