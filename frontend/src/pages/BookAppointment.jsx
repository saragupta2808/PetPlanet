import React from "react";
import { useActionData, Form, redirect, Link } from "react-router-dom";
import { bookAppointment } from "../api";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export async function action({ request }) {

  const bookingData = await request.formData();
  const ownerName = bookingData.get("ownerName");
  const petName = bookingData.get("petName");
  const contact = bookingData.get("contact");
  const address = bookingData.get("address");
  const homevisit = bookingData.get("homevisit");
  const service = bookingData.get("service");
  const petCategory = bookingData.get("petCategory");
  const petAge = bookingData.get("petAge");
  const petAgeQuant = bookingData.get("petAgeQuant");
  
  try {
    if(!ownerName || !contact || !address || !petCategory){
      throw new Error("Please fill all the required fields");
    }
    const response = await bookAppointment({
      ownerName: ownerName,
      petName: petName,
      contactNumber: contact,
      address: address,
      needHomeVisit: homevisit == "needHomeVisit" ? true : false,
      service: service,
      petCategory: petCategory,
      petAge: petAge,
      petAgeQuant: petAgeQuant,
    });

    // console.log(response);
    if (response.status != 201) {
      const msg = response.data.msg;
      if (msg.includes("validation")) {
        throw new Error("Invalid details");
      }
      return null;
    } else {
      toast.success("Appointment booked successfully", {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
      });
      return "form submitted";
    }
  } catch (error) {
    toast.error(error.message, {
      position: "top-right",
      autoClose: 2000,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "colored",
    });
    return null;
  }
}
export default function BookAppointment() {
  const random = useActionData();
  // console.log(random)
  React.useEffect(() => {
    const scrollToTop = () => {
      window.scrollTo({ top: 0, behavior: "smooth" });
    };
    scrollToTop();
  }, []);
  if (random == "form submitted") {
    const form = document.getElementById("appointmentForm");
    form.reset();
  }
  const [checked, setIsChecked] = React.useState(false);
  function onCheckHandler(event) {
    const { checked } = event.target;
    setIsChecked(checked);
  }

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
                src="https://images.unsplash.com/photo-1518914781460-a3ada465edec?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2074&q=80"
                className="d-block w-100"
                alt="..."
              />
            </div>
            <div className="carousel-item" data-bs-interval="2000">
              <img
                src="https://images.unsplash.com/photo-1630359486912-4b085e38f1e7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2069&q=80"
                className="d-block w-100"
                alt="..."
              />
            </div>
            <div className="carousel-item" data-bs-interval="2000">
              <img
                src="https://images.unsplash.com/photo-1494256997604-768d1f608cac?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1229&q=80"
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
          Book your appointment today & get free online consultation
        </div>

        <div className="paragraph-bigger cc-bigger-light">
          Take the first step towards ensuring the health and happiness of your
          pet by booking an appointment today. We look forward to serving you
          and your beloved companion.
        </div>
      </div>

      <div className="home-container">
        <div className="appointment-form-wrap">
          <div className="appointment-form">
            <Form method="post" id="appointmentForm">
              <div className="form-group">
                <label htmlFor="ownerName" className="required-field">
                  Owner Name
                </label>
                <input
                  type="text"
                  className="form-control form-field"
                  placeholder="Enter full name"
                  id="ownerName"
                  name="ownerName"
                ></input>
              </div>
              <br />
              <div className="form-group">
                <label htmlFor="contact" className="required-field">
                  Contact Number
                </label>
                <input
                  type="text"
                  className="form-control form-field"
                  placeholder="Enter 10 digit phone number"
                  id="contact"
                  name="contact"
                ></input>
              </div>
              <br />
              <div className="form-group">
                <label htmlFor="address" className="required-field">
                  Address
                </label>
                <input
                  type="text"
                  className="form-control form-field"
                  placeholder="Enter house number and locality in Dehradun"
                  id="address"
                  name="address"
                ></input>
              </div>
              <br />
              <div className="form-group">
                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    value="needHomeVisit"
                    id="homevisit"
                    name="homevisit"
                    checked={checked}
                    onChange={onCheckHandler}
                  />
                  <label className="form-check-label" htmlFor="homevisit">
                    I want home visit
                  </label>
                </div>
              </div>
              <br />
              <div className="form-group">
                <label htmlFor="service" className="required-field">
                  Service required
                </label>
                <select
                  className="form-select form-field"
                  name="service"
                  id="service"
                >
                  <option defaultValue="Treatment">Treatment</option>
                  <option value="Vaccination">Vaccination</option>
                  <option value="Grooming">Grooming</option>
                  <option value="Other">Other</option>
                </select>
              </div>
              <br />
              <div className="form-group">
                <label htmlFor="petCategory" className="required-field">
                  Pet Category
                </label>
                <input
                  type="text"
                  className="form-control form-field"
                  placeholder="Which pet do you have? eg dog, cat, guinea pig"
                  id="petCategory"
                  name="petCategory"
                ></input>
              </div>
              <br />
              <div className="form-group">
                <label htmlFor="petCategory" >
                  Pet Age
                </label>
                <div className="profile-wrap">
                  <input
                    type="number"
                    className="form-control form-field"
                    placeholder="Pet age"
                    name="petAge"
                  ></input>
                  <select
                    className="form-select form-field"
                    name="petAgeQuant"
                    id="petAgeQuant"
                  >
                    <option defaultValue="Years">Years</option>
                    <option value="Months">Months</option>
                    <option value="Days">Days</option>
                  </select>
                </div>
              </div>

              <br />
              <div className="form-group">
                <label htmlFor="petName">Pet Name</label>
                <input
                  type="text"
                  className="form-control form-field"
                  placeholder="Enter your pet's name"
                  id="petName"
                  name="petName"
                ></input>
              </div>
              <br />
              <div className="text-center">
                <button type="submit" className="btn home-button ">
                  Submit
                </button>
              </div>
            </Form>
          </div>
        </div>
      </div>

      <div>
        <ToastContainer />
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
