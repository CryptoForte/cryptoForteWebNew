import { LuFileSpreadsheet } from "react-icons/lu";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { SiAirplayvideo } from "react-icons/si";
import { IoPlaySkipForwardOutline } from "react-icons/io5";
import { useState } from 'react';
import NewsLetterSubscribe from "../components/NewsLetterSubscribe";

const Contents = () => {
  const [activeTab, setActiveTab] = useState('articles');
  
  // Sample data for each content type
  const contentData = {
    articles: [
      {
        id: 1,
        title: "Understanding Blockchain Basics",
        description: "Learn the fundamentals of blockchain technology",
        icon: <LuFileSpreadsheet className="text-4xl text-red-200" />,
        action: "Read More"
      },
      {
        id: 2,
        title: "Smart Contracts Explained",
        description: "Everything you need to know about smart contracts",
        icon: <LuFileSpreadsheet className="text-4xl text-red-200" />,
        action: "Read More"
      }
    ],
    videos: [
      {
        id: 1,
        title: "Blockchain for Beginners",
        description: "Watch this introductory video on blockchain concepts",
        icon: <SiAirplayvideo className="text-4xl text-red-200" />,
        action: "Watch Video"
      },
      {
        id: 2,
        title: "Crypto Wallets Tutorial",
        description: "How to set up and use cryptocurrency wallets",
        icon: <SiAirplayvideo className="text-4xl text-red-200" />,
        action: "Watch Video"
      }
    ],
    audio: [
      {
        id: 1,
        title: "Blockchain Podcast Episode 1",
        description: "Listen to industry experts discuss blockchain trends",
        icon: <IoPlaySkipForwardOutline className="text-4xl text-red-200" />,
        action: "Listen Now"
      },
      {
        id: 2,
        title: "Crypto News Roundup",
        description: "Weekly audio summary of cryptocurrency news",
        icon: <IoPlaySkipForwardOutline className="text-4xl text-red-200" />,
        action: "Listen Now"
      }
    ]
  };

  return (
    <section className="">

      <section className="bg-blue-600 h-96 text-center text-white">
        <h2 className="pt-20 font-semibold text-xl md:text-4xl">Resource Center</h2>
        <p className="pt-4">Get Resources to Learn everything about the blockchain from basics to advance</p>
      </section> 
      <section className="max-w-6xl mx-auto">
        <div className="my-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Card 1: Reading Content */}
          <div className="bg-slate-800 p-6 text-white  rounded-4xl overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300 border border-gray-200">
            <div className="h-32 ">
              < LuFileSpreadsheet className="text-4xl text-red-200" />
            </div>
            <div className="">
              <p className="text-xl">
                Understanding the blockchain dynamics
              </p>
              <a
                href="#"
                className="flex items-center border w-fit mt-4 px-4 py-2 rounded-4xl font-medium"
              >
                <p>Read More</p> 
                <MdOutlineKeyboardArrowRight className="mt-1" />
              </a>
            </div>
          </div>
          <div className="bg-slate-800 p-6 text-white  rounded-4xl overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300 border border-gray-200">
            <div className="h-32 ">
              < SiAirplayvideo className="text-4xl text-red-200" />
            </div>
            <div className="">
              <p className="text-xl">
                Understanding the blockchain dynamics
              </p>
              <a
                href="#"
                className="flex items-center border w-fit mt-4 px-4 py-2 rounded-4xl font-medium"
              >
                <p>Watch Video</p> 
                <MdOutlineKeyboardArrowRight className="" />
              </a>
            </div>
          </div>
          <div className="bg-slate-800 p-6 text-white  rounded-4xl overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300 border border-gray-200">
            <div className="h-32 ">
              < IoPlaySkipForwardOutline className="text-4xl text-red-200" />
            </div>
            <div className="">
              <p className="text-xl">
                Understanding the blockchain dynamics
              </p>
              <a
                href="#"
                className="flex items-center border w-fit mt-4 px-4 py-2 rounded-4xl font-medium"
              >
                <p>Listen</p> 
                <MdOutlineKeyboardArrowRight className="mt-1" />
              </a>
            </div>
          </div>
        </div>
      </section>
      
      <div className="container mx-auto px-4">
        {/* Tab Navigation */}
        <div className="flex justify-center my-8 border-b border-gray-200">
          <button
            onClick={() => setActiveTab('articles')}
            className={`py-4 px-6 font-medium text-sm md:text-base ${activeTab === 'articles' ? 'text-blue-600 border-b-2 border-blue-600' : 'text-gray-500 hover:text-gray-700'}`}
          >
            Medium Articles
          </button>
          <button
            onClick={() => setActiveTab('videos')}
            className={`py-4 px-6 font-medium text-sm md:text-base ${activeTab === 'videos' ? 'text-blue-600 border-b-2 border-blue-600' : 'text-gray-500 hover:text-gray-700'}`}
          >
            YouTube Videos
          </button>
          <button
            onClick={() => setActiveTab('audio')}
            className={`py-4 px-6 font-medium text-sm md:text-base ${activeTab === 'audio' ? 'text-blue-600 border-b-2 border-blue-600' : 'text-gray-500 hover:text-gray-700'}`}
          >
            Audio Files
          </button>
        </div>

        {/* Content Cards */}
        <div className="max-w-6xl mx-auto my-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {contentData[activeTab].map((item) => (
            <div key={item.id} className="bg-slate-800 p-6 text-white rounded-4xl overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300 border border-gray-200">
              <div className="h-32">
                {item.icon}
              </div>
              <div className="">
                <p className="text-xl">{item.title}</p>
                <p className="text-gray-300 mt-2">{item.description}</p>
                <a
                  href="#"
                  className="flex items-center border w-fit mt-4 px-4 py-2 rounded-4xl font-medium"
                >
                  <p>{item.action}</p> 
                  <MdOutlineKeyboardArrowRight className="mt-1" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>

      <NewsLetterSubscribe />
    </section>
  );
}

export default Contents;



