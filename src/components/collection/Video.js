import React from 'react';

const Video = () => {
  return (
    <div className='videoContainer'>
      <video src='assets/landingVideo.mp4' loop frameBorder="0" controls autoPlay muted ></video>
    </div>
  );
};

export default Video;
