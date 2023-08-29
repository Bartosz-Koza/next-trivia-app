'use client'

import './styles.css'
import React from 'react'
import { useState, useEffect } from 'react'
import { Button, TextField, Box } from '@mui/material'


export default function  Home() {

  

  const [message, setMessage] = useState('');
  const [data, setData] = useState()
  const [ans, setAns] = useState('')
  const [goodans, setGoodans] = useState(0)
  const [badans, setBadans] = useState(0)
  const [msg, setMsg] = useState("")
  

  const callAPI = async () => {
    setAns('')
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
    <>
    <div className='ans-counter'>
      <h1>bad answers: {goodans}</h1>
      <h1>good answers: {badans}</h1>
    </div>
    <div className='main'>
      <div className='box '>
      <Button variant="contained" onClick={callAPI}>Next question</Button>
        {data &&  
              data.map(({ question, category, answer }) => {  
                
                
                const CheckAnswer = () =>{
        
                  if(message != answer){
                    setAns('false')
                    setGoodans(goodans + 1)
                  } if(message == answer){
                    setAns('true')
                    setBadans(badans + 1)
                  }
                }   


                return(
                  
                  <div key={data}>
                  <h1>category: {category}</h1>
                  <h1>{question} ?</h1>
                  { ans == "true" ?(
                    <h1 className='ans'>Good answer 👍</h1>
                  ) : ans == "false" ?(
                      <h1 className='ans'>Bad answer 👎</h1>
                  ) : (
                    <Box sx={{textTransform: 'capitalize'}}>
                    <TextField variant="standard" sx={{ p: "1rem", input: {color: "white", backgroundcolor:"white"}, }} placeholder='odpowiedź' className='input' onChange={handleChange} value={message} />
                  <Button variant="contained" sx={{ p: "0.75rem", backgroundcolor: "yellow"}} onClick={CheckAnswer}>Contained</Button>
                  </Box>)}
                  
                  </div>
                )
              })}
      </div>
    </div>
    </>
  )
  
}
