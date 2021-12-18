import {
  IonContent,
  IonFab,
  IonIcon,
  IonPage,
  IonFabButton,
  IonButton,
  IonImg,
  IonRow,
  IonCol,
  IonRouterLink,
  IonText,
} from "@ionic/react";
import { addOutline, personAddOutline } from "ionicons/icons";
import React, { useContext, useEffect } from "react";
import { Col, Container, Row } from "reactstrap";
import { useRecoilState, useRecoilValue } from "recoil"

import Banner from "../components/Banner";
import BannerHeader from "../components/BannerHeader";
import Prescription from "../components/Prescription";
import { prescriptionAtom } from "../contexts/recoilstate"

// svg
import nurse from "../images/FEMALE.png";






const PopulatedDashboard: React.FC = () => {

  const prescriptions = useRecoilValue(prescriptionAtom)


  useEffect(() => {
    console.log(prescriptions, "populated dashboard", typeof prescriptions)
  }, [prescriptions]);

  return (
    <IonPage className="homeScreen">
      <IonContent fullscreen>
        <Banner />
        <ul className="mt-5">
          {React.Children.toArray(
            prescriptions.map(({
              drug,
              drugForm,
              timeStart,
              dosage,
              dosageCount,
              id,
              isTaken,
            }) => (
              <Prescription
                time={timeStart}
                type={drugForm}
                checkColor="#bbb"
                title={drug}
                dosage={dosage}
                dosageCount={dosageCount}
                id={id}
                isTaken={isTaken}
              />
            ))
          )}
        </ul>
        {/* floating action button */}
        <IonFab vertical="bottom" horizontal="end" slot="fixed">
          <IonFabButton
            className="fab"
            routerLink="/prescription/add"
            routerDirection="forward"
          >
            <IonIcon icon={addOutline} size="large" />
          </IonFabButton>
        </IonFab>
      </IonContent>
    </IonPage>
  );
};

const EmptyDashboard = () => {
  return (
    <IonPage>
      <IonContent fullscreen>
        {/* Banner Header */}
        <BannerHeader />
        
        <Container className="ion-pading">
          <div className="db-action-div">
            <div className="d-flex action-wrapper">
              <div className="action-text">
                <p className="text-light">
                  Kindly click on the add prescription button to get started
                </p>
                <IonButton
                  routerLink="/prescription/add"
                  routerDirection="forward"
                  className="db-action-btn"
                  // color="danger"
                  fill="clear"
                  size="default"
                >
                  <span className="text-light">Add prescription</span>
                </IonButton>
              </div>
              <IonImg src={nurse} className="db-action-panel-image" />
            </div>
          </div>

          <section className="homeCards mt-5">
            <Container className="d-flex justify-content-center align-items-center">
              <IonRow>
                {/* Card1 */}
                <IonCol size="6">
                  <IonRouterLink routerLink="/profile/detail">
                    <div className="p-option p-pale-blue ion-padding home-card">
                      <div className="p-option-content">
                        <IonIcon
                          icon={personAddOutline}
                          color="light"
                          size="large"
                        />
                        <IonText color="light">
                          <h3>
                            <b>Profile</b>
                          </h3>
                          <span>Update your information</span>
                        </IonText>
                      </div>
                    </div>
                  </IonRouterLink>
                </IonCol>

                {/* Card 3 */}
                <IonCol size="6">
                  <IonRouterLink routerLink="/profile/detail">
                    <div className="p-option p-dark-blue ion-padding home-card">
                      <div className="p-option-content">
                        <IonIcon
                          icon={personAddOutline}
                          color="light"
                          size="large"
                        />
                        <IonText color="light">
                          <h3>
                            <b>Profile</b>
                          </h3>
                          <span>Update your information</span>
                        </IonText>
                      </div>
                    </div>
                  </IonRouterLink>
                </IonCol>

                {/* Card 3 */}
                <IonCol size="6">
                  <IonRouterLink routerLink="/profile/detail">
                    <div className="p-option p-dark-blue ion-padding home-card">
                      <div className="p-option-content">
                        <IonIcon
                          icon={personAddOutline}
                          color="light"
                          size="large"
                        />
                        <IonText color="light">
                          <h3>
                            <b>Profile</b>
                          </h3>
                          <span>Update your information</span>
                        </IonText>
                      </div>
                    </div>
                  </IonRouterLink>
                </IonCol>

                {/* Card 4 */}
                <IonCol size="6">
                  <IonRouterLink routerLink="/profile/detail">
                    <div className="p-option p-orange ion-padding home-card">
                      <div className="p-option-content">
                        <IonIcon
                          icon={personAddOutline}
                          color="light"
                          size="large"
                        />
                        <IonText color="light">
                          <h3>
                            <b>Profile</b>
                          </h3>
                          <span>Update your information</span>
                        </IonText>
                      </div>
                    </div>
                  </IonRouterLink>
                </IonCol>

              </IonRow>
            </Container>
          </section>
        </Container>
      </IonContent>
    </IonPage>
  );
};


const Dashboard = () => {

  const prescriptions = useRecoilValue(prescriptionAtom)

  useEffect(() => {
    console.log(prescriptions, "dashboard");
  }, [prescriptions])



  return (
    <>
      {prescriptions.length !== 0 ? <PopulatedDashboard /> : <EmptyDashboard />}
    </>
  );
};

export default Dashboard;
