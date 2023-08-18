import React from "react";

const Stakingpoolcard = ({
  poolNum,
  totalStacked,
  totalOwned,
  availableSlots,
  link,
}) => {
  return (
    <div className="w-full flex justify-center items-center">
      <div className="gap-[1.5rem] flex w-[17.1875rem] p-[1rem] flex-col items-start fourty-three">
        <h1 className="text-[1.5rem] font-medium font-sans leading-[2.25rem] tracking-[-0.06rem] ">
          Pool {poolNum}
        </h1>
        {/* 43.......44 */}
        <div className=" flex flex-col items-start gap-[0.875rem] self-stretch ">
          {/* 44......1 */}
          <div className="  flex justify-between items-start self-stretch">
            <div className="flex   items-start flex-col  gap-[0.5rem] ">
              <p className="text-[0.875rem] font-sans font-normal leading-[1.3125rem] ">
                Total Staked
              </p>
              <div className="felx  items-end gap-[0.5rem] ">
                <h1 className="text-[1.5rem] font-normal leading-6 ">
                  {totalStacked}

                  <span className="text-[0.9rem] ml-2">AOVR</span>
                </h1>
              </div>
            </div>

            <div className="flex  items-start flex-col  gap-[0.5rem] ">
              <p className="text-[0.875rem] font-sans font-normal leading-[1.3125rem] ">
                Total Owed
              </p>
              <div className="felx items-end gap-[0.5rem]">
                <h1 className="text-[1.5rem] font-normal leading-6 ">
                  {totalOwned}
                  <span className="text-[0.9rem] ml-2"> AOVR</span>
                </h1>
                
              </div>
            </div>
          </div>
          {/* 44.....2 */}
          <div className="flex gap-[0.5rem] pb-0 items-center self-stretch">
            <h1 className="text-[0.875rem] font-sans font-normal leading-[1.3125rem]">
              Available Slots :
            </h1>
            <div className="flex items-end gap-[0.5rem]">
              <h1 className="text-[1.5rem] text-[#FBB03B] leading-6 font-normal ">
                {availableSlots}
              </h1>
              <p className="text-[0.875rem] font-sans leading-[1.3125rem]">
                Slots
              </p>
            </div>
          </div>
          {/* 44 p */}
          <p className=" whitespace-normal h-auto text-[1rem] font-sans font-normal leading-6  text-[#0093FE]	 ">
            {link}
          </p>
        </div>

        {/* 43......4 */}
        <div className=" cursor-pointer flex items-center py-[0.625rem] px-[1.5rem] gap-[0.5rem]  btn-pin-stakingpool">
          <h1 className="text-[0.875rem] leading-[1.3125rem] font-normal ">
            STAKE
          </h1>
        </div>
      </div>
    </div>
  );
};

export default Stakingpoolcard;
