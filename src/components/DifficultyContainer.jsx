import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const DifficultyContainer = ({isSelectedDiff, difficulty}) => {

    const navigate = useNavigate()

    const handleClick = (diff) => {
        localStorage.setItem('difficulty', diff)
        isSelectedDiff(true)
        difficulty(diff)
    }

    return (
        <div className='container-Answer-List'>
            <button className='btn-Difficulty' onClick={() => handleClick("easy")}>EASY</button>
            <button className='btn-Difficulty' onClick={() => handleClick("medium")}>MEDIUM</button>
            <button className='btn-Difficulty' onClick={() => handleClick("hard")}>HARD</button>
            <button className='btn-Difficulty' onClick={() => handleClick("extreme")}>EXTREME</button>
        </div>
    )
}

export default DifficultyContainer