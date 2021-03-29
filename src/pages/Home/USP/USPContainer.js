import React, { useState, useEffect } from 'react'
import BenefitImage1 from '~/images/benefit-1.svg'
import BenefitImage2 from '~/images/benefit-2.svg'
import BenefitImage3 from '~/images/benefit-3.svg'

import USPView from './USPView'

function USPContainer() {
  const [benefits, setBenefits] = useState([{}])
  const [isLoading, setLoading] = useState(false)
  const benefitImages = [BenefitImage1, BenefitImage2, BenefitImage3]

  useEffect(() => {
    setLoading(true)
    async function fetchData() {
      const res = await fetch('https://ecdba7fe-ec10-4d90-8d0e-80f8364c7624.mock.pstmn.io/takehometest/frontend/web/orange');
      res.json()
        .then(res => {
          setLoading(false)
          setBenefits(res.data.benefit)
        })
        .catch(err => console.log(err));
    }

    fetchData()
  }, [])

  const props = {
    benefits,
    benefitImages,
    isLoading,
  }

  return(
    <USPView {...props} />
  );
}  

export default USPContainer