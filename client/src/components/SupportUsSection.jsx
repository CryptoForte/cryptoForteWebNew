import React, { useState } from 'react';
import { MdKeyboardArrowRight } from 'react-icons/md';
import { IoCloseCircleOutline } from 'react-icons/io5';
import { TbCopyCheckFilled } from 'react-icons/tb';
import { FaCopy } from 'react-icons/fa';

const DonationModal = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [copy, setCopy] = useState(false);

  const handleCopy = () => {
    setCopy(true);
    navigator.clipboard.writeText('0x3725340694BaF2F3e116d47e1460A8d394E7BD4b');

    // Reset the copy state back to false after 30 seconds
    setTimeout(() => {
      setCopy(false);
    }, 3000); // 30 seconds in milliseconds
  };

  return (
    <>
      {/* Donate Button */}
      <div className="flex justify-center items-center my-4">
        <article
          className="flex items-center rounded-full w-fit text-white px-8 py-3 cursor-pointer"
          style={{ backgroundColor: '#DE3A6A' }}
          onClick={() => setIsModalOpen(true)}
        >
          <p>Donate</p>
          <MdKeyboardArrowRight className="text-xl mt-1" />
        </article>
      </div>

      {/* Overlay */}
      {isModalOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-50"
          onClick={() => setIsModalOpen(false)}
        ></div>
      )}

      {/* Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 flex justify-center items-center z-50">
          <div className="bg-white px-8 py-5 flex flex-col items-center rounded-md text-center border mx-2 relative">
            <IoCloseCircleOutline
              className="text-2xl font-semibold absolute top-2 right-2 cursor-pointer"
              onClick={() => setIsModalOpen(false)}
            />
            <h1 className="text-xl py-4 font-bold text-slate-700">Support our Case</h1>
            <p>Kindly send your donation to the wallet address below</p>
            <div className="py-3">
              <h5>
                We accepts payments in <span className="block my-2">USDT / ERC20 / BEP20</span>
              </h5>
            </div>
            <div className="flex flex-col items-center">
              <p className="text-[10px] md:text-xl font-semibold py-4">
                0x3725340694BaF2F3e116d47e1460A8d394E7BD4b
              </p>
              {copy ? (
                <TbCopyCheckFilled className="text-[10px] md:text-xl cursor-pointer" />
              ) : (
                <FaCopy onClick={handleCopy} className="text-[10px] md:text-xl cursor-pointer" />
              )}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default DonationModal;