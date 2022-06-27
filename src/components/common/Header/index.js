import React, { useEffect, useRef, useState } from "react";
import { classes } from "./header.style";
import { Box, Container } from "@mui/system";
import PlayArrowRoundedIcon from "@mui/icons-material/PlayArrowRounded";
import PauseRoundedIcon from "@mui/icons-material/PauseRounded";
import { ButtonBase, Typography } from "@mui/material";
import ArrowBackIosNewRoundedIcon from "@mui/icons-material/ArrowBackIosNewRounded";
import ArrowForwardIosRoundedIcon from "@mui/icons-material/ArrowForwardIosRounded";
import StarRoundedIcon from "@mui/icons-material/StarRounded";

import logo from "./../../../assets/images/Logo.png";
import mohsen from "./../../../assets/images/mohsen.png";
import { useContext } from "react";
import { contextsStore } from "./../../../contexts/index";
function Header() {
  const {
    songs,
    curruntSong,
    setCurruntSong,
    isPlaying,
    setIsPlaying,
  } = useContext(contextsStore);
  const [musicTime, setMusicTime] = useState(0);
  const audioRef = useRef(null);
  useEffect(() => {
    // setInterval(() => {
    setMusicTime(audioRef.current.currentTime);
    // }, 1000);
  }, []);

  const handlePlayMusic = () => {
    setIsPlaying(false);
    audioRef.current.play().then(() => {
      setIsPlaying(true);
    });
  };

  const handlePauseMusic = () => {
    audioRef.current.pause();
    setIsPlaying(false);
  };

  useEffect(() => {
    handlePlayMusic();
  }, [curruntSong]);

  const handlePrevMusic = () => {
    const currentSongIndex = songs.findIndex(
      (song) => song.id === curruntSong.id
    );
    if (currentSongIndex <= 0) {
      setCurruntSong(songs[songs.length - 1]);
    } else {
      setCurruntSong(songs[currentSongIndex - 1]);
    }
  };

  const handleNextMusic = () => {
    const currentSongIndex = songs.findIndex(
      (song) => song.id === curruntSong.id
    );
    if (currentSongIndex === songs.length - 1) {
      setCurruntSong(songs[0]);
    } else {
      setCurruntSong(songs[currentSongIndex + 1]);
    }
  };

  return (
    <Box
      sx={{
        background: `linear-gradient(180deg, ${
          curruntSong.color[0] || "#333333"
        } 0%, ${curruntSong.color[1] || "#23352A"} 100%)`,
        ...classes.root,
      }}
      px={3}
    >
      <audio
        onEnded={handleNextMusic}
        ref={audioRef}
        src={curruntSong.audio}
      ></audio>
      <Box
        sx={{
          backgroundImage: `url(${curruntSong.cover})`,
          ...classes.musicCover,
        }}
        flex={1}
      >
        {isPlaying ? (
          <ButtonBase onClick={handlePauseMusic}>
            <PauseRoundedIcon />
          </ButtonBase>
        ) : (
          <ButtonBase onClick={handlePlayMusic}>
            <PlayArrowRoundedIcon />
          </ButtonBase>
        )}
      </Box>
      <Box flex={3} sx={classes.musicDetails}>
        <Typography variant="h3">
          <Box component="span">{curruntSong.name}</Box>
          <StarRoundedIcon />
        </Typography>
        <Typography variant="h5">{curruntSong.artist}</Typography>
        <Box sx={classes.musicTime}>
          <Box
            mb={1}
            display="flex"
            justifyContent="space-between"
            sx={classes.musicDuration}
          >
            <Typography>
              {("0" + Math.floor(audioRef?.current?.currentTime / 60)).slice(
                -2
              )}{" "}
              :{" "}
              {("0" + Math.floor(audioRef?.current?.currentTime % 60)).slice(
                -2
              )}
            </Typography>
            <Typography>
              {("0" + Math.floor(audioRef?.current?.duration / 60)).slice(-2)} :{" "}
              {("0" + Math.floor(audioRef?.current?.duration % 60)).slice(-2)}
            </Typography>
          </Box>
          <Box sx={classes.musicProgress}>
            <input
              type="range"
              value={audioRef?.current?.currentTime || 0}
              min={0}
              max={audioRef?.current?.duration}
              onChange={(e) => {
                audioRef.current.currentTime = e.target.value;
                setMusicTime(e.target.value);
              }}
            />
            <Box
              width={
                (audioRef?.current?.currentTime / audioRef?.current?.duration) *
                  100 +
                  "%" || 0
              }
              sx={classes.musicProgressBar}
            ></Box>
          </Box>
          <Box mt={2} sx={classes.musicControls}>
            <ButtonBase>
              <ArrowBackIosNewRoundedIcon onClick={handlePrevMusic} />
            </ButtonBase>
            <ButtonBase>
              <PlayArrowRoundedIcon />
            </ButtonBase>
            <ButtonBase>
              <ArrowForwardIosRoundedIcon onClick={handleNextMusic} />
            </ButtonBase>
          </Box>
        </Box>
      </Box>
      <Box flex={1} alignSelf="start" display="flex" justifyContent="flex-end">
        <Box
          width="100px"
          alignSelf="flex-start"
          component="img"
          src={logo}
        ></Box>
      </Box>
    </Box>
  );
}

export default Header;

// prop drilling...
// STORE(state) -> state (context) ...
// PROVIDER(STORE , APP) -> context ...
