import { IonCard, IonCardHeader, IonCardSubtitle, IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import './Tab3.css';

const Tab3: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Account Management</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Account Management</IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonCard>
                  <IonCardHeader>
                    <IonCardSubtitle>Coming Soon. </IonCardSubtitle>
                  </IonCardHeader>
        
                </IonCard>
      </IonContent>
    </IonPage>
  );
};

export default Tab3;
