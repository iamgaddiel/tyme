import { IonImg } from '@ionic/react'
import React from 'react'

import Pill from '../svg/pill.svg';
import Tablet from '../images/Medicine-02.png';
import '../styles/app.css';


const PrescriptionImage: React.FC<{imageType: string}> = ({imageType}) => {
    // todo: update image based on image prop
    // todo: update alt attrib with image name
    return (
        <div className="p-type-image-container">
            { imageType === "tablet" ? (
                <img src={Pill} alt="pill" id="p-type-image" />
            ) : (
                <img src={Tablet} alt="tablet" id="p-type-image" />
            )}
        </div>
    )
}

export default PrescriptionImage
