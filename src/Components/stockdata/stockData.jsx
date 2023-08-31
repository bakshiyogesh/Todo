import React from 'react';
import { Grid, Typography } from '@mui/material';
import dummyData from '../../dummyData/data.js';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import Rating from '@mui/material/Rating';
import IconButton from '@mui/material/IconButton';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import FavoriteIcon from '@mui/icons-material/Favorite';
import { addStocks } from '../../app/slice/slice.js';
import { useDispatch, useSelector } from 'react-redux';
const StockData=()=>{
    const [hovered, setHovered] = React.useState(false);

  const handleHover = () => {
    setHovered(true);
  };

  const handleMouseLeave = () => {
    setHovered(false);
  };
  const dispatch=useDispatch();
  const dataSelect=useSelector((state)=>state.stocks.stockValue);
  console.log("dataSelecet",dataSelect);
    return(
    <>
    <Grid  sx={{display:'flex',flexDirection:'row',p:3}}>
    <Grid  direction={'column'} sx={{ml:6}}>
    {
        
        dummyData.map((item)=>{
            return(<>
            <Grid item sx={{py:1,width:'20vw',"&:hover": {
      backgroundColor: "transparent",
      cursor: "default"
      }
  }} component={'div'}>
            <Typography variant='p' key={item.id}>{item.name}<IconButton>{item.name===dataSelect.forEach((element) => {
                
            element.name})?<FavoriteIcon onClick={()=>dispatch(addStocks(item))}/>:<FavoriteBorderIcon onClick={()=>dispatch(addStocks(item))}/>}<ShoppingCartIcon/></IconButton></Typography>
            </Grid>
            {}
            <Grid item>
            <Typography variant='p' sx={{backgroundColor:'gray',px:3}}>{item.stockExchange}</Typography>
            </Grid>
            </>)
        })
    }
    </Grid>
    <Grid  direction={'column'} sx={{ml:6}}>
    {
        
        dummyData.map((item)=>{
            const color=item.stockValueChange.includes('-')?'red':'green';
            return(<>
            <Grid item sx={{py:2}}>
            <Typography variant='p'>₹{item.stockPrice}</Typography>
            </Grid>
            <Grid item>
            <Typography variant='p' sx={{color:color}}>{item.stockValueChange}</Typography>
            </Grid>
            </>)
        })
    }
    </Grid>
    </Grid>
    </>
    )
}
export default StockData;