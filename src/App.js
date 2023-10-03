import React from 'react';
import './App.css';
import HomePage from './routes/HomePage.jsx';
import LoginPage from './routes/LoginPage.jsx';
import Layout from './routes/Layout';
import {Routes, Route} from 'react-router-dom';
import CreateAccountPage from './routes/CreateAccountPage.jsx';

function App() {
  return (
    <Routes>
      <Route path='/' element={<Layout/>}>
      <Route path='home' element={<HomePage/>} />
      <Route path='login' element={<LoginPage/>} />
      <Route path='create-account' element={<CreateAccountPage />} />
      </Route>
    </Routes>
  );
}

export default App;