import { FiMenu } from "react-icons/fi";
import Drawer from "@mui/material/Drawer";
import Box from "@mui/material/Box";
import { createTheme } from "@mui/material/styles";
import { useState } from "react";
import logo from "../imgs/logo-bw.jpg";
import { useLocation, useNavigate } from "react-router";

export const Header = () => {
  const navigate = useNavigate();
  const location = useLocation();
  console.log("location", location.pathname !== "/about");
  const [showMenu, setShowMenu] = useState<boolean>(false);

  const theme = createTheme({
    transitions: {
      duration: {
        // shortest: 150,
        // shorter: 200,
        // short: 250,
        // // most basic recommended timing
        standard: 350,
        // // this is to be used in complex animations
        // complex: 375,
        // recommended when something is entering screen
        enteringScreen: 350,
        // recommended when something is leaving screen
        leavingScreen: 300,
      },
      easing: {
        // This is the most common easing curve.
        easeInOut: "cubic-bezier(0.4, 0, 0.2, 1)",
        // Objects enter the screen at full velocity from off-screen and
        // slowly decelerate to a resting point.
        easeOut: "cubic-bezier(0.0, 0, 0.2, 1)",
        // Objects leave the screen at full velocity. They do not decelerate when off-screen.
        easeIn: "cubic-bezier(0.4, 0, 1, 1)",
        // The sharp curve is used by objects that may return to the screen at any time.
        sharp: "cubic-bezier(0.4, 0, 0.6, 1)",
      },
    },
  });

  const list = [
    {
      text: "Home",
      nav: "/",
    },
    {
      text: "Our Team",
      nav: "/team",
    },
    {
      text: "About",
      nav: "/about",
    },
    {
      text: "Contact",
      nav: "/#contact",
    },
  ];
  // TODO: IF ABOUT PAGE REMOVE LOGO
  return (
    <header className="header">
      <div style={{ padding: "30px" }}>
        {location.pathname !== "/about" && (
          <img
            src={logo}
            alt="logo"
            style={{ width: "10%", cursor: "pointer" }}
            onClick={() => navigate("/")}
          />
        )}
      </div>

      <FiMenu
        size={50}
        className="icon"
        onClick={() => setShowMenu(true)}
        style={{ padding: "30px" }}
      />

      <Drawer
        transitionDuration={{
          enter: theme.transitions.duration.enteringScreen,
          exit: theme.transitions.duration.leavingScreen,
        }}
        anchor={"left"}
        open={showMenu}
        onClose={() => setShowMenu(false)}
        // style={{ backgroundColor: "black" }}
      >
        <Box
          sx={{
            width: "100vw",
            backgroundColor: "black",
            height: "100vh",
            display: "flex",
            flexDirection: "column",
            // border: "1px solid white",
          }}
          role="presentation"
          onClick={() => setShowMenu(false)}
          onKeyDown={() => setShowMenu(false)}
          // style={{ backgroundColor: "black" }}
        >
          <div style={{ color: "white", flex: 0.2 }}>
            <img src={logo} alt="logo" className="logo-small" />
          </div>
          <div
            style={{
              // border: "1px solid white",
              color: "white",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              flex: 0.8,
              marginBottom: "100px",
            }}
          >
            {list.map((item, i) => {
              const last = item === list[list.length - 1];

              return (
                <ListItem
                  text={item.text}
                  index={i}
                  nav={item.nav}
                  isLast={last}
                />
              );
            })}
          </div>
        </Box>
      </Drawer>
    </header>
  );
};

interface ListItemProps {
  text: string;
  index: number;
  nav: string;
  isLast: boolean;
}

const ListItem = (props: ListItemProps) => {
  const { text, index, nav, isLast } = props;

  const navigate = useNavigate();

  return (
    <div
      key={index}
      style={{
        borderBottom: isLast ? "none" : "2px solid white",
        width: "30%",
        textAlign: "center",
        fontSize: "30px",
        padding: "20px",
        cursor: "pointer",
      }}
      onClick={() => navigate(nav)}
    >
      <h1 className="expand-text">{text}</h1>
    </div>
  );
};
