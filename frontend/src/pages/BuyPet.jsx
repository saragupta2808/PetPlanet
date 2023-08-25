import React from "react";
import PetCard from "./PetCard";
import icon4 from "../assets/icon4.png";
import icon3 from "../assets/icon3.png";
import icon2 from "../assets/icon2.png";
import icon1 from "../assets/icon1.png";
import { getAllPets, submitPetQuery } from "../api";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Form, Link, useActionData } from "react-router-dom";

export async function action({ request }) {
  const petQueryData = await request.formData();
  const name = petQueryData.get("name");
  const contact = petQueryData.get("contact");
  const petType = petQueryData.get("petType");
  const petSize = petQueryData.get("petSize");
  const petGender = petQueryData.get("petGender");
  const breed = petQueryData.get("breed");
  const comments = petQueryData.get("comments");
  console.log(name, contact, petType, petSize, petGender, breed, comments);

  try {
    if (!name || !contact || !petType || !petSize || !petGender) {
      throw new Error("Please fill all the required fields");
    }
    const response = await submitPetQuery({
      name: name,
      contactNumber: contact,
      petTypePreferance: petType,
      petSizePreferance: petSize,
      petGenderPreferance: petGender,
      breedPreferance: breed,
      comments: comments,
    });
    // console.log(response);

    if (response.status != 201) {
      const msg = response.data.msg;
      if (msg.includes("validation")) {
        throw new Error("Invalid details");
      } else throw new Error("Some error occurred!");
    } else {
      toast.success("Query submitted successfully", {
        position: "top-right",
        autoClose: 2000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
      });
      return "query submitted";
    }
  } catch (error) {
    // console.log(error);
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
export default function BuyPet() {
  const random = useActionData();
  const [pets, setPets] = React.useState([]);
  React.useEffect(() => {
    const getData = async () => {
      try {
        const response = await getAllPets();
        if (response.status != 200) {
          throw new Error(response.data.msg);
        }
        setPets(response.data.allPets);
      } catch (error) {
        toast.error(error.message, {
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

    getData();
  }, []);
  if (random == "query submitted") {
    const form = document.getElementById("petQueryForm");
    form.reset();
  }

  const petsArray =
    pets.length > 0
      ? pets.map((pet) => {
          return (
            <PetCard
              key={pet._id}
              title={pet.title}
              description={pet.description}
              picture={pet.picture}
              isAdmin={false}
              petId={pet._id}
            />
          );
        })
      : [];
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
                src="https://images.unsplash.com/photo-1601758176175-45914394491c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8ZG9ncyUyMHdpdGglMjAlMjBvd25lcnN8ZW58MHwwfDB8fHwy&auto=format&fit=crop&w=2074&q=80"
                className="d-block w-100"
                alt="..."
              />
            </div>
            <div className="carousel-item" data-bs-interval="2000">
              <img
                src="https://images.unsplash.com/photo-1597662942557-4087865bf476?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2074&q=80"
                className="d-block w-100"
                alt="..."
              />
            </div>
            <div className="carousel-item" data-bs-interval="2000">
              <img
                src="https://images.unsplash.com/photo-1586537333626-238ebc85e19f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2074&q=80"
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
          Find your perfect companion
        </div>
        <div className="motto-wrap">
          <div className="heading-jumbo-small cc-bigger-light">
            Explore our collection of adorable pets available for purchase or
            adoption & contact us to bring home your new furry friend!
          </div>
        </div>
      </div>

      <div className="grid-container home-container">
        <div className="service-row">
          <div className="svg-container">
            <img src={icon1} alt="Icon" />
          </div>
          <div className="description">
            <label className="title">Search Pet</label>
            <div className="content text-muted">
              Simply browse through the available pets and choose your favorite
              one
            </div>
          </div>
        </div>
        <div className="service-row">
          <div className="svg-container">
            <img src={icon2} alt="Icon" />
          </div>
          <div className="description">
            <label className="title">Connect</label>
            <div className="content text-muted">
              Once you find a pet, give us a call on 9837109413 to learn more
              about how to meet and adopt the pet
            </div>
          </div>
        </div>
        <div className="service-row">
          <div className="svg-container">
            <img src={icon3} alt="Icon" />
          </div>
          <div className="description">
            <label className="title">Adopt Love</label>
            <div className="content text-muted">
              Prepare your home for the arrival of your fur baby to help them
              adjust to their new family
            </div>
          </div>
        </div>
        <div className="service-row">
          <div className="svg-container">
            <img src={icon4} alt="Icon" />
          </div>
          <div className="description">
            <label className="title">Free Vet Consultation</label>
            <div className="content text-muted">
              Once you complete the Adoption journey reach out to us for free
              vet consultation
            </div>
          </div>
        </div>
      </div>

      {/* {enquiry form} */}

      <div className="home-container" style={{marginTop:"20vh"}}>
        <div className="appointment-form-wrap">
          <div className="appointment-form">
            <div className="heading-jumbo-small">Send us an enquiry!</div>
            <Form
              method="post"
              id="petQueryForm"
              
            >
              <div className="form-group">
                <label htmlFor="ownerName" className="required-field">
                  Name
                </label>
                <input
                  type="text"
                  className="form-control form-field"
                  placeholder="Enter full name"
                  id="name"
                  name="name"
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
                  maxLength={10}
                ></input>
              </div>
              <br />

              <div className="form-group">
                <label htmlFor="breed" className="required-field">
                  Pet Preferance
                </label>
                <input
                  type="text"
                  className="form-control form-field"
                  placeholder="Example dog, cat etc."
                  id="petType"
                  name="petType"
                ></input>
              </div>
              <br />

              <div className="form-group">
                <label htmlFor="petSize" className="required-field">
                  Pet Size Preferance
                </label>
                <div style={{ display: "flex" }}>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="petSize"
                      id="flexRadioDefault1"
                      value="Small"
                    />
                    <label className="form-check-label" for="flexRadioDefault1">
                      Small
                    </label>
                  </div>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="petSize"
                      id="flexRadioDefault2"
                      value="Medium"
                    />
                    <label className="form-check-label" for="flexRadioDefault2">
                      Medium
                    </label>
                  </div>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="petSize"
                      id="flexRadioDefault3"
                      value="Large"
                    />
                    <label className="form-check-label" for="flexRadioDefault3">
                      Large
                    </label>
                  </div>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="petSize"
                      id="flexRadioDefault4"
                      value="No preferance"
                    />
                    <label className="form-check-label" for="flexRadioDefault4">
                      No preferance
                    </label>
                  </div>
                </div>
              </div>

              <br />
              <div className="form-group">
                <label htmlFor="petGender" className="required-field">
                  Gender Preference
                </label>
                <div style={{ display: "flex" }}>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="petGender"
                      id="flexRadioDefault1"
                      value="Male"
                    />
                    <label className="form-check-label" for="flexRadioDefault1">
                      Male
                    </label>
                  </div>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="petGender"
                      id="flexRadioDefault2"
                      value="Female"
                    />
                    <label className="form-check-label" for="flexRadioDefault2">
                      Female
                    </label>
                  </div>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="petGender"
                      id="flexRadioDefault2"
                      value="No Preferance"
                    />
                    <label className="form-check-label" for="flexRadioDefault2">
                      No preferance
                    </label>
                  </div>
                </div>
              </div>

              <br />

              <div className="form-group">
                <label htmlFor="breed">Breed Preferance</label>
                <input
                  type="text"
                  className="form-control form-field"
                  placeholder="Example Pug, Labrador, Retreiver etc."
                  id="breed"
                  name="breed"
                ></input>
              </div>
              <br />

              <div className="form-group">
                <label htmlFor="comments">Any Other Comments</label>
                <input
                  type="text"
                  className="form-control form-field"
                  placeholder="Any other pet details you'd like us to know"
                  id="comments"
                  name="comments"
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

      {/* {enquiry form} */}

      <div className="container" style={{ marginTop: "12vh", padding: "0" }}>
        <div
          className="row"
          style={{
            margin: "0",
            display: "flex",
            justifyContent: "center",
            padding: "0",
          }}
        >
          {petsArray}
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
