import React from "react";

const Action = () => {
  return (
    <section className="md:flex flex-row bg-red-40 max-w-[1200px] mt-[180px] m-auto w-full px-6 sm:px-12  gap-[5.5rem] text-white beg-col">
      {/* <div> */}
      <div className="w-full h-[25rem] md:h-[17.25rem]  flex flex-col relative  items-center justify-center second-yell">
        <div className=" inline-flex items-center flex-col gap-[1.5rem] md:gap-[2.5rem]">
          <h1 className="font-sans text-center  mt-1 text-[3rem] sm:text-[3.3rem] md:text-[4rem] font-medium leading-[100%] sm:leading-[120%] tracking-tighter ">
            Start your action now!
          </h1>
          <div className="flex flex-col w-full cursor-pointer md:flex-row items-center gap-[1rem] px-4">
            <div className="flex p-[1rem] w-[100%] sm:w-[20rem]  justify-center items-center gap-[0.625rem] btn-action1">
              <h1 className="text-[1rem] font-normal leading-6 ">
                STAKE AOVR NOW
              </h1>

              <img
                src="arrow-down.svg"
                className="w-[1.5rem] bg-black text h-[1rem]"
              ></img>
            </div>
            <div className="flex px-[2rem] py-[0.8rem] justify-center w-[100%] sm:w-[20rem] items-center gap-[0.625rem] btn-action2">
              <h1 className=" text-[1rem] font-normal  leading-6 ">
                WITHDRAW AOVR
              </h1>
            </div>
          </div>
        </div>

        <div className="w-[100%] h-[3rem] sm:h-[5.25rem] first-yell -top-9 sm:-top-16 md:-top-20 rotate-360  left-0  absolute"></div>
      </div>
    </section>
  );
};

export default Action;
