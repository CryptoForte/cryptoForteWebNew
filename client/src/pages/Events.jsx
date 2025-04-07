import DontMissEvents from "../components/DontMissEvents"
import EventsPageCarousel from "../components/EventsPageCarousel"
import EventsCarousel from "../components/EventsCarousel"
import FrequentlyAsked from "../components/FrequentlyAsked"
import NewsLetterSubscribe from "../components/NewsLetterSubscribe"

const Events = () => {
  return (
    <div>
      {/* <h1 className="text-4xl text-red-400 text-center mt-12">Events</h1>  */}
      < EventsPageCarousel />

      <DontMissEvents />

      <EventsCarousel />

      <FrequentlyAsked />

      <NewsLetterSubscribe />
    </div>
  )
}

export default Events
