import React from "react";
import styled from 'styled-components';
import { useState } from "react";



export default function Form() {
  const [questionInputValue, setQuetionInpuValue] = useState("");
  const [answerInputValue, setAnswerInputValue] = useState("");

  function handleSubmit(event) {
    event.preventDefault();

  }
}

return (
  <form aria-aria-labelledby="user" onSubmit={handleSubmit}>
    <h2 id="user">Create a question</h2>
    <label htmlFor="question">Question</label>
    <input
    id="question"
    type="text"
    value={questionInputValue}
    onChange
    />

<label htmlFor="answer">Answer</label>
    <input
    id="answer"
    type="text"
    value={answerInputValue}
    onChange
    />


  </form>
  
)
}



/* 
export default function Form() {
    const [create, setCreate] = useState("");
    const [answer, setAnswer] = useState("");
  
    function createQuestion(create, answer) {
      setQuestion(question);
      setAnswer(answer);
    }
  

    function handleSubmit(event) {
      event.preventDefault();
      const form = event.target;
      const { create, answer } = form.elements;
      onCreateQuestion(create.value, answer.value);
      form.reset();
    }
   
      
    
  }
   */