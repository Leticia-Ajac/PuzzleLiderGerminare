import * as React from 'react'
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import './App.css'

<<<<<<< HEAD
import LevelUmPage from './Pages/Level1'
import LevelDoisPage from './Pages/Level2'
=======
import LevelUmPage from './Pages/Level1';
import LevelTresPage from './Pages/Level3';
>>>>>>> d2fd2091eee18f0fc7b8449230fe90eb62c8e81b
import BeginningPage from './Pages/Beginning'
import FirstVideoPage from './Pages/FirstVideo'
import IntroLevel1Page from './Pages/IntroLevel1'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<BeginningPage />} />
          <Route path='/FirstVideo' element={<FirstVideoPage />}/>
          <Route path='/IntroLevel1' element={<IntroLevel1Page />}/>
          <Route path='/Level1' element={<LevelUmPage />}/>
<<<<<<< HEAD
          <Route path='/Level2' element={<LevelDoisPage />}/>
=======
          <Route path='/Level3' element={<LevelTresPage />}/>
>>>>>>> d2fd2091eee18f0fc7b8449230fe90eb62c8e81b
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
