import React from 'react'
import styled from 'styled-components'

const StyledAnimate = styled.div`
  @import url('https://fonts.googleapis.com/css?family=Bad+Script');
  .container {
    margin: 0;
    padding-top: 20;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 100vh;
    background-color: #000;
  }
  .h1 {
    margin: 0;
    padding: 0;
    color: #111;
  }
  h1 span {
    font-family: 'Bad Script', cursive;
    font-size: 6rem;
    display: table-cell;
    margin: 0;
    padding: 0;
    animation: animate 5s linear infinite;
  }
  h1 span:nth-child(1) {
    animation-delay: 0s;
  }
  h1 span:nth-child(2) {
    animation-delay: 0.25s;
  }
  h1 span:nth-child(3) {
    animation-delay: 0.5s;
  }
  h1 span:nth-child(4) {
    animation-delay: 0.75s;
  }
  h1 span:nth-child(5) {
    animation-delay: 1s;
  }
  h1 span:nth-child(6) {
    animation-delay: 01.25s;
  }
  h1 span:nth-child(7) {
    animation-delay: 1.5s;
  }
  h1 span:nth-child(8) {
    animation-delay: 1.75s;
  }
  h1 span:nth-child(9) {
    animation-delay: 2s;
  }
  h1 span:nth-child(10) {
    animation-delay: 2.25s;
  }
  .h2 {
    margin: 0;
    padding: 0;
    color: #111;
  }
  h2 span {
    font-family: 'Bad Script', cursive;
    font-size: 6rem;
    display: table-cell;
    margin: 0;
    padding: 0;
    animation: animate 5s linear infinite;
  }
  h2 span:nth-child(1) {
    animation-delay: 3.5s;
  }
  h2 span:nth-child(2) {
    animation-delay: 3.75s;
  }
  h2 span:nth-child(3) {
    animation-delay: 4s;
  }
  h2 span:nth-child(4) {
    animation-delay: 4.25s;
  }
  h2 span:nth-child(5) {
    animation-delay: 4.5s;
  }
  h2 span:nth-child(6) {
    animation-delay: 4.75s;
  }
  h2 span:nth-child(7) {
    animation-delay: 5s;
  }
  .h3 {
    margin: 0;
    padding: 0;
    color: #111;
  }
  h3 span {
    font-family: 'Bad Script', cursive;
    font-size: 6rem;
    display: table-cell;
    margin: 0;
    padding: 0;
    animation: animate 5s linear infinite;
  }
  h3 span:nth-child(1) {
    animation-delay: 5.5s;
  }
  h3 span:nth-child(2) {
    animation-delay: 5.75s;
  }
  h3 span:nth-child(3) {
    animation-delay: 6s;
  }
  h3 span:nth-child(4) {
    animation-delay: 6.25s;
  }
  .h4 {
    margin: 0;
    padding: 0;
    color: #111;
  }
  h4 span {
    font-family: 'Bad Script', cursive;
    font-size: 6rem;
    display: table-cell;
    margin: 0;
    padding: 0;
    animation: animate 5s linear infinite;
  }
  h4 span:nth-child(1) {
    animation-delay: 7s;
  }
  h4 span:nth-child(2) {
    animation-delay: 7.25s;
  }
  h4 span:nth-child(3) {
    animation-delay: 7.5s;
  }
  h4 span:nth-child(4) {
    animation-delay: 7.75s;
  }
  @keyframes animate {
    0%,
    100% {
      color: #fff;
      filter: blur(2px);
      text-shadow: 0 0 10px #00b3ff;
      0 0 20px #00b3ff;
      0 0 40px #00b3ff;
      0 0 80px #00b3ff;
      0 0 120px #00b3ff;
      0 0 200px #00b3ff;
      0 0 300px #00b3ff;
      0 0 400px #00b3ff;
    }
    5%,
    95% {
      color: #111;
      filter: blur(0px);
      text-shadow: 0 0 10px none;
    }
  }
`

export default function Animate() {
  return (
    <StyledAnimate>
      <div className="container">
        <div className="row">
          <h1>
            <span className="letters">A</span>
            <span className="letters">n</span>
            <span className="letters">i</span>
            <span className="letters">m</span>
            <span className="letters">a</span>
            <span className="letters">t</span>
            <span className="letters">i</span>
            <span className="letters">o</span>
            <span className="letters">n</span>
            <span className="letters">s</span>
          </h1>
        </div>
        <div className="row">
          <h2>
            <span className="letters">c</span>
            <span className="letters">r</span>
            <span className="letters">e</span>
            <span className="letters">a</span>
            <span className="letters">t</span>
            <span className="letters">e</span>
            <span className="letters">d</span>
          </h2>
        </div>
        <div className="row">
          <h3>
            <span className="letters">w</span>
            <span className="letters">i</span>
            <span className="letters">t</span>
            <span className="letters">h</span>
          </h3>
        </div>
        <div className="row">
          <h4>
            <span className="letters">C</span>
            <span className="letters">S</span>
            <span className="letters">S</span>
            <span className="letters">3</span>
          </h4>
        </div>
      </div>
    </StyledAnimate>
  )
}
