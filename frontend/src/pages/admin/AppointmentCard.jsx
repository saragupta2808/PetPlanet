import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone, faTrash } from "@fortawesome/free-solid-svg-icons";
import { editAppointment } from "../../api";
const AppointmentCard = (props) => {
  const [buttonTxt, setButtonTxt] = React.useState(
    props.isCompleted ? "Completed" : "Mark as done"
  );

  const handleClick = async () => {
    try {
      const response = await editAppointment({
        appointmentId: props.appointmentId,
        isCompleted: true,
      });
      if (response.status != 200) {
        throw new Error(response.data.msg);
      }
      setButtonTxt("Completed");
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

  const date = new Date(props.timestamp);
  const month = date.toLocaleString("default", { month: "short" });
  const day = date.getDate();

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
            {props.ownerName}
          </h5>
        </div>

        
          <div className="appointment-card-body">
            <div className="widget-49">
              <div className="widget-49-title-wrapper">
                <div className="widget-49-date-primary">
                  <span className="widget-49-date-day">{day}</span>
                  <span className="widget-49-date-month">{month}</span>
                </div>
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
                  <span className="profile-heading">Address:</span>
                  <span className="cc-bigger-light ms-1">{props.address.slice(0,60)}</span>
                </li>
                <li className="widget-49-meeting-item">
                  <span className="profile-heading">Pet Details:</span>
                  <span className="cc-bigger-light ms-1">
                    {props.petCategory} ({props.petName.slice(0,10)} - {props.petAge}{" "}
                    {props.petAgeQuant}){" "}
                  </span>
                </li>
                <li className="widget-49-meeting-item">
                  <span className="profile-heading">Service required:</span>
                  <span className="cc-bigger-light ms-1">{props.service}</span>
                </li>
                {props.needHomeVisit && (
                  <li className="widget-49-meeting-item">
                    <span className="cc-bigger-light">Need Home Visit</span>
                  </li>
                )}
              </ul>
            </div>
          </div>
        

        {/* completed and deleted buttons */}

        <div className="appointment-card-footer">
         

          {buttonTxt === "Completed" && (
            <div>
              <FontAwesomeIcon
                onClick={() =>
                  props.handleDeleteAppointment(props.appointmentId)
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
          )}

          <div>
            <button
              onClick={handleClick}
              style={{
                borderRadius: "1rem",
                backgroundColor:
                  buttonTxt === "Completed" ? "rgb(63 188 54)" : "#A0ACBD",
                paddingLeft: "0.7rem",
                fontSize: "15px",
                paddingRight: "0.7rem",
                border: "0px",
                
              }}
            >
              {buttonTxt}
            </button>
          </div>

         
        </div>
      </div>
    </>
  );
};

export default AppointmentCard;
