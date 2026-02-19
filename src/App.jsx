import './App.css'
import React from 'react'
import Container from './components/Contanier/Container'
import Navbar from './components/Navbar/Navbar'
import SignIn from '../src/pages/SignIn/SignIn.jsx'
import SignUp from '../src/pages/SignUp/SignUp.jsx'
import { Route, Routes } from 'react-router-dom'
import Admin from './pages/Admin/Admin.jsx'
import Student from './pages/Student/Student.jsx'
import Mentor from './pages/Mentor/Mentor.jsx'
import RoleProtectedRoute from './components/Routes/RoleProtectedRoute.jsx'
import Home from './pages/Home/Home.jsx'

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
      <Route path='/' element={<Home />} />
      <Route path="/signIn" element={<SignIn />} />
      <Route path='/signUp' element={<SignUp />} />

      <Route path='/admin' element={<RoleProtectedRoute allowedRoles={["Admin"]} >
        <Admin />
      </RoleProtectedRoute>} />

      <Route path='/student' element={<RoleProtectedRoute allowedRoles={["Student"]} >
        <Student />
      </RoleProtectedRoute>} />

      <Route path='/mentor' element={<RoleProtectedRoute allowedRoles={["Mentor"]} >
        <Mentor />
      </RoleProtectedRoute>} />
    </Routes>

    {/* <SignIn /> */}

    </>
  )
}

export default App
