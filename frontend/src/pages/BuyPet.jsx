import React from "react";
import PetCard from "./PetCard";
import icon4 from "../assets/icon4.png";
import icon3 from "../assets/icon3.png";
import icon2 from "../assets/icon2.png";
import icon1 from "../assets/icon1.png";
import { getAllPets } from "../api";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Link } from "react-router-dom";
export default function BuyPet() {

  const [pets, setPets] = React.useState([]);
  React.useEffect(() => {
    const getData = async () => {
      try {
        const response = await getAllPets();
        if(response.status!=200){
          throw new Error(response.data.msg)
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
       <div >
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
            Explore our collection of adorable pets available for purchase or adoption & contact us to bring home your new furry friend!
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
              Simply browse through the available pets and choose your favorite one
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
              Once you find a pet, give us a call on 9837004449 to learn more about how
              to meet and adopt the pet
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
              Prepare your home for the arrival of your fur baby to
              help them adjust to their new family
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
              Once you complete the Adoption journey reach out to us for free vet
              consultation
            </div>
          </div>
        </div>
      </div>

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
        {/* <button onClick={notify}>Notify !</button> */}
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
                Whether you need veterinary services, pet grooming, or want to explore our range of pet supplies at our pet shop, we are here to assist you.
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
