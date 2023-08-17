import React, { useState } from "react";
import Button from '@mui/material/Button';
import { Typography } from "@mui/material";
const TaskList=()=>{
    const[task,setTask]=useState([]);
    const[input,setInput]=useState('');

    const [todoList, setTodoList] = useState([]);

    const addTodo=(text)=>{
        setTask(
            [...task,{ 
                value:text 
            }]
        );
    }

    const inputAdd=(e)=>{
        e.preventDefault();
        console.log("e value",e.target);
        // console.log("target value:",e.target.value);

        addTodo(input);
        // setInput('');
    }

    const deleteItem=(e, id)=>{
        // task.splice(id,1);
        console.log("------- todo id ", id);
        // task.splice(id,1);
        // console.log(task);   
        // let dataSet = todoList.splice(id, 1);
        // console.log('----- dataSet : ', dataSet)
        // setTodoList(todoList);


        let updatedTODO = todoList.filter( (item, index) => index !== id )
        console.log("------- after delete : ", updatedTODO);
        setTodoList(updatedTODO);

    }
    const editData=(event,id)=>{
       console.log(id);
       todoList.filter((item,index)=>index===id);
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        let newTodo = {
            id: todoList.length + 1,
            subject: event.target[0].value
        }
        console.log("---- newTodo : ", newTodo);
        console.log("event.target.value",event);
        if(event.target.value!==''&&!undefined){
        setTodoList([...todoList, newTodo])
        }
    }
    return (
        <>

            {/* <input type="text" placeholder="Enter item for your todo list.." onChange={(e) => { e.preventDefault(); setInput(e.target.value) }} />
            <button onClick={inputAdd} type="submit">Add</button>
            <h2>Remaining task to be done</h2>
            <ul>
                {task.map((Element, index) =>
                    <li key={index}>{Element.value}<button onClick={delete_item(index)}>Delete</button></li>)}
            </ul> */}

            <hr/>
            <hr/>
                <form onSubmit={handleSubmit}>
                    <Typography variant="h3">Todo Msg : </Typography><input type="text"/>
                    <Button type="submit" variant="contained" sx={{ mx:2}}>Add</Button>
                </form>

                <hr/>
                <ul>
                    {todoList?.map((Element, index) =>
                        <li key={index}>{Element.id}. {Element.subject} 
                        <Button type="submit" variant="contained" color="error" sx={{ mx:2,my:1}} onClick={(e) => deleteItem(e, index)}>Delete</Button>
                        <Button variant="contained" color="warning" onClick={(e)=>editData(e,index)}>Edit</Button>
                        </li>)
                        }
                        
                </ul>
        </>
    )
}
export default TaskList;