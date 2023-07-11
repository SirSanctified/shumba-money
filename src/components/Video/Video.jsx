import React from "react";
import { MdPause, MdPlayArrow } from "react-icons/md";
import "./Video.css";

const Video = ( { source } ) => {
  const [playVideo, setPlayVideo] = React.useState(false);
  const vidRef = React.useRef();
  const handleVideo = () => {
    setPlayVideo((prevPlayVideo) => !prevPlayVideo);
    if (playVideo) {
      vidRef.current.pause();
    } else {
      vidRef.current.play();
    }
  };
  return (
    <section className="Video">
      <div className="overlay">
        <div className="overlay-buttons__container" onClick={handleVideo}>
          {!playVideo ? (
            <MdPlayArrow color="#f48915" size={30} />
          ) : (
            <MdPause color="#f48915" size={30} />
          )}
        </div>
      </div>
      <div className="video-container">
        <video
          src={source}
          ref={vidRef}
          loop
          typeof="video/mp4"
          controls={false}
          muted
        />
      </div>
    </section>
  );
};

export default Video;
