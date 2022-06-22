import * as React from 'react'
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import './App.css'

import LevelUmPage from './Pages/Level1'
import LevelDoisPage from './Pages/Level2'
import LevelTresPage from './Pages/Level3'
import TheEndPage from './Pages/TheEnd'
import BeginningPage from './Pages/Beginning'
import FirstVideoPage from './Pages/FirstVideo'
import SecondVideoPage from './Pages/SecondVideo'
import {IntroLevel1Page,IntroLevel2Page, IntroLevel3Page } from './Pages/Intros'
import {EndingLevel1Page,EndingLevel2Page, EndingLevel3Page } from './Pages/Endings'
import RulesPage from './Pages/Rules/index'
import SecretPasswordPage from './Pages/SecretPassword/index'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<BeginningPage />} />
          <Route path='/TheEnd' element={<TheEndPage />} />
          <Route path='/FirstVideo' element={<FirstVideoPage />}/>
          <Route path='/SecondtVideo' element={<SecondVideoPage />}/>
          <Route path='/IntroLevel1' element={<IntroLevel1Page />}/>
          <Route path='/IntroLevel2' element={<IntroLevel2Page />}/>
          <Route path='/IntroLevel3' element={<IntroLevel3Page />}/>
          <Route path='/EndingLevel1' element={<EndingLevel1Page />}/>
          <Route path='/EndingLevel2' element={<EndingLevel2Page />}/>
          <Route path='/EndingLevel3' element={<EndingLevel3Page />}/>
          <Route path='/Level1' element={<LevelUmPage />}/>
          <Route path='/Level2' element={<LevelDoisPage />}/>
          <Route path='/Level3' element={<LevelTresPage />}/>
          <Route path='/Rules' element={<RulesPage />} />
          <Route path='/SecretPassword' element={<SecretPasswordPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
