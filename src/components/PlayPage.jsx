import React, { useEffect, useState } from 'react'
import MainTitle from './MainTitle'
import QuestionContainer from './QuestionContainer'
import AnswerContainer from './AnswerContainer'
import { getQuestions } from '../service/Api'
import { useNavigate } from 'react-router-dom'


const PlayPage = ({setCorrectCount, correctCount}) => {

  const [index, setIndex] = useState(0)
  const [questions, setQuestions] = useState([])
  const [isLoading, setIsLoading] = useState(true)
  const [selectedSwitch, setSelectedSwitch] = useState(false)
  const [warning, setWarning] = useState('')

  const navigate = useNavigate()

    useEffect(() => {
        const diff = localStorage.getItem('difficulty')
        setIsLoading(true)
        getQuestions(diff).then((res) => {
          setQuestions(res.data)
          setIsLoading(false)
          setCorrectCount(0)
        }).catch((error) => {
          console.log(error)
        })
    }, [])
  
  const handleSubmit = () => {
    if (!selectedSwitch) {
      setWarning('Select an answer before procceding');
    } else {
      if (index >= 9) {
        navigate('/end');
      } else {
        setIndex((x) => x + 1);
        setSelectedSwitch(false);
        setWarning('');
      }
    }
  }

  const handleSelect = (isSelected) => {
    setSelectedSwitch(isSelected);
  };

  return (
    <div className='container-all'>
        <div className='main-title'><MainTitle/></div>
        <div className='container-QandA'>
        {isLoading ? (
          <div></div>
        ) : (
          <>
            <div className='container-Question'>
              <QuestionContainer question={questions[index].question} />
            </div>
            <div className='container-Answer'>
              <AnswerContainer question={questions[index]} selectedSwitch = {handleSelect} setCorrectCnt = {setCorrectCount} correctCnt = {correctCount}/>
            </div>
            {warning && <div className='other-Text-Warning'>{warning}</div>}
            <button type='submit' className='btn-Next' onClick={handleSubmit}>NEXT</button>
          </>
        )}
        </div>
    </div>
  )
}

export default PlayPage