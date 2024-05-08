import { useState, useRef } from 'react'
import './App.css'
import { VideoPlayer } from './VideoPlayer'

function App() {
  const playerRef = useRef(null)
  const videoLink = "http://localhost:8000/uploads/courses/53631ac0-b1da-4e7a-b3c4-ca37ef0242fa/index.m3u8"

  const videoPlayerOptions = {
    controls: true,
    responsive: true,
    fluid: true,
    sources: [
      {
        src: videoLink,
        type: "application/x-mpegURL"
      }
    ]
  }
  const handlePlayerReady = (player) => {
    playerRef.current = player;
    // You can handle player events here, for example:
    player.on("waiting", () => {
      videojs.log("player is waiting");
    });

    player.on("dispose", () => {
      videojs.log("player will dispose");
    });
  };
  return (
    <>
      <div>
        <h1>Video player</h1>
      </div>
      <VideoPlayer
        options={videoPlayerOptions}
        onReady={handlePlayerReady}
      />
    </>
  )
}

export default App
