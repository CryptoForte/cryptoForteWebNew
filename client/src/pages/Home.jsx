import CommunityFeedbackCarousel from "../components/CommunityFeedbackCarousel"
import EventsCarousel from "../components/EventsCarousel"
import Header from "../components/Header"
import JoinCommunity from "../components/JoinCommunity"
import SupportUsSection from "../components/SupportUsSection"

const Home = () => {
  return (
    <div className="">
      <Header /> 

      < CommunityFeedbackCarousel />


      <EventsCarousel />
      
      <SupportUsSection />

      <JoinCommunity />
      
    </div>
  )
}

export default Home
