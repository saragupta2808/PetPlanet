import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone, faTrash } from "@fortawesome/free-solid-svg-icons";
const PetQueryCard = (props) => {
   
  return (
    <>
      <div className="appointment-card ">
        <div className="appointment-card-header no-border">
          <h5
            className="card-title"
            style={{
              textTransform: "uppercase",
              color: "#3C4856",
              padding: "9px 17px",
              fontSize: "15px",
              fontWeight: "800",
            }}
          >
            {props.name}
          </h5>
        </div>

        
          <div className="pet-query-card-body">
            <div className="widget-49">
              <div className="widget-49-title-wrapper">
                
                <div>
                  <span>
                    <FontAwesomeIcon
                      icon={faPhone}
                      size="sm"
                      style={{ color: "#219a18", paddingRight: "3px" }}
                    />
                  </span>
                  <span>{props.contactNumber}</span>
                </div>
              </div>
              <ul className="widget-49-meeting-points">
                <li className="widget-49-meeting-item">
                  <span className="profile-heading">PET TYPE REQUIRED:</span>
                  <span className="cc-bigger-light ms-1">{props.petTypePreferance}</span>
                </li>
                <li className="widget-49-meeting-item">
                  <span className="profile-heading">PET SIZE REQUIRED:</span>
                  <span className="cc-bigger-light ms-1">{props.petSizePreferance}  </span>
                </li>
                <li className="widget-49-meeting-item">
                  <span className="profile-heading">GENDER PREFERANCE:</span>
                  <span className="cc-bigger-light ms-1">{props.genderPreferance}</span>
                </li>
                {props.breedPreferance && <li className="widget-49-meeting-item">
                  <span className="profile-heading">BREED PREFERANCE:</span>
                  <span className="cc-bigger-light ms-1">{props.breedPreferance}</span>
                </li>}
                {props.comments && (
                  <li className="widget-49-meeting-item">
                    <span className="profile-heading">OTHER DETAILS:</span>
                    <span className="cc-bigger-light">{props.comments}</span>
                  </li>
                )}
              </ul>
            </div>
          </div>
        

        {/* completed and deleted buttons */}

        <div className="appointment-card-footer">
         

          
            <div>
              <FontAwesomeIcon
                onClick={() =>
                  props.handleDeleteQuery(props.queryId)
                }
                icon={faTrash}
                size="lg"
                style={{
                  color: "#3C4856",
                  cursor: "pointer",
                  left: "0.95rem",
                }}
              />
            </div>
          

          

         
        </div>
      </div>
    </>
  );
};

export default PetQueryCard;
