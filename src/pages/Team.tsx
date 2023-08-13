import hands from "../imgs/hands.jpg";
import { BsFillArrowDownCircleFill } from "react-icons/bs";
import { useEffect, useState } from "react";
import logo from "../imgs/logo-bw.jpg";
import Gage from "../imgs/gage.JPG";
import Brent from "../imgs/brent3.JPG";
import Chris from "../imgs/gages-brother.jpg";
import { SiLinktree, SiSpotify } from "react-icons/si";
import {
  TiSocialInstagram,
  TiSocialFacebookCircular,
  TiSocialTwitter,
} from "react-icons/ti";
import { Icon } from "../components/icon";

type Name = "Gage" | "Brent" | "Chris";

interface TeamInterface {
  name: Name;
  info: ArtistInfo;
  pic: string;
}

interface SOCIALS {
  ig?: string;
  fb?: string;
  spotify?: string;
  um?: string;
  lt?: string;
}

interface ArtistInfo {
  PRODUCER: string;
  EMAIL: string;
  AGE: string;
  FROM: string;
  "MEMBER SINCE": string;
  ROLE: string;
  GENRES: string;
  SOCIALS?: SOCIALS;
}

export const Team = () => {
  const team: TeamInterface[] = [
    {
      name: "Gage",
      info: {
        PRODUCER: "Kid Ransom",
        EMAIL: "kristof@315agency.com",
        AGE: "29",
        FROM: "Dallas, TX",
        "MEMBER SINCE": "2020",
        ROLE: "Producer  |  Songwriter  |  Vocalist",
        GENRES:
          " Hip Hop  |  R&B  | Latin  |  Dancehall  |  Pop  |  Hyper Pop  |  Afro Pop  |  EDM",
        SOCIALS: {
          um: "https://unitedmasters.com/kid-ransom",
          ig: "https://www.instagram.com/thekidransom/",
          lt: "https://linktr.ee/kidransom",
          spotify:
            "https://open.spotify.com/artist/3rCWLOTESWlwmtb0nWxSpd?si=FSsdUh50Qiapb2tjtd0x_w",
        },
      },
      pic: Gage,
    },
    {
      name: "Brent",
      info: {
        PRODUCER: "B. Anthony",
        EMAIL: "brent@315agency.com",
        AGE: "29",
        FROM: "Washington, DC",
        "MEMBER SINCE": "2020",
        ROLE: "Producer  |  Songwriter",
        GENRES:
          " R&B  |  Latin  |  Dancehall  |  Pop  |  Hyper Pop  |  Boom Bap  |  Afro Pop  |  EDM",
      },
      pic: Brent,
    },
    {
      name: "Chris",
      info: {
        PRODUCER: "Basecamp Christian",
        EMAIL: "christian@315agency.com",
        AGE: "27",
        FROM: "Baton Rouge, LA",
        "MEMBER SINCE": "2020",
        ROLE: "Producer  |  Songwriter",
        GENRES:
          " Hip Hop  |  Pop  |  R&B  |  EDM  |  Indie Alternative  |  Country",
      },
      pic: Chris,
    },
  ];

  const [selected, setSelected] = useState<number | null>(null);
  const [hovered, setHovered] = useState<string>("");

  const scrollToTeam = () => {
    window.scrollTo({
      left: 0,
      top: document.body.scrollHeight,
      behavior: "smooth",
    });
  };

  return (
    <div>
      {/* <div className="team-intro">
        <div
          style={{
            backgroundImage: `url(${hands})`,
            flex: 1,
            backgroundSize: "cover",
            margin: "20px",
            padding: "40px",
          }}
        ></div>

        <div
          style={{
            margin: "20px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            flex: 1,
          }}
        >
          <div
            style={{
              borderTop: "2px solid black",
              borderBottom: "2px solid black",
              height: "50%",
              display: "flex",
              // justifyContent: "space-between",
              justifyContent: "center",
              flexDirection: "column",
              padding: "20px 0 ",
            }}
          >
            <div
              style={{
                display: "flex",
                flex: 0.6,
                justifyContent: "center",
                alignItems: "flex-end",
                // border: "1px solid red",
              }}
            >
              <h1 style={{ fontSize: "100px" }}>Meet Our Team</h1>
            </div>

            <div
              onClick={() => scrollToTeam()}
              style={{
                flex: 0.4,
                display: "flex",
                justifyContent: "center",
                alignItems: "flex-end",
                // border: "1px solid red",
              }}
            >
              <BsFillArrowDownCircleFill
                size={50}
                color={"#a561f3"}
                className="icon"
              />
            </div>
          </div>
        </div>
      </div> */}

      <div
        style={{
          // border: "1px solid red",
          display: "flex",
          height: "100vh",
          flexDirection: "column",
        }}
      >
        <header
          style={{
            // border: "1px solid red",
            flex: "0.2",
            textAlign: "center",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            boxShadow: "0px 0px 3px 3px rgba(10, 7, 12, 0.32)",
            background: "linear-gradient(50deg, #a8d3fe, #a561f3, #a8d3fe)",
          }}
        >
          <h1 style={{ color: "white", fontSize: "100px" }}>315 Team</h1>
        </header>
        <div className="team-info">
          <div
            style={{
              height: "100%",
              flex: 1,
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-around",
              margin: "0 20px",
              alignItems: "center",
              // border: "1px solid black",
            }}
          >
            {team.map((member, i) => (
              <h1
                onMouseOver={() => setHovered(member.pic)}
                onMouseLeave={() => setHovered("")}
                className={`${selected === i ? "selected" : ""} member-name`}
                style={{
                  color:
                    selected === i ||
                    team.findIndex((x) => x.pic === hovered) === i
                      ? "white"
                      : "#a561f3",
                  textAlign: "center",
                }}
                key={i}
                onClick={() => {
                  setSelected(i);
                  setHovered("");
                }}
              >
                {member.info.PRODUCER}
              </h1>
            ))}
          </div>

          {selected === null && hovered === "" && (
            <div
              style={{
                backgroundImage: `url(${logo})`,
                flex: 1,
                margin: "0 20px",
                borderRadius: "10px",
                boxShadow: "0px 0px 3px 2px rgba(10, 7, 12, 0.32)",
              }}
              className="team-info-background"
            ></div>
          )}

          {hovered !== "" && (
            <div
              style={{
                backgroundImage: `url(${hovered})`,
                backgroundPosition: "center",

                flex: 1,
                transition: "0.4s",
                margin: "0 20px",
                borderRadius: "10px",
                boxShadow: "0px 0px 3px 2px rgba(10, 7, 12, 0.32)",

                // border: "5px solid #a561f3",
              }}
              className="team-info-background"
            ></div>
          )}

          {selected !== null && hovered === "" && (
            <div
              style={{
                flex: 1,
                border: "5px solid #a561f3",
                color: "white",
                backgroundColor: "#a561f36c",
                display: "flex",
                flexDirection: "column",
                borderRadius: "10px",
                margin: "0 20px",
                boxShadow: "0px 0px 3px 2px rgba(10, 7, 12, 0.32)",
              }}
            >
              <div
                style={{
                  display: "flex",
                  height: "100%",
                  padding: "20px",
                  flex: 1,
                }}
              >
                <div
                  style={{ border: "3px solid #a561f3", borderRadius: "10px" }}
                  className={`team-info-${team[selected].name} team-info-background`}
                ></div>
              </div>

              <div
                style={{
                  flex: 1,
                  padding: "0 10px",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-around",
                }}
              >
                <div style={{ display: "flex" }}>
                  <p
                    style={{
                      color: "#a561f3",
                      paddingRight: "5px",
                    }}
                  >
                    Role:{" "}
                  </p>
                  <p style={{ textShadow: "#a561f3 1px 0 10px" }}>
                    {team[selected].info.ROLE}
                  </p>
                </div>
                <div style={{ display: "flex" }}>
                  <p style={{ color: "#a561f3", paddingRight: "5px" }}>
                    Genres:
                  </p>
                  <p style={{ textShadow: "#a561f3 1px 0 10px" }}>
                    {team[selected].info.GENRES}
                  </p>
                </div>
                <div style={{ display: "flex" }}>
                  <p style={{ color: "#a561f3", paddingRight: "5px" }}>
                    Email:{" "}
                  </p>
                  <p style={{ textShadow: "#a561f3 1px 0 10px" }}>
                    {team[selected].info.EMAIL}
                  </p>
                </div>
                <div style={{ display: "flex" }}>
                  <p style={{ color: "#a561f3", paddingRight: "5px" }}>
                    Location:
                  </p>
                  <p style={{ textShadow: "#a561f3 1px 0 10px" }}>
                    {team[selected].info.FROM}
                  </p>
                </div>
                <div
                  style={{
                    display: "flex",
                    // border: "1px solid red",
                    justifyContent: "space-around",
                    alignItems: "flex-end",
                  }}
                >
                  {team[selected].info.SOCIALS?.fb && (
                    <a
                      style={{
                        color: "white",
                        cursor: "pointer",
                        padding: "5px",
                      }}
                      href={team[selected].info.SOCIALS?.fb}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Icon
                        size={30}
                        Icon={TiSocialFacebookCircular}
                        color={"white"}
                        hoverColor={"#a561f3"}
                      />
                    </a>
                  )}
                  {team[selected].info.SOCIALS?.ig && (
                    <a
                      style={{
                        color: "white",
                        cursor: "pointer",
                        padding: "5px",
                      }}
                      href={team[selected].info.SOCIALS?.ig}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Icon
                        size={30}
                        Icon={TiSocialInstagram}
                        color={"white"}
                        hoverColor={"#a561f3"}
                      />
                    </a>
                  )}
                  {team[selected].info.SOCIALS?.lt && (
                    <a
                      style={{
                        color: "white",
                        cursor: "pointer",
                        padding: "5px",
                      }}
                      href={team[selected].info.SOCIALS?.lt}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Icon
                        size={30}
                        Icon={SiLinktree}
                        color={"white"}
                        hoverColor={"#a561f3"}
                      />
                    </a>
                  )}
                  {team[selected].info.SOCIALS?.spotify && (
                    <a
                      style={{
                        color: "white",
                        cursor: "pointer",
                        padding: "5px",
                      }}
                      href={team[selected].info.SOCIALS?.spotify}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Icon
                        size={30}
                        Icon={SiSpotify}
                        color={"white"}
                        hoverColor={"#a561f3"}
                      />
                    </a>
                  )}
                  {team[selected].info.SOCIALS?.um && (
                    <a
                      style={{
                        color: "white",
                        cursor: "pointer",
                        padding: "5px",
                        textDecoration: "none",
                      }}
                      href={team[selected].info.SOCIALS?.um}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <p className="social-icon">UM</p>
                    </a>
                  )}
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
