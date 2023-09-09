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
  
  // useEffect(() => {
  //   localStorage.setItem("bad", JSON.stringify(badans));
  //   let bad = Number.parseInt(localStorage.getItem("bad"))
  //   setBadans(bad)
  // }, [])
  

  const handleChange = event => {
    localStorage.setItem("bad", JSON.stringify(badans));
    let bad = Number.parseInt(localStorage.getItem("bad"))
    setBadans(bad)
    setMessage(event.target.value.toUpperCase());
    console.log('value is:', event.target.value, 'msg:', msg);
  };

  
//   useEffect(
//     () => window.localStorage.setItem(goodans, goodans),
//     [goodans]
// );


  return (
    <>
    <div className='ans-counter'>
      <h1>Bad answers: {goodans}</h1>
      <h1>Good answers: {badans}</h1>
    </div>
    <div className='main'>
      <div className='box '>
      <Button variant="contained" onClick={callAPI}>Next question</Button>
        {data &&  
              data.map(({ question, category, answer }) => {  
                
                
                const CheckAnswer = () =>{
        
                  if(message != answer.toUpperCase()){
                    setAns('false')
                    setGoodans(goodans + 1)
                  } if(message == answer.toUpperCase()){
                    setAns('true')
                    setBadans(badans + 1)
                  }
                }   


                return(
                  
                  <div key={data}>
                  <h1>Category: {category}</h1>
                  <h1>{question} ?</h1>
                  { ans == "true" ?(
                    <h1 className='ans'>Good answer 👍</h1>
                  ) : ans == "false" ?(
                      <h1 className='ans'>Bad answer 👎</h1>
                  ) : (
                    <Box sx={{textTransform: 'capitalize'}}>
                    <TextField variant="standard" sx={{ p: "1rem", input: {color: "white", backgroundcolor:"white"}, }} placeholder='Answer' className='input' onChange={handleChange} value={message} />
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
