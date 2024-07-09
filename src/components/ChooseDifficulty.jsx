import React, { useEffect, useState } from 'react'
import MainTitle from './MainTitle'
import DifficultyContainer from './DifficultyContainer'
import { useNavigate } from 'react-router-dom'


const ChooseDifficulty = () => {
    const navigate = useNavigate()

    const [warning, setWarning] = useState('')
    const [isSelectedDiff, setIsSelectedDiff] = useState(false)
    const [selectedDiff, setSelectedDiff] = useState('')

    useEffect(() => {
        setWarning('')
    }, [isSelectedDiff])

    const handleSubmit = () => {
        if (!isSelectedDiff) {
          setWarning('Choose a difficulty');
        }
        else {
            setWarning('')
            navigate('/play')
        }
      }

    return (
        <div className='container-all'>
            <div className='main-title'><MainTitle /></div>
            <div className='container-QandA'>
                {isSelectedDiff ? ( <div className='other-Text-Font'>Difficulty Selected: {selectedDiff}. Ready to play!</div>) 
                    :(<div className='container-Answer'><DifficultyContainer isSelectedDiff={setIsSelectedDiff} difficulty={setSelectedDiff}/></div>)}
            </div>
            {warning && <div className='other-Text-Warning'>{warning}</div>}
            <button className='btn-Next' onClick={handleSubmit}>START</button>
        </div>
    )
}

export default ChooseDifficulty