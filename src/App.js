
import './App.css';
import SpeedIcon from '@mui/icons-material/Speed';
import DomainAddRoundedIcon from '@mui/icons-material/DomainAddRounded';
import LocationCityIcon from '@mui/icons-material/LocationCity';
import ManageAccountsIcon from '@mui/icons-material/ManageAccounts';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import StoreIcon from '@mui/icons-material/Store';
import {Switch,Route} from 'react-router-dom';
import Button from '@mui/material/Button';
import {useHistory} from 'react-router-dom';
import Dashboard from './pages/Dashboard';
import Departments from './pages/Departments';
import Clients from './pages/Clients';
import Projects from './pages/Projects';
import Consumers from './pages/Consumers';
import Insights from './pages/Insights';
import Sidebar from './components/Sidebar';
function App() {
  const history=useHistory();
  const data01 = [
    {
      "name": "Group A",
      "value": 400
    },
    {
      "name": "Group B",
      "value": 300
    },
    {
      "name": "Group C",
      "value": 300
    },
    {
      "name": "Group D",
      "value": 200
    },
    {
      "name": "Group E",
      "value": 278
    },
    {
      "name": "Group F",
      "value": 189
    }
  ];
  const data02 = [
    {
      "name": "Group A",
      "value": 2400
    },
    {
      "name": "Group B",
      "value": 4567
    },
    {
      "name": "Group C",
      "value": 1398
    },
    {
      "name": "Group D",
      "value": 9800
    },
    {
      "name": "Group E",
      "value": 3908
    },
    {
      "name": "Group F",
      "value": 4800
    }
  ];
      
  return (
    <div className="App">
      <Sidebar>
      <Switch>
        
        <Route exact path='/'component={Dashboard} />
          <Route path='/Department' exact component={Departments} />
            <Route path='/Clients' exact component={Clients}/>
            <Route path='/Projects' exact component={Projects}/>
            <Route path='/Consumers' exact component={Consumers}/>
            <Route path='/Insights' exact component={Insights}/>
        </Switch>
      </Sidebar>
     {/* <div className='full'>
     <div className='sidemenu'>
       
         <Button variant="text"color="inherit" onClick={()=>history.push('/Dashboard')}>
         <SpeedIcon className="icon"/>
           DASHBOARDS
         </Button>
         <Button variant="text"color="inherit" onClick={()=>history.push('/Departments')}>
           <DomainAddRoundedIcon/>
           DEPARTMENTS
         </Button>
         <Button variant="text"color="inherit" onClick={()=>history.push('/Clients')}>
           <LocationCityIcon/>
           CLIENTS
         </Button>
         <Button variant="text"color="inherit" onClick={()=>history.push('/Projects')}>
          <StoreIcon/>
           PROJECTS
         </Button>
         <Button variant="text"color="inherit" onClick={()=>history.push('/Consumers')}>
         <ManageAccountsIcon/>
           CONSUMERS
         </Button>
         <Button variant="text"color="inherit" onClick={()=>history.push('/Insights')}>
         <TrendingUpIcon/>
           INSIGHTS
         </Button>
         </div>
     
     <Switch>
        <Route exact path="/"></Route>
        <Route path='/Dashboard'>
            <Dashboard/>
        </Route>
            <Route path='/Departments'>
            <Departments/>
            </Route>
            <Route path='/Clients'>
            <Clients/>
            </Route>
           
            <Route path='/Projects'>
          <Projects/>
            </Route>
            <Route path='/Consumers'>
            <Consumers/>
            </Route>
            <Route path='/Insights'>
            <Insights/>
            </Route>
            <Route path="**">
            </Route>
        </Switch>
  </div>*/}
    </div>
  );
}

export default App;
