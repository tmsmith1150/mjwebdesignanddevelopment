import React from 'react'
import styled from 'styled-components'
import Button from './Button'
import PText from './PText'
import SectionTitle from './SectionTitle'
import AboutImg from '../assets/images/about-sec-img1.png'

const AboutSectionStyles = styled.div`
  padding: 10rem 0;
  .container {
    display: flex;
    align-items: center;
    justify-content: flex-start;
    text-align: left;
  }
  .aboutSection__left,
  .aboutSection__right {
    flex: 1;
  }
  .aboutSection__left {
    margin-top: -135px;
    margin-left: 30px;
  }
  .aboutSection__right {
    margin-top: 35px;
  }
  .section-title {
    text-align: left;
  }
  .para {
    margin-top: 2rem;
    margin-left: 0;
  }
  .aboutSection__buttons {
    display: flex;
    align-items: center;
    justify-content: flex-start;
    gap: 2rem;
    margin-top: 2rem;
  }
  @media only screen and (max-width: 950px) {
    .aboutSection__left {
      flex: 4;
    }
    .aboutSection__right {
      flex: 3;
    }
  }
  @media only screen and (max-width: 768px) {
    .container {
      flex-direction: column;
      text-align: center;
      margin-top: 50px;
    }
    .aboutSection__left,
    .aboutSection__right {
      width: 100%;
    }
    .aboutSection__right {
      margin-top: 4rem;
      margin-left: 5rem;
    }
    .section-title {
      text-align: center;
      margin-top: 80px;
    }
    .para {
      margin: 0 auto;
      margin-top: 2rem;
    }
    .aboutSection__buttons {
      flex-direction: column;
      gap: 0rem;
      .button-wrapper,
      a {
        width: 100%;
        text-align: center;
      }
    }
  }
`

export default function AboutSection() {
  return (
    <AboutSectionStyles>
      <div className="container">
        <div className="aboutSection__left">
          <SectionTitle
            subheading="Let me introduce myself"
            heading="About Me"
          />
          <PText>
            I am a freelance web designer and developer. I love utilizing my
            extensive background in design and passion for technology to bring a
            vision to life through coding. My skills include React,
            Javascript/ES6, HTML, CSS/SASS, Node.js, Heroku/Git/AWS Deployment,
            JSON API’s, Jquery, MySql & MongoDB, Bootstrap/Tailwind/Flexbox,
            ESLint/Prettier, MVC, Wordpress, Figma, Adobe Illustrator, Adobe
            Photoshop.
          </PText>
          <div className="aboutSection__buttons">
            <Button btnText="Works" btnLink="/projects" />
            <Button btnText="Read More" btnLink="/about" outline />
          </div>
        </div>
        <div className="aboutSection__right">
          <img className="aboutImg" src={AboutImg} alt="michelle jordan" />
        </div>
      </div>
    </AboutSectionStyles>
  )
}
