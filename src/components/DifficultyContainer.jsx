import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { getDifficulty } from '../service/Api'

const DifficultyContainer = ({isSelectedDiff, difficulty}) => {

    const [difficulties, setDifficulties] = useState([])

    useEffect(() => {
        getDifficulty().then((data) => {
            setDifficulties(data.data)
        }).catch((error) => {
            console.log(error)
        })
    }, [])

    const handleClick = (diff) => {
        localStorage.setItem('difficulty', diff)
        isSelectedDiff(true)
        difficulty(diff)
    }

    return (
        <div className='container-Answer-List'>
            <button className='btn-Difficulty' onClick={() => handleClick(difficulties[0])}>EASY</button>
            <button className='btn-Difficulty' onClick={() => handleClick(difficulties[1])}>MEDIUM</button>
            <button className='btn-Difficulty' onClick={() => handleClick(difficulties[2])}>HARD</button>
            <button className='btn-Difficulty' onClick={() => handleClick(difficulties[3])}>EXTREME</button>
        </div>
    )
}

export default DifficultyContainer