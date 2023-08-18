import React, { useState} from "react";
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import TableContainer from '@mui/material/TableContainer';
import { Typography } from "@mui/material";
// import Checkbox from '@mui/material/Checkbox';
import BorderColorIcon from '@mui/icons-material/BorderColor';
import DeleteIcon from '@mui/icons-material/Delete';
import AddIcon from '@mui/icons-material/Add';
import UpdateIcon from '@mui/icons-material/Update';
import Edit from "./edit";
import Paper from '@mui/material/Paper';
const TaskList=()=>{
    const[task,setTask]=useState([]);
    const[input,setInput]=useState('');
    const[isEditing,setisEditing]=useState(false);
    const [todoList, setTodoList] = useState([]);
    const [editId,seteditId]=useState();
    const [isChecked,setIsChecked]=useState(false);
    const [status,setStatus]=useState(false);
    //Item add handler
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
        addTodo(input);
    }
    //Delete item Handler
    const deleteItem=(e, id)=>{
        console.log("------- todo id ", id);
        let updatedTODO = todoList.filter( (item, index) => index !== id )
        console.log("------- after delete : ", updatedTODO);
        setTodoList(updatedTODO);

    }

    //Edit data handler
    const editData=(event,id)=>{
       console.log("id:",id);
       let updatedValue={
        id:id,
        subject:input
       }
       console.log("updated value:",updateValue);
       const updateItem=todoList.filter((item,index)=>index===id);
       console.log("updated",updateItem[0].subject);
       console.log("object data passed",event);
       setInput(event.subject);
       setisEditing(true);
       seteditId(id);
    //    setisEditing(false);
    //    setTodoList([...todoList,updatedValue])
    //    setTodoList([todoList[id].subject=input])
    }
    
    //Update handler which matches passed id to array id and then change it's content 

   const updateValue=(e)=>{
    e.preventDefault();
    for(let i=0;i<todoList.length;i++){
        if(todoList[i].id===editId){
            todoList[i+1].subject=input;
            // console.log("loop of todolist",todoList[i].subject);
            break;
        }
    }
    setInput('');
    setisEditing(false);
   }
   // Submission Handler
    const handleSubmit = (event) => {
        event.preventDefault();
        let newTodo = {
            id: todoList.length + 1,
            subject: event.target[0].value  
        }
        //console.log("---- newTodo : ", newTodo);
        // console.log("event.target.value",event.target);
        // console.log(newTodo.subject.length);
        if(newTodo.subject.length!=""){
        setTodoList([...todoList,newTodo])
        }
        setInput('');
    }
    return (
        <>
            {/* <hr/> */}
            <hr/>
             <Grid container spacing={1} sx={{mx:'auto'}} lg={4}>
                <form onSubmit={handleSubmit}>
                    <Typography variant="h3" sx={{mx:1.7}}>Todo Msg : </Typography>
                    <Grid item alignContent={"center"} sx={{m:2}}>
                    <input type="text"  onChange={(e)=>setInput(e.target.value)} value={input}/>
                    <Button type="submit" variant="outlined" size="small" sx={{ mx:2}}>{isEditing?<Button onClick={(e)=>updateValue(e)} size="small" endIcon={<UpdateIcon/>}>Update</Button>:<Button onClick={addTodo} size="small" endIcon={<AddIcon/>}>Add</Button>}</Button>
                    </Grid>
                </form>
            </Grid>
                <hr/>
             {/* <Grid container spacing={2}>   
                <table>
                    {todoList?.map((Element, index) =>(<Grid>
                        <li key={index}>{Element.id}.{Element.subject}
                        {/* <Grid item > }
                        <Button variant="contained" color="warning" onClick={(e)=>editData(element,index)}>Edit</Button>
                        <Button type="submit" variant="contained" color="error" sx={{ mx:2,my:1}} onClick={(e) => deleteItem(e, index)}>Delete</Button>
                        {/* </Grid> }
                        </li></Grid>)
                        )}
                        
                </table>
                </Grid>  */}
        <TableContainer component={Paper}>
         <Table sx={{Width:500 }} aria-label="simple table" size="small">
           <TableHead sx={{fontSize:"2em"}}>
            <TableRow>
              <TableCell>Tasks</TableCell>
              <TableCell align="center">Status</TableCell>
              <TableCell align="center">Edit</TableCell>
              <TableCell align='center'>Delete</TableCell>
           </TableRow>
          </TableHead>
        <TableBody>
          {todoList.map((element,index) => (
            <TableRow key={element.id} sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
              <TableCell component="th" scope="row"><input type="checkbox" onClick={(e)=>setStatus(e.target.checked)}/>{element.id}.{element.subject}</TableCell>
              <TableCell align="center">{status?'Done':'Pending'}</TableCell>
              <TableCell align="center"><Button variant="contained" color="warning" onClick={(e)=>editData(element,index)} endIcon={<BorderColorIcon/>}>Edit</Button></TableCell>
              <TableCell align='center'><Button type="submit" variant="contained" color="error" sx={{ mx:2,my:1}} onClick={(e) => deleteItem(e, index)} endIcon={<DeleteIcon/>}>Delete</Button></TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table> 
      </TableContainer>      
                
                
                
                
                
                </>
        )
        }
export default TaskList;