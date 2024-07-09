import React, { useEffect, useState } from 'react'
import '../styles/btn.css'
import { postAnswer } from '../service/Api'

const AnswerContainer = ({question, selectedSwitch, setCorrectCnt, correctCnt}) => {
    const [selected, setSelected] = useState('')
    const [anySelected, setAnySelected] = useState(false)
    const [isCorrect, setIsCorrect] = useState(false)
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
      setAnySelected(false)
    }, [question])

    useEffect(() => {
        if (selected !== '') {
          setIsLoading(true)
          postAnswer(question.id, selected)
            .then((res) => {
              setIsCorrect(res.data.answer)
              if(res.data.answer){
                setCorrectCnt((x) => x + 1)
              }
              setIsLoading(false)
              selectedSwitch(true)
            })
            .catch((error) => {
              setIsLoading(false)
            });
        }
        setSelected('')
      }, [selected]);

    const handleClick = (opt) => {
        setSelected(opt)
        setAnySelected(true)
    }   

  return (
    <div className='container-Answer-List'>
      {anySelected ? (
        isLoading ? (
          <div className='other-Text-Font' >...</div>
        ) : (
          <div>
            <div className='other-Text-Font'>{isCorrect ? 'Correct' : 'Incorrect'}</div>
            <div className='other-Text-Font'>{correctCnt}/10</div>
          </div>
        )
      ) : (
        <>
          <button className='btn-Answer-List' onClick={() => handleClick('option1')}>{question.option1}</button>
          <button className='btn-Answer-List' onClick={() => handleClick('option2')}>{question.option2}</button>
          <button className='btn-Answer-List' onClick={() => handleClick('option3')}>{question.option3}</button>
          <button className='btn-Answer-List' onClick={() => handleClick('option4')}>{question.option4}</button>
        </>
      )}
    </div>
  )
}

export default AnswerContainer