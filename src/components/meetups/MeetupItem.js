import { useContext } from "react";
import Card from "../ui/Card";
import classes from "./MeetupItem.module.css"
import FavouritesContext from "../../store/favourites-context";

function MeetupItem(props) {
    const favouritesCtx = useContext(FavouritesContext);

    const isFavourite = favouritesCtx.isFavourite(props.meetupitem.id);

    function toggleFavouriteStateHandler (){
        if(isFavourite){
            favouritesCtx.removeFavourite(props.meetupitem.id);
        }else{
            favouritesCtx.addFavourite({
                id: props.meetupitem.id,
                title: props.meetupitem.title,
                image: props.meetupitem.image,
                address: props.meetupitem.address,
                description: props.meetupitem.description
            });
        }
    }

  return (
    <Card>
    <li className={classes.item}>
      <div className={classes.image}>
        <img src={props.meetupitem.image} alt={props.meetupitem.title}/>
      </div>
      <div className={classes.content}>
        <h3>{props.meetupitem.title}</h3>
        <address>{props.meetupitem.address}</address>
        <p>{props.meetupitem.description}</p>
      </div>
      <div className={classes.actions}>
        <button onClick={toggleFavouriteStateHandler}>{isFavourite? 'Remove from Favourites':'Add to Favourites'}</button>
      </div>
    </li>
    </Card>
  );
}

export default MeetupItem;
