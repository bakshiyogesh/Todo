// import logo from './logo.svg';
import './App.css';
// import TaskList from './Todo';
// import TaskComponent from './todoapp';
import HeaderComp from './Components/header/header';
import StockData from './Components/stockdata/stockData';
import StockTabs from './Components/tabs/tabs';

function App() {
  return (
    <div className="App">
      <HeaderComp/>
      <StockTabs/>
    </div>
  );
}

export default App;
