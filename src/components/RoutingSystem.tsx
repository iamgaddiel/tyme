import { IonReactRouter } from '@ionic/react-router';
import { home, storefront, person } from 'ionicons/icons';
import React, { useContext, useEffect, useState } from 'react';
import { Redirect, Route } from 'react-router-dom';
import { IonTabs, IonTabBar, IonTabButton, IonIcon, IonRouterOutlet } from '@ionic/react';

import AddPrescription from '../screens/AddPrescriptionScreen';
import ProfileScreen from '../screens/ProfileScreen';
import HomeScreen from '../screens/HomeScreen';
import { CustomContext } from '../contexts/CustomContext';




const MainAppRouter: React.FC = () => {
    return (
        <IonReactRouter>
            <IonRouterOutlet id="main">
                <Route path="/prescription/add" component={AddPrescription} exact />
            </IonRouterOutlet>
        </IonReactRouter>
    )
}

const Tabs: React.FC = () => {
    return (
        <IonReactRouter>
            <IonTabs>
                <IonRouterOutlet id="main">
                    <Route path="/" exact>
                        <Redirect to="/dashboard" />
                    </Route>
                    <Route path="/dashboard" component={HomeScreen} exact />
                    <Route path="/profile" component={ProfileScreen} exact />
                    <Route path="/prescription/add" component={AddPrescription} exact />
                </IonRouterOutlet>

                <IonTabBar slot="bottom" color="default" style={{ background: "#1e3e72" }} className="">
                    <IonTabButton href="/dashboard" tab="home">
                        <IonIcon icon={home} color="light" />
                    </IonTabButton>
                    <IonTabButton href="/store" tab="store">
                        <IonIcon icon={storefront} color="light" />
                    </IonTabButton>
                    <IonTabButton href="/profile" tab="profile">
                        <IonIcon icon={person} color="light" />
                    </IonTabButton>
                </IonTabBar>
            </IonTabs>
        </IonReactRouter>
    )
}


const RoutingSystem: React.FC = () => {
    const { isTabComponent } = useContext(CustomContext);

    useEffect(() => {
        console.log(isTabComponent, 'from Routing System')
    })
    return (
        <>
            <Tabs />
            {/* {isTabComponent ? <Tabs /> : <MainAppRouter />} */}
        </>
    )
}
export default RoutingSystem
