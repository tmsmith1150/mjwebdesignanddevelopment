import React from 'react';
import styled from 'styled-components';
import PText from '../components/PText';
import AboutImg from '../assets/images/banner-18.jpg';
import AboutInfoItem from '../components/AboutInfoItem';
import ContactBanner from '../components/ContactBanner';

const AboutPageStyles = styled.div`
  padding: 20rem 0 10rem 0;
  .top-section {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 2rem;
  }
  .left {
    flex: 3;
  }
  .right {
    flex: 2;
  }
  .about__subheading {
    font-size: 2.2rem;
    margin-bottom: 2rem;
    span {
      background-color: #858c8a;
      padding: 0.5rem;
      border-radius: 8px;
    }
  }
  .about__heading {
    font-size: 3.6rem;
    margin-bottom: 3rem;
  }
  .about__info {
    margin-bottom: 4rem;
    .para {
      max-width: 100%;
    }
  }
  .right {
    img {
      border: 2px solid var(--gray-1);
      width: 300px;
      height: 300px;
      filter: brightness(70%);
      margin-left: 60px;
    }
  }
  .about__info__items {
    margin-top: 15rem;
  }
  .about__info__item {
    margin-bottom: 10rem;
  }
  .about__info__heading {
    font-size: 3.6rem;
    text-transform: uppercase;
  }
  @media only screen and (max-width: 768px) {
    padding: 10rem 0;
    .top-section {
      flex-direction: column;
      gap: 5rem;
    }
    .about__info__item {
      max-width: 300px;
    }
    .about__subheading {
      font-size: 1.8rem;
    }
    .about__heading {
      font-size: 2.8rem;
    }
    .about__info__heading {
      font-size: 3rem;
    }
  }
`;

export default function About() {
  return (
    <>
      <AboutPageStyles>
        <div className="container">
          <div className="top-section">
            <div className="left">
              <p className="about__subheading">
                Hi, I am <span>Michelle Jordan</span>
              </p>
              <h2 className="about__heading">A freelance web developer</h2>
              <div className="about__info">
                <PText>
                  Thinking outside the box, I am passionate about creating
                  dynamic and impactful websites to enhance user experiences. I
                  strive to understand your vision and help you overcome the
                  challenges you face.
                  <br /> <br />
                  If your website doesn’t reflect your true goals, mission
                  statement, and strategy, the first impression people will get
                  from it won’t match your model.
                  <br />
                  <br />I can help you define your image and brand by creating
                  your website using the latest technology and development
                  practices to build your online presence.
                </PText>
              </div>
              {/* <Button btnText="Download CV" btnLink="#" /> */}
            </div>
            <div className="right">
              <img src={AboutImg} alt="me" />
            </div>
          </div>
          <div className="about__info__items">
            <div className="about__info__item">
              <h1 className="about__info__heading">Education</h1>

              <AboutInfoItem
                items={['American Business and Fashion Institute']}
                desc={['Associate Degree: Interior Design']}
              />
              <AboutInfoItem
                items={['University Of North Carolina']}
                desc={['Certificate: Full Stack Web Development']}
              />
            </div>
            <div className="about__info__item">
              <h1 className="about__info__heading">My Skills</h1>

              <AboutInfoItem
                title="FrontEnd"
                items={[
                  'React',
                  'HTML',
                  'CSS/SASS',
                  'JavaScript/ES6',
                  'Wordpress',
                ]}
              />
              <AboutInfoItem
                title="BackEnd"
                items={['Node', 'Express', 'MySql/MongoDB']}
              />
              <AboutInfoItem
                title="Design"
                items={['Photoshop', 'Illustrator', 'Figma']}
              />
            </div>
            <div className="about__info__item">
              <h1 className="about__info__heading">Experiences</h1>

              <AboutInfoItem
                title="2020-present"
                items={[
                  'Freelance Web Developer at MoJo Web Design and Development',
                ]}
              />
              <AboutInfoItem
                title="2021"
                items={[
                  'Software Developer/Training Manager at Furniture Retail Operations Group ',
                ]}
              />
            </div>
          </div>
        </div>
        <ContactBanner />
      </AboutPageStyles>
    </>
  );
}
