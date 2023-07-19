import React from "react";
import axios from "../../axios";
import PetCard from "../PetCard";
import { requireAuth } from "../../adminauth";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { addNewPet, deletePet, getAllPets } from "../../api";
export async function loader() {
  await requireAuth();
  return null;
}
export default function Getapet() {
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
  const [petFormData, setPetFormData] = React.useState({
    title: "",
    description: "",
  });
  const [picture, setPicture] = React.useState("");
  const handleChange = (e) => {
    setPetFormData((prevFormData) => {
      return {
        ...prevFormData,
        [e.target.name]: e.target.value,
      };
    });
  };

  const handleFileChange = async (pic) => {
    if (pic.type === "image/jpeg" || pic.type == "image/png") {
      const data = new FormData();
      data.append("file", pic);
      data.append("upload_preset", "pet-planet");
      data.append("cloud_name", "dwplasxu8");
      try {
        const response = await axios.post(
          "https://api.cloudinary.com/v1_1/dwplasxu8/image/upload",
          data
        );
        setPicture(response.data.url);
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
    } else {
      toast.error(
        "File type not supported, please upload an image in jpeg/png format",
        {
          position: "top-right",
          autoClose: 1000,
          hideProgressBar: true,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "colored",
        }
      );
    }
  };

  const handleSubmit = async (e) => {
    try {
      e.preventDefault();
      const { title, description } = petFormData;
      const response = await addNewPet({ title, description, picture });
      if (response.status != 201) {
        const msg = response.data.msg;
        if (msg.includes("validation")) {
          throw new Error("Please provide title");
        }
        throw new Error(response.data.msg);
      }
      setPets((pets) => {
        return [...pets, response.data.pet];
      });
      setPetFormData({
        title: "",
        description: "",
      });
      setPicture("");
      toast.success("Pet added successfully!", {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
      });
      e.target.reset();
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

  const handleDeletePet = async (petId) => {
    try {
      const response = await deletePet(petId);
      if (response.status != 200) {
        throw new Error(response.data.msg);
      }

      setPets((pets) => {
        return pets.filter((pet) => pet._id != response.data.deletedPet._id);
      });
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

  const petsArray =
    pets.length > 0
      ? pets.map((pet) => {
          return (
            <PetCard
              key={pet._id}
              title={pet.title}
              description={pet.description}
              picture={pet.picture}
              isAdmin={true}
              petId={pet._id}
              handleDeletePet={handleDeletePet}
            />
          );
        })
      : [];
  return (
    <>
       <div className="home-container cc-heading-wrap">
        <h1>Pets you have listed for adoption/purchase</h1>
        <div className="paragraph-bigger cc-bigger-light">
          Click on the button below to add a new pet & provide relevant details
          and a clear picture of the pet.
        </div>
        <button
          type="button"
          className="btn home-button"
          data-bs-toggle="modal"
          data-bs-target="#exampleModal"
        >
          Add new pet
        </button>
      </div> 

       <div
        className="modal fade"
        id="exampleModal"
        tabIndex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title fs-5" id="exampleModalLabel">
                Add new pet details
              </h1>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              <form onSubmit={handleSubmit}>
                <div className="mb-3">
                  <label htmlFor="title" className="form-label">
                    Title:{" "}
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    name="title"
                    placeholder="Enter title for pet"
                    value={petFormData.title}
                    onChange={handleChange}
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="description" className="form-label">
                    Description:
                  </label>
                  <textarea
                    className="form-control"
                    name="description"
                    placeholder="Enter any further details about the pet you want to mention"
                    value={petFormData.description}
                    onChange={handleChange}
                    rows="3"
                  ></textarea>
                </div>

                <div className="mb-3">
                  <label htmlFor="picture">Add picture:</label>
                  <input
                    className="form-control"
                    type="file"
                    name="picture"
                    accept="image/*"
                    onChange={(e) => handleFileChange(e.target.files[0])}
                  />
                </div>

                <div className="modal-footer">
                  <button type="submit" className="button-40">
                    Save
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div> 

     

       <div className="container">
        <div className="row" style={{ margin: "0" }}>
        {petsArray}
        </div>
      </div>

      <div>
        <ToastContainer />
      </div> 



















{/* 
<div className="home-container cc-heading-wrap">
        <h1>All Your Appointments</h1>
        <div className="paragraph-bigger cc-bigger-light">
          You can find all the appoinments along with patient details here. Feel
          free to mark the appoinment as Completed, once you have communicated
          with the customer. You can also delete older appoinments.
        </div>
      </div>

      <div className="container">
        <div className="row" style={{ margin: "0" }}>
          {petsArray}
        </div>
      </div>
      <div>
        <ToastContainer />
      </div> */}
    
    </>
  );
}
