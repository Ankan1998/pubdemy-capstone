import React from "react";

interface VideoPlayerProps {
  videoUrl: string;
}

function VideoPlayer({ videoUrl }: VideoPlayerProps) {
  return (
    <div className="embed-responsive embed-responsive-16by9">
      <iframe
        title="Video Player"
        className="embed-responsive-item"
        src={videoUrl}
        allowFullScreen
      ></iframe>
    </div>
  );
}

export default VideoPlayer;