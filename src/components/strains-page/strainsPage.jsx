import React, { useEffect, useState } from 'react'
import axios from 'axios'
import shuffle from 'shuffle-array'
import axiosWithAuth from '../../utils/auth/axiosWithAuth'
import Strain from '../strain/strain'
import strainsData from '../../utils/data/strainsData'
import './strainsPage.styles.scss'


const StrainsPage = () => {
    const [strains, setStrains] = useState([])
    
    return (
        <div className='strain-container'>
            {
                strainsData.map(el => {
                    const { strain, id, description, imgURL } = el
                    return <Strain key={id} description={description} imgURL={imgURL} strain={strain}></Strain>
                })
            }
        </div>
    )
}

export default StrainsPage