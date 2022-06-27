import React, { useContext } from "react";
import { Box } from "@mui/system";
import logo from "./../../../assets/images/Logo.png";
import { Button, Typography } from "@mui/material";
import MenuItem from "./MenuItem";
import { svgs } from "../../../assets/svgs";
import { contextsStore } from "./../../../contexts/index";
import { useCookies } from "react-cookie";
import { useMemo } from "react";

function SideBar() {
  const { isLoggedIn, setIsLoggedIn } = useContext(contextsStore);
  const [c, s, removeCookie] = useCookies();

  const loggedinInfo = useMemo(() => {
    return (
      <>
        {isLoggedIn ? (
          <Button
            sx={{
              color: "white",
            }}
            variant="link"
            onClick={() => {
              removeCookie("token");
              setIsLoggedIn(false);
            }}
          >
            logout
          </Button>
        ) : (
          <MenuItem href="/login" icon={svgs.song}>
            login
          </MenuItem>
        )}
      </>
    );
  }, [isLoggedIn]);

  return (
    <Box
      sx={{
        background: "#333333",
        height: "100%",
        borderBottomRightRadius: "40px",
      }}
    >
      <Box display="flex" p={3} flexDirection="column">
        <Box display="flex" gap="1rem" alignItems="center">
          <img width="100px" src={logo} />
          <Typography color="primary">Music Player</Typography>
        </Box>
        <Box component="ul">
          <MenuItem href="/" icon={svgs.song}>
            all Songs{" "}
          </MenuItem>
          <MenuItem href="/a" icon={svgs.song}>
            favorite Songs
          </MenuItem>
          <MenuItem href="/b" icon={svgs.song}>
            top Player Songs
          </MenuItem>
          {loggedinInfo}
        </Box>
      </Box>
    </Box>
  );
}

export default React.memo(SideBar);
