import React from 'react';
import {render} from 'react-dom';
import App from './App';
import { BrowserRouter } from 'react-router-dom'
import { Provider } from "react-redux";
import * as serviceWorker from './serviceWorker';
import store from "./store";

const router = (
  <Provider store={store}>
    <BrowserRouter>
      <App/>
    </BrowserRouter>
  </Provider>
)

render(router, document.getElementById('root'));

serviceWorker.register();
