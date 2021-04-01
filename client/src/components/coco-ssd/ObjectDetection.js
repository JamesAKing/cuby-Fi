import './ObjectDetection.scss';
import React, {useRef, useState } from 'react';
import axios from 'axios';
import * as tf from "@tensorflow/tfjs";
import * as cocoSsd from "@tensorflow-models/coco-ssd";

import Webcam from 'react-webcam';

function ObjectDetection(props) {

  const [videoPaused, setVideoPaused] = useState(true)
  const [items, setItems] = useState(null);

  const webCamRef = useRef(null);
  
  const scanItem = () => {
    // Add check to ensure only food items are scanned (no person/chair/etc.)
    resetItems();
    if (!videoPaused) {
      console.log('Playing')
      runCoco()
    };
    if (videoPaused) {
      console.log('paused');
    };
    setVideoPaused(!videoPaused);
  }

  const resetItems = () => {
    setItems(null);
  }

  const addToCupboard = (e) => {
    e.preventDefault();
    if (!items) {
      console.log("No Item to Add")
    } else {
      const newItems = items.map(item => {
        return ({
          itemName : "item.class",
          category : "Human",
          qtyNeeded : "1"
        })
      });
      // Add Quantity have/needed
      console.log(newItems);
      axios
        .post('http://localhost:8080/cupboard', {newItems})
        .then(resp => {
          console.log(resp);
          resetItems();
        })
        .catch(err => {
          console.log(err);
        })
    }
  }

  const runCoco = async () => {

    const model = await cocoSsd.load();

    detect(model);
    // Is one image enough for accurate results?
  };

  const detect = async (model) => {
    if (
      typeof webCamRef.current !== "undefined" &&
      webCamRef.current !== null &&
      webCamRef.current.video.readyState === 4
    ) {
      const video = webCamRef.current.video;

      // Make Detections
      await model.detect(video)
      .then(response => {
        setItems(response);
      })
    };
  };

  return (

    <div className="web-cam__page">
      <ul>
          {!items ?
            <li><h2>LOADING...</h2></li> :
            items.map(object => <li><h2>{object.class}</h2></li>)    
        } 
      </ul>
      <div className="web-cam__container">
        <Webcam
          ref={webCamRef}
          muted={true} 
          className="web-cam"
        />
        <button type="button" className="web-cam__button-mobile" onClick={scanItem}></button>
      </div>
      <div className="web-cam__buttons">
        <button className="web-cam__button" type="button" onClick={scanItem}>SCAN ITEM</button>
        <button className="web-cam__button" type="button" onClick={resetItems}>RESET ITEM</button>
        <button className="web-cam__button" type="submit" onClick={addToCupboard}>ADD ITEM TO CUPBOARD</button>
      </div>

    </div>
  );
}

export default ObjectDetection;