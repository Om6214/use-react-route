import React, { useState } from 'react'


const Counter = () => {
    const setinc =()=>{
        setTimer(Timer+1);
    }
    const setdec=()=>{
        if(Timer===0){
            setTimer(0)
        }
        else{
            setTimer(Timer-1)
        }
    }

    const[Timer,setTimer] = useState(0)
    return (
        <div style={{display:'flex'}}>
            <h2 style={{marginRight:25,marginLeft:25 , marginTop:15}}>{Timer}</h2>
            <button onClick={setinc} style={{height:30, marginTop:20, backgroundColor:'#70e370'}}>INC</button>
            <button onClick={setdec} style={{height:30, marginTop:20, backgroundColor:'#e54747'}}>DEC</button>
        </div>
    )
}

export default Counter
