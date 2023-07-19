import axios from "./axios";
import { auth } from "./firebase";

export function getCurrentUser () {
  return new Promise((resolve, reject) => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      unsubscribe();
      resolve(user);
    }, reject);
  });
};

export async function getAllAppointments() {
  try {
    const user = await getCurrentUser();
    if (user) {
      const accessToken = await user.getIdToken();
      // console.log(accessToken);
      const response = await axios.get("/appointments/getappointments", {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      });

      return response;
    } else {
      return {status: 401, data:{msg:'Unauthorized user, please login!'}}
    }
  } catch (error) {    
    return {ststatus:500,atus:500, data:{msg:'Something went wrong, please try again later!'}}
  }
}

export async function bookAppointment(formData) {
  try {
    const response = await axios.post(
      "/appointments/bookappointment",
      formData
    );
    return response;
  } catch (error) {
    // return {status: 500, data:{msg:'Something went wrong, please try again later!'}}
    return error.response;
  }
}

export async function editAppointment(formData) {
  const { appointmentId } = formData;
  try {
    const user = await getCurrentUser();
    if (user) {
      const accessToken = await user.getIdToken();
      const response = await axios.patch(
        `/appointments/editappointment/${appointmentId}`,
        formData,
        {
          headers: {
            Authorization: `Bearer ${accessToken}`,
            "Content-Type": "application/json",
          },
        }
      );
      // console.log(response);
      return response;
    } else {
      return {status: 401, data:{msg:'Unauthorized user, please login!'}}
    }
  } catch (error) {
    return {status:500, data:{msg:'Something went wrong, please try again later!'}}
  }
}

export async function deleteAppointment(formData) {
  const { appointmentId } = formData;
  try {
    const user = await getCurrentUser();
    if (user) {
      const accessToken = await user.getIdToken();
      const response = await axios.delete(
        `/appointments/editappointment/${appointmentId}`,
        {
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        }
      );
      // console.log("deleted appointmnet is", response);
      return response;
    } else {
      return {status: 401, data:{msg:'Unauthorized user, please login!'}}
    }
  } catch (error) {
    return {status:500, data:{msg:'Something went wrong, please try again later!'}}
  }
}
export async function registerUser(credentials) {
  try {
    const response = await axios.post("/auth/register", credentials);
    return response;
  } catch (error) {
    return {data:{msg:'Something went wrong, please try again later!'}}
  }
}

export async function updateProfile(formData) {
  try {
    console.log(formData)
    const { userId } = formData;
    const response = await axios.patch(`auth/profile/${userId}`, formData);
    return response;
  } catch (error) {
    console.log(error)
    return {status:500,data:{msg:'Something went wrong, please try again later!'}}
  }
}

export async function getProfile(userId) {
  try {
    const response = await axios.get(`auth/profile/${userId}`);
    return response;
  } catch (error) {
    return {status:500,data:{msg:'Something went wrong, please try again later!'}}
  }
}

export async function getAllPets() {
  try {
    const response = await axios.get("/pets");
    return response;
  } catch (error) {
    return {status:500,data:{msg:'Something went wrong, please try again later!'}}
  }
}

export async function addNewPet(formData) {
  console.log(formData);

  try {
    const user = await getCurrentUser();
    if (user) {
      const accessToken = await user.getIdToken();
      const response = await axios.post("/pets", formData, {
        headers: {
          Authorization: `Bearer ${accessToken}`,
          "Content-Type": "application/json",
        },
      });
    //   console.log(response);
      return response;
    } else {
      return {status: 401, data:{msg:'Unauthorized user, please login!'}}
    }
  } catch (error) {
    return error.response;
  }
}


export async function deletePet(petId){
    
    try {
        const user = await getCurrentUser();
        if(user){
            const accessToken = await user.getIdToken();
            const response = await axios.delete(`/pets/${petId}`,{
                headers:{
                    'Authorization': `Bearer ${accessToken}`
                }
            })
            console.log(response);
            return response;
        }else{
          return {status: 401, data:{msg:'Unauthorized user, please login!'}}
        }
    } catch (error) {
      return {status:500,data:{msg:'Something went wrong, please try again later!'}}
    }
}
