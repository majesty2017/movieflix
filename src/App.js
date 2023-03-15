import React from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HomeScreen, LoginScreen } from './pages';

function App() {
  const user = null
  return (
    <div className="app">
      <BrowserRouter>
        <Routes>
          {!user ? (
            <Route path="/" >
              <Route index element={<LoginScreen />} />
            </Route>
          ) : (
            <Route path="/" >
              <Route index element={<HomeScreen />} />
            </Route>
          )}
        </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
