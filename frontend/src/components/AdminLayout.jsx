import React from "react";
import AdminHeader from "./AdminHeader";
import Footer from "./Footer";
import { Outlet, redirect, useLoaderData, useNavigate } from "react-router-dom";
import { requireAuth } from "../adminauth";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export async function loader() {
  try {
    const response = await requireAuth();
    // console.log(response)
    if (response.status != 200) {
      throw new Error(response.data.msg);
    }
    return null;
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
    throw redirect("/");
  }
}

export default function AdminLayout(props) {
  return (
    <>
      <AdminHeader />
      <main>
        <Outlet />
      </main>
      <Footer />
      <ToastContainer />
    </>
  );
}
