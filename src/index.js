import React from 'react';
import ReactDOM from 'react-dom';
import Root from 'views/Root';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { persistStore } from 'redux-persist';
import store from './redux/store';

const persistor = persistStore(store);

ReactDOM.render(
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <React.StrictMode>
        <Root />
      </React.StrictMode>
    </PersistGate>
  </Provider>,
  document.getElementById('root'),
);
