import './Cupboard.scss';
// import Camera from "../components/camera/Camera";
import ObjectDetection from "../components/coco-ssd/ObjectDetection";

function CupboardPage() {
    return (
        <main>
            <header className="cupboard__header"></header>
            <ObjectDetection />
        </main>
    );
}

export default CupboardPage;