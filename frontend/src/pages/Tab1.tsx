import React, { useState, useEffect } from 'react';
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar,
          IonCardHeader, IonCardSubtitle, IonCardTitle, IonCardContent,
          IonButton, IonRippleEffect, IonModal } from '@ionic/react';
import './Tab1.css';

import FeaturedCard from '../components/FeaturedCard/FeaturedCard';
import QuickAccessBar from '../components/QuickAccessBar/QuickAccessBar';
import ManageSubscriptions from '../components/ManageSubscriptions/ManageSubscriptions';
import ManageIntrests from '../components/ManageIntrests/ManageIntrests';

import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../store/modules/rootReducer'
import { updateUserInfo } from "../store/modules/user/action";


const Tab1: React.FC = () => {

  var [ ShowManageSubscriptions, setShowManageSubscriptions ] = useState(false);
  var [ ShowManageIntrests, setShowManageIntrests ] = useState(false);

  var [ Updated, setUpdated ] = useState(false);
  const name = useSelector( (state:RootState) => state.user.list.name);
  const dispatch = useDispatch();

  useEffect(() => {
    if(Updated === false){
      dispatch( updateUserInfo()); 
      setUpdated( true );
    }
  });



  return (
    <IonPage >
      <IonHeader>
        <IonToolbar>
          <IonTitle>Home</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large" className="iontitle">Tripher</IonTitle>
          </IonToolbar>
        </IonHeader>

        <QuickAccessBar /> 

        <IonCardHeader>
          <IonCardSubtitle>Hey There!</IonCardSubtitle>
          <IonCardTitle><strong>{name}</strong></IonCardTitle>
        </IonCardHeader>


        <IonButton expand="block" fill="clear" className="ion-activatable ripple-parent" onClick={() => { setShowManageSubscriptions(true)}}>
          Manage Subscriptions
          <IonRippleEffect></IonRippleEffect>
        </IonButton>
        <IonModal isOpen={ShowManageSubscriptions} cssClass='my-custom-class'>
          <ManageSubscriptions />
          <IonButton expand="block" fill="clear" onClick={() => setShowManageSubscriptions(false)}> Close </IonButton> 
        </IonModal>

        <IonButton expand="block" fill="clear" className="ion-activatable ripple-parent" onClick={() => { setShowManageIntrests(true)}}>
          Manage Intrests
          <IonRippleEffect></IonRippleEffect>
        </IonButton>
        <IonModal isOpen={ShowManageIntrests} cssClass='my-custom-class'>
          <ManageIntrests />
          <IonButton expand="block" fill="clear" onClick={() => setShowManageIntrests(false)}> Close </IonButton> 
        </IonModal>

        <IonButton expand="block" fill="clear" className="ion-activatable ripple-parent" href="https://www.youtube.com/feed/guide_builder">
          Browse Channels
          <IonRippleEffect></IonRippleEffect>
        </IonButton>



        <IonCardHeader>
          <IonCardTitle>Featured</IonCardTitle>
        </IonCardHeader>

        <IonCardContent>
          <FeaturedCard />
        </IonCardContent>

      </IonContent>
    </IonPage>
  );
};

export default Tab1;
