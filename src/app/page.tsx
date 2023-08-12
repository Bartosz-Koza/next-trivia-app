'use client'

import './styles.css'
import React from 'react'
import { useState, useEffect } from 'react'
import { Button } from '@mui/material'



export default function  Home() {
  const [message, setMessage] = useState('');
  const [data, setData] = useState()
  const [ans, setAns] = useState()
  const [cat, setCat] = useState()
  const [ques, setQues] = useState()
  const [goodans, setGoodans] = useState(0)
  const [badans, setBadans] = useState(0)
  const [msg, setMsg] = useState("")
  

  const callAPI = async () => {
  const url = 'https://trivia-by-api-ninjas.p.rapidapi.com/v1/trivia';
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'ebf8fe15a0msh9347bf8a12ae3a9p114e9ajsn431be86ffa31',
		'X-RapidAPI-Host': 'trivia-by-api-ninjas.p.rapidapi.com'
	}
};

try {
	const response = await fetch(url, options);
	const result = await response.json();
	console.log(result);
  setData(result)
} catch (error) {
	console.error(error);
}
  };
  


  const handleChange = event => {
    setMessage(event.target.value);
    console.log('value is:', event.target.value, 'msg:', msg);
  };

  
  


  return (
    <div className='main'>
      <div className='box '>
      <button onClick={callAPI}>Next question</button>
        {data &&  
              data.map(({ question, category, answer }) => {  
                
                
                const CheckAnswer = () =>{
        
                  if(message != answer){
                    setGoodans(goodans + 1)
                    return(
                      <h1>dobrze !!!</h1>
                      
                    )
                  } if(message == answer){
                    <h1>siema</h1>
                    setBadans(badans + 1)
                  }
                }   


                return(
                  <div key={data}>
                  <h1>category: {category}</h1>
                  <h1>{question} ?</h1>
                  <input placeholder='odpowiedź' className='input' onChange={handleChange} value={message} />
                  <Button variant="contained" onClick={CheckAnswer}>Contained</Button>
                  <h1>good answers: {goodans}</h1>
                  <h1>bad answers: {badans}</h1>
                  <h1>{message}</h1>
                  </div>
                )
              })}
      </div>
    </div>
  )
  
}
