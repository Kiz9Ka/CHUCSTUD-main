import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Provider } from "react-redux";
import { store } from './store/store';

const root = ReactDOM.createRoot(document.getElementById('root'));

// Подключаем провайдер для доступа к стору в любом месте и уровне вложенности компонентов..

root.render(
    <Provider store={ store }>
        <App />
    </Provider>
);

reportWebVitals();
