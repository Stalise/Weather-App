import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';

import App from './App';
import { store } from './store/store';
import GlobalStyles from './assest/styles/globalStyles';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLDivElement);

root.render(
   <Provider store={store}>
      <GlobalStyles />
      <App />
   </Provider>,
);
