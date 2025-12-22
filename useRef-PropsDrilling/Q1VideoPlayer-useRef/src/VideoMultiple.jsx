import { useRef, useState } from "react";

const videos = [
  "https://www.w3schools.com/html/mov_bbb.mp4",
  "https://www.w3schools.com/html/movie.mp4",
  "https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4"
];

function VideoMultiple() {
  const videoRef = useRef(null);
  const [currentVideoIndex, setCurrentVideoIndex] = useState(0);

  const playVideo = () => videoRef.current && videoRef.current.play();
  const pauseVideo = () => videoRef.current && videoRef.current.pause();
  const forwardVideo = () =>
    videoRef.current && (videoRef.current.currentTime += 5);
  const rewindVideo = () =>
    videoRef.current && (videoRef.current.currentTime -= 5);

  const nextVideo = () => {
    setCurrentVideoIndex((prev) => (prev + 1) % videos.length);
  };

  const prevVideo = () => {
    setCurrentVideoIndex((prev) =>
      prev === 0 ? videos.length - 1 : prev - 1
    );
  };

  return (
    <div className="page">
      <div className="player-box">
        <h2>Multiple Video Player</h2>

        <video
          ref={videoRef}
          src={videos[currentVideoIndex]}
          width="500"
          controls
        />

        <div className="controls">
          <button onClick={playVideo}>▶️ Play</button>
          <button onClick={pauseVideo}>⏸ Pause</button>
          <button onClick={rewindVideo}>⏪ Rewind</button>
          <button onClick={forwardVideo}>⏩ Forward</button>
        </div>

        <div className="controls">
          <button onClick={prevVideo}>⏮ Previous</button>
          <button onClick={nextVideo}>⏭ Next</button>
        </div>
      </div>
    </div>
  );
}

export default VideoMultiple;
