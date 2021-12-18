import React, { useState } from 'react';
import { IonButton, IonIcon, IonAlert } from '@ionic/react';
import { pencil, text, trash } from 'ionicons/icons';




const PrescriptionActionBtns: React.FC = () => {
    // todo: create and pass prescriptionId(id) prop

    const [alert, setAlert] = useState<boolean>(false);
    const [errorMessage, setAlertMessage] = useState<string>('')

    return (
        <>
            <IonAlert
                isOpen={alert}
                message="Do you really want to delete this prescription ?"
                buttons={[
                    {
                        text: "Nah",
                        handler: () => setAlert(false),
                        cssClass: "primary"
                    },
                    {
                        text: "Yeah",
                        // call a function to delete prescription with the passed id
                        handler: () => setAlert(false),
                        cssClass: "danger"
                    }]}
            />

            <div className="p-action-btns">
                {/* Delete Button */}
                <IonButton
                    className="ion-no-padding"
                    color="default">
                    <IonIcon icon={pencil} color="dark" />
                </IonButton>
                {/* Edit Button */}
                <IonButton
                    className="ion-no-padding"
                    color="default"
                    onClick={() => setAlert(true)}>
                    <IonIcon icon={trash} color="dark" />
                </IonButton>
            </div>
        </>
    )
}

export default PrescriptionActionBtns
