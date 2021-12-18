import {
    IonButton,
    IonCard,
    IonCardContent,
    IonCol,
    IonIcon,
    IonRow,
    IonText
} from '@ionic/react'
import {
    timeOutline,
    checkboxOutline,
    squareOutline
} from 'ionicons/icons';
import React, { useEffect, useState } from 'react'

import Indicator from './Indicator';
import PrescriptionActionBtns from './PrescriptionActionBtns';
import PrescriptionImage from './PrescriptionImage';
import {useRecoilState} from "recoil"
import { prescriptionAtom } from '../contexts/recoilstate';


interface PrescriptionInterface {
    id: string,
    title: string,
    time: string,
    type: string,
    checkColor: string,
    dosageCount: string,
    dosage: string,
    isTaken: string,
}

const Prescription: React.FC<PrescriptionInterface> = ({
    id,
    title,
    time,
    type,
    checkColor,
    dosageCount,
    isTaken,
    dosage }) => {

    // todo: display check if prescription is checked
    // todo: toggle taken prescription check state
    // todo: pass prescriptionId(id) to PrescriptionBtn component
    
    const [prescriptions, setPrescriptions ] = useRecoilState(prescriptionAtom)
    
    
    const togglePrescription = (prescriptionId: string) => {
        // todo: update isTaken when function is called
        console.log(prescriptions)
    }

    useEffect(() => {
        togglePrescription("")
    })

    return (
        <IonCard className="prescriptionCard">
            <IonCardContent>
                <IonRow className="ion-justify-content-between">
                    <IonCol>
                        <Indicator color="red" />
                    </IonCol>
                    <IonCol size="5">
                        <div className="p-time">
                            <div className="p-time-top">
                                <IonText className="p-name text-dark">
                                    <h4><b>{title}</b></h4>
                                </IonText>
                                <IonText>2 {type} ({dosageCount}{dosage})</IonText>
                            </div>
                            <div className="p-time-bottom">
                                <IonIcon icon={timeOutline} />
                                {time}
                            </div>
                        </div>
                    </IonCol>
                    <IonCol size="3">
                        <PrescriptionImage imageType={type} />
                    </IonCol>
                    <IonCol>
                        <div className="prescription-action">
                            {/* check button */}
                            <div className="p-action-check">
                                <IonButton style={{ background: checkColor, borderRadius: "5px", boxShadow: 'none' }}  color="default"  >
                                    {isTaken ? (
                                        <IonIcon icon={squareOutline} id="p-check" style={{ color: "blue" }} />
                                        ) : (
                                        <IonIcon icon={checkboxOutline} id="p-check" style={{ color: "red" }} />
                                    )}
                                </IonButton>
                            </div>
                            <PrescriptionActionBtns />
                        </div>
                    </IonCol>
                </IonRow>
            </IonCardContent>
        </IonCard>
    )
}


export default Prescription
