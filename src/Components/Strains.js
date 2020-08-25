import React from 'react'
import axios from 'axios'
import { useState, useEffect, useCallback } from 'react';

// import strain to render each individual strain out of the list of strains pulled from the API
import Strain from '../Components/Strain'

  export default function Strains() {
    const [strains, setStrains] = useState([]);  // sets the list of strains to an empty array

    axios.get("https://marijuana-api.herokuapp.com/api/strains")
      .then(res => {
        setStrains(res)
      })
      .catch(err => {
        console.log('Error: ', err)
      })



    return(
      <div className='strains-container'>
        {
          strains.map(item => {
            return(
              <Strain key={item.id} strainInfo={item} />
            )
          })
        }
      </div>
    )
  }