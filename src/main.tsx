import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.scss';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './layouts';
import Home from './pages/home';
import Rooms from './pages/rooms';
import Information from './pages/information';
import Faq from './pages/faq';
import Location from './pages/location';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/rooms/:id" element={<Rooms />} />
          <Route path="/information" element={<Information />} />
          <Route path="/location" element={<Location />} />
          <Route path="/faq" element={<Faq />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  </StrictMode>
);
