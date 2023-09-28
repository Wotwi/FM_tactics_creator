import Header from "./components/Header.jsx";
import CreateTactic from "./components/CreateTactic.jsx";
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Hero from "./components/Hero.jsx";
import AllTactics from "./components/AllTactics.jsx";
import Login from "./components/Login.jsx";
import Register from "./components/Register.jsx";
import TacticView from "./components/TacticView.jsx";

function App() {
  return (
    <>
        < Header/>
        <Router>
            <Switch>    
                <Route exact path="/">
                    <Hero /> 
                </Route>
                <Route path="/create">
                    <CreateTactic />
                </Route>
                <Route path="/alltactics">
                    <AllTactics />
                </Route>
                <Route path="/login">
                    <Login />
                </Route>
                <Route path="/register">
                    <Register />
                </Route>
                <Route path="/tacticview/:id">
                    <TacticView />
                </Route>
            </Switch>    
        </Router>
    </>
  )
}

export default App
