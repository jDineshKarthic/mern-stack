import React from 'react';
import { BrowserRouter, Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/about';
import Singin from './pages/Singin';
import Signout from './pages/Signout';
import Profile from './pages/Profile';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="sign-in" element={<Singin />} />
        <Route path="sign-out" element={<Signout />} />
        <Route path="profile" element={<Profile />} />
      </Routes>
    </BrowserRouter>
  );
}
