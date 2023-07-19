import React from "react";
import {
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  Link,
} from "react-router-dom";
import Layout from "./components/Layout";
import BookAppointment, {
  action as BookAppointmentAction,
} from "./pages/BookAppointment";
import ContactUs from "./pages/ContactUs";
import Services from "./pages/Services";
import BuyPet from "./pages/BuyPet";
import Home from "./pages/Home";
import Profile, { loader as profileLoader } from "./pages/Profile";
import AdminLayout, { loader as adminLoader } from "./components/AdminLayout";
import Appointments, {
  loader as appointmentLoader,
} from "./pages/admin/Appointments";

import Getapet, { loader as petLoader } from "./pages/admin/Getapet";

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route
          path="appointments/bookappointment"
          element={<BookAppointment />}
          action={BookAppointmentAction}
        />
        <Route path="contact" element={<ContactUs />} />
        <Route path="services" element={<Services />} />
        <Route path="buyapet" element={<BuyPet />} />

        <Route
          path="profile/:userId"
          element={<Profile />}
          loader={profileLoader}
        />
      </Route>

      <Route
        path="/admin/:adminId"
        element={<AdminLayout />}
        loader={adminLoader}
      >
        <Route
          path="appointments"
          element={<Appointments />}
          loader={appointmentLoader}
        />
        <Route
          path="profile/:userId"
          element={<Profile />}
          loader={profileLoader}
        />

        <Route path="getapet" element={<Getapet />} loader={petLoader} />
      </Route>
    </>
  )
);

export default function App() {
  return <RouterProvider router={router} />;
}
