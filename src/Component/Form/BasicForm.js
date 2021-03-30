import React,{useState} from 'react'

const BasicForm = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [allUser, setAllUser] = useState([]);
    const loginHandler=(event)=>{
        event.preventDefault();
        console.log("Hello");
        if(email && password){
        const user={id:new Date().getTime().toString(),email,password};
        // console.log(user);
         setAllUser([...allUser,user]);
        }else{
            alert('EmailID and Password are empty');
        }
        
    };
    const emailhandler=(event)=>{
        const email=event.target.value;
        
        setEmail(email);
    };
    const passwordHandler=(event)=>{
        setPassword(event.target.value);
    }
    return (
        <>
        <form action=""
        method="post"
         onSubmit={loginHandler}>
            <br/>
        <div>
            <label htmlfor="email"  >Email</label>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <input type="text" 
            name="email" 
            id="email" 
            autoComplete="off"
            value={email}
            onChange={emailhandler}/>
           
        </div> <br/>
        <div>
            <label htmlfor="password"  >Password</label>&nbsp;&nbsp;
            <input type="password"
             name="password"
             id="password" 
             autoComplete="off"
             value={password}
             onChange={passwordHandler}/>
            
        </div>
        <br/>
        <div>
            <button type="submit" >Login</button>
        </div>
        
        </form>
        <br/>
        <div>
           {
               allUser.map((currElement)=>{
                   const{id,email,password}=currElement;//Object Destructuring
                   return (
                    <div key={id}>
                        <p>{email}</p>
                        <p>{password}</p>
                    </div>

                   );
               })
           }
        </div>
        </>
    )
}

export default BasicForm

