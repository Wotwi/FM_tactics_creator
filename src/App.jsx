import Header from "./components/Header.jsx";
import CreateTactic from "./components/CreateTactic.jsx";
import { BrowserRouter as Router, Route} from "react-router-dom";
import Hero from "./components/Hero.jsx";
import AllTactics from "./components/AllTactics.jsx";
import Login from "./components/Login.jsx";
import Register from "./components/Register.jsx";

function App() {
  return (
    <>
        < Header/>
        <Router>
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
        </Router>
    </>
  )
}

export default App
