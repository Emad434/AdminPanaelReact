import React from 'react'
import { DrawerToggleProvider } from './Context/DrawerToggle'
import { ThemeProvider } from '@mui/material'
import { Theme } from './Theme'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import AuthLayout from './Layouts/AuthLayout'
import LoginLayout from './Layouts/LoginLayout'
import Home from './Pages/Home'
import Login from './Pages/Login'
const App = () => {


  return (

    <ThemeProvider theme={Theme}>
      <DrawerToggleProvider >
        <BrowserRouter>
          <Routes>
            <Route element={<LoginLayout />}  >
              <Route path='login' element={<Login />} />
            </Route>
            <Route element={<AuthLayout />}  >
              <Route index element={<Home />} />
            </Route>

          </Routes>
        </BrowserRouter>
      </DrawerToggleProvider>
    </ThemeProvider>

  )
}

export default App