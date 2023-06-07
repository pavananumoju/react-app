import { Link } from "react-router-dom/cjs/react-router-dom";
import classes from "./MainNavigation.module.css";

function MainNavigation() {
  return (
    <header className={classes.header}>
      <div className={classes.logo}>React Meetups</div>
      <nav>
        <ul>
          <li>
            <Link to="/">ALL MEETUPS</Link>
          </li>
          <li>
            <Link to="/fav">FAVOURITES</Link>
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