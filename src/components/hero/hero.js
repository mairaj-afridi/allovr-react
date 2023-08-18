import React from "react";
// import Stakeavor from "../card/stakeavor";
// import Box from "@mui/material/Box";
// import Typography from "@mui/material/Typography";
// import Modal from "@mui/material/Modal";

// const style = {
//   position: "absolute",
//   top: "50%",
//   left: "50%",
//   transform: "translate(-50%, -50%)",
//   width: 400,
//   bgcolor: "background.paper",
//   border: "2px solid #000",
//   boxShadow: 24,
//   pt: 2,
//   px: 4,
//   pb: 3,
// };

const Hero = () => {
  // const [open, setOpen] = React.useState(false);
  // const handleOpen = () => setOpen(true);
  // const handleClose = () => setOpen(false);
  return (
  
      <div className="w-full relative ">
        <section
          id="hero"
          className="max-w-[1200px] m-auto w-full px-6 sm:px-12    text-white beg-col"
        >
          {/* <Stakeavor/> */}
          <div className="xl:flex  w-full flex-row ">
            {/* text */}
            <div className="  flex flex-col xl:w-[45%] w-full items-center xl:items-start  gap-[40px]">
              <h1 className="mt-[9.5rem] text md:text-start text-center font-semibold lg:text-8xl text-7xl tracking-[-3.84px] font-sans gap-[2.5rem]">
                Stake <span className="text-[#FBB03B]">ALLOVR.</span>
              </h1>
              <p className="font-sans text-[22px] sm:text-[32px] font-normal leading-[2rem] text-center sm:leading-[3rem] w-auto	md:w-[650px] xl:w-[450px] xl:text-start -mt-3 ">
                This is the best time to get the earnings you dream of.
              </p>

              {/* button */}
              <div className="w-full md:w-[191px] h-[56px] items-center justify-center p-[16px 24px] gap-2 flex rounded-[64px] 	border-solid border-white border-[1px]	">
                <button
                  
                  className=" text-[16px] cursor-pointer font-medium font-Space Grotesk leading-6 "
                >
                  SCROLL DOWN
                </button>
                <img
                  src="/arrow-down.svg"
                  className=" w-[22px] flex-shrink-0 h-[22px] bg-transparent "
                  alt=""
                ></img>
              </div>
            </div>

            {/* images */}
            <div className=" flex-shrink-0  overflow-hidden">
              <img
                src="/Mask group.png"
                className="w-[100%]  h-[100%]  sm:w-[44rem] items-center xl:items-start flex-shrink-0   "
                alt=""
              ></img>
            </div>
          </div>
        </section>
        {/* liinera g */}
        <div className="w-[1300\px] hidden xl:flex -z-10 h-[1300px] absolute right-0 -top-72 bg-pin"></div>
      </div>

      
      
  );
};

export default Hero;
