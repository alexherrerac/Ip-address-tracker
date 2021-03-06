import React, { useState } from 'react'
import Header from './components/header/header'
import Information from './components/informations/informations'
import Map from './components/map/map'
import Context from './context/context'

const App = () => {
  const [state, setState] = useState({
    ip: '8.8.8.8',
    lat: 37.38605,
    lng: -122.08385,
    city: 'Mountain View',
    region: 'California',
    postalCode: '94043',
    timezone: 'UTC -07:00',
    isp: 'Google LLC',
  })

  return (
    <Context.Provider value={{ state, setState }}>
      <Header />
      <Information />
      <Map />
    </Context.Provider>
  )
}

export default App