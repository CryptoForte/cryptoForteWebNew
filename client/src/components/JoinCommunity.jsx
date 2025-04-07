import { MdKeyboardArrowRight } from 'react-icons/md';
import GroupImg from '../assets/groupcryptoforte.png';

const JoinCommunity = () => {
  return (
    <div className='flex flex-col-reverse items-center px-4 my-16 md:flex-row max-w-6xl mx-auto '>
      <article className='md:w-1/2 py-4'>
        <img src={GroupImg} alt="CryptoForte" />
      </article>
      <article className='py-4 md:w-1/2'>
        <h1 className='text-xl md:text-4xl py-4 font-bold'>Ready to Join Our Community</h1> 
        <p className='text-justify'>
          Step into a world where Web3 is simple,
          welcoming and easy to navigate. Whether you are justify starting
          or looking to grow, our communtiy is here to support you every 
          step of the way. Connect, learn and explore with like-minded 
          people - because crypto is better together!
        </p>
        <div className="flex justify-center items-center my-4">
                <article
                  className="flex items-center rounded-full w-fit text-white px-8 py-3 cursor-pointer"
                  style={{ backgroundColor: '#DE3A6A' }}
                >
                  <p>Join Community</p>
                  <MdKeyboardArrowRight className="text-xl mt-1" />
                </article>
              </div>
      </article>

    </div>
  )
}

export default JoinCommunity
