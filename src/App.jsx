import "./App.css";
import React from "react";
//import styled from 'styled-components';

export default function App() {
  return (
    <>
      <div>
        <section className="Container">
          <h1 className="quiz_headline">QUIZ-APP</h1>
          <article className="card_container">
            <h2 className="headline">Question</h2>
            <AnswerToggle
              questionText="Lorem Ipsum dkjdkjdkjd"
              buttonAnswer="Show Answer"
              answerText="Lorem Ipsum djkdjk"
              buttonHide=" Hide Answer"
            />
            <UnList List="pink" />
          </article>

          <footer class="quiz_footer"></footer>
        </section>
      </div>
    </>
  );
}

function AnswerToggle({ questionText, buttonAnswer, answerText, buttonHide }) {
  return (
    <>
      <div>
        <p>{questionText}</p>
        <button className="button">{buttonAnswer}</button>
        <button className="button_hidden">{buttonHide}</button>
        <p className="hidden">{answerText}</p>
      </div>
    </>
  );
}

function UnList({ List }) {
  return (
    <>
      <div>
        <ul className="unList">
          <li className="tags">{List}</li>
          <li className="tags">{List}</li>
          <li className="tags">{List}</li>
        </ul>
      </div>
    </>
  );
}