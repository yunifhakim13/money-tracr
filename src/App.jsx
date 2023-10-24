import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Dashboard from "./pages/Dashboard";
import Transaction from "./pages/Transaction";

function App() {
  return (
    <>
      <Router history={history}>
        <Switch>
          <Route exact path="/" component={Home}></Route>
          <Route path="/login" component={Login}></Route>
          <Route path="/register" component={Register}></Route>
          <Route path="/dashboard" component={Dashboard}></Route>
          <Route path="/transaction" component={Transaction}></Route>
        </Switch>
      </Router>
    </>
  );
}

export default App;
