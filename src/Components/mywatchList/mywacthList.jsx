import { useSelector, useDispatch } from "react-redux";
import IconButton from "@mui/material/IconButton";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { Grid, Typography } from "@mui/material";
import FavoriteIcon from '@mui/icons-material/Favorite';
import { removeStocks } from "../../app/slice/slice";
const WacthList = () => {
  const watchListData = useSelector((state) => state.stocks.stockValue);


  const dispatch = useDispatch();
  console.log("watchlist",watchListData);
  return (
    <>
      {
        <Grid sx={{ display: "flex", flexDirection: "row", p: 3 }}>
          <Grid direction={"column"} sx={{ ml: 6 }}>
            {watchListData.map((item) => {
              return (
                <>
                  <Grid
                    item
                    sx={{
                      py: 1,
                      width: "20vw",
                      "&:hover": {
                        backgroundColor: "transparent",
                        cursor: "default",
                      },
                    }}
                    component={"div"}
                  >
                    <Typography variant="p" key={item.id}>
                      {item.name}
                      <IconButton >
                        <FavoriteIcon onClick={() => dispatch(removeStocks(item))}/>
                        <ShoppingCartIcon />
                      </IconButton>
                    </Typography>
                  </Grid>
                  {}
                  <Grid item>
                    <Typography
                      variant="p"
                      sx={{ backgroundColor: "gray", px: 3 }}
                    >
                      {item.stockExchange}
                    </Typography>
                  </Grid>
                </>
              );
            })}
          </Grid>
          <Grid  direction={'column'} sx={{ml:6}}>
    {
        
        watchListData.map((item)=>{
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
        
      }
    </>
  );
};
export default WacthList;
