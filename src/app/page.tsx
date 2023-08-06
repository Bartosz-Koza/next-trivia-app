'use client'

import Image from 'next/image'
import './styles.css'
import axios from 'axios'
import React from 'react'
import { useState } from 'react'
import { stringify } from 'json5'





export default function Home() {

  const [data, setData] = useState()

  const callAPI = async () => {
  

    const axios = require('axios');
  
  const options = {
    method: 'GET',
    url: 'https://trivia-by-api-ninjas.p.rapidapi.com/v1/trivia',
    headers: {
      'X-RapidAPI-Key': 'ebf8fe15a0msh9347bf8a12ae3a9p114e9ajsn431be86ffa31',
      'X-RapidAPI-Host': 'trivia-by-api-ninjas.p.rapidapi.com'
    }
  };
  
  try {
    const response = await axios.request(options);
    setData(response.data)
    console.log(response.data);
  } 
  catch (error) {
    console.error(error);
  }
  };

  return (
    <div className='main'>
      <div className='box '>
        <h1 className='question'>{stringify(data)}</h1>
        <button onClick={callAPI}>Make API call</button>
        <input placeholder='odpowiedź' className='input'></input>
      </div>
    </div>
  )
}
