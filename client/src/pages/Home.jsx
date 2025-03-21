import CommunityFeedbackCarousel from "../components/CommunityFeedbackCarousel";
import EventsCarousel from "../components/EventsCarousel";
import Header from "../components/Header";
import JoinCommunity from "../components/JoinCommunity";
import SupportUsSection from "../components/SupportUsSection";
import partner1 from '../assets/buidcon.jpg';
import partner2 from '../assets/DexPay.jpg';
import partner3 from '../assets/web3Bridge.jpg';


const Home = () => {
  
    const partners = [
      partner1,
      partner2,
      partner3,
    ];
  

  return (
    <div className="">
      <Header /> 

      <section>
        <div className="w-full overflow-hidden bg-gray-100 py-4">
            {/* Slider Container */}
            <div className="flex animate-slide">
              {/* Duplicate the logos for a seamless loop */}
              {[...partners, ...partners].map((logo, index) => (
                <div key={index} className="mx-4 flex-shrink-0">
                  <img
                    src={logo}
                    alt={`Partner ${index + 1}`}
                    className="h-16 w-16 object-contain"
                  />
                </div>
              ))}
            </div>
        </div>
      </section>

      < CommunityFeedbackCarousel />

      <EventsCarousel />
      
      <SupportUsSection />

      <JoinCommunity />
      
    </div>
  )
}

export default Home;
