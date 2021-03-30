import React from 'react';

const ReadJsonFile=()=>{
    return(
        fetch("jsonfile.json")
            .then(response=>response.json)
            .then(data=>{
                console.log(data.languageName)
            })
    );
}
export default ReadJsonFile;