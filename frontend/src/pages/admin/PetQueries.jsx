import React from "react";
import { deletePetQuery, getAllPetQueries } from "../../api";
import { requireAuth } from "../../adminauth";
import PetQueryCard from "./PetQueryCard";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
export async function loader() {
  await requireAuth();
  return null;
}
export default function PetQueries() {
  const [petQueries, setPetQueries] = React.useState([]);
  React.useEffect(() => {
    const getData = async () => {
      try {
        const response = await getAllPetQueries();

        if (response.status != 200) {
          throw new Error(response.data.msg);
        } else {
            // console.log(response.data.petQueries)
            setPetQueries(response.data.petQueries);
        }
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
  const handleDeleteQuery = async (queryId) => {
    try {
      const response = await deletePetQuery({
        queryId: queryId,
      });
      if (response.status != 200) {
        throw new Error(response.data.msg);
      }
      setPetQueries((petQueries) => {
        return petQueries.filter(
          (petQuery) => petQuery._id != response.data.petQuery._id
        );
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

  const petQuery_elements =
    petQueries.length > 0
      ? petQueries.map((petQuery) => {
          return (
            <PetQueryCard
              key={petQuery._id}
              queryId={petQuery._id}
              name={petQuery.name}
              contactNumber={petQuery.contactNumber}
              petTypePreferance={petQuery.petTypePreferance}
              petSizePreferance={petQuery.petSizePreferance}
              genderPreferance={petQuery.genderPreferance}
              breedPreferance={petQuery.breedPreferance}
              comments={petQuery.comments}    
              handleDeleteQuery={handleDeleteQuery}          
            />
          );
        })
      : [];
  return (
    <>
      <div className="home-container cc-heading-wrap">
        <h1>Pet Enquiries </h1>
        <div className="paragraph-bigger cc-bigger-light">
          You can find all the enquries made for purchasing pets here
        </div>
      </div>

      <div className="container">
        <div className="row" style={{ margin: "0" }}>
         
          {petQuery_elements}
        </div>
      </div>
      <div>
        <ToastContainer />
      </div>
    </>
  );
}
