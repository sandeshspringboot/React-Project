import React,{useState} from "react";
import  "./heading.css";


function Heading(){
   
    const [toDOList, setToDolist] = useState("");
    //Array declaration in state.
    const [listOfItems, setlistOfItems] = useState([]);
    
    const habdleOnchange=(event)=>{
          setToDolist(event.target.value);
    }
    const handleOnSubmit=()=>{
        setlistOfItems((prevValue)=>{
            return [...prevValue,toDOList];
        });
        setToDolist("");
    };

    const removeDataList=(currentValue)=>{
        
        setlistOfItems((listOfItems)=>{
           return listOfItems.filter(item=>{
                return item !==currentValue;
           });
        });
    };
   
    return( 
        <>
         <div className='main_div'>
            <div className='center_div'>
            <h2 className='heading_style'>ToDO List</h2>
            <br/>
            <input name='toDo' 
            type= 'text' 
            placeholder='add item' 
            onChange={habdleOnchange}
            value={toDOList}/>&nbsp;&nbsp;
            <button onClick={handleOnSubmit}>+</button>
            <ul className='ol'>
                {
                     listOfItems.map((currentValue)=>{
                         return <li key={currentValue.id}
                                    id={currentValue.id}
                                    name={currentValue.id}>
                                    <button   
                                        onClick={()=>removeDataList(currentValue)}>-</button>&nbsp;&nbsp;
                                         {currentValue}
                                 </li>
                     })
                }
            </ul>
      </div>
    </div>
    
    </>
    );
}

export default Heading;