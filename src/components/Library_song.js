import React from "react";
import { playAudio } from "../util";
function LibrarySong({
  name,
  image,
  artist,
  songs,
  setCurrentSong,
  id,
  audioRef,
  isPlaying,
  active,
  setSongs,
}) {
  const onSelectHandler = async () => {
    const selectedSong = songs.filter((state) => state.id === id);

    await setCurrentSong(selectedSong[0]);
    // add active State.
    const newSongs = songs.map((song) => {
      if (song.id === id) {
        return {
          ...song,
          active: true,
        };
      } else {
        return {
          ...song,
          active: false,
        };
      }
    });
    setSongs(newSongs);
    //  check if the song is playing.
    if (isPlaying) audioRef.current.play();
    // something was here.
  };
  return (
    <div
      onClick={onSelectHandler}
      className={`library-song ${active ? "selected" : ""}`}
    >
      <img src={image} alt={name} />
      <div className="song-description">
        <h3>{name}</h3>
        <h4>{artist}</h4>
      </div>
    </div>
  );
}

export default LibrarySong;
