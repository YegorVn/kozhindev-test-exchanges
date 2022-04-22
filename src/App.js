import React from 'react'
import { Routes, Route, BrowserRouter } from 'react-router-dom'
import MainView from './views/MainView'

function App () {
  return (
      <>
        <BrowserRouter>
          <Routes>
            <Route path="/Home" element={<MainView />} />
          </Routes>
        </BrowserRouter>
      </>
  )
}

export default App
