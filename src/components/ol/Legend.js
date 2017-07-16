import React from 'react'

const Legend = () => (
  <div className='d-flex text-white' style={{backgroundColor: '#917946', textShadow: '#364230 2px 2px 2px'}}>
    <div className='pt-3 pb-0 px-1 text-center font-weight-bold' style={{backgroundColor:'rgba(160, 35, 28, .6)', flex: '1'}}><p>CRITICAL</p></div>
    <div className='pt-3 pb-0 px-1 text-center font-weight-bold' style={{backgroundColor:'rgba(249, 238, 31, .6)', flex: '1'}}><p>APPROACHING CRITICAL</p></div>
    <div className='pt-3 pb-0 px-1 text-center font-weight-bold' style={{backgroundColor:'rgba(44, 107, 36, .6)', flex: '1'}}><p>NOT CRITICAL</p></div>
    <div className='pt-3 pb-0 px-1 text-center font-weight-bold' style={{backgroundColor:'rgba(176, 176, 176, .6)', flex: '1'}}><p>MISSING DATA</p></div>
  </div>
)

export default Legend
