import { IonIcon, IonRouterLink, IonText } from "@ionic/react";
import { cogSharp } from "ionicons/icons";
import React from "react";


// todo: Complete this component 

interface proptypes{
    bgcolor: string;
    title: string;
    link: string;
}

const LinkCards: React.FC<proptypes> = ({bgcolor, title, link}) => {
  return (
    <>
      <IonRouterLink href={link}>
        <div className="p-option p-{bgcolor} ion-padding">
          <div className="p-option-content">
            <IonIcon icon={cogSharp} color="light" size="large" />
            <IonText color="light">
              <h3>
                <b>{title}</b>
              </h3>
              <span>Update your information</span>
            </IonText>
          </div>
        </div>
      </IonRouterLink>
    </>
  );
};

export default LinkCards;
