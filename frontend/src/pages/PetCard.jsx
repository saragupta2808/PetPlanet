import React from "react";
const PetCard = (props) => {
  return (
    <div className="pet-card">
      <div className="pet-card-image">
        <img src="https://source.unsplash.com/1600x900/?dogs" />
      </div>

      <div className="pet-card-heading">{props.title}</div>
      <div className="pet-card-text">{props.description}</div>

      <div style={{ display: "flex" }}>
        {props.isAdmin && (
          <button
            className="pet-card-button"
            onClick={
              props.isAdmin
                ? () => props.handleDeletePet(props.petId)
                : () => props.handlePurchasePet(props.petId)
            }
            style={{ alignItems: "center" }}
          >
            Remove
          </button>
        )}
      </div>
    </div>
  );
};

export default PetCard;
