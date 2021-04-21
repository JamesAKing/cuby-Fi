import './ObjectDetection.scss';
import React, {useRef, useState, useEffect } from 'react';
import axios from 'axios';
import * as tf from "@tensorflow/tfjs";
import * as tmImage from "@teachablemachine/image";
// import { createItem } from '../../utilities/functions';
import { CupboardDB_URL } from '../../utilities/APIEndPoints';
import MobCamControls from "../camera-mobile/MobCamControls";
import Webcam from 'react-webcam';
import CloseIcon from "../../assets/icons/close.png";
import DeleteIcon from "../../assets/icons/delete.png";

function ObjectDetection({ setShowObjectDetectionModal }) {

  const [ items, setItems ] = useState(null);
  const [ scanning, setScanning ] = useState(false)
  const [ model, setModel ] = useState(null)
  const [ predictions, setPredictions ] = useState(0)

  const URL = "https://teachablemachine.withgoogle.com/models/zss-bTFVJ";
  const modelURL = `${URL}/model.json`;
  const metaDataURL = `${URL}/metadata.json`;

  const webCamRef = useRef(null);

  useEffect(() => {initModel()}, [])

  const initModel = async () => {
    // load model and object classes
    const model = await tmImage.load(modelURL, metaDataURL);
    const objectClasses = model.getTotalClasses();

    setModel(model);
    setPredictions(objectClasses);
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

  return (

    <div className="web-cam__page">
      <ul className="object-detection__items">
          {!items ?
            <li className="object-detection__item">
              <h2>
                {!scanning ? "READY TO SCAN" : "SCANNING ITEM"}
              </h2>
            </li> :
            <li className="object-detection__item"><h2>{items}</h2></li>
        } 
      </ul>
      <div className="web-cam__container">
        {/* {model && 
        <div className="web-cam__mob-close-container" onClick={() => setShowObjectDetectionModal(false)}>
          <img className="web-cam__mob-close-icon" src={CloseIcon} alt="close camera" />
        </div>
        } */}
        {model && <MobCamControls
          items={items}
          scanning={scanning}
          scanItem={scanItem}
          resetItems={resetItems}
          setShowObjectDetectionModal={setShowObjectDetectionModal}
        />}
        <Webcam
          ref={webCamRef}
          muted={true} 
          className="web-cam"
        />
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