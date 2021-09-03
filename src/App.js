import { useState } from 'react';
import './App.css';
import Task from './components/task';
import AddNewTask from './components/addNewTask';
import AddButton from './components/addButton';

function App() 
{
  
  const [list,setList ]= useState([]);
  const [showAddBtn, setShowAddBtn]=useState(true);

  const callbackForId= (taskid) =>{
    const newList = list.filter((item) => item.id !== taskid);
    setList(newList);
  }

  const callbackForTask=(taskText)=> setList([...list, {text: taskText,id:Date.now()}]);


  const showAdd= val=> setShowAddBtn(val);

  const renderAdd=()=>{
    if(showAddBtn)
    return <AddButton  showAdd={showAdd}/>
    else 
    return <AddNewTask showAdd={showAdd} callbackForTask={callbackForTask}/>
  }


  

   
  
  
  return (
    
    <div className="flex fc jc ai outerdiv mt mauto miscform">
      <h1 className="t1 tc">To Do List</h1>
      {list.map(items=> <Task key={items.id} text={items.text} id={items.id} parentCallback={callbackForId}/>)}
      {renderAdd()}

       

    </div>
  );
}

export default App;
