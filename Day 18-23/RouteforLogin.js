import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { LoginValidation } from './LoginValidation';
import { TaskDetails } from './TaskDetails';

export const RouteforLogin = () => (
  <Router>
    <Routes>
      <Route path="/" element={<LoginValidation />} />
      
      <Route path="/task" element={<TaskDetails />} />
    </Routes>
  </Router>
);
