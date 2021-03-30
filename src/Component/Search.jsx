import React,{useState} from 'react';
import SearchResult from './SearchResult';

const Search=()=>{
    const [name, setstate] = useState("");
    const inputEvent=(event)=>{
        const input=event.target.value;
        setstate(input);
    }

    return (
        <>
        <br/>
        <br/>
        <div>
           <input type='text'  onChange={inputEvent} placeholder='Search name here'></input>
        </div>
        <br/> <br/><br/>

        <div>
            <SearchResult name={name}/>
        </div>
        
        </>
    );

}

export default Search;