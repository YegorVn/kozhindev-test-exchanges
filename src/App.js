import React from 'react'
import { Routes, Route, HashRouter } from 'react-router-dom'
import MainView from './views/MainView'
import { Header } from './components/Header'

function App () {
  return (
    <>
      <HashRouter>
        <Header />
        <Routes>
          <Route path="/" element={<MainView />} />
        </Routes>
      </HashRouter>
    </>
  )
}

export default App
