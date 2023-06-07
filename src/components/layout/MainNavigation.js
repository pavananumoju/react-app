import { Link } from "react-router-dom/cjs/react-router-dom";
import classes from "./MainNavigation.module.css";
import { useContext } from "react";
import FavouritesContext from "../../store/favourites-context";

function MainNavigation() {

  const favouritesCtx = useContext(FavouritesContext);

  return (
    <header className={classes.header}>
      <div className={classes.logo}>React Meetups</div>
      <nav>
        <ul>
          <li>
            <Link to="/">ALL MEETUPS</Link>
          </li>
          <li>
            <Link to="/fav">MY FAVOURITES<span className={classes.badge}> {favouritesCtx.totalFavourites}</span>
            </Link>
            
          </li>
          <li>
            <Link to="/new-meetups">Add NEW MEETUPS</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default MainNavigation;