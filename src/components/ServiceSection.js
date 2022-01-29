import React from 'react'
import { MdDesktopMac, MdCode, MdPhonelinkSetup } from 'react-icons/md'
import styled from 'styled-components'
import SectionTitle from './SectionTitle'
import ServicesSectionItem from './ServicesSectionItem'
import BrandingImg from '../assets/images/branding.png'

const ServicesItemsStyles = styled.div`
  padding: 10rem 0;
  .services__allItems {
    display: flex;
    gap: 10rem;
    justify-content: space-between;
    margin-top: 5rem;
  }
  .container {
    margin-top: -120px;
  }
  @media only screen and (max-width: 768px) {
    .services__allItems {
      flex-direction: column;
      max-width: 350px;
      margin: 0 auto;
      margin-top: 5rem;
      gap: 5rem;
    }
    .container {
      margin-top: -170px;
    }
  }
`

export default function ServicesSection() {
  return (
    <ServicesItemsStyles>
      <div className="container">
        <SectionTitle subheading="What I will do for you" heading="Services" />
        <div className="services__allItems">
          <ServicesSectionItem
            icon={<MdDesktopMac />}
            title="web design"
            desc="I can help you increase customer aquisition and retention by optimizing develop time and cost."
          />
          <ServicesSectionItem
            icon={<MdCode />}
            title="web dev"
            desc="I also develop easy to manage, fully responsive websites with high performance and blazing fast speed."
          />
          <ServicesSectionItem
            icon={<MdPhonelinkSetup />}
            title="app Dev"
            desc="I develop mobile applications. I create mobile apps with eye catching ui. "
          />
        </div>
      </div>
    </ServicesItemsStyles>
  )
}
