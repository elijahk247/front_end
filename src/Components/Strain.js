import React, { useState, useEffect } from 'react'

export default function Strain(props) {
  const { strainInfo } = props;

  return(
    <div className='strain'>
      <h4>{strainInfo.strain}</h4>
    </div>
  )
}