"use client";

import "./styles.css";
import React from "react";
import { useState, useEffect } from "react";
import { Button, TextField, Box } from "@mui/material";
import apiCall from "./api";
export default function Home({ data }: any) {

  const [message, setMessage] = useState("");
  const [ans, setAns] = useState("");
  const [goodans, setGoodans] = useState(0);
  const [badans, setBadans] = useState(0);
  const [msg, setMsg] = useState("");


  const handleChange = (event: { target: { value: string; }; }) => {
    setMessage(event.target.value.toUpperCase());
    console.log("value is:", event.target.value, "msg:", msg);
  };

  return (
    <>
      <div className="ans-counter">
        <h1>Bad answers: {goodans}</h1>
        <h1>Good answers: {badans}</h1>
      </div>
      <div className="main">
        <div className="box ">
          <Button variant="contained" sx={{ background: "linear-gradient(to top left, #ff0000 20%, #0400ff 103% )" }} onClick={apiCall}>
            Next question
          </Button>
          {data &&
            data.map((data) => {
              const CheckAnswer = () => {
                if (message != data.answer.toUpperCase()) {
                  setAns("false");
                  setGoodans(goodans + 1);
                }
                if (message == data.answer.toUpperCase()) {
                  setAns("true");
                  setBadans(badans + 1);
                }
              };

              return (
                <div key={data}>
                  <h1>Category: {data.category}</h1>
                  <h1>{data.question} ?</h1>
                  {ans == "true" ? (
                    <div>
                      <h1 className="ans">Good answer 👍</h1>
                    </div>
                  ) : ans == "false" ? (
                    <div>
                      <h1 className="ans">Bad answer 👎</h1>
                      <h1>Answer: {data.answer}</h1>
                    </div>
                  ) : (
                    <Box sx={{ textTransform: "capitalize" }}>
                      <TextField
                        variant="standard"
                        sx={{
                          p: "1rem",
                          input: { color: "white", backgroundcolor: "white" },
                        }}
                        placeholder="Answer"
                        className="input"
                        onChange={handleChange}
                        value={message}
                      />
                      <Button
                        variant="contained"
                        sx={{ p: "0.75rem", background: "linear-gradient(to top left, #ff0000 20%, #0400ff 103% )" }}
                        onClick={CheckAnswer}
                      >
                        SUBMIT
                      </Button>
                    </Box>
                  )}
                </div>
              );
            })}
        </div>
      </div>
    </>
  );
}
