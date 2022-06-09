import React from 'react';
// import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import ListContactComponent from './components/ListContactComponent';
import HeaderComponent from './components/HeaderComponent';
import FooterComponent from './components/FooterComponent';
import CreateContactComponent from './components/CreateContactComponent';
import UpdateContactComponent from './components/UpdateContactComponent';
import ViewContactComponent from './components/ViewContactComponent';
function App() {
  return (
    <div>
      <Router>
            <HeaderComponent />
              <div className="container">
                  <Switch> 
                    <Route  path ="/"  exact component = {ListContactComponent}></Route>
                    <Route  path ="/contacts" exact component={ListContactComponent}></Route>
                    <Route  path ="/add-contact"  exact component={CreateContactComponent}></Route>
                    <Route  path ="/update-contact/:id" component={UpdateContactComponent}></Route>
                    <Route  path ="/view-contact/:id"  component={ViewContactComponent}></Route>
                  </Switch>
              </div>
            <FooterComponent />
        </Router>
    </div>
    
  );
}

export default App;
 