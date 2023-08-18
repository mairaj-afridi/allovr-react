import React from "react";
import Stakingpoolcard from "./stakingpoolcard";
// import Stakingpoolcard from "./Stakingpoolcard";

const StakingPool = () => {
  return (
    <section
      id="stakingpool"
      className="max-w-[1200px]    m-auto w-full flex-col px-6 sm:px-12  text-white beg-col"
    >
      <div className="w-full flex xl:flex-row flex-col ">
        {/* .................top div */}
        <div className="flex flex-col items-center md:items-start gap-[1.5rem] ">
          <h1 className="sm:text-[4rem] text-[2.6rem] font-semibol  leading-[120%] font-sans tracking-tight">
            Staking pools
          </h1>

          <div className="flex flex-col items-start gap-[0.5rem]">
            <p className="text-[#D1D5DD] text-start text-[1.1rem] sm:text-[1.25rem] font-sans font-normal tracking-tighter leading-[1.5rem] sm:leading-[1.875rem]">
              Browse ALLOVR’s 100% transparent staking pools. Select a pool to
              stake your ALLOVR tokens or get assigned one randomly by hitting
              Stake AOVR now. note that all staking pools work the same and
            </p>
            <h1 className="text-[#FFF] text-[1.5rem] text-center  lg:text-start sm:text-[1.8rem] font-sans font-normal tracking-[-0.16rem]  leading-[2.2rem] sm:leading-[3rem]">
              - earn the same there is no good or bad choice here
            </h1>
          </div>
        </div>

        {/* .................right div */}
        {/* </div> */}
        <div className="w-full cursor-pointer  flex flex-col sm:flex-row items-center gap-2 sm:items-end justify-center lg:justify-start xl:justify-end">
          <div className="sm:w-[220px] w-[190px] flex  gap-[0.5rem] items-center justify-center h-[45px] sm:h-[60px] text-center btn-pin3">
            <h1 className="sm:text-[0.9rem] text-[0.8rem] font-normal leading-6">
              TRIGGER INFLATION RUN{" "}
            </h1>
          </div>

          <div className="sm:w-[220px] w-[190px] flex gap-[0.625rem] h-[45px] sm:h-[60px] justify-center items-center btn-pin4 ">
            <h1 className="sm:text-[0.9rem] text-[0.8rem] font-normal sm:leading-6 leading-4">
              REGISTER POOL
            </h1>
          </div>
        </div>
      </div>

      {/* .................down div */}
      {/* 53 */}
      <div className="inline-flex   w-full flex-col mt-20 justify-center items-center gap-[4rem]">
        {/* 53.......55 */}
        <div className="flex items-center  justify-center flex-col w-full gap-[2rem]">
          {/* 53...52 */}
          <div className=" items-start w-full gap-[2rem] grid xl:grid-cols-4 grid-cols-1 lg:grid-cols-3 md:grid-cols-2">
            {/* 52....43..1 */}

            {cardData.map((item, index) => {
              return (
                <Stakingpoolcard
                  key={index}
                  poolNum={item.poolNum}
                  totalStacked={item.totalStacked}
                  totalOwned={item.totalOwned}
                  availableSlots={item.availableSlots}
                  link={item.link}
                />
              );
            })}
          </div>
        </div>

        {/* 53.......5 */}
        <div className="btn-last-stakingpool py-[1rem] px-[2.5rem] items-center h-[60px] gap-[0.625rem]">
          <h1 className="leading-[1.5rem] text-[1rem] ">LOAD MORE ...</h1>
        </div>
      </div>
    </section>
  );
};

const cardData = [
  {
    poolNum: 0,
    totalStacked: 672,
    totalOwned: 183 ,
    availableSlots: 7,
    link: "DzWPTj1Ym5w5uGoGvdjtRK6G yoG4VpjL8VJhdUcSRfqg",
  },
  {
    poolNum: 1,
    totalStacked: 140,
    totalOwned: 0,
    availableSlots: 2,
    link: "45wL48FzxAvMowbHhqwdjRx urDgrMBYRW4G7YqDFFwmW",
  },
  {
    poolNum: 2,
    totalStacked: 1917,
    totalOwned: 0,
    availableSlots: 2,
    link: " 5Hz47x9T5EpVC6SPK3iwFnAtQ vmLuKBf7tMa4z1CTVmS",
  },
  {
    poolNum: 3,
    totalStacked: 809,
    totalOwned: 137,
    availableSlots: 3,
    link: "FZvJ1FVepVdQodaSGsi9fmKrYj rv7fHNWFzyRcUM2wsu",
  },
  {
    poolNum: 4,
    totalStacked: 456,
    totalOwned: 0,
    availableSlots: 0,
    link: "D83chhV83wr54dJtFYJWnoa7 qbpTrHZTjCPbpQHbRmvD",
  },
  {
    poolNum: 5,
    totalStacked: 549,
    totalOwned: 99,
    availableSlots: 2,
    link: "GAMzvYjvJitCzrFyLk58uomE6d BEhSzzVfBJvdphTGQs",
  },
  {
    poolNum: 6,
    totalStacked: 1922,
    totalOwned: 4,
    availableSlots: 4,
    link: "9ZbRM7cLgEmwSQKWZZTB2t SDU4EFby2U9jkDAkQBmAVC",
  },
  {
    poolNum: 7,
    totalStacked: 1077,
    totalOwned: 4,
    availableSlots: 2,
    link: "DrLky4KzLnKUtdcVoYGyKkiSm hWkBt4npANphHf6SEV9",
  },
];

export default StakingPool;
