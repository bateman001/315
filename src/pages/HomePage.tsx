import gageSinging from "../imgs/brent-and-gage-studio.jpg";
import { BiCameraMovie } from "react-icons/bi";
import { GiMicrophone } from "react-icons/gi";
import { BsSpeakerFill, BsLinkedin } from "react-icons/bs";
import { AiFillControl } from "react-icons/ai";
import { TextareaAutosize, TextField, Alert } from "@mui/material";
import { useEffect, useState } from "react";
import logo from "../imgs/logo-bw.jpg";
import { TiSocialInstagram, TiSocialFacebookCircular } from "react-icons/ti";

import { useLocation, useNavigate } from "react-router";
import { Icon } from "../components/icon";

interface ContactInfo {
  email: string;
  firstName: string;
  lastName: string;
  message: string;
}

export const HomePage = () => {
  // NAVIGATION
  const location = useLocation();
  const nav = useNavigate();

  // STATES
  const [contactInfo, setContactInfo] = useState<ContactInfo>({
    email: "",
    firstName: "",
    lastName: "",
    message: "",
  });

  const [errors, setErrors] = useState<ContactInfo>({
    email: "",
    firstName: "",
    lastName: "",
    message: "",
  });

  // FUNCTIONS
  const updateContact = (key: keyof ContactInfo, update: string) => {
    const contact = { ...contactInfo };
    contact[key] = update;

    setContactInfo(contact);
  };

  const checkMessage = () => {
    const contact = { ...errors };

    contact.firstName = contactInfo.firstName === "" ? "error" : "";
    contact.lastName = contactInfo.lastName === "" ? "error" : "";
    contact.email = contactInfo.email === "" ? "error" : "";
    contact.message = contactInfo.message === "" ? "error" : "";

    if (
      contact.email === "error" ||
      contact.firstName === "error" ||
      contact.lastName === "error" ||
      contact.message === "error"
    ) {
      setErrors(contact);
    } else {
      setContactInfo({
        email: "",
        firstName: "",
        lastName: "",
        message: "",
      });
    }
  };

  const scrollDown = () => {
    window.scrollTo({
      left: 0,
      top: document.body.scrollHeight,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    console.log("location", location);
    location.hash === "#contact" && scrollDown();
  }, [location]);

  return (
    <div>
      <div className="homepage-intro-parent">
        <div className="homepage-intro-child">
          <div className="homepage-intro-logo">
            <h3
              style={{
                textShadow: "#00000 1px 0 10px",
              }}
            >
              Creating musical experiences
              <br></br>
              that resonate and captivate
            </h3>
            <img src={logo} alt="logo" className="logo" />
            <button className="white-button" onClick={() => nav("/#contact")}>
              Contact
            </button>
          </div>
        </div>
      </div>

      <div className="homepage-article-parent">
        <div className="homepage-article-photo">
          <img src={gageSinging} alt="stuido" />
        </div>
        <div className="homepage-article-child">
          <article>
            <h1>Who are we?</h1>
            <br></br>

            <p>
              A team of dedicated music industry professionals, founded by
              <br></br>
              B. Anthony, Kid Ransom, and manager Megan Burch.
            </p>
            <br></br>

            <p>We excel in a wide range of genres including:</p>
            <ul>
              <li>Hip Hop</li>
              <li>House</li>
              <li>Reggaeton</li>
              <li>RnB</li>
              <li>Trap</li>
            </ul>
            <p>and much more!</p>
            <br></br>

            <button
              style={{ marginTop: "20px" }}
              className="purple-button"
              onClick={() => nav("/#contact")}
            >
              Let's Get Started
            </button>
          </article>
        </div>
      </div>

      <div className="homepage-card-parent">
        <div className="homepage-card-button"></div>
        <div className="homepage-card-child">
          <div className="homepage-card">
            <h1>ARTISTS</h1>
            <GiMicrophone size={100} />
            <p>
              Crafting unique soundscapes tailored to elevate every artist's
              vision.
            </p>
          </div>

          <div className="homepage-card">
            <h1>SYNC</h1>
            <BiCameraMovie size={100} />
            <p>
              Composing captivating scores that seamlessly blend with film, TV,
              and multimedia narratives.
            </p>
          </div>

          <div className="homepage-card">
            <h1>MIXING</h1>
            <AiFillControl size={100} />
            <p>
              Transforming raw tracks into polished masterpieces that resonate
              with listeners.
            </p>
          </div>
        </div>

        <div className="homepage-card-button">
          <button className="blue-button" onClick={() => nav("/team")}>
            Meet the Team
          </button>
        </div>
      </div>

      <div className="contact">
        <h1>Contact Us</h1>

        <div className="contact-form">
          <div className="text-field flex-row">
            <TextField
              placeholder="Firstname"
              onChange={(e) => {
                updateContact("firstName", e.target.value);
              }}
              error={errors.firstName === "error"}
              style={{
                margin: "10px 5px 20px 0",
                flex: 1,
                backgroundColor: "white",
              }}
              value={contactInfo.firstName}
            />
            <TextField
              placeholder="Lastname"
              onChange={(e) => {
                updateContact("lastName", e.target.value);
              }}
              error={errors.lastName === "error"}
              style={{
                margin: "10px 0 20px 5px",
                flex: 1,
                backgroundColor: "white",
              }}
              value={contactInfo.lastName}
            />
          </div>
          <TextField
            className="text-field"
            placeholder="Email"
            onChange={(e) => {
              updateContact("email", e.target.value);
            }}
            error={errors.email === "error"}
            style={{ margin: "10px 0 20px 0", backgroundColor: "white" }}
            value={contactInfo.email}
          />

          <TextareaAutosize
            className="text-field"
            placeholder="How can we help you?"
            onChange={(e) => {
              updateContact("message", e.target.value);
            }}
            minRows={10}
            style={{ margin: "10px 0 20px 0", border: "1px solid lightgrey" }}
            value={contactInfo.message}
          />
          {errors.message === "error" && (
            <Alert
              severity="error"
              className="text-field"
              style={{ margin: "0px 0 20px 0" }}
            >
              Must include a message
            </Alert>
          )}
          <button className="purple-button" onClick={() => checkMessage()}>
            Submit
          </button>
        </div>
      </div>

      <div className="footer">
        <a
          style={{
            color: "white",
            cursor: "pointer",
            padding: "5px",
          }}
          href="https://www.instagram.com/315agency/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Icon Icon={TiSocialInstagram} size={40} color={"black"} />
        </a>
        <a
          style={{
            color: "white",
            cursor: "pointer",
            padding: "5px",
          }}
          href="https://www.linkedin.com/company/315-agency/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Icon Icon={BsLinkedin} size={30} color={"black"} />
        </a>
      </div>
    </div>
  );
};
