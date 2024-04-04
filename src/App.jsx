import React from 'react'
import Navbar from './components/Navbar'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './screens/Home'
import NotFoundPage from './screens/NotFoundPage'
import About from './screens/About'
import DetailsPage from './components/DetailsPage'
import ReposAll from './screens/ReposAll'
import { Toaster } from 'react-hot-toast'

const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path='*' element={<NotFoundPage />} />
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/detailspage' element={<DetailsPage />} />
        <Route path='/repos' element={<ReposAll />} />
      </Routes>
      <Toaster />
    </BrowserRouter>
  )
}

export default App