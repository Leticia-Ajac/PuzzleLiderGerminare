import * as React from 'react'
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import './App.css'

import LevelUmPage from './Pages/Level1';
import BeginningPage from './Pages/Beginning'
import FirstVideoPage from './Pages/FirstVideo'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<BeginningPage />} />
          <Route path='/level1' element={<LevelUmPage />}/>
          <Route path='/firstVideo' element={<FirstVideoPage />}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
