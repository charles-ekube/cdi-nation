import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import 'animate.css';
import 'swiper/css';
import 'swiper/css/effect-fade';
import { BrowserRouter } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './assets/styles/homeStyles.css';
import './assets/styles/colors.css';
import './assets/styles/fontStyles.css';
import './assets/styles/generalStyles.css';
import './assets/styles/textStyles.css';
import './assets/styles/utils.css';
import './assets/styles/widgetStyles.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
          <ToastContainer />
          <App />
        </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
