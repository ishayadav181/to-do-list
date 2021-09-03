import React, { useState} from 'react';

const Task = (props) => {

    const [task, setTask]= useState(props.text);
    const [id, setId] =useState(props.id);
    const [classForCompleted, setClass]=useState(null);
    
    return ( 
        <div  className="task flex fr ai js wfull" id={`${id}`}>

            <h2 className={`tl wfull t2 cw ${classForCompleted}`}>{task}</h2>

            <div className="flex fr jc ai"> 
                <button className="bpink cw" onClick={()=> setClass('linet')}>Done</button>
                <button className="bmblue cw" onClick={() => props.parentCallback(id)}>Delete</button>
            </div>

        </div>
     );
}
 
export default Task;