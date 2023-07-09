import React, { useState } from 'react'

function BlueGradientButton({label, width}) {
    const [hover, setHover] = useState(false);

    const buttonCSS = {
        "background": "transparent linear-gradient(270deg, #386CB5 0%, #669FED 100%) 0% 0% no-repeat padding-box",
        "boxShadow":" 0px 0px 5px #386CB566",
        "borderRadius": "6px",
        "textTransform": "uppercase",
        "outline": "none",
        "border": "none",
        "color": "#FFFFFF",
        filter: hover ? "contrast(1.15)": "contrast(1)",
    }
  return (
    <div>
        <button className='text-light w-100 p-2 mt-3' 
            style={buttonCSS} type='submit'
            onMouseEnter={() => setHover(true)}
            onMouseLeave= {() => setHover(false)}>

              {label}
                
        </button>
    </div>
  )
}

export default BlueGradientButton