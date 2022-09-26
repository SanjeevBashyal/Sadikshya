import React from 'react';
import {useState,useRef} from 'react';

function Text() {
    const sz=useState(20);
    const run=(e)=>{

    }
    return ( 
        <p onMouseMove={run} style={{size:sz}}>
            Hello! from Sadikshya
        </p>
     );
}

export default Text;