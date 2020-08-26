import React from 'react';
import styled, { keyframes } from 'styled-components'


const Straintest = ({ strain, description, imgURL }) => {
    
    return (

        <div>
            {imgURL}
            <h2>
                {strain}
            </h2>
            <h2>
                {description}
            </h2>
                    
        </div>
    );
};

export default Straintest;