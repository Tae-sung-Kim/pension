import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.scss';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './layouts';
import HomePage from './pages/home';
import RoomsPage from './pages/rooms';
import InformationPage from './pages/information';
import FaqPage from './pages/faq';
import LocationPage from './pages/location';
import RoomsDetailPage from './pages/rooms/detail';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/rooms" element={<RoomsPage />}>
            <Route path=":id" element={<RoomsDetailPage />} />
          </Route>
          <Route path="/information" element={<InformationPage />} />
          <Route path="/location" element={<LocationPage />} />
          <Route path="/faq" element={<FaqPage />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  </StrictMode>
);
