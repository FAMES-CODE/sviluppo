import React from "react";
import { useParams } from "react-router";
import ReactPlayer from 'react-player'
import "./Error.css";

function Error() {
  var { parms } = useParams();
  return (
    <div id="error">
      <div id="errcontent">
        <h1>
          THIS ENDPOINT <span id="params">"{parms}"</span> LEAD NOWHERE{" "}
          <br />
        
          GO BACK TO <a id="goback" href="/">HOME</a> STRANGER !
          <ReactPlayer
          id="player"
            width="0"
            playing="true"
            volume="0.2"
            loop="true"
            url="https://www.youtube.com/watch?v=zSGPoLCY0xU"
          />
        </h1>
      </div>
    </div>
  );
}

export default Error;
