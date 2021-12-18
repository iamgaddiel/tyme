import { useContext, useState } from 'react';
import { IonApp, IonSplitPane } from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import Menu from './components/Menu';

/* Core CSS required for Ionic components to work properly */
import '@ionic/react/css/core.css';

/* Basic CSS for apps built with Ionic */
import '@ionic/react/css/normalize.css';
import '@ionic/react/css/structure.css';
import '@ionic/react/css/typography.css';

/* Optional CSS utils that can be commented out */
import '@ionic/react/css/padding.css';
import '@ionic/react/css/float-elements.css';
import '@ionic/react/css/text-alignment.css';
import '@ionic/react/css/text-transformation.css';
import '@ionic/react/css/flex-utils.css';
import '@ionic/react/css/display.css';

/* Theme variables */
import './theme/variables.css';
import RoutingSystem from './components/RoutingSystem';
import { CustomContext } from './contexts/CustomContext';

// reactstrap
import 'bootstrap/dist/css/bootstrap.min.css';

// custom css
import './styles/app.css';

const App: React.FC = () => {
  // React Routers are found in the Tabs component
  const [isTabComponent, setIsTabComponent] = useState<boolean>(true);

  return (
    <IonApp>
      <IonReactRouter>
        <IonSplitPane contentId="main">
          <Menu />
          <CustomContext.Provider value={{isTabComponent, setIsTabComponent}}>
            <RoutingSystem /> 
          </CustomContext.Provider>
        </IonSplitPane>
      </IonReactRouter>
    </IonApp>
  );
};

export default App;
