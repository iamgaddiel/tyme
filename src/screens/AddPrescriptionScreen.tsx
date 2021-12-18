import {
  IonCol,
  IonContent,
  IonIcon,
  IonFab,
  IonFabButton,
  IonInput,
  IonLabel,
  IonRow,
  IonSelect,
  IonSelectOption,
  IonButton,
  IonImg,
  IonPage,
} from "@ionic/react";
import { arrowBackOutline } from "ionicons/icons";
import { useForm } from "react-hook-form";
import { useRecoilState } from "recoil"
import { useHistory } from "react-router-dom"

import "../styles/app.css";
import MedTeam from "../images/med-team.png";
import { prescriptionAtom } from "../contexts/recoilstate"
import { getRandomString } from "../utils/random";
import {savePrescription} from '../cloud/prescriptions';









const AddPrescription: React.FC = () => {
  // const { isTabComponent, setIsTabComponent } = useContext(CustomContext);

  const [prescription, setPrescription] = useRecoilState(prescriptionAtom)

  interface formValues {
    drug: string;
    drugForm: string;
    dosageCount: string;
    dosage: string;
    quantity: string;
    illness: string;
    timeStart: string;
    interval: string;
    durationStart: string;
    durationFinish: string;
  }

  const { register, handleSubmit } = useForm<formValues>();
  const history = useHistory()

  const submitPrescription = async (data: any) => {
    // todo: send form data to firebase onsubmit
    // todo: display dialog asking to view prescription or to add another
    // todo: if view prescription, redirect to prescription list screen

    const prescriptionId = getRandomString(10)
    let formData = { ...data, "isTaken": false, 'id': prescriptionId }



    // formData = [...prescription, formData]
    // setPrescription(formData)
    // window.location.href = "/dashboard"'

    
    try{
      let prescriptionSuccess =  await savePrescription(formData);
      console.log(prescriptionSuccess, "upload successful very very well");
    } 
    catch {
      console.error("Prescription did not upload to firestore successfully");
    }

    history.push("/dashboard")
  };


  return (
    <IonPage>
      <IonContent>
        <div className="p-form-top">
          <IonFab vertical="top" horizontal="start" slot="fixed">
            <IonFabButton
              size="small"
              routerLink="/dashboard"
              routerDirection="back"
              color="default"
              id="p-back-btn"
            >
              <IonIcon icon={arrowBackOutline} color="light" />
            </IonFabButton>
          </IonFab>
        </div>

        <div className="p-form-bottom ion-padding">
          <h3>
            <b>Add Prescription</b>
          </h3>

          <form
            onSubmit={handleSubmit(submitPrescription)}
            id="prescriptionForm"
          >
            <div className="form-group">
              <IonLabel>Drug</IonLabel>
              <IonSelect
                placeholder="Select a drug"
                value=""
                className="p-form-input ion-margin-top"
                {...register("drug")}
              >
                <IonSelectOption value="paracetamol">
                  Paracetamol
                </IonSelectOption>
                <IonSelectOption value="weed">Weed</IonSelectOption>
                <IonSelectOption value="vitamin-c">Vitamin-c</IonSelectOption>
              </IonSelect>
            </div>

            <div className="form-group ion-margin-top">
              <IonLabel>Drug Form</IonLabel>
              <IonSelect
                placeholder="Select Form"
                value=""
                className="p-form-input ion-margin-top"
                {...register("drugForm")}
              >
                <IonSelectOption value="capsule">Capsule</IonSelectOption>
                <IonSelectOption value="tablet">Tablet</IonSelectOption>
              </IonSelect>
            </div>
            {/* Dosage */}
            <div className="form-group ion-margin-top">
              <IonRow className="ion-align-items-center">
                <IonCol>
                  <IonLabel>Dosage</IonLabel>
                </IonCol>
                <IonCol>
                  <IonSelect
                    value=""
                    className="p-form-input ion-margin-start"
                    okText="Confirm"
                    placeholder="10"
                    style={{ padding: "10px" }}
                    {...register("dosageCount")}
                  >
                    <IonSelectOption value="10">10</IonSelectOption>
                    <IonSelectOption value="20">20</IonSelectOption>
                    <IonSelectOption value="20">30</IonSelectOption>
                    <IonSelectOption value="20">40</IonSelectOption>
                  </IonSelect>
                </IonCol>
                <IonCol>
                  <IonSelect
                    value=""
                    className="p-form-input ion-margin-start"
                    placeholder="mg"
                    style={{ padding: "10px" }}
                    {...register("dosage")}
                  >
                    <IonSelectOption value="mg">mg</IonSelectOption>
                    <IonSelectOption value="mcg">mcg</IonSelectOption>
                    <IonSelectOption value="g">g</IonSelectOption>
                    <IonSelectOption value="ml">ml</IonSelectOption>
                  </IonSelect>
                </IonCol>
              </IonRow>
            </div>
            {/* Quantity */}
            <div className="form-group ion-margin-top">
              <IonLabel>Quantity</IonLabel>
              <IonInput
                type="number"
                placeholder="1"
                className="p-form-input ion-margin-top"
                min="0"
                {...register("quantity")}
              />
            </div>
            {/* Indicator */}
            <div className="form-group ion-margin-top">
              <IonLabel>Indication</IonLabel>
              <IonInput
                type="text"
                placeholder="illness for this drug"
                spellCheck
                className="p-form-input ion-margin-top"
                {...register("illness")}
              />
            </div>
            {/* time selection */}
            <IonRow className="ion-margin-top">
              {/* Time */}
              <IonCol size="6">
                <IonLabel>Time</IonLabel>
                <IonInput type="time" {...register("timeStart")} />
              </IonCol>
              {/* Interval */}
              <IonCol size="6">
                <IonLabel>Interval</IonLabel>
                <IonSelect
                  className="p-form-input ion-margin-top"
                  placeholder="6hr"
                  {...register("interval")}
                >
                  <IonSelectOption value="6">6hr</IonSelectOption>
                  <IonSelectOption value="8">8hr</IonSelectOption>
                  <IonSelectOption value="12">12hr</IonSelectOption>
                  <IonSelectOption value="24">24hr</IonSelectOption>
                </IonSelect>
              </IonCol>
            </IonRow>
            {/* Duration */}
            <div className="form-group ion-margin-top">
              <IonLabel>Duration</IonLabel>
              <IonRow className="ion-justify-content-between">
                <IonCol>
                  <IonInput type="date" {...register("durationStart")} />
                </IonCol>
                <IonCol>
                  <IonInput type="date" {...register("durationFinish")} />
                </IonCol>
              </IonRow>
            </div>

            {/* submit button */}
            <IonButton
              type="submit"
              id="p-form-btn"
              fill="solid"
              size="small"
              expand="block"
              className="ion-text-center ion-margin-top"
              color="default"
              style={{
                width: "70%",
                margin: "auto",
                backroundColor: "transparent",
              }}
            >
              Add
            </IonButton>
          </form>

          {/* image */}
          <div className="p-form-image">
            <IonImg src={MedTeam}></IonImg>
          </div>
        </div>
      </IonContent>
    </IonPage>
  );
};

export default AddPrescription;
