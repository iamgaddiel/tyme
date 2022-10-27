import {
  IonContent,
  IonIcon,
  IonItem,
  IonItemOption,
  IonItemOptions,
  IonItemSliding,
  IonLabel,
  IonList,
  IonPage,
} from "@ionic/react";
import { pencil, trash } from "ionicons/icons";
import React, { useState } from "react";
import Header from "../../components/Header";
import PrescriptionItem from "../../components/PrescriptionItem";
import SearchBar from "../../components/SearchBar";

import "./Home.css";

const prescriptions = [
  {
    id: "1",
    type: "pill",
    time: new Date().getTime().toString(),
    title: "Med One",
    dosage: 2,
    quantity: 23,
    isChecked: true,
  },
  {
    id: "2",
    type: "pill",
    time: new Date().getTime().toString(),
    title: "Med One",
    dosage: 2,
    quantity: 23,
    isChecked: true,
  },
  {
    id: "3",
    type: "pill",
    time: new Date().getTime().toString(),
    title: "Med One",
    dosage: 2,
    quantity: 23,
    isChecked: true,
  },
];

const Home = () => {
  const [drugs, setDrugs] = useState(prescriptions);

  return (
    <IonPage>
      <IonContent className="wrapper ion-padding">
        <Header />

        <h1 className="ion-margin-vertical-horizontal">
          Hi Gaddiel,
          <SearchBar searchText="" />
        </h1>

          {drugs.map((med) => (
              <PrescriptionItem
                dosage={med.dosage}
                id={med.id}
                isChecked={med.isChecked}
                quantity={med.quantity}
                time={med.time}
                type="pill"
                title={med.title}
              />

          ))}
      </IonContent>
    </IonPage>
  );
};

export default Home;
