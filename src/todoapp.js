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
import BorderColorIcon from '@mui/icons-material/BorderColor';
import DeleteIcon from '@mui/icons-material/Delete';
import AddIcon from '@mui/icons-material/Add';
import UpdateIcon from '@mui/icons-material/Update';
import Paper from '@mui/material/Paper';

const TaskComponent=()=>{
    const[task,setTask]=useState([]);
    const[input,setInput]=useState('');
    const[isEditing,setisEditing]=useState(false);
    const [todoList, setTodoList] = useState([]);
    const [editId,seteditId]=useState();
    // const [isChecked,setIsChecked]=useState(false);
    const [checkedState, setCheckedState] = useState(
        new Array(todoList.length).fill(false)
      );

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
        addTodo(input);
    }
    //Delete item Handler
    const deleteItem=(e, id)=>{
        let updatedTODO = todoList.filter( (item, index) => index !== id )
        console.log("------- after delete : ", updatedTODO);
        setTodoList(updatedTODO);

    }
    //Checkbox  handler
     const checkboxHandler=(element)=>{
        console.log(element);
      const updateCheckbox=checkedState.map((item,index)=>item===element?!item:item);
      setCheckedState(updateCheckbox);
     }



    //Edit data handler
    const editData=(event,id)=>{
       console.log("id:",id);
       let updatedValue={
        id:id,
        subject:input
       }
       console.log("updated value:",updateValue);
       const updateItem=todoList.filter((item,index)=>item.id===id);
       console.log("updated",updateItem[0].subject);
       console.log("object data passed",event);
       setInput(event.subject);
       setisEditing(true);
       seteditId(event.id);
       console.log("id passed for edit data:",editId);
    }
    
    //Update handler which matches passed id to array id and then change it's content 

   const updateValue=(e)=>{
    e.preventDefault();
    for(let i=0;i<todoList.length;i++){
        if(todoList[i].id===editId){
            todoList[i].subject=input;
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
        };
        if(input!==""){
        setTodoList([...todoList,newTodo])
        }
        setInput('');
    }
    return (
        <>
             <Grid container spacing={1} sx={{mx:'auto'}} lg={4}>
                <form onSubmit={handleSubmit}>
                    <Typography variant="h3" sx={{mx:1.7}}>Todo Tasks: </Typography>
                    <Grid item alignContent={"center"} sx={{m:2}}>
                    <input type="text"  onChange={(e)=>setInput(e.target.value)} value={input}/>
                    <Button type="submit" variant="outlined" size="small" sx={{ mx:2}}>{isEditing?<Button onClick={(e)=>updateValue(e)} size="small" endIcon={<UpdateIcon/>}>Update</Button>:<Button  size="small" endIcon={<AddIcon/>}>ADD</Button>}</Button>
                    </Grid>
                </form>
            </Grid>
                <hr/>
        <TableContainer component={Paper}>
         <Table sx={{Width:500 }} aria-label="simple table" size="small">
           <TableHead sx={{fontSize:"2em"}}>
            <TableRow>
              <TableCell>Tasks</TableCell>
              <TableCell align="center">Status</TableCell>
              <TableCell align="center">Actions</TableCell>
             
           </TableRow>
          </TableHead>
        <TableBody>
          {todoList.map((element,index) => (
            <TableRow key={element.id} sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
              <TableCell component="th" scope="row"><input type="checkbox" onChange={(e)=>checkboxHandler(element.id)}/>{element.subject}</TableCell>
              <TableCell align="center">{status?'Done':'Pending'}</TableCell>
              <TableCell align="center">
                <Button variant="contained" color="warning" onClick={(e)=>editData(element,element.id)} endIcon={<BorderColorIcon/>}></Button>
                <Button variant="contained" color="error" sx={{ mx:2,my:1}} onClick={(e) => deleteItem(e, index)} endIcon={<DeleteIcon/>}></Button>
                </TableCell>
              <TableCell align="left"></TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table> 
      </TableContainer>      
     </>)}
export default TaskComponent;