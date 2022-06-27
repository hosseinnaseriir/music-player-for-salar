import React, { useContext } from "react";
import { Box } from "@mui/system";
import MusicCard from "../components/custom/MusicCard";
import { theme } from "../theme";
import { contextsStore } from "./../contexts/index";
import { Link } from "react-router-dom";

function MainPage() {
  const { songs, setIsPlaying, setCurruntSong } = useContext(contextsStore);
  return (
    <Box
      sx={{
        backgroundColor: theme.palette.common.black,
        color: theme.palette.common.white,
      }}
      p={6}
      component="ul"
    >
      {songs.map((song) => (
        <Link to={`/musics/${song.id}`} key={song.id}>
          <MusicCard
            song={song}
            setIsPlaying={setIsPlaying}
            setCurruntSong={setCurruntSong}
          />
        </Link>
      ))}
    </Box>
  );
}

export default MainPage;
