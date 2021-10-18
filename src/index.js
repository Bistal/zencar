import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { MuiThemeProvider } from "@material-ui/core/styles";
import { theme } from "./client/utils/styles";
import { Provider } from "react-redux";
import { IntlProvider } from "react-intl";
import store from "./store";

const locale = 'en-gb';

function loadMessages() {
  if(window.location.search.indexOf('lang=zz') === -1) {
    return Promise.resolve({});
  }
}

loadMessages().then(function (messages) {

ReactDOM.render(
  <Provider store={store}>
  <IntlProvider locale={locale} messages={messages} defaultLocale='en-gb' >

    <MuiThemeProvider theme={theme}>
    <App />
  
   </MuiThemeProvider>
   </IntlProvider>
   </Provider>,
  document.getElementById('root')
);

});

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
