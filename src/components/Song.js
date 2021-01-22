import React from "react";

function Song({ currentSong }) {
  return (
    <div className="song-container" key={currentSong.id}>
      <img src={currentSong.cover} alt={currentSong.name} />
      <h2>{currentSong.name}</h2>
      <h1>{currentSong.artist}</h1>
    </div>
  );
}

export default Song;
