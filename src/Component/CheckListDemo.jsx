import React,{Component} from 'react';

class CheckListDemo extends Component
{
    state={
        checkedValue:{
            Sandesh:false,
            Tithi:false,
            Mithi:false
        }
    };
    
    onClickonCheckBox1=(e)=>{
        console.log(e.target);
        var {name,checked}=e.target;
        this.setState=(e)=>{
                console.log("state "+e.checkedValue);
                var selectedName=e.checkedValue;
                return selectedName[name]=checked;
        }

    };
   


    render()
        {
            var displayName=Object.keys(this.state.checkedValue).filter((x)=>this.state.checkedValue[x]);
            
            console.log("Display "+displayName);
            
         return(
    
            <div className='main_div'>
              <div className='center_div'>
               Hello Sandesh
                 <br/>
                 <input type="checkbox" name="Sandesh" onChange={this.onClickonCheckBox1}/>Sandesh&nbsp;&nbsp;
                 <input type="checkbox" name="Tithi" onChange={this.onClickonCheckBox1}/>Tithi&nbsp;&nbsp;
                 <input type="checkbox" name="Mithi" onChange={this.onClickonCheckBox1}/>Mithi&nbsp;&nbsp;
                 <br/>
                 <div>
                  <h1>{displayName}</h1>
                  
              </div>
              </div>
              
            </div>   
        
    );
            
}

}

export default CheckListDemo;