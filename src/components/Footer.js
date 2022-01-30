import React from 'react'
import styled from 'styled-components'
import FooterCol from './FooterCol'
import PText from './PText'

const FooterStyle = styled.div`
  padding-top: 10rem;
  .container {
    display: flex;
    gap: 3rem;
  }
  .footer__col1 {
    flex: 2;
  }
  .footer__col2,
  .footer__col3,
  .footer__col4 {
    flex: 1;
  }
  .footer__col1__title {
    font-size: 3.5rem;
    margin-bottom: 1rem;
  }
  .container2 {
    display: flex;
    justify-content: center;
    font-size: 20px;
  }
  .copyright {
    background-color: #000;
    text-align: center;
    padding: 1rem 0;
    margin-top: 5rem;
    .para {
      margin-left: 250px;
      min-width: 800px;
    }
  }
  @media only screen and (max-width: 768px) {
    .container {
      flex-direction: column;
      gap: 0rem;
      & > div {
        margin-top: 5rem;
      }
    }
    .footer__col1 .para {
      max-width: 100%;
    }
    .copyright {
      .container {
        div {
          margin-top: 0;
          font-size: 20px;
        }
      }
    }
  }
`

export default function Footer() {
  return (
    <FooterStyle>
      <div className="container">
        <div className="footer__col1">
          <h1 className="footer__col1__title">MICHELLE JORDAN</h1>
          <PText>MoJo Web Design and Development</PText>
        </div>
        <div className="footer__col2">
          <FooterCol
            heading="Important Links"
            links={[
              {
                title: 'Home',
                path: '/',
                type: 'Link',
              },
              {
                type: 'Link',
                title: 'About',
                path: '/about',
              },
              {
                type: 'Link',
                title: 'Projects',
                path: '/projects',
              },
              {
                type: 'Link',
                title: 'Contact',
                path: '/contact',
              },
            ]}
          />
        </div>
        <div className="footer__col3">
          <FooterCol
            heading="Contact Info"
            links={[
              {
                title: '704-674-6532',
                path: 'tel:+7046746532',
              },
              {
                title: 'tmsmith1150@live.com',
                path: 'mailto:tmsmith1150@live.com',
              },
              {
                title: 'MoJoWebDesignandDevelopment',
                path: 'http://google.com/maps',
              },
            ]}
          />
        </div>
        <div className="footer__col4">
          <FooterCol
            heading="social Links"
            links={[
              {
                title: 'LinkedIn',
                path: 'https://www.linkedin.com/in/michelle-jordan-6988maiden/',
              },
              {
                title: 'GitHub',
                path: 'https://github.com/tmsmith1150',
              },
            ]}
          />
        </div>
      </div>
      <div className="copyright">
        <div className="container2">
          <p>
            © 2022 | Designed By{' '}
            <a
              target="_blank"
              rel="noreferrer"
              href="https://www.mojowebdesignanddevelopment.com/"
            >
              Michelle Jordan | React Application
            </a>{' '}
          </p>
        </div>
      </div>
    </FooterStyle>
  )
}
