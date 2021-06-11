import './App.css';
import Landing from './component/landing';
import Dashboard from './component/dashboard';
import { UserProvider } from './component/userContext';
import {BrowserRouter, Route, Switch } from 'react-router-dom'

function App() {
  return (
    <UserProvider>
    <div className="App">
      <BrowserRouter>
      
      <Switch>
        <Route exact path="/" component={Landing} />
        <Route exact path="/dashboard" component={Dashboard} />
      </Switch>
      
      </BrowserRouter>
      
    </div>
    </UserProvider>
  );
}

export default App;
