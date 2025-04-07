import CommunityFeedbackCarousel from "../components/CommunityFeedbackCarousel";
import EventsCarousel from "../components/EventsCarousel";
import Header from "../components/Header";
import JoinCommunity from "../components/JoinCommunity";
import SupportUsSection from "../components/SupportUsSection";
import partner1 from '../assets/buidcon.jpg';
import partner2 from '../assets/DexPay.jpg';
import partner3 from '../assets/web3Bridge.jpg';
import FrequentlyAsked from "../components/FrequentlyAsked";
import {motion} from 'framer-motion'
import NewsLetterSubscribe from "../components/NewsLetterSubscribe";
import ImageGallery from "../components/HomePageGallery";


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
        <div className="w-full bg-primary overflow-hidden py-4">
          <h3 className="my-8 text-center text-xl md:text-4xl">Our Partners</h3>
          {/* Slider Container */}
          <motion.div
            className="flex"
            animate={{
              x: ["0%", "-100%"], // Move from 0% to -100% (left)
              transition: {
                duration: 20, // Adjust duration for slower/faster scroll
                repeat: Infinity, // Infinite loop
                ease: "linear", // Smooth linear animation
              },
            }}
          >
            {/* Duplicate the logos for a seamless loop */}
            {[...partners, ...partners, ...partners, ...partners, ...partners, ...partners, ...partners, ...partners].map((logo, index) => (
              <div key={index} className="mx-8 flex-shrink-0">
                <img
                  src={logo}
                  alt={`Partner ${index + 1}`}
                  className="h-10 w-10 object-contain"
                />
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      <ImageGallery />

      < CommunityFeedbackCarousel />

      <EventsCarousel />
      
      <SupportUsSection />

      <JoinCommunity />

      <FrequentlyAsked />
      
      <NewsLetterSubscribe />
    </div>
  )
}

export default Home;
