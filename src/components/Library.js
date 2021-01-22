import React from "react";
import LibrarySong from "./Library_song";
function Library({
  songs,
  setCurrentSong,
  audioRef,
  isPlaying,
  setSongs,
  libraryStatus,
  setLibraryStatus,
}) {
  return (
    <div className={`library ${libraryStatus && "active-library"}`}>
      <h2>Library</h2>
      <div className="library-songs">
        {songs.map((song) => (
          <LibrarySong
            songs={songs}
            setCurrentSong={setCurrentSong}
            name={song.name}
            image={song.cover}
            artist={song.artist}
            active={song.active}
            id={song.id}
            key={song.id}
            audioRef={audioRef}
            isPlaying={isPlaying}
            setSongs={setSongs}
          />
        ))}
      </div>
    </div>
  );
}

export default Library;
