import React from 'react'
import Cable from '../components/Cable'
import MakePay from '../components/MakePay'
import Monitor from '../components/Monitor'
import Dashboard from '../components/Dashboard'
import Mobile from '../components/Mobile'
import Ellipses from '../components/Ellipses'

const Home = () => {
  const homeBg = {
    backgroundImage : 'linear-gradient(57.94deg, #05041A 0.64%, #110E2F 30.24%, #110E2F 64.94%, #03000B 111.05%)'
  }

  return (
    <main style={homeBg}>
        <MakePay />
        {/* <Ellipses /> */}
        <Cable />
        <Monitor />
        <Dashboard />
        <Mobile />
    </main>
  )
}

export default Home