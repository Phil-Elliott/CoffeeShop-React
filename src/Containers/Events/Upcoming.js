import React from "react"
import Event from "./Event"

const Upcoming = () => {
  const eventsArr = [
    {
      time: "Monday's All Day",
      event: "Strong Coffee Monday's",
      description:
        "Start your day with any and a free shot of espresson on us. Who said Monday's needed to be bad.",
      pic: "https://images.unsplash.com/photo-1599579089328-852ca6423ef0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
    },
    {
      time: "Tuesdays's All Day",
      event: "Charity Day",
      description:
        "Come and drink some coffee and donate to a great cause. We will be donating 10% of all purchases to a charity of your choice.",
      pic: "https://images.unsplash.com/photo-1459257831348-f0cdd359235f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
    },
    {
      time: "Wednesday's 4PM - 7PM",
      event: "Board Game Mania",
      description:
        "Come and play some board games and enjoy a cup of coffee. We have a great selection, but feel free to bring your favorite game.",
      pic: "https://images.unsplash.com/photo-1611371805429-8b5c1b2c34ba?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
    },

    {
      time: "Thursdays's 5PM - 7PM",
      event: "Trivia Night",
      description:
        "Grab a group of friends and come join us for some trivia. Winners will be rewarded",
      pic: "https://images.unsplash.com/photo-1525610553991-2bede1a236e2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
    },
    {
      time: "Friday's 7PM - 9PM",
      event: "Live Music",
      description:
        "Nothing is better than live music after a long day. Come and enjoy your Friday's with us.",
      pic: "https://images.unsplash.com/photo-1510915361894-db8b60106cb1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
    },
    {
      time: "Saturday's 6PM - 8PM",
      event: "Salsa Night",
      description:
        "Come and show off your dance skills. All levels are welcome. The only rule is, if it's your first time at Salsa Night, then you have to dance.",
      pic: "https://images.unsplash.com/photo-1542401520-180a59daad21?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1877&q=80",
    },
    {
      time: "Sundays's 2PM - 4PM",
      event: "Dog Days",
      description:
        "Come enjoy a cup of coffee, on our spacious patio, with your dog. Dog owner's get 10% off all day",
      pic: "https://images.unsplash.com/photo-1480279237099-0c30d0fdf76d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1171&q=80",
    },
  ]

  return (
    <div className="events-bottom">
      {eventsArr.map((entrie, i) => {
        return (
          <Event
            key={i}
            time={eventsArr[i].time}
            event={eventsArr[i].event}
            description={eventsArr[i].description}
            pic={eventsArr[i].pic}
          />
        )
      })}
    </div>
  )
}

export default Upcoming

/*
  - create an array with the data needed
  - download the photos
  - map through each one 
*/
