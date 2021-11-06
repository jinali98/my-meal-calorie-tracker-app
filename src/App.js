import { Route, Switch } from "react-router-dom";
import Header from "./components/header/header.component";
import { GlobalStyles } from "./globalStyles";
import CookBookPage from "./pages/cook-book-page/cook-book-page.component";
import FindCalorieAmountPage from "./pages/find-calorie-amount-page/find-calorie-amount-page.component";
import FindReceipePage from "./pages/find-receipe-page/find-receipe-page.component";
import HomePage from "./pages/home-page/home-page.component";
import MealDiaryPage from "./pages/meal-diary-page/meal-diary-page.component";

function App() {
  return (
    <div>
      <GlobalStyles />
      <Header />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/meal-diary" component={MealDiaryPage} />
        <Route exact path="/cook-book" component={CookBookPage} />
        <Route exact path="/find-receipe" component={FindReceipePage} />
        <Route
          exact
          path="/find-calorie-amount"
          component={FindCalorieAmountPage}
        />
      </Switch>
    </div>
  );
}

export default App;
