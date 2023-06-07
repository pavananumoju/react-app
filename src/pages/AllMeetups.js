import { useEffect, useState } from "react";
import MeetupList from "../components/meetups/MeetupList";

function AllMeetupsPage() {
  const [isLoading, setIsLoading] = useState(true);
  const [allMeetupData, setAllMeetupData] = useState([]);

  useEffect(() => {
    fetch("https://react-auth-56197-default-rtdb.firebaseio.com/meetups.json")
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        const meetups = [];
        for (const key in data){
          const meetup = {
            id:key,
            ...data[key]
          }
          meetups.push(meetup);
        }
        setIsLoading(false);
        setAllMeetupData(meetups);
      });
  }, []);

  if (isLoading) {
    return <section>...loading</section>;
  }

  return (
    <section>
      <h1>All Meetups</h1>
      <MeetupList meetups={allMeetupData} />
    </section>
  );
}

export default AllMeetupsPage;
