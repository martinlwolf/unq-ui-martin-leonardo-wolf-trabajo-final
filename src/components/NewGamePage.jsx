import React from 'react'
import MainTitle from './MainTitle'
import { useNavigate } from 'react-router-dom'

const NewGamePage = () => {

    const navigate = useNavigate()

    const handleNewGame = () => {
        localStorage.setItem('difficulty', '')
        navigate(`/chooseDifficulty`)
    }

    return (
        <div className='container-all'>
            <div className='container-QandA'>
                <img className= 'preguntados-img' src='https://mir-s3-cdn-cf.behance.net/projects/404/df47da82685881.Y3JvcCw3NDgsNTg1LDE0OTUsMjM0Ng.jpg' alt='Preguntados logo' />
                <button className='btn-Next' onClick={handleNewGame}>NEW GAME</button>
            </div>
        </div>
    )
}

export default NewGamePage