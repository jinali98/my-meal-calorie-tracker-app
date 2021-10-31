import { Route, Switch } from "react-router-dom";
import Header from "./components/header/header.component";
import { GlobalStyles } from "./globalStyles";
import HomePage from "./pages/home-page/home-page.component";

function App() {
  return (
    <div>
      <GlobalStyles />
      <Header />
      <Switch>
        <Route exact path="/" component={HomePage} />
      </Switch>
    </div>
  );
}

export default App;
