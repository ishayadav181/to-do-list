import React from 'react';

const AddNewTask = (props) => {
    
        
    const validate=(x)=>{
        if(x==="")
        {
            alert("Task can't be empty");
            return false;
        }
        else
        return true;

    }
    
   const handleSubmit = (event) => {
        event.preventDefault()
        const task=event.target[0].value;
        if(validate(task))
        {
            props.callbackForTask(task);
            props.showAdd(true);
        }

        
      }
    return (  
       


       
        <form onSubmit={handleSubmit} className="miscform fr jc ai  wfull bb">
        
          <input type="text"  className="t2 mt tc inp "/>
        
           <button type="submit" className="t2 cw bblue tc w20">Add</button>
      </form>
               
    );
}
 
export default AddNewTask;