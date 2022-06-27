import React from "react";
import { Box } from "@mui/system";
import { Avatar } from "@mui/material";
import { Typography } from "@mui/material";

const musicCardStyles = {
  alignItems: "center",
  gap: "20px",
  flexWrap: "wrap",
  "@keyframes animate": {
    from: {
      backgroundPosition: "0px",
    },
    to: {
      backgroundPosition: "5000px",
    },
  },
};

function MusicCard({ song, setIsPlaying, setCurruntSong }) {
  return (
    <Box
      my={2}
      sx={{
        ...musicCardStyles,
        "&::after": {
          content: `''`,
          display: "block",
          background:
            "linear-gradient(90deg, rgba(29, 185, 84, 0.7) 0%, rgba(196, 196, 196, 0.7) 100%)",
          height: "4px",
          width: "100%",
          animation: song.active ? "animate 20s ease infinite" : "",
        }
      }}
      // onClick={() => {
      //   setIsPlaying(false);
      //   setCurruntSong(song);
      // }}
      key={song.id}
      component="li"
      display="flex"
    >
      <Avatar
        sx={{ width: "120px", height: "120px" }}
        src={song.cover}
      ></Avatar>
      <Box>
        <Typography fontSize="24px">{song.name}</Typography>
        <Typography color="primary" fontSize="14px">
          {song.artist}
        </Typography>
      </Box>
    </Box>
  );
}

export default MusicCard;
