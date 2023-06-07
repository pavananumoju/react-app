import { Route } from "react-router-dom";
import AllMeetupsPage from "./pages/AllMeetups";
import FavouritesPage from "./pages/Favourites";
import NewMeetupPage from "./pages/NewMeetup";
import { Switch } from "react-router-dom/cjs/react-router-dom";
import Layout from "./components/layout/Layout";

function App() {
  return (
    <Layout>      
      <Switch>
      <Route exact path="/">
        <AllMeetupsPage/>
      </Route>
      <Route exact path="/new-meetups">
        <NewMeetupPage/>
      </Route>
      <Route exact path="/fav">
        <FavouritesPage/>
      </Route>
      </Switch>
    </Layout>
  );
}

export default App;
