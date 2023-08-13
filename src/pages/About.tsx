import gageSinging from "../imgs/gage-singing.jpg";
import studio from "../imgs/brent-and-gage.jpg";
import { useLocation } from "react-router";

export const About = () => {
  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      <div style={{ display: "flex", height: "40vh" }}>
        <div
          style={{
            flex: 1,
            // border: "1px solid red",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            backgroundColor: "#8fbefe",
          }}
        >
          <div style={{ margin: "15%" }}>
            <h3 style={{ color: "white", fontSize: "50px" }}>
              Welcome to 315 Agency
            </h3>
            <br />
            <p style={{ color: "white", fontSize: "30px" }}>
              A collective of innovative music producers crafting iconic and
              timeless music for TV, movies, commercials, and artists.
            </p>
          </div>
        </div>
        <div
          style={{
            flex: 1,
            // border: "1px solid red",
            backgroundImage: `url(${gageSinging})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        ></div>
      </div>
      <div style={{ display: "flex", height: "50vh" }}>
        <div
          style={{
            flex: 0.25,
            // border: "1px solid red",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            backgroundColor: "#febfe0",
          }}
        >
          <h1
            style={{
              margin: "15%",
              fontSize: "80px",
              color: "black",
              textOrientation: "sideways",
              writingMode: "vertical-rl",
              transform: "rotate(180deg)",
            }}
          >
            About Us
          </h1>
        </div>
        <div
          style={{
            flex: 0.5,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            // border: "1px solid red",
          }}
        >
          <p style={{ margin: "0 15%", color: "black" }}>
            Our founders, B. Anthony, Kid Ransom, and manager Megan Burch,
            brought together a team that's as diverse as the music we create.
            We've got B. Anthony (Brent Pinero), Kid Ransom (Kristof Gage
            Thompson), and Basecamp Christian (Christian Thompson) on the
            roster, each bringing their unique style to the table.
            <br />
            <br />
            We're not just stuck to one genre. Hip Hop, House, Reggaeton,
            Country Trap - we've got it all covered. We love the challenge of
            creating something new and unique with each project. But we're not
            just making music. We're crafting experiences that connect with
            people, whether it's through a catchy commercial tune or a powerful
            movie soundtrack.
          </p>
        </div>
        <div
          style={{
            flex: 0.25,
            // border: "1px solid red",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            backgroundColor: "#a561f3",
          }}
        ></div>
      </div>
      <div style={{ display: "flex", height: "40vh" }}>
        <div
          style={{
            flex: 1,
            // border: "1px solid red",
            backgroundImage: `url(${studio})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        ></div>
        <div
          style={{
            flex: 1,
            // border: "1px solid red",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            backgroundColor: "#F928CA",
          }}
        >
          <p style={{ color: "white", margin: "15%", fontSize: "30px" }}>
            So, welcome to 315 Agency. We're just a group of music lovers doing
            what we do best - creating music that moves.
          </p>
        </div>
      </div>
    </div>
  );
};
