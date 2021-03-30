import React,{useRef,useState}from 'react'

const UseRefHookDemo = () => {
    const name = useRef("");
   // const [yourName, setYourName] = useState("");

    const submitForm=(e)=>{
            e.preventDefault();
          //  setYourName(name.current.value);//we cant give direct name. we need to use refName.current.value
            
    }

    return (
        <>
        <form action="" >
            <div>
                <input type="text" id="name" ref={name}></input>
            </div>
            <br/>
            
        </form>
        <p>{name.current.value}</p>
            
        </>
    )
}

export default UseRefHookDemo
