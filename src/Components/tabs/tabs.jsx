import { Grid } from "@mui/material";
import React from "react";
import Tab from "@mui/material/Tab";
import TabPanel from '@mui/lab/TabPanel'; 
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import Box from "@mui/material/Box";
import PropTypes from "prop-types";
import Typography from "@mui/material/Typography";
import StockData from "../stockdata/stockData";
import WatchList from "../mywatchList/mywacthList";
const arrayTab = ["STOCK DATA LIST", "MY WATCHLIST", "ORDERS"];
const StockTabs = () => {

  const [value, setValue] = React.useState('1');

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  
  return (
    <>
    <Box sx={{ width: '100%', typography: 'body1' }}>
      <TabContext value={value}>
        <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
          <TabList onChange={handleChange} aria-label="lab API tabs example">
            <Tab label="STOCK DATA LIST" value="1" />
            <Tab label="MY WATCHLIST" value="2" />
            <Tab label="ORDERS" value="3" />
          </TabList>
        </Box>
        <TabPanel value="1"><StockData/></TabPanel>
        <TabPanel value="2"><WatchList/></TabPanel>
        <TabPanel value="3"></TabPanel>
      </TabContext>
    </Box>
    </>
  );
};

export default StockTabs;
