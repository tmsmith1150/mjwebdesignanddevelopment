import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import ProjectImg from '../assets/images/projectImg.png'

const ProjectItemStyles = styled.div`
  .projectItem__img {
    width: 100%;
    height: 400px;
    border-radius: 12px;
    overflow: hidden;
    display: inline-block;
    border: 3px solid var(--gray-2);
    img {
      height: 100%;
    }
  }
  .projectItem__info {
    margin-top: 1rem;
    background-color: var(--deep-dark);
    padding: 1rem;
    border-radius: 12px;
  }
  .projectItem__title {
    font-size: 28px;
  }
  .projectItem__desc {
    font-size: 15px;
    font-family: 'RobotoMono Regular';
    margin-top: 1rem;
  }
  .link {
    line-height: 20px;
    text-decoration: underline;
    color: #02c2f7;
    font-size: 15px;
  }
  .link:hover {
    color: #02f54b;
  }
  @media only screen and (max-width: 768px) {
    .projectItem__img {
      height: 350px;
    }
  }
`

export default function ProjectItem({
  img = ProjectImg,
  title = 'Project Name',
  desc = 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
  deployedLink = 'Visit Site',
}) {
  return (
    <ProjectItemStyles>
      <Link className="projectItem__img">
        <img src={img} alt="project img" />
      </Link>
      <div className="projectItem__info">
        <Link to="#">
          <h3 className="projectItem__title">{title}</h3>
        </Link>
        <p className="projectItem__desc">{desc}</p>
        <a
          href={deployedLink}
          className="link"
          target="_blank"
          rel="noreferrer"
        >
          Visit Site
        </a>
      </div>
    </ProjectItemStyles>
  )
}
