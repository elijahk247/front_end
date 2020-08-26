import React from "react"
import Straintest from './strainTest'
import styled, { keyframes } from 'styled-components'




const StrainsPage = props => {

    // const [strains, setStrains] = useState([])
    const {strains} = props
    return (
        <div className='strain-container'>
            {
                strains.map(el => {
                    const { strain, id, description, imgURL } = el
                    return <Straintest key={id} description={description} imgURL={imgURL} strain={strain}></Straintest>
                })
            }
        </div>
    )
}

export default StrainsPage