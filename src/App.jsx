import "./App.css";
import React, { useEffect } from "react";
import styled from 'styled-components';
import { useState } from "react";
import Card from '../Components/Card';
import Footer from '../Components/Footer';
import Profile from '../Components/Profile';
//import Form from '../Components/Form';
import {Routes} from 'react-router-dom';
import {Route} from 'react-router-dom';



export default function App() {
const url = "https://the-trivia-api.com/questions";
const [question, setQuestion] = useState([]);


async function fetchApi(apiUrl) {
  try {
    const response = await fetch(apiUrl);
    const data = await response.json();
    return data;
  } catch (error) {
    console.error(`Something went wrong ${error}`);
  }
}

  useEffect(() => {
  initialQuestion();
  }, []);

 

  async function initialQuestion() {
    const question = await fetchApi(url);
    const upgradedQuestion = await Promise.all(
      question.map(async (question, index) => {
        return {
          category: question.category,
          question: question.question,
          incorrectAnswers: question.incorrectAnswers,
          correctAnswer: question.correctAnswer,
          isHidden: true,
          index: index,
        };
      })
    );
    setQuestion(upgradedQuestion);
  };

  
  function toggleAnswer(index) {
    const newState = [...question];
    newState[index].isHidden =  !newState[index].isHidden;
    setQuestion(newState);
  };

  console.log('hallo', question);

  return (
  <div className="App">
    <Routes>
      <Route exact path="/" element={<Card 
        question={question}
        toggleAnswer={toggleAnswer}
        />} />
      <Route path="Bookmark"></Route>
      <Route path="Form"></Route>
        
      <Route path="Profile" element={<Profile />} />
    </Routes>
    <Footer />
  </div>
  )
}

