import React from 'react'
import User from './Pages/User/User'
import { Route, Routes } from 'react-router-dom'

const App = () => {
  return (
    <div>
      <Routes>
        <Route path='/' element={<User/>}/>
      </Routes>
      <User/>
    </div>
  )
}

export default App
