import React from "react";
import { Link } from "react-router-dom";
import Lottie from "lottie-react";
import petAnimation from "../assets/petAnimation.json";


export default function Home() {
  return (
    <div>
      <div
        id="carouselExampleAutoplaying"
        className="carousel slide"
        data-bs-ride="carousel"
      >
        <div className="carousel-inner">
          <div className="carousel-item active" data-bs-interval="2000">
            <img
              src="https://images.unsplash.com/photo-1608096299230-81c7b43d5dfc?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2074&q=80"
              className="d-block w-100"
              alt="..."
            />
          </div>
          <div className="carousel-item" data-bs-interval="2000">
            <img
              src="https://images.unsplash.com/photo-1503844281047-cf42eade5ca5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fGNhdHN8ZW58MHwwfDB8fHwy&auto=format&fit=crop&w=2074&q=80"
              className="d-block w-100"
              alt="..."
            />
          </div>
          <div className="carousel-item" data-bs-interval="2000">
            <img
              src="https://images.unsplash.com/photo-1548199973-03cce0bbc87b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2074&q=80"
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

      <div className="home-container cc-heading-wrap">
        <div className=" home-animate">
          <div>
            <Lottie
              animationData={petAnimation}
              loop={true}
              style={{ marginBottom: 0, marginLeft: 0 }}
            />
          </div>
          <div className="section background-logo">
            <div
              className="heading-jumbo "
              style={{ color: "#0a2239", fontWeight: "500" }}
            >
              Dr Gupta's Pet Speciality Clinic & Surgical Center
            </div>
          </div>
        </div>
      </div>

      <div className="home-container">
        <div className="home-content-wrap">
          <div className="w-layout-grid about-grid">
            <div>
              <div className="home-section-wrap">
                <div className="label cc-light">About</div>
                <h2 className="section-heading">Who we are</h2>
                <p className="paragraph-light">
                  Dr Gupta's Pet Planet & Surgical Center is a trusted name in
                  pet care for over 25 years in Dehradun city. Led by Dr.
                  Sanjeev Gupta, our dedicated team is committed to providing
                  exceptional care for your beloved pets.
                </p>
              </div>
          
            </div>
            <img
              src="https://lh3.googleusercontent.com/p/AF1QipMRjY3tHG792rMky4KjLpRjUFokZdHbokwbIaCl=s1360-w1360-h1020"
              style={{
                maxWidth: "100%",
                verticalAlign: "middle",
                display: "block",
                border: "0",
              }}
              alt=""
            />
          </div>

          <div className="w-layout-grid about-grid cc-about-2">
            <div>
              <div className="home-section-wrap">
                <div className="label cc-light">Team</div>
                <h2 className="section-heading">What we do</h2>
                <p className="paragraph-light">
                  At our pet shop, grooming center, and clinic, we offer a wide
                  range of services to meet all your pet's needs. From quality
                  pet supplies to professional grooming and veterinary care, we
                  are dedicated to ensuring the well-being of your furry
                  friends. Visit us today for a comprehensive pet care
                  experience.
                </p>
              </div>
              <Link
                to="/appointments/bookappointment"
                className="home-button w-inline-block"
              >
                <div>Book Appointment</div>
              </Link>
            </div>
            <img
              src="https://lh3.googleusercontent.com/p/AF1QipOa6u6MWCGmLsYX9vM39G5iAXGf7AedKu3okenQ=s1360-w1360-h1020"
              alt=""
              style={{
                maxWidth: "100%",
                verticalAlign: "middle",
                display: "block",
                border: "0",
              }}
            />
          </div>
        </div>

       
      </div>

      <div className="section">
        <div className="container">
          <div className="blog-heading">
            <div className="label cc-light">Reviews</div>
            <h2 className="work-heading">Thank you customers!</h2>
          </div>
          <div className="collection-list-wrapper w-dyn-list">
            <div role="list" className="collection-wrap w-dyn-items">
              <div role="listitem" className="blog-preview-wrap w-dyn-item">
                <p className="paragraph-light">
                  “ Dr Gupta is one of the best doctors in Dehradun and nearby
                  area. The staff is also very professional and hospitable. I
                  will recommend everyone to this clinic.”
                </p>
                <span className="business-article-heading">~Sanjeet Hom</span>
              </div>
              <div role="listitem" className="blog-preview-wrap w-dyn-item">
                <p className="paragraph-light">
                  “ Great doctor and amazing staff. My dog was suffering from
                  parvo virus and his health was in a very bad condition but Dr.
                  Gupta saved his life... all thanks to you sir and your
                  efficient staff members. 🙏❤️ ”
                </p>
                <span className="business-article-heading">~Aastha Tiwari</span>
              </div>
              <div role="listitem" className="blog-preview-wrap w-dyn-item">
                <p className="paragraph-light">
                  “Doctor is very good and experienced, he diagnosed problem in
                  very short time, which other vet could not do since last six
                  months, cured skin problem within one months, thanx to
                  him and Baluni ji for his hard work, great staff, best
                  methods they did to treat my coco, god bless to all of them.”
                </p>
                <span className="business-article-heading">~Ganesh Thakur</span>
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
    </div>
  );
}
