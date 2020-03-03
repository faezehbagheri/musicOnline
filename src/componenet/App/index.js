import React  from 'react';
import { BrowserRouter as Router, Route ,Switch} from 'react-router-dom';
import Home from '../Home'
import * as ROUTES from '../../constants/routes';
import './App.css'


function App() {
  return (
    <div className="App">
        <Router>
            <div >
              <Switch>
                <Route path={ROUTES.HOME} component={Home} />
                </Switch>
            </div>
        </Router>
    </div>
  );
}

export default App;
