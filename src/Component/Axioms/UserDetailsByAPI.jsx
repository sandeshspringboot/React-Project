import React, { useEffect,useState } from 'react'
import UserDetails from'./UserDetails'
import AddressDetail from './AddressDetail'

const UserDetailsByAPI = () => {
    const [users, setUsers] = useState([]);
    const getUser=async ()=>{
        const response= await fetch('https://jsonplaceholder.typicode.com/users/');
        const data= await response.json();// await always use in async method..Not working outside the async
        setUsers(data);
    }

    useEffect(()=>{
        getUser();
    },[]);
    const usersdetails=users.map(user=>{
        return <UserDetails
         key={user.id}
         name={user.name}
          email={user.email} />;
    })

    // const addressDetails= address.map(address=>{
    //     return <AddressDetail street={address.street}/>
    // })
    return (
        <>
            <br/><br/>
            
            
            <br/><br/>
            <div><h1>Name &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Email</h1>
                {usersdetails}
                </div>
            
            
        </>
    )
}

export default UserDetailsByAPI
