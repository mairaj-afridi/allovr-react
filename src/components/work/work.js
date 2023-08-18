import React from "react";

const Work = () => {
  return (
    <section id="working" className="  max-w-[1200px] m-auto w-full px-6 sm:px-12  text-white beg-col">
      {/* main div */}
      <div className=" flex items-end  flex-col gap-[2.5rem] ">
        {/* 1 div */}
        <div className="  w-full items-center justify-center  grid grid-cols-1 lg:grid-cols-[1.5fr,1fr] self-stretch">
          {/* 1 child 1 */}
          <div className="flex flex-col items-center justify-center  gap-[2rem]">
            <div className="w-full flex flex-col items-center lg:items-start justify-center gap-[1.5rem] ">
              <h1 className="font-sans text-center xl:text-start text-[3rem] sm:text-[4rem] font-normal leading-[3.5rem] sm:leading-[4.8rem] tracking-[-0.16rem]">
                {" "}
                How does it work?
              </h1>

              <div className="flex flex-col items-start gap-[1rem] ">
                <p className="font-sans text-[1.1rem] sm:text-[1.25rem] font-normal leading-[1.875rem] tracking-tighter text-[#D1D5DD]">
                  The total AOVR supply is inflated with an additional 3% every
                  year. This inflation happens in weekly increments, paid out to
                  everyone in the community with staked AOVR tokens at the time
                  of payout and proportional to the amount staked. All staked
                  tokens are held by the AOVR Staking treasury, with is
                  controled by the DAO and therefore secured against malicious
                  behavior by the ALLOVR community.
                </p>
              </div>
            </div>
          </div>

          {/* 1 child 2 */}
          <div className="  items-center justify-center flex ">
            <img
              src="how-illustration.png"
              className=" sm:w-[26rem] sm:mt-20 mt-10 w-[19rem] "
            ></img>
          </div>
        </div>

        {/* 2 div */}
        {/* <div className='flex flex-col items-center justify-center px-4 gap-[2.5rem] '>

                <h1 className='text-[2rem] font-sans font-normal tracking-[-0.16rem] leading-10'>- An on-chain register of staking pools is maintained publicly and transparently, keeping reords of correct inflation distribution over all eligible accounts and outsanting payments per staking slot.</h1>


                <div className='w-[56.5625rem] flex gap-[1.5rem] items-center'>
                    <div className='flex p-[1rem] gap-[0.5rem] items-center btn-pin1'>
                        <h1 className='text-[1rem] font-normal leading-6'>READ TECHNICAL DESCRIPTION</h1>
                        <img src='arrow-up.png'></img>
                    </div>

                    <div className='flex p-[1rem] gap-[0.625rem] items-center btn-pin2'>
                        <h1 className='text-[1rem] font-normal leading-6'>READ TECHNICAL DESCRIPTION</h1>
                    </div>



                </div>
            </div> */}
      </div>
    </section>
  );
};

export default Work;
