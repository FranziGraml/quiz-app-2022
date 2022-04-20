import React from "react";
import styled from 'styled-components';
import bookmark from '../images/bookmark.png'
import { useState } from "react";



export default function Card({question, toggleAnswer}) {

    return (
      <div>
        <QuizHeadline>QUIZ-APP</QuizHeadline>
        {question.map((question, index) => (
        <section>
          <CardContainer>
          <Headline>Question</Headline>
          <span>
            <BookImg src={bookmark}/>
          </span>
          <Text>{question.question}</Text>
          <UnList>
            <ListTags>{question.incorrectAnswers[0]}</ListTags>
            <ListTags>{question.incorrectAnswers[1]}</ListTags >
            <ListTags>{question.incorrectAnswers[2]}</ListTags >
            <ListTags>{question.correctAnswer}</ListTags >
          </UnList>
          <ButtonAnswer onClick={() => {
           toggleAnswer(index) 
          }}>
            {question.isHidden ? "Show Answer" : "Hide Answer"}
          </ButtonAnswer>
          <TextAnswer>{question.isHidden ? "" : question.correctAnswer}</TextAnswer>
          </CardContainer>
        </section>
      ))};
      </div>
    );
  }




  
  // CSS headline

const QuizHeadline = styled.h1`
background-color: rgba(236, 166, 166, 0.472);
display: flex;
justify-content: center;
padding: 0.5rem;
`;

const Headline = styled.h2`
display: flex;
justify-content: center;
padding: 0.5rem;
`;
  
  //CSS CardContainer
  const CardContainer = styled.article`
  position: relative;
  border: solid;
  box-shadow: rgba(197, 64, 75, 0.52) 0px 50px 100px -20px,
    rgba(0, 0, 0, 0) 0px 30px 60px -30px,
    rgba(182, 93, 20, 0.65) 0px -2px 6px 0px inset;
  border-radius: 20px;
  padding: 1rem;
  margin: 2rem`;

  // CSS bookmark

  const BookImg =styled.img`
  width: 2rem;
  heigt:2rem;
  position: absolute;
  right: 0rem;
  top: 0.3rem;
  cursor:pointer;
  `;



//  CSS UnList
  const UnList = styled.ul`
    display: flex;
    align-items: center;
    justify-content: space-around;
    list-style: none;
    margin: 0.5rem 0 0.2rem 0;
    padding: 0;
  `
;
const ListTags = styled.li`
    border: solid 0.1rem;
    padding: 0.2rem 0.8rem;
    border-radius: 0.3rem;
    background-color: rgba(249, 212, 189, 0.568);
    font-size: medium;
  `
  ;

  // CSS Text; Text Answer
  const Text = styled.p`
  display: flex;
  margin: auto;
  justify-content: center;
  `;

  const TextAnswer = styled.p`
  display: flex;
  margin: auto;
  justify-content: center;
  `;

//CSS Button
  const ButtonAnswer =styled.button`
  display: flex;
  margin: auto;
  cursor: pointer;

  &:hover {
    color:red;
  }
  `;
