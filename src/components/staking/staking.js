import React from "react";

const Stacking = () => {
  return (
    <section id="about" className="max-w-[1200px] m-auto mt-16  w-full px-6 sm:px-12 text-white beg-col ">
      <div className="inline-flex  flex-col gap-[2.5rem] items-start">
        {/* div in main */}
        <div className="  flex flex-col lg:flex-row items-center gap-[2.5rem]">
          {/* div 1 */}
          <div >
            <div className=" "></div>
            <img src="Group 14.png" className="w-[19rem] h-25[rem] md:w-full md:h-full "></img>
          </div>

          {/* div 2 */}
          <div className=" flex w-[100%] flex-col items-center lg:items-start gap-[1.5rem]">
            <h1 className="text-[3rem] md:text-[4rem]  text-center font-semibold leading-[110%] sm:leading-[120%] font-sans tracking-tight ">
              What is Staking?
            </h1>

            <div className="flex flex-col items-start gap-[1rem] self-stretch  ">
              <p className="font-sans text-[1.25rem] text-center lg:text-start font-normal leading-[1.7rem] sm:leading-[1.875rem] tracking-tighter">
                Staking is when you lock AOVR tokens over a certain time span.
                In return, you receive a share of the weekly minted new AOVR
                tokens. While your tokens, are staked you cannot send them to
                other wallets cast votes wihte them in the ALLOVR DAO or make
                use of any other utility the tokens hold. However, it is
                completely up to you how many tokens if any you’d like to stake.
              </p>
            </div>
          </div>
        </div>

        {/* paragraph 1 */}
        <p className="text-[1.5rem] sm:text-[1.7rem] font-sans font-normal leading-[1.9rem] sm:leading-[2rem] text-center md:leading-[3rem]">
          - The number of <span className="text-[#FBB03B]">tokens</span> you
          gain from the weekly minted supply is proportional to the size of your
          stake compared to those of all others. The minimum staking period is
          one wee after that you can withdraw your tokens{" "}
          <span className="text-[#FBB03B]">plus your earned interest</span> at
          any time.
        </p>
      </div>
    </section>
  );
};

export default Stacking;
