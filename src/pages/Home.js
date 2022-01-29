import React from 'react'
import HeroSection from '../components/HeroSection'
import AboutSection from '../components/AboutSection'
import AboutSection2 from '../components/AboutSection2'
import ServiceSection from '../components/ServiceSection'
import ProjectsSection from '../components/ProjectsSection'
import TestimonialsSection from '../components/TestimonialsSection'
import ContactBanner from '../components/ContactBanner'
import Footer from '../components/Footer'

export default function Home() {
  return (
    <div>
      <HeroSection />
      <AboutSection />
      <AboutSection2 />
      <ServiceSection />
      <ProjectsSection />
      <TestimonialsSection />
      <ContactBanner />
      <Footer />
    </div>
  )
}
