import React, { useState } from 'react';
import axios from 'axios';
import UserDetails from './UserDetails'
import AddressDetail from './AddressDetail';

const Users = () => {
    const [users, setstate] = useState([]);
    const [address, setAdress] = useState([]);
    const [users1, setuser1] = useState({
        "name": "",
        "email": ""
    });
    const [addressOfSingleUser, setAdress1] = useState({
        "street": ""
    });
    const [url, setUrl] = useState("");

    //using Promises
    const GetData = () => {
        //Here we are using axios with Promises..Its part of ES6
        axios.get('https://jsonplaceholder.typicode.com/users/').then(
            response => {
                const address = response.data.map(user => {
                    return user.address;
                }
                );
                setstate(response.data);
                setAdress(address);
            }
        );
    };
    //Now Convert Promises into async/await

    const getDataAsync = () => {
        callAyncGetData();

    }
    //1st way using async with normal javscript function
    async function callAyncGetData() {
        let response = await axios.get('https://jsonplaceholder.typicode.com/users/');
        const address = response.data.map(user => {
            console.log("Adress are  " + user.address);
            return user.address;
        })
        setstate(response.data);
        setAdress(address);
    }
    // Convert Promises into async/await
    //2nd way using async with Arrow function
    const callAsycWithArrow = async () => {
        const response = await axios.get('https://jsonplaceholder.typicode.com/users/');
        const address = response.data.map(user => {
            console.log("Adress are  " + user.address);
            return user.address;
        })
        setstate(response.data);
        setAdress(address);
        const users1 = { "name": "", "email": "" };
        const addressOfSingleUser = { "street": "" }
        setuser1(users1);
        setAdress1(addressOfSingleUser);

    };

    async function GetDataForSingleUser() {
        const response = await axios.get('https://jsonplaceholder.typicode.com/users/1');
        const addressOfSingleUser = response.data.address;
        const users1 = response.data;
        setuser1(users1);
        setAdress1(addressOfSingleUser);
        setstate([]);
        setAdress([]);


    };
    const usersdetails = users.map(user => {
        return <UserDetails key={user.id} name={user.name} email={user.email} />;
    })

    const addressDetails = address.map(address => {
        return <AddressDetail street={address.street} />
    })
    const userdetails1 = () => {
        console.log("User Details");
        return <UserDetails key={users1.id} name={users1.name} email={users1.email} />
    }

    const addressDetails1 = () => {
        return <AddressDetail street={addressOfSingleUser.street} />
    }
    const handleOnChangeEvent = (event) => {
        const url = event.target.value;
        console.log(url);
        setUrl(event.target.value);

    }
    async function getSelectedUser(userid) {

        const newUrl = 'https://jsonplaceholder.typicode.com/users/' + userid;
        const response = await axios.get(newUrl);
        const addressOfSingleUser = response.data.address;
        const users1 = response.data;
        setuser1(users1);
        setAdress1(addressOfSingleUser);
        setstate([]);
        setAdress([]);
    }
    const submitFormEvent = (e) => {
        e.preventDefault();
        getSelectedUser(url);
    }


    return (
        <>
            <br /><br />
            {/* Dynamic Passing parameter in url */}
            <form action="" onSubmit={submitFormEvent}>
                <input id="url" type="text" value={url} onChange={handleOnChangeEvent} />
                <button type="submit">FetchData</button>

            </form>

            <div><h1>Name &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Email</h1>

                <UserDetails key={users1.id} name={users1.name} email={users1.email} />

                <h1> Adress Details</h1>
                <AddressDetail street={addressOfSingleUser.street} />

            </div>

            <br /><br />


            {/* Button Operation */}

            <button onClick={callAsycWithArrow}>Get Data</button>
            <button onClick={GetDataForSingleUser}>SingleUser</button>
            <br /><br />
            <div><h1>Name &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Email</h1>

                <UserDetails key={users1.id} name={users1.name} email={users1.email} />
                {usersdetails}
                <h1> Adress Details</h1>
                <AddressDetail street={addressOfSingleUser.street} />
                {addressDetails}
            </div>



        </>
    );
}

export default Users;