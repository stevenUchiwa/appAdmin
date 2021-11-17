import {
    BrowserRouter as Router,
    Switch,
    Route,
  } from "react-router-dom";
  import Login from "../component/Login";

const Myroutersafe = () => {
    return(
        <Router>
        <Switch>
          <Route path="/">
            <Login />
          </Route>
          {/* <Route path="/users">
            <Users />
          </Route>
          <Route path="/">
            <Home />
          </Route> */}
        </Switch>
    </Router>
    )
}

export default Myroutersafe;