import React from "react";
import { getAllAppointments, deleteAppointment } from "../../api";
import { requireAuth } from "../../adminauth";
import AppointmentCard from "./AppointmentCard";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
export async function loader() {
  await requireAuth();
  return null;
}
export default function Appointments() {
  const [appointments, setAppointments] = React.useState([]);
  React.useEffect(() => {
    const getData = async () => {
      try {
        const response = await getAllAppointments();

        if (response.status != 200) {
          throw new Error(response.data.msg);
        } else {
          setAppointments(response.data.appointments);
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
  const handleDeleteAppointment = async (appointmentId) => {
    try {
      const response = await deleteAppointment({
        appointmentId: appointmentId,
      });
      if (response.status != 200) {
        throw new Error(response.data.msg);
      }
      setAppointments((appointments) => {
        return appointments.filter(
          (appointment) => appointment._id != response.data.appointment._id
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

  const appointment_elements =
    appointments.length > 0
      ? appointments.map((appointment) => {
          return (
            <AppointmentCard
              key={appointment._id}
              ownerName={appointment.ownerName}
              contactNumber={appointment.contactNumber}
              address={appointment.address}
              petCategory={appointment.petCategory}
              petName={appointment.petName}
              service={appointment.service}
              needHomeVisit={appointment.needHomeVisit}
              timestamp={appointment.createdAt}
              appointmentId={appointment._id}
              isCompleted={appointment.isCompleted}
              petAge={appointment.petAge}
              petAgeQuant={appointment.petAgeQuant}
              handleDeleteAppointment={handleDeleteAppointment}
              petFile={appointment.petFile.length >0 ? appointment.petFile[0]:null}
            />
          );
        })
      : [];
  return (
    <>
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
          {appointment_elements}
        </div>
      </div>
      <div>
        <ToastContainer />
      </div>
    </>
  );
}
