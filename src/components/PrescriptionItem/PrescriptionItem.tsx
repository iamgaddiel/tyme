import { IonCard, IonCardSubtitle, IonIcon, IonTitle } from "@ionic/react";
import { timeOutline } from "ionicons/icons";
import React from "react";

import "./PrescriptionItem.css";

type Props = {
  title: string;
  time: string;
  type: "pill" | "tablet" | "liquid";
  dosage: number;
  quantity: number;
  id: string;
  isChecked: boolean;
};

const PrescriptionItem: React.FC<Props> = ({
  title,
  time,
  type,
  dosage,
  quantity,
  id,
  isChecked,
}) => {
  return (
    <IonCard className="item-card">
      <div className="indicator"></div>
      <div className="detail">
        <div className="detail-top">
          <span className="title">{title}</span>
          <span className="ion-text-dark">
            {quantity} ( {dosage}mg )
          </span>
        </div>
        <div className="detail-bottom">
          <span className="ion-text-dark">
            <IonIcon icon={timeOutline} slot="start" />
            {time}
          </span>
        </div>
      </div>
    </IonCard>
  );
};

export default PrescriptionItem;
