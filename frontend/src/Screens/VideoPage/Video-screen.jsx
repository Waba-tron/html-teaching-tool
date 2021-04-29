import React from "react";
import Panel from "../../components/Panel/Panel.jsx";
import htmlContent from "../../data/data.js";
import "./Video.styles.scss";
const VideoScreen = ({ match }) => {
  return (
    <div className="video-page">
      {htmlContent.videoContent.map((videoInfo) =>
        videoInfo.topic === match.params.topic ? (
          <div>
            <div className="video">
              <iframe
                width="100%"
                height="315"
                src={`${videoInfo.videoLink}`}
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen
              ></iframe>
            </div>
            <Panel
              givenHtml={`${videoInfo.codeString}`}
              language={`${videoInfo.language}`}
            />
          </div>
        ) : (
          ""
        )
      )}
    </div>
  );
};

export default VideoScreen;
