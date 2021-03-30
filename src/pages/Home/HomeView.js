import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import TopBar from './TopBar'
import TopContent from './TopContent'
import USP from './USP'
import MiddleSection from './MiddleSection'
import TestimonialSection from './TestimonialSection'
import BottomSection from './BottomSection'
import Footer from './Footer'

const Main = styled.main`
  background-color: #FFFFFF;
`
const Header = styled.header`
  background: #031D5B;
`

function HomeView({
  benefits,
  benefitImages,
  testimonials,
  launchDayRemaining,
  isLoading,
}) {  
  return(
    <Main>
      <Header>
        <TopBar />
        <TopContent />
      </Header>
      <USP benefits={benefits} benefitImages={benefitImages} isLoading={isLoading} />
      <MiddleSection />
      <TestimonialSection testimonials={testimonials} />
      <BottomSection launchDayRemaining={launchDayRemaining} />
      <Footer />
    </Main>
  )
}

HomeView.propTypes = {
  benefits: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
  benefitImages: PropTypes.arrayOf(PropTypes.string).isRequired,
  testimonials: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
  launchDayRemaining: PropTypes.number.isRequired,
  isLoading: PropTypes.bool.isRequired,
}

export default HomeView