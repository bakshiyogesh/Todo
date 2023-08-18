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
import { Checkbox } from '@mui/material';



const TaskComponent=()=>{
    const[input,setInput]=useState('');
    const[isEditing,setisEditing]=useState(false);
    const [todoList, setTodoList] = useState([]);
    const [editId,seteditId]=useState();
    const deleteItem=(e, id)=>{
        // filter -> splice()
        let updatedTODO = todoList.filter( (item, index) => index !== id )
        console.log("------- after delete : ", updatedTODO);
        setTodoList(updatedTODO);

    }

        const [state, setState] = React.useState({
            input: '',
            isEditing: false,
            todoList: [],
            editId: 0,
        })


     const checkboxHandler=(element)=>{
        console.log(element);
     }
    const editData=(element,id)=>{
       const updateItem=todoList.filter((item,index)=>item.id===id);
       setInput(element.subject);
       setisEditing(true);
       seteditId(element.id);
    }
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
   const handleSubmit = (event) => {
        event.preventDefault();
        let newTodo = {
            id: todoList.length + 1,
            subject: event.target[0].value,
            status: true
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
              <TableCell component="th" scope="row">
                <Checkbox defaultChecked={element.status} onChange={() => console.log("----- ", element.id, ", TODO Subject : ", element.subject)} />
                {element.subject}
                </TableCell>
              <TableCell align="center">{element.status?'Done':'Pending'}</TableCell>
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