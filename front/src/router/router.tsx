import {
    BrowserRouter as Router,
    Switch,
    Route,
  } from "react-router-dom";
  import Login from "../component/Login";
  import Dashbord from "../component/Dashbord";

const Myrouter = () => {
    return(
        <Router>
        <Switch>
          <Route exact path="/">
            <Login />
          </Route>
           <Route path="/home">
            <Dashbord />
          </Route>
         {/* <Route path="/">
            <Home />
          </Route> */}
        </Switch>
    </Router>
    )
}

export default Myrouter;
