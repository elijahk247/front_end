import React from 'react'


export default function Strainrendertest(props) {
    const { strainInfo } = props;
  
    return(
        <div>
        {
            
            strainInfo.map(item => {
              
                <div id={item.id} strainInfo={item}/> 
              
            })

        }
        </div>
            
            
        
          

    )
  }