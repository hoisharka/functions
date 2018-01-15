import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import registerServiceWorker from './registerServiceWorker';

import configureStore from './store/configureStore';
import RootContainer from './containers/RootContainer';
import './styles/main.scss';

const render = (Component) => {
  ReactDOM.render(
    <Provider store={configureStore()}>
      <Component />
    </Provider>,
    document.getElementById('root')
  );
};

render(RootContainer);

registerServiceWorker();
