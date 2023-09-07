import Header from "./components/Header.jsx";
import CreateTactic from "./components/CreateTactic.jsx";
import { BrowserRouter as Router, Route, Switch} from "react-router-dom";
import Hero from "./components/Hero.jsx";
import AllTactics from "./components/AllTactics.jsx";

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
                <Route exact path="/alltactics">
                    <AllTactics />
                </Route>
            </Switch>
        </Router>
    </>
  )
}

export default App
