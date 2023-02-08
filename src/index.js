//Import Area
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import A from "./A";


import reportWebVitals from './reportWebVitals';

function App() {
  return (
    <>
      <h1 id="head1">This is my second React Project- Making a news using nested components </h1>
      <h2>Crores of citizens my shield against Opposition's lies, says PM Modi | LIVE Updates</h2>
      <p>
        PM Modi Parliament Speech LIVE Updates: The Parliament has been witnessing heated discussions on the President's speech on Tuesday, after three days of stalemate following Opposition protests over the Hindenburg-Adani row.Prime Minister Narendra Modi, donning a jacket made from recycled plastic bottles, on Wednesday replied to the Motion of Thanks on President Droupadi Murmu's address, calling her an 'inspiration for all'. Both Houses of the Parliament witnessed chaos as Opposition MPs targetted the ruling government over Hindenburg-Adani row, inflation and unemployment, among other issues. Meanwhile, BJP MPs retorted to Congress leader Rahul Gandhi's remarks linking PM Modi and industrialist Gautam Adani on the previous day.

        Earlier on Tuesday, Parliament witnessed a heated discussion on the President's speech after three days of stalemate over Hindenburg-Adani row. While BJP members lauded the many initiatives of the Modi government, the Opposition accused the ruling alliance of not paying adequate attention to important issues like inflation and unemployment. Opposition members also accused the BJP-led Centre of being “afraid” to take up a discussion on the Adani row.
      </p>
      <img src="https://www.hindustantimes.com/ht-img/img/2023/02/08/550x309/PM_1675851884356_1675851889893_1675851889893.jpg" />
    </>
  )
}

const root = ReactDOM.createRoot(document.getElementById('container'));
root.render(
  <React.StrictMode>
    <App />
    <A />
  </React.StrictMode>
);
reportWebVitals();
