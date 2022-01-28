import React from 'react'
import styled from 'styled-components'

const StyledHexagon = styled.div`
  .body {
    min-height: 100vh;
    background-color: #000;
  }
  .container {
    position: relative;
    height: 400px;
    overflow: hidden;
    animation: animate 4s linear infinite;
  }
  @keyframes animate {
    0% {
      filter: hue-rotate(0deg);
    }
    100% {
      filter: hue-rotate(360deg);
    }
  }
  .row {
    display: inline-flex;
    margin-top: -32px;
    margin-left: -50px;
  }
  .row:nth-child(even) {
    margin-left: 5px;
  }
  .hexagon {
    position: relative;
    width: 110px;
    height: 110px;
    background-color: #111;
    margin: 2px;
    clip-path: polygon(25% 0%, 75% 0%, 100% 50%, 75% 100%, 25% 100%, 0% 50%);
    transition: 2s;
  }
  .hexagon:hover {
    transition: 0s;
    background-color: #0f0;
  }
  .hexagon:after {
    content: '';
    position: absolute;
    top: 4px;
    bottom: 4px;
    left: 4px;
    right: 4px;
    background-color: #111;
    clip-path: polygon(25% 0%, 75% 0%, 100% 50%, 75% 100%, 25% 100%, 0% 50%);
    z-index: 1;
  }
  .hexagon:before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 50%;
    height: 100%;
    pointer-events: none;
    background-color: rgba(255, 255, 255, 0.02);
    z-index: 1000;
  }
`

export default function Hexagon() {
  return (
    <StyledHexagon>
      <div className="body">
        <div className="container">
          <div className="row">
            <div className="hexagon" />
            <div className="hexagon" />
            <div className="hexagon" />
            <div className="hexagon" />
            <div className="hexagon" />
            <div className="hexagon" />
            <div className="hexagon" />
            <div className="hexagon" />
            <div className="hexagon" />
            <div className="hexagon" />
            <div className="hexagon" />
            <div className="hexagon" />
            <div className="hexagon" />
            <div className="hexagon" />
            <div className="hexagon" />
            <div className="hexagon" />
          </div>
          <div className="row">
            <div className="hexagon" />
            <div className="hexagon" />
            <div className="hexagon" />
            <div className="hexagon" />
            <div className="hexagon" />
            <div className="hexagon" />
            <div className="hexagon" />
            <div className="hexagon" />
            <div className="hexagon" />
            <div className="hexagon" />
            <div className="hexagon" />
            <div className="hexagon" />
            <div className="hexagon" />
            <div className="hexagon" />
            <div className="hexagon" />
            <div className="hexagon" />
          </div>
          <div className="row">
            <div className="hexagon" />
            <div className="hexagon" />
            <div className="hexagon" />
            <div className="hexagon" />
            <div className="hexagon" />
            <div className="hexagon" />
            <div className="hexagon" />
            <div className="hexagon" />
            <div className="hexagon" />
            <div className="hexagon" />
            <div className="hexagon" />
            <div className="hexagon" />
            <div className="hexagon" />
            <div className="hexagon" />
            <div className="hexagon" />
            <div className="hexagon" />
          </div>
          <div className="row">
            <div className="hexagon" />
            <div className="hexagon" />
            <div className="hexagon" />
            <div className="hexagon" />
            <div className="hexagon" />
            <div className="hexagon" />
            <div className="hexagon" />
            <div className="hexagon" />
            <div className="hexagon" />
            <div className="hexagon" />
            <div className="hexagon" />
            <div className="hexagon" />
            <div className="hexagon" />
            <div className="hexagon" />
            <div className="hexagon" />
            <div className="hexagon" />
          </div>
          <div className="row">
            <div className="hexagon" />
            <div className="hexagon" />
            <div className="hexagon" />
            <div className="hexagon" />
            <div className="hexagon" />
            <div className="hexagon" />
            <div className="hexagon" />
            <div className="hexagon" />
            <div className="hexagon" />
            <div className="hexagon" />
            <div className="hexagon" />
            <div className="hexagon" />
            <div className="hexagon" />
            <div className="hexagon" />
            <div className="hexagon" />
            <div className="hexagon" />
          </div>
          <div className="row">
            <div className="hexagon" />
            <div className="hexagon" />
            <div className="hexagon" />
            <div className="hexagon" />
            <div className="hexagon" />
            <div className="hexagon" />
            <div className="hexagon" />
            <div className="hexagon" />
            <div className="hexagon" />
            <div className="hexagon" />
            <div className="hexagon" />
            <div className="hexagon" />
            <div className="hexagon" />
            <div className="hexagon" />
            <div className="hexagon" />
            <div className="hexagon" />
          </div>
          <div className="row">
            <div className="hexagon" />
            <div className="hexagon" />
            <div className="hexagon" />
            <div className="hexagon" />
            <div className="hexagon" />
            <div className="hexagon" />
            <div className="hexagon" />
            <div className="hexagon" />
            <div className="hexagon" />
            <div className="hexagon" />
            <div className="hexagon" />
            <div className="hexagon" />
            <div className="hexagon" />
            <div className="hexagon" />
            <div className="hexagon" />
            <div className="hexagon" />
          </div>
        </div>
      </div>
    </StyledHexagon>
  )
}
