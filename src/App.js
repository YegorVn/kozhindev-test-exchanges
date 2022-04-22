import React from 'react'
import { Routes, Route, BrowserRouter } from 'react-router-dom'
import MainView from './views/MainView'
import { Header } from './components/Header'

function App () {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<MainView />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
