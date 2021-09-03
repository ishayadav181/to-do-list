import React from 'react';

const AddButton = (props) => {
    
    return ( 
        <div className="flex fr jc mt misc"   >
                <button onClick={()=> props.showAdd(false)} class="bmblue cw t2 tc ">Add task</button>
         </div>
     );
}
 
export default AddButton;