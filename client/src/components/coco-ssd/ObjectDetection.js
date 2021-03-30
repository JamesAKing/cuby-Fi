import './ObjectDetection.scss';
import React, {useRef, useState, useEffect } from 'react';
import * as tf from "@tensorflow/tfjs";
import * as cocoSsd from "@tensorflow-models/coco-ssd";

import Webcam from 'react-webcam';

function ObjectDetection(props) {

  const [videoPaused, setVideoPaused] = useState(true)
  const [objects, setObjects] = useState(null);

  const webCamRef = useRef(null);
//   const canvasRef = useRef(null);

  const videoPlayPause = () => {
    setObjects(null);
    if (!videoPaused) {
      console.log('Playing')
      runCoco()
    };
    if (videoPaused) {
      console.log('paused');
      // cocoSsd.stop();
    };
    setVideoPaused(!videoPaused);
  }

  const runCoco = async () => {

    const net = await cocoSsd.load();

    let results = [];

    detect(net);
    // for (let i = 0;i < 5; i++) {
    //   results.push(detect(net));
    // }

    // console.log('result: ', results);

    // setInterval(() => {
    //   detect(net);
    // }, 10);

    // results.forEach(result => console.log(result));
  };

  const detect = async (net) => {
    if (
      typeof webCamRef.current !== "undefined" &&
      webCamRef.current !== null &&
      webCamRef.current.video.readyState === 4
    ) {
      const video = webCamRef.current.video;
      const videoWidth = webCamRef.current.video.videoWidth;
      const videoHeight = webCamRef.current.video.videoHeight; 
      
      webCamRef.current.width = videoWidth;
      webCamRef.current.height = videoHeight;

      // Make Detections
      await net.detect(video)
      .then(response => {
        console.log("response: ", response);
        setObjects(response);
      })
    };
  };

  console.log("OBJECTS in state: ", objects);

  return (
    <div className="App">
    <header className="App-header">
      <ul>
          {!objects ?
            <li><h2>LOADING...</h2></li> :
            objects.map(object => <li><h2>{object.class}</h2></li>)    
        } 
      </ul>
      <Webcam
        onClick={videoPlayPause}
        ref={webCamRef}
        muted={true} 
        className="web-cam"
      />

      {/* <canvas
        ref={canvasRef}
        style={{
          position: "absolute",
          marginLeft: "auto",
          marginRight: "auto",
          left: 0,
          right: 0,
          textAlign: "center",
          zindex: 8,
          width: 640,
          height: 480,
        }}
      /> */}
    </header>
  </div>
  );
}

export default ObjectDetection;