import React, { useState } from 'react'
import Header from './components/Header'
import Home from './pages/Home'
import { VideoNuevo } from './pages/NuevoVideo'
import VideoWatch from './pages/VideoWatch'
import { Categoria } from './pages/Categoria'
import Footer from './components/Footer'
import Page404 from './pages/Page404'
import GlobalStyle from './GlobalStyle'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './App.css'

function App() {
  
  return (
    <Router>
    <>
      <GlobalStyle />
      <Header />
      <Routes>
        <Route path='/' element={<Home />}  />
        <Route path='/videos/:id' element={<VideoWatch />}  />
        <Route path='/nuevo-video' element={<VideoNuevo url={'/videos'} />} />
        <Route path='/nueva-categoria' element={<Categoria url={'/categorias'}/>} />
        <Route path='*' element={<Page404 />} />
      </Routes>
      <Footer />
    </>
    </Router>
  )
}

export default App
