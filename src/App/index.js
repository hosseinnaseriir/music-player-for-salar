import React, { useState, useEffect, useContext } from "react";
import Layout from "../components/common/Layout";
import musics from "../util";
import { Routes, Route, Link } from "react-router-dom";
import MainPage from "./../pages/MainPage";
import { contextsStore } from "./../contexts/index";
import Login from "./../pages/Auth/index";
import Loader from "./../components/common/Loader/index";
import SingleTrackPage from "../pages/SingleTrackPage";

function App() {
  const { songs, test, setSongs, curruntSong } = useContext(contextsStore);
  useEffect(() => {
    const updateSongs = songs.map((song) => {
      if (song.id === curruntSong.id) return { ...song, active: true };
      else return { ...song, active: false };
    });
    setSongs(updateSongs);
  }, [curruntSong]);

  return (
    <>
      <Loader />
      <Layout>
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/musics/:singleMusic" element={<SingleTrackPage />} />
          <Route
            path="*"
            element={
              <h1>
                404 <Link to="/">back to home</Link>
              </h1>
            }
          />
        </Routes>
      </Layout>
    </>
  );
}

export default App;
