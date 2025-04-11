// Articles.jsx
import { LuFileSpreadsheet } from "react-icons/lu";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";

const Videos = () => {
  const Videos = [
    {
      id: 1,
      title: "Understanding Blockchain Basics",
      description: "Learn the fundamentals of blockchain technology",
      icon: <LuFileSpreadsheet className="text-4xl text-red-200" />,
      action: "Read More"
    },
    // More articles...
  ];

  return (
    <div className="my-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {Videos.map((item) => (
        <div key={item.id} className="bg-slate-800 p-6 text-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300 border border-gray-200">
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
  );
};

export default Videos;