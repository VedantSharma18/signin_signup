import React, { useState } from 'react';
import './App.css';
import Login from './components/Login';
import Signup from './components/Signup';

function App() {
  const [isLogin, setIsLogin] = useState(true);

  return (
    <div className="App">
      <div className="background"></div>
      <div className="overlay"></div>
      <div className="auth-wrapper">
        <div className="auth-tabs">
          <button onClick={() => setIsLogin(true)} className={isLogin ? "active" : ""}>Login</button>
          <button onClick={() => setIsLogin(false)} className={!isLogin ? "active" : ""}>Signup</button>
        </div>
        {isLogin ? <Login /> : <Signup />}
      </div>
    </div>
  );
}

export default App;
