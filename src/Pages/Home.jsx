import React from 'react'
import HeroSection from '../components/HeroSection'
import Financesec from '../components/Financesec'
import InnovationSec from '../components/InnovationSec'
import Technology from '../components/Technology'
import Trusted from '../components/Trusted'
import LegacySec from '../components/LegacySec'

const Home = () => {
  return (
    <div className='overflow-hidden'>
      <HeroSection />
      <div className='mx-5 xl:mx-[18%] '>
        <Financesec />
        <InnovationSec />
        <Technology/>
        <Trusted/>
      </div>
        <LegacySec/>
    </div>
  )
}

export default Home