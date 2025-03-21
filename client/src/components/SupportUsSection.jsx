import { useState } from "react";
import { FaCopy } from "react-icons/fa";
import { TbCopyCheckFilled } from "react-icons/tb";

const SupportUsSection = () => {

  const [copy, setCopy] = useState(false);
  return (
    <section className="w-full max-w-4xl mx-auto text-center my-12">
      <h1 className="font-bold text-lg md:text-4xl mb-4">Support the Future of Web3 <span className="">🌿</span>   </h1>
      <p className="text-[13px] text-justify px-4 md:px-24">Your donations helps us to make crypto simple, accessible and beginner friendly. 
        Every contribution counts, ensuring secure and transparent giving while empowering
        more people to navigate Web3 with confidence. Be part of the change - donate 
        and shape the future of crypto!
      </p>
      <div className="flex justify-center items-center py-4 gap-2">
        <p className="text-[10px] md:text-xl font-semibold">0x3725340694BaF2F3e116d47e1460A8d394E7BD4b</p>
        { copy ?
           < TbCopyCheckFilled className="text-[10px] md:text-xl cursor-pointer" />
           : 
           <FaCopy onClick={() => setCopy(true) } className="text-[10px] md:text-xl cursor-pointer" /> 
        }
      </div>
    </section>
  )
}

export default SupportUsSection
