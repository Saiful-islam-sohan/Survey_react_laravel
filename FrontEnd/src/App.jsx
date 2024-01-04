

import { Navigate, Route, Routes } from 'react-router-dom'
import './App.css'
import Login from './views/Login'
import Dashboard from './views/Dashboard'
import SingUp from './views/SingUp'
import Survayes from './views/Survayes'
import GuestLayout from './components/GuestLayout'
import DefaultLayout from './components/DefaultLayout'
import ContextProvider from '../src/context/ContextProvider'

export default function App() {
  return (
    <>
      <ContextProvider>
      <Routes>
      

       

        <Route path='/' element={<DefaultLayout></DefaultLayout>}>
          <Route path='/dashboard' element={<Navigate to="/"></Navigate>}></Route>
          <Route path='/' element={<Dashboard></Dashboard>}></Route>
          <Route path='/Survayes' element={<Survayes></Survayes>}></Route>

        </Route>


        <Route path='/' element={<GuestLayout></GuestLayout>}>
          <Route path='/singup' element={<SingUp></SingUp>}></Route>

          <Route path='/login' element={<Login></Login>}></Route>

        </Route>






      </Routes>
      
      </ContextProvider>


    </>
  )
}
App