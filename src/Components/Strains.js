import React from 'react'
import axios from 'axios'
import { useState, useEffect, useCallback } from 'react';

// import strain to render each individual strain out of the list of strains pulled from the API

export default function Strains(props) {
  const { strainInfo } = props;
  return(
    <div className='strains-container'>
        <h3>{strainInfo.strain}</h3>
    </div>
  )
}