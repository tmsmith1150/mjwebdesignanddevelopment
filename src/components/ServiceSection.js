import React from 'react'
import { MdDesktopMac, MdCode, MdPhonelinkSetup } from 'react-icons/md'
import styled from 'styled-components'
import { DiAws } from 'react-icons/di'
import SectionTitle from './SectionTitle'
import ServicesSectionItem from './ServicesSectionItem'

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
            desc="Using UI/UX design best practices, I can help you increase customer aquisition and retention in addition to optimizing development time and cost."
          />
          <ServicesSectionItem
            icon={<MdCode />}
            title="web dev"
            desc="From ideation to production, I develop easy to manage and fully responsive websites that are high performing with blazing fast speeds."
          />
          <ServicesSectionItem
            icon={<DiAws />}
            title="deploy"
            desc="I offer deployment hosting and maintenance services. I will stay focused on your tech story so you can stay focused on your clients and growing your business. "
          />
        </div>
      </div>
    </ServicesItemsStyles>
  )
}
