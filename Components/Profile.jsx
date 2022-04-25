//import "./styles.css";
import styled from "styled-components";
import React from "react";


export default function Profile() {
    return (
    <>
        <header className="quiz-header">
          <div>
            <QuizHeadline>Profile</QuizHeadline>
          </div>
        </header>
        <Headline>Franzi Graml</Headline>
        <div className="intro">
          <main className="quiz-main">
            <section>
              <AboutMeText>
                <AboutMe>About me</AboutMe>
                <p>
                  Hallo zusammen!Mein Name ist Franzi Graml bin 34 Jahre alt und
                  wohne mit meiner Familie in Landshut.
                </p>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic
                  magnam quibusdam quo perspiciatis mollitia ad omnis
                  voluptatibus vel, corrupti saepe ea possimus. Quod ea esse
                  facere doloribus harum nostrum nulla. Laboriosam, sint?
                  Veritatis sapiente error, distinctio a possimus minus quas sed
                  architecto excepturi, veniam, quis nisi delectus amet fugiat
                  consequatur eaque explicabo magni vel necessitatibus. Tempore
                  ducimus hic harum ipsa? Ex, quos! Esse maxime perferendis
                  dolor nam mollitia at? Eveniet, iste error. Consectetur
                  officiis voluptate unde excepturi in vitae. Alias nisi quod ea
                  itaque quos assumenda autem eos facere amet?
                </p>
              </AboutMeText>
              <LogoutButton>LOGOUT</LogoutButton>
            </section>
          </main>
        </div>
    </>
  );
}

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

const AboutMe = styled.h2`
  display: flex;
`;

const AboutMeText = styled.article`
  border: solid;
  border-radius: 20px;
  box-shadow: rgba(197, 64, 75, 0.52) 0px 50px 100px -20px,
    rgba(0, 0, 0, 0) 0px 30px 60px -30px,
    rgba(182, 93, 20, 0.65) 0px -2px 6px 0px inset;
  border-radius: 20px;
  padding: 1rem;
  margin: 2rem;
`;

/* const Skill = styled.article`
  list-style: none;

  border: solid;
  box-shadow: rgba(233, 14, 32, 0.76) 0px 50px 100px -20px,
    rgba(0, 0, 0, 0) 0px 30px 60px -30px,
    rgba(182, 93, 20, 0.65) 0px -2px 6px 0px inset;
  border-radius: 20px;
  padding: 0.2rem;
  margin: 2rem;
  height: 120px;
`;

const SkillList = styled.li`
  list-style: none;
  border: solid 0.1rem;
  padding: 0.3rem 1.5rem;
  border-radius: 0.3rem;
  background-color: antiquewhite;
  background-color: whitesmoke;
  cursor: pointer;
`;

const Skills = styled.ul`
  display: flex;
  align-items: center;
  justify-content: space-around;
  padding: 0.2rem;
`; */

const LogoutButton = styled.button`
  display: flex;
  padding: 0.2rem 1rem;
  margin: auto;

  &hover: {
    background-color: red;
    cursor: pointer;
  }
`;
