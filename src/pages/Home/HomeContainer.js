import React, { useState, useEffect } from 'react'

import BenefitImage1 from '~/images/benefit-1.svg'
import BenefitImage2 from '~/images/benefit-2.svg'
import BenefitImage3 from '~/images/benefit-3.svg'
import HomeView from './HomeView'

function HomeContainer() {
  const [benefits, setBenefits] = useState([{}])
  const [testimonials, setTestimonials] = useState([{}])
  const [launchDayRemaining, setLaunchDateRemaining] = useState(0)
  const [isLoading, setLoading] = useState(false)
  const benefitImages = [BenefitImage1, BenefitImage2, BenefitImage3]

  function getDifferenceDate(dateOne) {
    const dateLaunch = new Date(dateOne)
    const dateNow = new Date()
    const dateDiff = dateLaunch.getTime() - dateNow.getTime()
    const result = Math.round(dateDiff / (1000 * 3600 * 24))
    
    return result
  }

  useEffect(() => {
    setLoading(true)
    async function fetchData() {
      const res = await fetch('https://ecdba7fe-ec10-4d90-8d0e-80f8364c7624.mock.pstmn.io/takehometest/frontend/web/orange');
      res.json()
        .then(res => {
          setLoading(false)
          setBenefits(res.data.benefit)
          setTestimonials(res.data.testimonials)
          setLaunchDateRemaining(getDifferenceDate(res.data.launch_date))
        })
        .catch(err => console.log(err));
    }

    fetchData()
  }, [])

  const props = {
    benefits,
    benefitImages,
    isLoading,
    launchDayRemaining,
    testimonials,
  }

  return(
    <HomeView {...props} />
  )
}  

export default HomeContainer