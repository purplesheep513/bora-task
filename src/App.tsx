import React from 'react';
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import "./App.css";
import { Info } from './components/intro/info.page.tsx';
import { NotFound } from './components/notFound/not-found.tsx';
import { Ranking } from './components/ranking/ranking.page.tsx';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Info />} />
        <Route path="/ranking" element={<Ranking />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
};

export default App;
