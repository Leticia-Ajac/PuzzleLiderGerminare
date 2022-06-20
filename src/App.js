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
import IntroLevel1Page from './Pages/IntroLevel1'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<BeginningPage />} />
          <Route path='/firstVideo' element={<FirstVideoPage />}/>
          <Route path='/IntroLevel1Page' element={<IntroLevel1Page />}/>
          <Route path='/level1' element={<LevelUmPage />}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
