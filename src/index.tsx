import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';

import App from './App';
import { store, persistor } from './store/store';
import GlobalStyles from './assest/styles/globalStyles';
import { ContextFirebase, contextFirebaseData } from './store/context/contextFirebase';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLDivElement);

root.render(
   <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
         <ContextFirebase.Provider value={contextFirebaseData}>
            <GlobalStyles />
            <App />
         </ContextFirebase.Provider>
      </PersistGate>
   </Provider>,
);
