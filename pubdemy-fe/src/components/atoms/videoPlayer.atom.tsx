import React from "react";

interface VideoPlayerProps {
  videoUrl: string;
}

function VideoPlayer({ videoUrl }: VideoPlayerProps) {
  return (
    <div className="embed-responsive embed-responsive-16by9">
        <video
          height="100%"
          width="100%"
          controls
          src={"http://localhost:5555/course/video/1"}
        />
    </div>
  );
}

export default VideoPlayer;