import React from 'react';
import {IonButtons, IonButton, IonMenuButton, IonIcon} from '@ionic/react';
import {notifications} from 'ionicons/icons';

const BannerHeader = () => {
    return (
        <section className="banner-wrapper">
            <div className="banner-header">
                {/* LHS */}
                <div className="circle">
                    <IonButtons>
                        <IonMenuButton color="dark" />
                    </IonButtons>
                </div>
                {/* RHS */}
                <IonButton color="default" fill="clear" >
                    <IonIcon icon={notifications} color="danger"></IonIcon>
                </IonButton>
            </div>

            <div className="banner-title">
                {/* todo: dynamically populate username */}
                <h4><b>Hi, Gaddiel</b></h4>
            </div>
        </section>

    )
}

export default BannerHeader
