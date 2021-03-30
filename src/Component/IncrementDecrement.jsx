import React, { useState,useEffect } from 'react';
import AddIcon from '@material-ui/icons/Add';
import RemoveIcon from '@material-ui/icons/Remove';
import Button from '@material-ui/core/Button';
import  "./heading.css";


function IncrementDecrement(){
    const [counter,setCounter]=useState(0);
    const [num,setNum]=useState(0);
    const inputIncrement=()=>{
        setCounter(counter + 1);
    };
    const inputDecrement=()=>{
        setCounter(counter>0?counter - 1:0);
    };
    const useEffectDemo=()=>{
        setNum(num+1);
    }
    //Always write before return statement
    useEffect(() => {
        alert("I am clicked")
        
    }, [num]);//where we want to do effect(on num)

    useEffect(() => {
        alert("I am counter ")
        
    }, [counter]);

return(
    <>
    <div className='main_div'>
        <div className='center_div'>
            <h1 >{counter}</h1><br/>
            <h1 >Useeffect number : {num}</h1><br/>
            <button onClick={inputIncrement}><AddIcon/></button>&nbsp;&nbsp;
            <button onClick={inputDecrement}><RemoveIcon/></button>
            <button onClick={useEffectDemo}><AddIcon/></button>
            <br/>
            <Button variant="contained" color="secondary" disableElevation>Secondary</Button>

        </div>
    </div>
    </>
);

}
export default IncrementDecrement;