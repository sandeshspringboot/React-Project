import React,{useState} from 'react'

const RegistrationForm = () => {
    const [userRegistration, setuserRegistration] = useState({
        firstname:"",
        lastname:"",
        phone:"",
        email:""
    });

    const [allRecords, setAllRecord] = useState([]);
    const handleOnChangeEvent=(event)=>{
        const name=event.target.name;
        const value=event.target.value;
        console.log(name);
  
        setuserRegistration({...userRegistration,[name]:value});//multiple names are here so we take name in[name]

    }
    const submitFormEvent=(e)=>{
        e.preventDefault();
        const newRecord={...userRegistration, id:new Date().getTime().toString()}
        setAllRecord([...allRecords,newRecord]);//set all record in the allrecord[]
        setuserRegistration({firstname:"",lastname:"",phone:"",email:""});//clear the text feild
    }
    return (
        <>
        <form action="" onSubmit={submitFormEvent}>
            <br/>
            <div>
                <label name="firstname">First Name</label>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <input id ="firstname" name="firstname" type="text" value={userRegistration.firstname} onChange={handleOnChangeEvent} ></input>
            </div>
            <br/>
            <div>
                <label name="lastname">Last Name</label>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <input id ="lastname" name="lastname" type="text" value={userRegistration.lastname} onChange={handleOnChangeEvent} ></input>
            </div>
            <br/>
            <div>
                <label name="phone">Phone</label>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <input id ="phone" name="phone" type="text" value={userRegistration.phone} onChange={handleOnChangeEvent} ></input>
            </div>
            <br />
            <div>
                <label name="email">Email</label>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <input id ="email" name="email" type="text" value={userRegistration.email} onChange={handleOnChangeEvent} ></input>
            </div>
            <br/>
            <div>
            <button type="submit" >Register</button>
        </div>
            
        </form>
        <div>
        {
            allRecords.map((currElement)=>{
                const{id,firstname,lastname,phone,email}=currElement;//Object Destructuring
                return (
                 <div key={id}>
                     <p>{firstname}</p>
                     <p>{lastname}</p>
                     <p>{phone}</p>
                     <p>{email}</p>
                     
                 </div>

                );
            })
        }
     </div>
     </>
        
    )
}

export default RegistrationForm
