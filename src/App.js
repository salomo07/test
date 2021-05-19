import React,{useState,useCallback,useEffect} from 'react';
import {Route, BrowserRouter as Router,Switch,Redirect} from "react-router-dom";

import Dasboard from './pages/Dasboard';
import NotFound from './pages/NotFound';
import {ToastContainer} from 'react-toastify';

const AppContext = React.createContext();
function App() {
  return (
    <Router basename="/">
        <AppContext.Provider>
      <Switch>
        <Route exact path="/">                    
                <Dasboard/>
          </Route>
            <Route path="/signout">                    
                <Redirect to="/" />
            </Route>
            <Route component={NotFound} />
      </Switch>
        
        </AppContext.Provider>
        <div className="app-drawer-overlay d-none animated fadeIn"></div>
        <ToastContainer/>
  </Router>
  );
}

export default App;
