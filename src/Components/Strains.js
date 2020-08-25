import React from 'react'
import axios from 'axios'
import { useState, useEffect, useCallback } from 'react';




const Strains = () => {
    

    const StrainsPage = () => {
        const [strains, setStrains] = useState([])
        return (
            <div className='strain-container'>
                {
                    strains.map(el => {
                        const { strain, id, description, imgURL } = el
                        return <Strain key={id} description={description} imgURL={imgURL} strain={strain}></Strain>
                    })
                }
            </div>
        )
    }
    axios.get('https://marijuana-api.herokuapp.com/api/strains', strainList)
      .then(res => {
        
        setStrainList([...strainList, res.data])
        
        
      })
      .catch(err => {
          debugger
        
      })
      .finally(() => {
        
      })

      {
          return(
        strainList.map(strain => {
                return (
                  <pre key={strain.id}>
                    <h4>
                    {JSON.stringify(strainList) }
                    
                    </h4>
                  </pre>
                  
                )
        })
      }
      
  }

  export default Strains;