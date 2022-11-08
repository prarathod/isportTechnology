import './App.css';
import Home from './home/Home';
import React, { useState } from 'react';
import ErrorPage from './errorPage/ErrorPage'
import BidPage from './bidingPage/BidPage';
import { Switch, Route} from "react-router-dom";
function App() {
  const [selectedMatch, setSelectedMatch] = useState();
  const GetSelectedMatchId = (data) => {
    //setSelectedMatch(data);
  }
  return (
    <Switch>
      <Route exact path="/" component={Home} />
      {/* <Home GetSelectedMatchId={GetSelectedMatchId}/>
            </Route> */}
      <Route path="/bidpage" component={BidPage} />
      {/* <BidPage selectedMatch={selectedMatch}/>
            </Route> */}
      <Route path="/*" component={ErrorPage} />
    </Switch>
  );
}

export default App;
