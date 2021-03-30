import React, { useEffect, useState } from 'react'

const UseEffectDemo = () => {
    const [count, setCount] = useState(0);
    useEffect(()=>{
        if(count>0){
        document.title="Click ("+count+")";
        }else{
            document.title="Click";
        }

    },[count]);
    const clickButton=()=>{
        setCount(count+1);
    }
    return (
        <div>
            <h1>{count}</h1>
            <button onClick={clickButton}>Click Me</button>
            
        </div>
    )
}

export default UseEffectDemo
