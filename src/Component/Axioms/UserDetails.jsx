import React from 'react';

const UserDetails=(props)=>{
    return(
        <>
            
            <div>
                
            &nbsp;&nbsp;{props.name}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{props.email}
            </div>
        </>
    );

}

export default UserDetails