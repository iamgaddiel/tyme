import { IonCol, IonContent, IonIcon, IonPage, IonRouterLink, IonRow, IonText } from '@ionic/react'
import { personCircleOutline, cogSharp, barChart, timeSharp } from 'ionicons/icons'
import React from 'react'
import BannerHeader from '../components/BannerHeader'
import LinkCards from "../components/LinkCards"

const ProfileScreen: React.FC = () => {
    return (
        <IonPage>
            <IonContent>
                <BannerHeader />
                <IonRow className="ion-padding">
                    <IonCol size="6">
                        <IonRouterLink routerLink="/profile/detail">
                            <div className="p-option p-dark-blue ion-padding">
                                <div className="p-option-content">
                                    <IonIcon icon={personCircleOutline} color="light" size="large" />
                                    <IonText color="light">
                                        <h3><b>Profile</b></h3>
                                        <span>
                                            Update your information
                                        </span>
                                    </IonText>
                                </div>
                            </div>
                        </IonRouterLink>
                    </IonCol>
                    <IonCol size="6">
                        <IonRouterLink routerLink="/profile/detail">
                            <div className="p-option p-orange ion-padding">
                                <div className="p-option-content">
                                    <IonIcon icon={barChart} color="light" size="large" />
                                    <IonText color="light">
                                        <h3><b>Report</b></h3>
                                        <span>
                                            Update your information
                                        </span>
                                    </IonText>
                                </div>
                            </div>
                        </IonRouterLink>
                    </IonCol>
                    <IonCol size="6">
                        <IonRouterLink routerLink="/profile/detail">
                            <div className="p-option p-blue-light ion-padding">
                                <div className="p-option-content">
                                    <IonIcon icon={timeSharp} color="light" size="large" />
                                    <IonText color="light">
                                        <h3><b>History</b></h3>
                                        <span>
                                            Update your information
                                        </span>
                                    </IonText>
                                </div>
                            </div>
                        </IonRouterLink>
                    </IonCol>
                </IonRow>

            </IonContent>
        </IonPage>
    )
}

export default ProfileScreen
