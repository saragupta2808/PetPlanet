import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserPen } from "@fortawesome/free-solid-svg-icons";
import {
  redirect,
  useActionData,
  useLoaderData,
  useSearchParams,
} from "react-router-dom";
import { getProfile, updateProfile } from "../api";
import { requireAuth } from "../auth";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export async function loader({ params }) {
  try {
    const response = await requireAuth();
    // console.log(response)
    if (response.status != 200) {
      throw new Error();
    }
    return getProfile(params.userId);
  } catch (error) {
    toast.error("Unauthorized user, please login again!", {
      position: "top-right",
      autoClose: 3000,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "colored",
    });
    throw redirect("/");
  }
}

export default function Profile() {
  const [isEditMode, setIsEditMode] = React.useState(false);
  const [user, setUser] = React.useState({});
  const [formData, setFormData] = React.useState({});
  const userProfile = useLoaderData();

  React.useEffect(() => {
    if (userProfile.status != 200) {
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

    setUser(userProfile.data.profile);
    setFormData({
      name: userProfile.data.profile.name,
      contactNumber: userProfile.data.profile.contactNumber,
      address: userProfile.data.profile.address,
      petName: userProfile.data.profile.petName,
      petCategory: userProfile.data.profile.petCategory,
      petAge: userProfile.data.profile.petAge,
      petAgeQuant: userProfile.data.petAgeQuant,
      petGender: userProfile.data.profile.petGender,
    });
  }, []);

  const handleChange = async (event) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await updateProfile({
        userId: user.userId,
        ...formData,
      });
      if (response.status != 200) {
        throw new Error(response.data.msg);
      }
      setIsEditMode(false);
      setUser(response.data.profile);
      toast.success("Saved changes!", {
        position: "top-right",
        autoClose: 1000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
      });
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

    return redirect(`/profile/${user.userId}`);
  };

  return (
    <>
      {user && (
        <div>
          <div className="home-container cc-heading-wrap">
            <h1>Welcome to your profile, {user.name}</h1>
            <div className="paragraph-bigger cc-bigger-light">
              Fill in your details if not already for a better experience & to
              get other exciting offers from our pet shop!
            </div>
          </div>
          {isEditMode ? (
            <form onSubmit={handleSubmit}>
              <section className="container-lg">
                <div className="container-lg py-2 ">
                  <div className="row d-flex justify-content-center">
                    <div className="col col-lg-12 mb-4 mb-lg-0">
                      <div
                        className="card mb-4"
                        style={{ borderRadius: "0rem", border: "0px" }}
                      >
                        <div className="row g-0">
                          <div className="col-md-3 gradient-custom text-center text-white">
                            <img
                              src={`${user.profilePhoto}`}
                              alt="Avatar"
                              className="img-fluid my-5"
                              style={{ width: "80px", borderRadius: "8rem" }}
                            />
                            <h3>{user.name}</h3>
                            <br />
                          </div>
                          <div className="col-md-8">
                            <div className="card-body p-4">
                              <h6 className="profile-heading-big">
                                User Information
                              </h6>

                              <hr className="mt-0 mb-4" />
                              <div className="row pt-1">
                                <div className="col-6 mb-3">
                                  <h6 className="profile-heading">Email</h6>
                                  <p className="paragraph-bigger cc-bigger-light">
                                    {user.email}
                                  </p>
                                </div>
                                <div className="col-6 mb-3">
                                  <h6 className="profile-heading">Name</h6>
                                  <input
                                    type="text"
                                    className="form-control form-field"
                                    placeholder="Enter full name"
                                    value={formData.name}
                                    name="name"
                                    onChange={handleChange}
                                  ></input>
                                </div>
                                <div className="col-6 mb-3">
                                  <h6 className="profile-heading">Address</h6>
                                  <input
                                    type="text"
                                    className="form-control form-field"
                                    placeholder="Enter house number and locality in Dehradun"
                                    value={formData.address}
                                    name="address"
                                    onChange={handleChange}
                                  ></input>
                                </div>
                                <div className="col-6 mb-3">
                                  <h6 className="profile-heading">
                                    Contact Number
                                  </h6>

                                  <input
                                    type="text"
                                    className="form-control form-field"
                                    placeholder="Enter 10 digit mobile number"
                                    onChange={handleChange}
                                    value={formData.contactNumber}
                                    name="contactNumber"
                                  ></input>
                                </div>
                              </div>
                              <h6 className="profile-heading-big">
                                Pet Details
                              </h6>
                              <hr className="mt-0 mb-4" />
                              <div className="row pt-1">
                                <div className="col-6 mb-3">
                                  <h6 className="profile-heading">Pet Name</h6>
                                  <input
                                    type="text"
                                    className="form-control form-field"
                                    placeholder="Enter your pet's name"
                                    onChange={handleChange}
                                    name="petName"
                                    value={formData.petName}
                                  ></input>
                                </div>
                                <div className="col-6 mb-3">
                                  <h6 className="profile-heading">
                                    Pet Category/Breed
                                  </h6>
                                  <input
                                    type="text"
                                    className="form-control form-field"
                                    placeholder="Enter pet's category"
                                    onChange={handleChange}
                                    name="petCategory"
                                    value={formData.petCategory}
                                  ></input>
                                </div>
                                <div className="col-6 mb-3">
                                  <div>
                                    <h6 className="profile-heading">Pet Age</h6>

                                    <div className="profile-wrap">
                                      <input
                                        type="number"
                                        className="form-control form-field"
                                        placeholder="Enter your pet's age"
                                        onChange={handleChange}
                                        name="petAge"
                                        value={formData.petAge}
                                      ></input>

                                      <select
                                        className="form-select form-field"
                                        name="petAgeQuant"
                                        id="petAgeQuant"
                                        onChange={handleChange}
                                        value={formData.petAgeQuant}
                                      >
                                        <option value="Years">Years</option>
                                        <option value="Months">Months</option>

                                        <option value="Days">Days</option>
                                      </select>
                                    </div>
                                  </div>
                                </div>
                                <div className="col-6 mb-3">
                                  <h6 className="profile-heading">
                                    Pet Gender
                                  </h6>

                                  <select
                                    className="form-select form-field"
                                    name="petGender"
                                    id="petGender"
                                    onChange={handleChange}
                                    value={formData.petGender}
                                  >
                                    <option value="Male">Male</option>
                                    <option value="Female">Female</option>
                                  </select>
                                </div>
                              </div>

                              <div
                                className="text-center"
                                style={{
                                  display: "flex",
                                  justifyContent: "end",
                                  marginTop: "15px",
                                }}
                              >
                                <button
                                  type="submit"
                                  className="btn home-button "
                                  style={{backgroundColor:'#376a97'}}
                                >
                                  Save Changes
                                </button>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </section>
            </form>
          ) : (
            <section className="container-lg">
              <div className="container-lg py-2">
                <div className="row d-flex justify-content-center">
                  <div className="col col-lg-12 mb-4 mb-lg-0">
                    <div
                      className="card mb-4"
                      style={{ borderRadius: "0rem", border: "0px" }}
                    >
                      <div className="row g-0">
                        <div className="col-md-3 gradient-custom text-center text-white">
                          <img
                            src={`${user.profilePhoto}`}
                            alt="Avatar"
                            className="img-fluid my-5"
                            style={{ width: "80px", borderRadius: "8rem" }}
                          />
                          <h3>{user.name}</h3>
                          <br />
                          
                        </div>
                        <div className="col-md-9">
                          <div className="card-body p-4">
                            <div className="profile-edit"
                              
                            >
                              <h6 className="profile-heading-big">
                                User Information
                              </h6>
                              <button
                                type="submit"
                                className="btn home-button "
                                style={{padding:'10px', marginBottom:'10px', backgroundColor:'#376a97'}}
                                onClick={() => setIsEditMode(true)}
                              >

                                <div>
                                  <span>Edit Profile</span>
                                  <span>
                                  
                                  <FontAwesomeIcon
                                    icon={faUserPen}
                                    size="xl"
                                    style={{
                                      cursor: "pointer",
                                      
                                    }}
                                    
                                  />
                                </span>
                                </div>
                               
                               
                              </button>
                            </div>

                            <hr className="mt-0 mb-4" />
                            <div className="row pt-1">
                              <div className="col-6 mb-3">
                                <h6 className="profile-heading">Email</h6>
                                <p className="paragraph-bigger cc-bigger-light">
                                  {user.email}
                                </p>
                              </div>
                              <div className="col-6 mb-3">
                                <h6 className="profile-heading">Name</h6>
                                <p className="paragraph-bigger cc-bigger-light">
                                  {user.name}
                                </p>
                              </div>
                              <div className="col-6 mb-3">
                                <h6 className="profile-heading">Address</h6>
                                <p className="paragraph-bigger cc-bigger-light">
                                  {user.address}
                                </p>
                              </div>
                              <div className="col-6 mb-3">
                                <h6 className="profile-heading">
                                  Contact Number
                                </h6>
                                <p className="paragraph-bigger cc-bigger-light">
                                  {user.contactNumber}
                                </p>
                              </div>
                            </div>
                            <h6 className="profile-heading-big">Pet Details</h6>
                            <hr className="mt-0 mb-4" />
                            <div className="row pt-1">
                              <div className="col-6 mb-3">
                                <h6 className="profile-heading">Pet Name</h6>
                                <p className="paragraph-bigger cc-bigger-light">
                                  {user.petName}
                                </p>
                              </div>
                              <div className="col-6 mb-3">
                                <h6 className="profile-heading">
                                  Pet Category/Breed
                                </h6>
                                <p className="paragraph-bigger cc-bigger-light">
                                  {user.petCategory}
                                </p>
                              </div>
                              <div className="col-6 mb-3">
                                <h6 className="profile-heading">Pet Age</h6>
                                <p className="paragraph-bigger cc-bigger-light">
                                  {user.petAge} {user.petAgeQuant}
                                </p>
                              </div>
                              <div className="col-6 mb-3">
                                <h6 className="profile-heading">Male/Female</h6>
                                <p className="paragraph-bigger cc-bigger-light">
                                  {user.petGender}
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          )}
        </div>
      )}
      <div>
        <ToastContainer />
      </div>
    </>
  );
}
