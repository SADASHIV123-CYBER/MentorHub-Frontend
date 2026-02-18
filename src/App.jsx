import './App.css'
import React from 'react'
import Container from './components/Contanier/Container'
import Navbar from './components/Navbar/Navbar'
import SignIn from '../src/pages/SignIn/SignIn.jsx'
import { Route, Routes } from 'react-router-dom'

function App() {

  return (
    <>
    <Container>
      <Navbar />
    </Container>

    {/* <AuthProvider>
 
      <Routes>
        <Route path='/signIn' element={<SignIn />} />
      </Routes> 
    </AuthProvider> */}

    
    <Routes>
      <Route path="/signIn" element={<SignIn />} />
    </Routes>



    {/* <SignIn /> */}

    </>
  )
}

export default App
