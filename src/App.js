import React, { useEffect } from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

import { HomeScreen, LoginScreen, ProfileScreen } from './pages';
import { auth } from './firebaseStore';
import { useDispatch, useSelector } from 'react-redux';
import { login, logout, selectUser } from './features/userSlice';
import { onAuthStateChanged } from 'firebase/auth';

function App() {
  const user = useSelector(selectUser);

  const dispatch = useDispatch();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (userAuth) => {
      if (userAuth) {
        dispatch(login({
          uid: userAuth.uid,
          email: userAuth.email
        }));
      } else {
        dispatch(logout());
      }
    });

    return unsubscribe;

  }, [dispatch]);
  
  return (
    <div className="app">
      <Router>
        {!user ? (
          <LoginScreen />
        ) : (
        <Routes>
            <>
              <Route path='/' index element={<HomeScreen/>} />
              <Route path='/profile' element={<ProfileScreen />} />
            </>
          </Routes>
        )}
        
        
      </Router>
    </div>
  );
}

export default App;
