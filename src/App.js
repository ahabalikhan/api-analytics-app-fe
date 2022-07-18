import { Switch, Route, Redirect } from "react-router-dom";
import Home from "./pages/Home";
import Tables from "./pages/Tables";
import Billing from "./pages/Billing";
import Rtl from "./pages/Rtl";
import Profile from "./pages/Profile";
import Portal from "./pages/Portal";
import GenerateKey from "./pages/GenerateKey";
import Main from "./components/layout/Main";
import "antd/dist/antd.css";
import "./assets/styles/main.css";
import "./assets/styles/responsive.css";

function App() {
  return (
    <div className="App">
      <Switch>
        <Route path="/portal" exact component={Portal} />
        <Route path="/generate-key" exact component={GenerateKey} />
        <Main>
          <Route exact path="/dashboard" component={Home} />
          <Route exact path="/rtl" component={Rtl} />
          <Redirect from="*" to="/portal" />
        </Main>
      </Switch>
    </div>
  );
}

export default App;
