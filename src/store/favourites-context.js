import { createContext, useState } from "react";

const FavouritesContext = createContext({
  favourites: [],
  totalFavourites: 0,
  addFavourite: (meetupData)=> {},
  removeFavourite: (meetupId)=>{},
  isFavourite: (meetupId)=>{}
});

export function FavouritesContextProvider(props) {
  const [userFavourites, setUserFavourites] = useState([]);

  function addFavouritesHandler(meetupData) {
    setUserFavourites((previousUserFavourites) => {
      return previousUserFavourites.concat(meetupData);
    });
  }

  function removeFavouritesHandler(meetupId) {
    setUserFavourites((previousUserFavourites) => {
      return previousUserFavourites.filter((meetup) => meetup.id !== meetupId);
    });
  }

  function isFavouriteHandler(meetupId) {
    return userFavourites.some((meetup) => {
      return meetup.id === meetupId;
    });
  }

  const currentContext = {
    favourites: userFavourites,
    totalFavourites: userFavourites.length,
    addFavourite: addFavouritesHandler,
    removeFavourite: removeFavouritesHandler,
    isFavourite: isFavouriteHandler,
  };

  return (
    <FavouritesContext.Provider value={currentContext}>
      {props.children}
    </FavouritesContext.Provider>
  );
}

export default FavouritesContext;