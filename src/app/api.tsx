'use server'
import Home from "./page";
const callAPI = async () => {
    const url = "https://trivia-by-api-ninjas.p.rapidapi.com/v1/trivia";
    const options = {
      method: "GET",
      headers: {
        "X-RapidAPI-Key": "ebf8fe15a0msh9347bf8a12ae3a9p114e9ajsn431be86ffa31",
        "X-RapidAPI-Host": "trivia-by-api-ninjas.p.rapidapi.com",
      },
    };

    try {
      const response = await fetch(url, options);
      const result = await response.json();
      console.log(result);
    } catch (error) {
      console.error(error);
    }
  };

  export default async function apiCall() {
    const data = await callAPI()
   
    return <Home data={data}/>
  }