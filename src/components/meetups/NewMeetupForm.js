import { useRef } from "react";
import Card from "../ui/Card";
import classes from "./NewMeetupForm.module.css";

function NewMeetupForm() {
    const titleInputRef = useRef();
    const imageUrlInputRef = useRef();
    const addressInputRef = useRef();
    const descriptionInputRef = useRef();

    function submitHandler(event){

        event.preventDefault();

        const titleInputValue = titleInputRef.current.value;
        const imageUrlInputValue = imageUrlInputRef.current.value;
        const addressInputValue = addressInputRef.current.value;
        const descriptionInputValue = descriptionInputRef.current.value;

        const meetupData = {
            title: titleInputValue,
            image: imageUrlInputValue,
            address: addressInputValue,
            description: descriptionInputValue
        }

        console.log(meetupData);
    }


  return (
    <Card>
      <form className={classes.form} onSubmit={submitHandler}>
        <div className={classes.control}>
          <label htmlFor="title">Meetup TItle</label>
          <input type="text" required id="title" ref={titleInputRef}/>
        </div>
        <div className={classes.control}>
          <label htmlFor="imageUrl">Image URL</label>
          <input type="url" required id="imageUrl" ref={imageUrlInputRef} />
        </div>
        <div className={classes.control}>
          <label htmlFor="address">Address</label>
          <input type="text" required id="address" ref={addressInputRef}/>
        </div>
        <div className={classes.control}>
          <label htmlFor="description">Description</label>
          <textarea required id="description" rows='5' ref={descriptionInputRef}></textarea>
        </div>
        <div className={classes.actions}>
            <button>Add Meetup</button>
        </div>
      </form>
    </Card>
  );
}

export default NewMeetupForm;
