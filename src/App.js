import React from 'react';
import './App.css';
import HomePage from './pages/homepage';
import RaceInfo from './pages/raceInfo';
import EntryInfo from './pages/entryInfo';
import NotFoundPage from './pages/NotFoundPage';

import SmallBoatRaceResultsList from './pages/SmallBoatRaceResultsList';
import BigBoatRaceResultsList from './pages/BigBoatRaceResultsList';
import NavBar from './components/NavBar';

import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';

function App() {
  return (
    <Router>
    <div className="App">
      <NavBar />     
      <div id="page-body">   
        <Switch>
          <Route path="/" component={HomePage} exact/>
          <Route path="/raceinfo" component={RaceInfo} />
          <Route path="/results2018/:entryID" component={EntryInfo} />  
          <Route path="/smallResults2018/:entryID" component={EntryInfo} />  
          <Route path="/bigResults2018/:entryID" component={EntryInfo} />   
          <Route path="/smallCraftResults" component={SmallBoatRaceResultsList} />  
          <Route path="/bigCraftResults" component={BigBoatRaceResultsList} />  
          <Route component={NotFoundPage} />        
        </Switch>

      </div>
    </div>          
    </Router>

  );
}


export default App;
