import React, { useState } from 'react'
import './styles/mainStyles.css'
import PlayPage from './components/PlayPage'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import NewGamePage from './components/NewGamePage'
import ChooseDifficulty from './components/ChooseDifficulty'
import EndGamePage from './components/EndGamePage'

const App = () => {

  const [correctCnt, setCorrectCnt] = useState(0)

  return (
    <Router>
      <Routes>
        <Route path='/' element={<NewGamePage/>}/>
          <Route path='/chooseDifficulty' element={<ChooseDifficulty/>}/>
          <Route path='/play' element={<PlayPage setCorrectCount={setCorrectCnt} correctCount={correctCnt}/>}/>
          <Route path='/end' element={<EndGamePage setCorrectCount={setCorrectCnt} correctCount={correctCnt}/>}/>
      </Routes>
    </Router>
  )
}

export default App