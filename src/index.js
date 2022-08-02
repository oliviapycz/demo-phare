import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import BieresPhares from "./routes/bieresPhares";
import OnParleDeNous from "./routes/onParleDeNous";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <header className="App-header">
      <span>Demo Lighthouse - Projet Phare</span>
      <nav className="App-nav">
        <Link to="/">Accueil</Link>
        <Link to="/bieres-phares">Nos Bières Phares</Link>
        <Link to="/on-parle-de-nous">On Parle De Nous</Link>
      </nav>
    </header>
    <main className="App-content">
      <div className="App-content-wrapper">
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="bieres-phares" element={<BieresPhares />} />
          <Route path="on-parle-de-nous" element={<OnParleDeNous />} />
        </Routes>
      </div>
    </main>
  </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
