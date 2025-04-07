
import Students from '../assets/Subtract.png';
import Hakaton from '../assets/Hakaton_Rep.png';
import Hakaton1 from '../assets/buildcon002.png';
import { HiUserGroup } from "react-icons/hi2";
import { SiBlockchaindotcom } from "react-icons/si";



const Header = () => {
  return (
    <section className="flex flex-col lg:flex-row h-screen items-center px-4 lg:px-20 bg-primary">

      <div className="my-6 md:my-10 lg:my-16 text-center mx-2 md:w-1/2">
        <h1 className="text-[17px] md:text-3xl lg:text-5xl font-bold mb-2 md:mb-4">Your Forte in Web3 Begins Here!</h1>
        <h3 className="text-[12px] md:text-xl lg:text-2xl font-semibold mb-2 md:mb-4">Start Strong, Stay Confident And Explore Crypto with Ease</h3>

        <p className="text-[12px] md:text-sm">Crypto isn&#39;t just the future-it&#39;s yours to explore today. Start Simple, stay smart and unlock 
          new possibilities with Web3! 🍨 GM WAGMI
        </p>
      </div>

      {/* <div className="">
        <img 
           src={Students} 
           alt=""
        />
      </div> */}

     
      <div className="flex justify-center items-center">
      <div className="grid grid-cols-2 gap-4 w-2/3 h-1/2">
        <img
          src={Hakaton1}
          alt="Image 1"
          className="w-full h-full object-cover rounded-tl-2xl"
        />
        <div className='bg-gray-400 flex flex-col gap-2 px-2 py-4 rounded-lg w-fit items-center justify-center'>
          <article className='bg-slate-900 flex flex-col items-center p-2 rounded-lg'>
            <p className='bg-white w-fit p-2 rounded-lg'>
              < HiUserGroup className='text-2xl text-slate-900' />
            </p>
            <h3 className='text-white text-[10px] pt-2'>Community</h3>

          </article>
          <article style={{backgroundColor: "#DE3A6A"}} className='flex flex-col items-center p-2 rounded-lg'>
            <p className='bg-white w-fit p-2 rounded-lg'>
              < SiBlockchaindotcom className='text-2xl text-slate-900' />
            </p>
            <h3 className='text-white text-[10px] pt-2'>Blockchain</h3>

          </article>
        </div>
        <img
          src="https://via.placeholder.com/200"
          alt="Image 3"
          className="w-full h-full object-cover rounded-bl-2xl"
        />
        <img
          src={Hakaton}
          alt="Hakaton Reps"
          className="w-full h-full object-cover rounded-br-2xl"
          style={{ backgroundColor: '#4284FF' }}
        />
      </div>
    </div>

    </section>
  )
}

export default Header
