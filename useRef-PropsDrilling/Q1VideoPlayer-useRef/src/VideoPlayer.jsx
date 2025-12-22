import { useRef } from "react";

function VideoPlayer() {
  const videoRef = useRef(null);

  const playVideo = () => {
    if (videoRef.current) videoRef.current.play();
  };

  const pauseVideo = () => {
    if (videoRef.current) videoRef.current.pause();
  };

  const forwardVideo = () => {
    if (videoRef.current) videoRef.current.currentTime += 5;
  };

  const rewindVideo = () => {
    if (videoRef.current) videoRef.current.currentTime -= 5;
  };

  return (
    <div className="page">
      <div className="player-box">
        <h2>Single Video Player</h2>

        <video
          ref={videoRef}
          src="https://www.w3schools.com/html/mov_bbb.mp4"
          width="500"
          controls
        />

        <div className="controls">
          <button onClick={playVideo}>▶️ Play</button>
          <button onClick={pauseVideo}>⏸ Pause</button>
          <button onClick={rewindVideo}>⏪ Rewind</button>
          <button onClick={forwardVideo}>⏩ Forward</button>
        </div>
      </div>
    </div>
  );
}

export default VideoPlayer;
