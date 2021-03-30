import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import Button from '~/components/Button'
import HeadingText from '~/components/HeadingText'
import Text from '~/components/Text'
import InputField from '~/components/InputField'

const BottomSection = styled.section`
  padding: 25px 0px;
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  align-items: center;
  max-width: 1200px;
  margin: auto;
  margin-bottom: 140px;
`
const StyledH1 = styled(HeadingText)`
  margin-bottom: 16px;
`
const StyledText = styled(Text)`
  margin-bottom: 50px;
`
const SubscribeBottom = styled.div`
  display: flex;
  gap: 16px;
`

function BottomSectionView({
  launchDayRemaining,
}) {
  return(
    <BottomSection>
      <StyledH1 fontSize={48} lineHeight={60} color="#F8765E">
        Subscribe today and get notified first!
      </StyledH1>
      <StyledText fontSize={34} lineHeight={45} color="#CDCDCD">
        {`Product launch in: ${launchDayRemaining} days`}
      </StyledText>
      <SubscribeBottom>
        <InputField placeholder="Your email address" />
        <Button>Subscribe Now</Button>
      </SubscribeBottom>
    </BottomSection>
  )
}

BottomSectionView.propTypes = {
  launchDayRemaining: PropTypes.number.isRequired,
}

export default BottomSectionView