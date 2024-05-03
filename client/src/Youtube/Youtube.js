import React, { useState, useEffect } from "react";
// Import from the env 
// const api_url = process.env.REACT_APP_API_KEY;
// console.log(api_url)

const Youtube = () => {
  const [youTubeVideos, setYouTubeVideos] = useState([]);

  // useEffect(() => {
  //   fetch(
  //     `https://youtube.googleapis.com/youtube/v3/search?part=snippet&channelId=UCE_M8A5yxnLfW0KghEeajjw&maxResults=9&order=date&key=AIzaSyBRadWQZ1opFP7QTq5QZmQGzwJdgd5TphE`
  //   )
  //     .then((response) => response.json())
  //     .then((data) => {
  //       const videos = data.items;
  //       setYouTubeVideos(videos);
  //     });
  // }, []);

  return (
    <div className="allVideosWrapper">
      <div className="container">
        <div className="row h-100 align-items-center justify-content-center text-center">
          <div className="col-12">
            <div className="title-wraper bold video-title-wrapper">
              Latest Videos
            </div>
          </div>
          {youTubeVideos.map((singleVideo, i) => {
            const vidId = singleVideo.id.videoId;
            const vidLink = `https://www.youtube.com/watch?v=${vidId}`;
            return (
              <div key={i} className="col-sm-12 col-md-4">
                <div className="singleVideoWrapper">
                  <div className="videoThumbnail">
                    <a href={vidLink} target="_blank" rel="noopener noreferrer">
                      <img src={singleVideo.snippet.thumbnails.high.url} alt="" />
                    </a>
                  </div>
                  <div className="videoInfoWrapper">
                    <div className="videoTitle">
                      <a href={vidLink} target="_blank" rel="noopener noreferrer">
                        {singleVideo.snippet.title}
                      </a>
                    </div>
                    <div className="videoDesc">
                      {singleVideo.snippet.description}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Youtube;