import Card from "../ui/Card";
import classes from "./MeetupItem.module.css"

function MeetupItem(props) {
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
        <button>Add to Favourites</button>
      </div>
    </li>
    </Card>
  );
}

export default MeetupItem;
