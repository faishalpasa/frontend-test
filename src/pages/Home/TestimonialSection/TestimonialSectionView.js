import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import QuotesImage from '~/images/quotes.svg'
import LittleQuotesO from '~/images/LittleQuotesO.svg'
import LittleQuotesW from '~/images/LittleQuotesW.svg'
import Text from '~/components/Text'
import { breakpoint } from '~/constants/breakpoints'

const TestimonialSection = styled.section`
  display: flex;
  flex-wrap: wrap;
  margin: 200px 0px 200px auto;
  padding-left: 40px;
  max-width: 1320px;

  @media ${breakpoint.tablet} {
    margin-top: 100px;
    margin-bottom: 100px;
  }
`
const ContentLeft = styled.div`
  padding: 40px 100px 40px 0px;
  flex: 0 0 auto;
  width: 30%;

  @media ${breakpoint.tablet} {
    width: 50%;
    margin-left: 0;
    margin-right: auto;
    z-index: 2;
  }
`
const TestimonialTitleWrapper = styled.div`
  position: relative;
  z-index: 0;
  min-height: 415px;
  @media ${breakpoint.tablet} {
    min-height: unset;
  }
`
const BackgroundImage = styled.img`
  position: absolute;
  width: 100%;
  z-index: -1;
  top: 0;
  @media ${breakpoint.tablet} {
    width: 150px;
    height: 165px;
  }
`
const Title = styled(Text)`
  padding: 40px;
  z-index: 1;
`
const ContentRight = styled.div`
  background: #F8765E;
  border-radius: 20px 0px 0px 20px;
  flex: 1 0 0%;
  padding: 225px 0px;
  position: relative;

  @media ${breakpoint.laptop} {
    width: 50%;
    flex: 1;
  }

  @media ${breakpoint.tablet} {
    width: 90%;
    flex: 0;
    margin-right: 0;
    margin-left: auto;
    padding: 120px 0px;
    margin-top: -50px;
  }
`
const TestimonialCardWrapper = styled.div`
  display: flex;
  gap: 60px;
  align-items: stretch;
  padding: 32px 0px;
  min-height: 500px;
  max-width: 800px;
  min-width: 110%;
  margin-left: -210px;
  overflow-y: auto;

  @media ${breakpoint.laptop} {
    width: 50%;
    flex: 0;
    margin-left: -110px;
    min-height: 400px;
  }

  @media ${breakpoint.tablet} {
    padding-left: 40px;
    width: calc(100vw - 40px);
  }
`
const TestimonialCard = styled.div`
  padding: 60px 50px;
  box-shadow: 12px 12px 40px rgba(0, 0, 0, 0.25);
  border-radius: 20px;
  min-width: 320px;
  display: flex;
  flex-direction: column;
  :nth-child(even) {
    background: #FFFFFF;
  }
  :nth-child(odd) {
    background: #9BDBE7;
  }

  @media ${breakpoint.tablet} {
    max-width: 200px;
    min-width: 200px;
  }
`
const QuotesImageSmall = styled.img`
  width: 50px;
  height: 50px;
`
const Customer = styled(Text)`
  margin-top: auto;
  margin-bottom: 0;
`
const StyledTitle = styled(Text)`
  padding: 20px;
  @media ${breakpoint.tablet} {
    width: 60vw;
    font-weight: 500;
    font-size: 26px;
    line-height: 45px;
  }
`

function TestimonialSectionView({
  testimonials
}) {
  return (
    <TestimonialSection id="testimonial">
      <ContentLeft>
        <TestimonialTitleWrapper>
          <StyledTitle fontSize={40} fontWeight="bold" lineHeight={48} color="#F8765E">
            What Our
            <br />
            Customers Say
          </StyledTitle>
          <BackgroundImage src={QuotesImage} />
        </TestimonialTitleWrapper>
      </ContentLeft>
      <ContentRight>
        <TestimonialCardWrapper>
          {testimonials.map((testimonial, index) => (
            <TestimonialCard key={index}>
              <QuotesImageSmall src={index % 2 ? LittleQuotesO : LittleQuotesW} alt="quote image small" />
              <Text
                fontSize={18}
                lineHeight={36}
                color={index % 2 ? '#7C7C7C' : '#FFFFFF'}
              >
                {testimonial.comment}
              </Text>
              <Customer
                fontSize={18}
                lineHeight={36}
                color={index % 2 ? '#7C7C7C' : '#FFFFFF'}
              >
                {`${testimonial.customer} / ${testimonial.company}`}
              </Customer>
            </TestimonialCard>
          ))}
        </TestimonialCardWrapper>
      </ContentRight>
    </TestimonialSection>
  )
}

TestimonialSectionView.propTypes = {
  testimonials: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
}

export default TestimonialSectionView