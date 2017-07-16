import React from 'react'

import Map from './Map'
// import Info from './Info'
import ZoneLayer from './layers/ZoneLayer'

const Container = () => {
  return (
  	<div className='h-100'>
      <Map layer={ZoneLayer} />
    </div>	
  )      
}

     
export default Container