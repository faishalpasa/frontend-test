import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import QuotesImage from '~/images/quotes.svg'
import LittleQuotesO from '~/images/LittleQuotesO.svg'
import LittleQuotesW from '~/images/LittleQuotesW.svg'
import Text from '~/components/Text'

const TestimonialSection = styled.section`
  display: flex;
  flex-wrap: wrap;
  margin-bottom: 200px;
`
const ContentLeft = styled.div`
  padding: 40px 120px;
  flex: 1;
`
const TestimonialTitleWrapper = styled.div`
  position: relative;
  z-index: 0;
  min-height: 415px;
`
const BackgroundImage = styled.img`
  position: absolute;
  width: 100%;
  z-index: -1;
  top: 0;
`
const Title = styled(Text)`
  padding: 40px;
  z-index: 1;
`
const ContentRight = styled.div`
  background: #F8765E;
  border-radius: 20px 0px 0px 20px;
  width:40%;
  padding: 225px 120px;
  position: relative;
`
const TestimonialCardWrapper = styled.div`
  display: flex;
  gap: 60px;
  align-items: stretch;
  width: 850px;
  min-height: 500px;
  overflow-y: scroll;
  margin-left: -50%;
`
const TestimonialCard = styled.div`
  padding: 60px 50px;
  box-shadow: 12px 12px 40px rgba(0, 0, 0, 0.25);
  border-radius: 20px;
  width: 50%;
  display: flex;
  flex-direction: column;
  :nth-child(even) {
    background: #FFFFFF;
  }
  :nth-child(odd) {
    background: #9BDBE7;
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

function TestimonialSectionView({
  testimonials
}) {
  return (
    <TestimonialSection id="testimonial">
      <ContentLeft>
        <TestimonialTitleWrapper>
          <Title fontSize={40} fontWeight="bold" lineHeight={48} color="#F8765E">
            What Our
            <br />
            Customers Say
          </Title>
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