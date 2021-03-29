import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const USPCard = styled.div`
  background: #FFFFFF;
  box-shadow: 0px 10px 34px rgba(0, 0, 0, 0.15);
  border-radius: 20px;
  display: flex;
  max-width: 1200px;
  margin: -120px auto auto;
  padding: 60px 50px;
  gap: 100px;
`
const USPItem = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
`
const ImageSection = styled.div`
  padding: 32px;
`
const Image = styled.img`
  height: 140px;
`
const TitleSection = styled.div`
  padding: 16px 0px;
  border-bottom: 5px solid #F8765E;
  width: fit-content;
`
const Title = styled.p`
  font-weight: 500;
  font-size: 18px;
  line-height: 25px;
  color: #031D5B;
  margin: 0px;
`
const DescSection = styled.div`
  padding-top: 32px;
`
const Desc = styled.p`
  font-weight: 500;
  font-size: 16px;
  line-height: 32px;
  color: #5B6C94;
  margin: 0px;
`

function USPView({
  benefits,
  benefitImages,
  isLoading,
}) {
  return(
    <USPCard id="benefit">
      {!isLoading && benefits.map((benefit, index) => (
        <USPItem key={index}>
          <ImageSection>
            <Image src={benefitImages[index]} alt={benefit.title} />
          </ImageSection>
          <TitleSection>
            <Title>
              {benefit.title}
            </Title>
          </TitleSection>
          <DescSection>
            <Desc>
              {benefit.desc}
            </Desc>
          </DescSection>
        </USPItem>
      ))}
    </USPCard>
  );
}  

USPView.propTypes = {
  benefits: PropTypes.arrayOf(PropTypes.object).isRequired,
  benefitImages: PropTypes.arrayOf(PropTypes.string).isRequired,
  isLoading: PropTypes.bool.isRequired,
}

export default USPView