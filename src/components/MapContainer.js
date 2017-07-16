import React from 'react'

import Map from './Map'
import PlaceList from './PlaceList'
import PlaceLayer from './layers/PlaceLayer'

const MapContainer = () => {
  return (
  	<div className='h-100'>
      <Map layer={PlaceLayer} />
      <PlaceList />
    </div>	
  )      
}

export default MapContainer



