import './Camera.scss';
import { useState } from 'react';

function Camera() {

    const [playing, setPlaying] = useState(false);

    const HEIGHT = 500;
    const WIDTH = 500;

    const videoPlayPause = () => {
        const video = document.querySelector('.camera');
        if (!playing) {
            navigator.mediaDevices.getUserMedia({
                // video: {
                //     width : 500,
                //     height : 500
                // }
                video: {
                    width : 320,
                    height : 320
                }
            })
            .then(mediaStream => {
                console.log(mediaStream);
                video.srcObject = mediaStream;
            })
            .catch(err => {
                console.log(err);
            });
        } else if (playing) {
            video.srcObject.getTracks()[0].stop();
        }
        setPlaying(!playing);
    };

    return (
        <div className="camera__container">
            <video
                className="camera"
                autoPlay
                muted
            ></video>
            <button type="button" onClick={videoPlayPause}>
                {!playing ? "Play" : "Pause"}
            </button>
        </div>
    );
};

export default Camera;