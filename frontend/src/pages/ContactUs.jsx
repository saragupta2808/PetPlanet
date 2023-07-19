import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEnvelope,
  faLocationDot,
  faPhone,
} from "@fortawesome/free-solid-svg-icons";
import Lottie from 'lottie-react'
import petcareAnimation from '../assets/petcareAnimation.json'

const ContactUs = () => {
  React.useEffect(() => {
    const scrollToTop = () => {
      window.scrollTo({ top: 0, behavior: "smooth" });
    };
    scrollToTop();
  }, []);
  return (
    <>
      <div className="home-container cc-heading-wrap" style={{marginTop:"40px"}}>
        

        <div className="paragraph-bigger cc-bigger-light">
          We are dedicated to providing exceptional care and support for your
          beloved pets. Our pet clinic staff is here to assist you with any
          inquiries, appointments, or concerns you may have. Feel free to reach
          out to us using the contact information provided below.
        </div>

       
   

       
      </div>

      <div className="home-container">
      <div className="contact-details" style={{display:'flex' , alignItems:'center', justifyContent:'center', padding:'15px', border:'0', borderStyle: 'none'}}>
      <div
          className="heading-jumbo section"
          style={{ color: "#0a2239", fontWeight: "400" }}
        >
          Contact Us
        </div>
      <div>
          <Lottie animationData={petcareAnimation} loop={true} style={{marginBottom: 0, marginLeft:0, width:150}}/>
        </div>
      </div>
        <div className="contact-details">
       
          <div className="address">
         
            <div className="label cc-contact-form-label w-inline-block">
              Our Clinic Locations:
            </div>
            <div className="contact-container">
              <span>
                <FontAwesomeIcon
                  icon={faLocationDot}
                  size="lg"
                  style={{ color: "#f53d3d", marginRight: "5px" }}
                />
              </span>
              <div className="contact-number ">
                <p className="cc-bigger-light">
                  6, Cross Rd, near SBI main branch, Race Course, Dehradun,
                  Uttarakhand 248001
                </p>

                <div className="label cc-contact-form-label w-inline-block">
                  Opening Times:
                </div>
                <ul
                  role="list"
                  className="office-opening-times cc-bigger-light"
                >
                  <li>Mon - Sat : 10 am to 7 pm</li>
                  <li>Sun :  10 am to 1 pm</li>
                </ul>
              </div>
            </div>

            <div className="contact-container">
              <span>
                <FontAwesomeIcon
                  icon={faLocationDot}
                  size="lg"
                  style={{ color: "#f53d3d", marginRight: "5px" }}
                />
              </span>
              <div className="contact-number ">
                <p className="cc-bigger-light">
                 Behind IMA Blood Bank near ONGC Hospital, Dehradun,
                  Uttarakhand 248001
                </p>

                <div className="label cc-contact-form-label w-inline-block">
                  Opening Times:
                </div>
                <ul
                  role="list"
                  className="office-opening-times cc-bigger-light"
                >
                  <li>Mon - Sun : 8 am to 10 am & 6 pm to 10 pm</li>
                  {/* <li>Sun - 12:00 to 18:00</li> */}
                </ul>
              </div>
            </div>
          </div>

          <div className="contact">
            <div>
              <div className="label cc-contact-form-label w-inline-block">
                Call us:
              </div>
              <div className="contact-number cc-bigger-light">
                <span>
                  <FontAwesomeIcon
                    icon={faPhone}
                    size="sm"
                    style={{ color: "#219a18", paddingRight: "3px" }}
                  />
                </span>
                9837109413
              </div>
              <div className="contact-number cc-bigger-light">
                <span>
                  <FontAwesomeIcon
                    icon={faPhone}
                    size="sm"
                    style={{ color: "#219a18", paddingRight: "3px" }}
                  />
                </span>
                9634403312
              </div>
              <div className="contact-number cc-bigger-light">
                <span>
                  <FontAwesomeIcon
                    icon={faPhone}
                    size="sm"
                    style={{ color: "#219a18", paddingRight: "3px" }}
                  />
                </span>
                8273776212
              </div>
            </div>

            <div>
              <div className="label cc-contact-form-label w-inline-block">
                Email us:
              </div>
              <div className="contact-number cc-bigger-light">
                <span>
                  <FontAwesomeIcon
                    icon={faEnvelope}
                    size="sm"
                    style={{ paddingRight: "3px" }}
                  />
                </span>
                skguptadr@gmail.com
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactUs;
