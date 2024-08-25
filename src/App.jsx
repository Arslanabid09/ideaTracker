import React from 'react'
import {UserProvider} from './context/context';
import Home from './Home';
import Register from './Register';
import Navbar from './component/Navbar';
import { IdeaProvider } from './context/Dbcontext';
import { Route, Routes } from 'react-router-dom';
import Login from './Login';
import Ideas from './component/Ideas';

const App = () => {
    const isLoggedIn = window.location.pathname === '/register';
  return (
    <div>
        <UserProvider>
          <IdeaProvider>
          <Navbar/>
          <Routes>
            <Route path='/' element={<Login/>}/>
            <Route path='/register' element={<Register/>}/>
            <Route path='/home' element={<Home/>}/>
            <Route path='/ideas' element={<Ideas/>}/>
          </Routes>
            {/* {isLoggedIn ? <Home/> : <Register/>} */}
          </IdeaProvider>
        </UserProvider>
    </div>
  )
}

export default App