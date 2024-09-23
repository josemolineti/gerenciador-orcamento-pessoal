import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { BudgetProvider } from './context/BudgetContext';
import Login from './pages/Login';
import Home from './pages/Home';
import Sobre from './pages/Sobre';
import Dashboard from './pages/Dashboard';
import './styles/index.css';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <BudgetProvider>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/home" element={<Home />} />
          <Route path="/sobre" element={<Sobre />} />
          <Route path="/dashboard" element={<Dashboard />} />
        </Routes>
      </BudgetProvider>
    </BrowserRouter>
  </StrictMode>
);
