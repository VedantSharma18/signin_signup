// import logo from './logo.svg';
// import React from 'react';
// import './App.css';

// import {BrowserRouter as Router,Routes,Route,Link} from "react-router-dom";
// import Login from './components/Login';
// import Signup from './components/Signup';


// function App() {
//   return (
//     <Router>

//     <div className="App">

//       <div className='background'>
//       <nav>
//         <ul>
//           <li>
//             <Link to = "/">Login</Link>
//           </li>

//           <li>
//             <Link to="/signup">Signup</Link>
//           </li>
//         </ul>
//       </nav>


//       <Routes>
//         <Route exact = "true" path="/" element={<Login />}>
//         </Route>
        
//         <Route path='/signup' element={<Signup />}>
//         </Route>
//       </Routes>
//       </div>
//       </div>

//     </Router>
 
      
//   );
// }

// export default App;


//changes


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
