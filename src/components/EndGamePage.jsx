import React from 'react'
import { useNavigate } from 'react-router-dom'
import MainTitle from './MainTitle'

const EndGamePage = ({setCorrectCount, correctCount}) => {
  const navigate = useNavigate()

  const handleNewGame = () => {
    navigate(`/`)
    setCorrectCount(0)
  }
  
  return (
    <div className='container-all'>
        <div className='container-QandA'>
          <img className='preguntados-img-last' src='https://i.pinimg.com/564x/42/20/eb/4220ebd30c0baa884de61a0ace550e2d.jpg'/>
          <div className='other-Text-Font'>Correct answers {correctCount}/10</div>
          <button className='btn-Next' onClick={handleNewGame}>END GAME</button>
        </div>
    </div>
  )
}

export default EndGamePage