import React from 'react';
import ReactDOM from 'react-dom/client';
//import {index} from '../public/index.css';
import App from './App/App';
import {store} from './App/store'; 
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));

const render = () => {
  const s = store.getState()
  console.log("LOGSTATE in index.js",s)
  root.render(
    <React.StrictMode>
      <App 
        state={s}
        dispatch={store.dispatch}
          />
    </React.StrictMode>
  );
}
render()
store.subscribe(render)
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
