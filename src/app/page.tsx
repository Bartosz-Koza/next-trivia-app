'use client'

import Image from 'next/image'
import './styles.css'
import axios from 'axios'
import React from 'react'
import { useState } from 'react'
import { stringify } from 'json5'





export default function  Home() {
  const [message, setMessage] = useState('');
  const [data, setData] = useState()

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

    console.log('value is:', event.target.value);
  };

  


  return (
    <div className='main'>
      <div className='box '>
      <button onClick={callAPI}>Next question</button>
        {data &&  
              data.map(({ question, category }) => {
                return(
                  <>
                  <h1>category: {category}</h1>
                  <h1>{question} ?</h1>
                  <input placeholder='odpowiedź' className='input' onChange={handleChange} value={message} />
                  <h1>{message}</h1>
                  </>
                )
              })}
      </div>
    </div>
  )
  
}
