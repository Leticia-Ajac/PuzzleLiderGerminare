import * as React from 'react'
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import './App.css'

import LevelUmPage from './Pages/Level1';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/level1' element={<LevelUmPage />}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
