import { createContext, useState } from "react";
import { useCookies } from "react-cookie";
import musics from "./../util";

// STORE of Contexts
export const contextsStore = createContext({
  songs: [],
  setSongs: () => {},
  curruntSong: {},
  setCurruntSong: () => {},
  isPlaying: false,
  setIsPlaying: () => {},
  loading: false,
  setLoading: () => {},
  isLoggedIn: false,
  setIsLoggedIn: () => {},
});

// PROVIDER of Store
const ContextsProvider = ({ children }) => {
  const [cookie] = useCookies();
  const [songs, setSongs] = useState(musics());
  const [curruntSong, setCurruntSong] = useState(musics()[1]);
  const [isPlaying, setIsPlaying] = useState(false);
  const [loading, setLoading] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(cookie.token);

  return (
    <contextsStore.Provider
      value={{
        songs,
        setSongs,
        curruntSong,
        setCurruntSong,
        isPlaying,
        setIsPlaying,
        loading,
        setLoading,
        isLoggedIn,
        setIsLoggedIn,
      }}
    >
      {children}
    </contextsStore.Provider>
  );
};
export default ContextsProvider;
