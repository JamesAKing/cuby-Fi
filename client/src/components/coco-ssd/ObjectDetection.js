import './ObjectDetection.scss';
import React, {useRef, useState, useEffect } from 'react';
import axios from 'axios';
import * as tf from "@tensorflow/tfjs";
import * as cocoSsd from "@tensorflow-models/coco-ssd";
import * as FoodModel from "../../assets/object-detection/model.json";
import * as tmImage from "@teachablemachine/image";

import { createItem } from '../../utilities/functions';
import { CupboardDB_URL } from '../../utilities/APIEndPoints';

import Webcam from 'react-webcam';

function ObjectDetection(props) {

  const [ items, setItems ] = useState(null);
  const [ scanning, setScanning ] = useState(false)
  const [ model, setModel ] = useState(null)
  const [ predictions, setPredictions ] = useState(0)

  const URL = "https://teachablemachine.withgoogle.com/models/zss-bTFVJ";
  const modelURL = `${URL}/model.json`;
  const metaDataURL = `${URL}/metadata.json`;

  const webCamRef = useRef(null);

  useEffect(() => {
    initModel();
  }, [])

  const initModel = async () => {
    // load model
    const model = await tmImage.load(modelURL, metaDataURL);
    // load number of classes in model
    const maxPredictions = model.getTotalClasses();

    setModel(model);
    setPredictions(maxPredictions);
  }

  const predict = async () => {
    const video = webCamRef.current.video;
    const prediction = await model.predict(video)

    let highestProbablity = 0;
    let bestGuess;

    for (let i = 0; i < predictions; i++) {
      if (prediction[i].probability > highestProbablity) {
        bestGuess = prediction[i].className
        highestProbablity = prediction[i].probability
      }      
    }

    highestProbablity > 0 ? setItems(bestGuess) : setItems("Unable to determine Item - please try again");
  }

  
  const scanImage = async () => {
    await predict();
    setScanning(false);
  }
  
  const scanItem = () => {
    resetItems();
    setScanning(true);
    if (!scanning) {
      scanImage();
    }
  }

  const resetItems = () => setItems(null)

  const addToCupboard = (e) => {
    e.preventDefault();
    if (!items) {
      console.log("No Item to Add")
    } else {
      const newItems = items.map(item => {
        return ({
          itemName : item.class,
          category : "Human",
          qtyNeeded : "1"
        })
      });
      // Add Quantity + category
      axios
        .post(CupboardDB_URL, newItems)
        .then(resp => console.log(resp))
        .then(() => resetItems())
        .catch(err => console.log(err))
    }
  }

  // DEPRECATED
  // const detect = async (model) => {
  //   // Confirm Access to webcam
  //   if (
  //     typeof webCamRef.current !== "undefined" &&
  //     webCamRef.current !== null &&
  //     webCamRef.current.video.readyState === 4
  //   ) {
  //     const video = webCamRef.current.video;

  //     // Detect Objects in Image
  //     await model.detect(video)
  //     .then(resp => {
  //       setItems(resp);
  //     })
  //   };
  // };

  return (

    <div className="web-cam__page">
      <ul>
          {!items ?
            <li><h2>READY TO SCAN</h2></li> :
            <li>{items}</li>
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
        <button className="web-cam__button" type="button" onClick={scanItem}>{scanning ? "SCANNING" : "CLICK TO SCAN"}</button>
        <button className="web-cam__button" type="button" onClick={resetItems}>RESET ITEM</button>
        <button className="web-cam__button" type="submit" onClick={addToCupboard}>ADD ITEM TO CUPBOARD</button>
      </div>

    </div>
  );
}

export default ObjectDetection;