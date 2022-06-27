import React, { useContext, useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { contextsStore } from "./../contexts/index";

function SingleTrackPage() {
  const params = useParams();
  const { songs } = useContext(contextsStore);
  const [singleTrack, setSingleTrack] = useState({});
  
  useEffect(() => {
    const filtred = songs.filter((item) => item.id === params.singleMusic);
    setSingleTrack(filtred[0]);
  }, []);

  console.log(singleTrack);
  return <h1>{singleTrack.name}</h1>;
}

export default SingleTrackPage;
