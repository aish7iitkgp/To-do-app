import React, { useState } from 'react'
import Showtodo from './Showtodo'

function Addtodo() {
  const [task,setTask] = useState("add some task")
  const [addtask, setAddTask] = useState([])
  const changeText =(e)=>{
    setTask(e.target.value)
  }
  const addTask = () => {
    setAddTask([...addtask, task])
    setTask("")
  }
  const deleteItems= (deleteID)=>{
    setAddTask((addtask)=>{
      const finalTask = addtask.filter((value) => value.id !== deleteID);

      return finalTask;
    })
    
        
  }
  return (
    <>
    <div className="container">
        <div className="row">
            <div className="col-9">
                <input type="text" className='form-control' task="add some task" onChange={changeText}/>
            </div>
            <div className="col-3">
                <button className='btn btn-primary' onClick={addTask}>Add Task</button>
            </div>
        </div>
    </div>

    {
      addtask.map((value,index) => {
        return (
          <>
            <Showtodo task ={value} id= {index} key ={index} removetask = {deleteItems}/>
          </>
        )
      })
    }
    </>
  )
}

export default Addtodo