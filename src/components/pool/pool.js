import React from "react";

import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';



const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  pt: 2,
  px: 4,
  pb: 3,
};

const Pool = () => {


  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <>
    <section className=" lg:flex flex-row bg-red-40 max-w-[1200px] m-auto w-full px-6 sm:px-12  gap-[5.5rem] text-white ">
      {/* <div className="bg-yellow-300 flex flex-row"> */}
      {/* lift div */}

      <div className=" w-[100%]  md:flex flex-col items-start  gap-[2rem] ">
        {/* first */}
        <div className="   flex flex-col items-start  gap-[0.6rem] sm:gap-[1rem]">
          <p className="text-[1.5rem]">Total Staked at this moment</p>
          <div className=" flex items-end gap-[0.625rem]">
            {/* <div className="flex items-center gap-[0.625rem]"> */}
            <h1 className="text-[2rem] sm:text-[3rem] leading-10 font-medium">
              56,669
            </h1>
            <p className="text-[1rem] sm:text-[1.5rem] leading-9 font-normal">
              AOVR
            </p>
            {/* </div> */}
          </div>
        </div>

        {/* second div */}
        <div className=" flex flex-col items-start gap-[0.6rem] sm:gap-[1rem]">
          <h className="text-[1.35rem] mt-1 leading-7 font-normal font-sans text-[#D1D5DD]">
            Community earnings since last payout
          </h>
          <div className="flex items-end gap-[0.625rem] ">
            <h1 className="text-[2rem] sm:text-[3rem] font-medium leading-10">
              3,923
            </h1>
            <p className="text-[1rem] sm:text-[1.5rem] leading-9 ">AOVR</p>
          </div>
        </div>

        {/* third div */}
        <div className=" flex flex-col items-start gap-[1rem]  ">
          <p className="text-[1.5rem] leading-7 font-normal font-sans ">
            Time to next payout
          </p>

          <div className="flex items-start  gap-[1rem]  sm:gap-[1.5rem]  ">
            <div className="flex flex-col item-center gap-[0.5rem] ">
              <div className="flex p-[0.875rem] items-center gap-[0.625rem] rounded-[2.5rem] bg-[#FBB03B]">
                <div className="flex justify-center item-center p-[0.25rem] ">
                  <h1 className="text-[#1A1A1A] item-center text-[1.5rem] font-medium leading-6 ">
                    02
                  </h1>
                </div>
              </div>

              <h1 className="font-[0.875rem] font-sans leading-5 text-[#D1D5DD]  text-center ">
                Days
              </h1>
            </div>
            <div className="flex flex-col item-center gap-[0.5rem] ">
              <div className="flex p-[0.875rem] items-center gap-[0.625rem] rounded-[2.5rem] bg-[#FBB03B]">
                <div className="flex justify-center item-center p-[0.25rem] ">
                  <h1 className="text-[#1A1A1A] item-center text-[1.5rem] font-medium leading-6 ">
                    02
                  </h1>
                </div>
              </div>

              <h1 className="font-[0.875rem] font-sans leading-5 text-[#D1D5DD] text-center ">
                Days
              </h1>
            </div>
            <div className="flex flex-col item-center gap-[0.5rem] ">
              <div className="flex p-[0.875rem] items-center gap-[0.625rem] rounded-[2.5rem] bg-[#FBB03B]">
                <div className="flex justify-center item-center p-[0.25rem] ">
                  <h1 className="text-[#1A1A1A] item-center text-[1.5rem] font-medium leading-6 ">
                    02
                  </h1>
                </div>
              </div>

              <h1 className="font-[0.875rem] font-sans leading-5 text-[#D1D5DD] text-center ">
                Days
              </h1>
            </div>{" "}
            <div className="flex flex-col item-center gap-[0.5rem] ">
              <div className="flex p-[0.875rem] items-center gap-[0.625rem] rounded-[2.5rem] bg-[#FBB03B]">
                <div className="flex justify-center item-center p-[0.25rem] ">
                  <h1 className="text-[#1A1A1A] item-center text-[1.5rem] font-medium leading-6 ">
                    02
                  </h1>
                </div>
              </div>

              <h1 className="font-[0.875rem] font-sans leading-5 text-[#D1D5DD] text-center ">
                Days
              </h1>
            </div>
          </div>
        </div>

        {/*2 button */}
        <div className="flex flex-col mt-3 sm:flex-row items-center gap-[1rem] mb-4 sm:gap-[1.5rem]">
          <div className="w-[200px] bg-[#ED1E79]  h-[56px] items-center justify-center  gap-2 flex rounded-[64px] 	border-solid border-white border-[1px]	">
            <button onClick={handleOpen} className=" text-[1rem] font-medium leading-6 ">
              STAKE AOVR NOW
            </button>
            <img
              src="/arrow-up.png"
              className=" w-[22px] flex-shrink-0 h-[22px] bg-transparent "
              alt=""
            ></img>
          </div>

          <div className="w-[200px] sm:w-[191px] h-[56px] items-center justify-center p-[16px 24px] gap-2 flex rounded-[64px] 	border-solid border-white border-[1px]	">
            <button onClick={handleOpen} className=" text-[1rem]  cursor-pointer font-medium font-Space Grotesk leading-6 ">
              STAKE AOVR NOW
            </button>
          </div>
        </div>
      </div>

      {/* right div */}
      <div className=" bg-[#101014] w-[100%] p-[0.5rem] md:p-[2rem] flex flex-col gap-[1.25rem] items-start">
        <div className="flex  justify-between items-center self-stretch ">
          <h1 className="font-sans text-[1.5rem] font-normal leading-9 tracking-tighter ">
            Wallet
          </h1>
    <p className="text-[1rem] leading-6 font-normal font-sans text-[#0093FE]">D83rHZTjCPbpQHb</p>
        </div>

        <div className="flex flex-col items-start gap-[1rem] ">
          <h1 className="text-[1rem] sm:text-[1.25rem] text-[#D1D5DD] font-sans leading-7 font-normal ">
            Balance
          </h1>
          <div className="items-center  w-full flex gap-[2.5rem]">
            <div className="flex items-end gap-[0.625rem]">
              <h1 className="text-[1.25rem] md:text-[2rem] leading-8 font-medium text-[#FFF] ">
                350,000
              </h1>
              <p className="text-[0.875rem] sm:text-[1rem] leading-6 font-normal font-sans ">
                AOVR
              </p>
            </div>
            <div className="flex items-end gap-[0.625rem]">
              <h1 className="text-[1.25rem] md:text-[2rem] leading-8 font-medium text-[#FFF] ">
                20,259
              </h1>
              <p className="text-[0.875rem] sm:text-[1rem] leading-6 font-normal font-sans ">
                SOL
              </p>
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-[1rem]  bg-[#ED1E79] p-[0.6rem] md:p-[1rem]  items-start self-stretch ">
          <h1 className=" font-normal text-[#FFF] text-[1.25rem] font-sans leading-7 ">
            Staked
          </h1>

          <div className="flex flex-col sm:flex-row  items-start self-stretch justify-between">
            <div className=" flex flex-col justify-center items-start gap-[0.5rem]  sm:gap-[0.875rem]">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="22"
                viewBox="0 0 24 22"
                fill="none"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M19.6 17.7729V4.32314H4.4V17.7729H19.6ZM2.1 19.9825V20.8952C2.1 21.5054 2.61487 22 3.25 22C3.88513 22 4.4 21.5054 4.4 20.8952V19.9825H19.6H21.9V17.7729V4.32314H22.85C23.4851 4.32314 24 3.82851 24 3.21834C24 2.60817 23.4851 2.11354 22.85 2.11354H21.9V1.1048C21.9 0.494637 21.3851 0 20.75 0C20.1149 0 19.6 0.494637 19.6 1.1048V2.11354H4.4H2.1V4.32314V17.7729H1.15C0.514873 17.7729 0 18.2676 0 18.8777C0 19.4879 0.514872 19.9825 1.15 19.9825H2.1ZM5.1 4.99563H13.2V10.6638H5.1V4.99563ZM18.9 11.4323H10.8V17.1004H18.9V11.4323ZM13.9 4.99563H18.9V10.6638H13.9V4.99563ZM10.1 11.4323H5.1V17.1004H10.1V11.4323Z"
                  fill="white"
                />
              </svg>

              <div className=" flex items-end gap-[0.625rem]">
                <h1 className="text-[2rem] leading-8 font-medium text-[#FFF] ">
                  350,000
                </h1>
                <p className="text-[1rem] leading-6 font-normal font-sans ">
                  AOVR
                </p>
              </div>
            </div>
            <div className=" flex items-start gap-[0.6rem] md:gap-[2rem] mt-2  ">
              <div className="flex flex-col items-start gap-[0.25rem] ">
                <p className="font-sans text-[1rem] font-normal leading-6 ">
                  Pool Index
                </p>
                <h1 className="leading-10 font-medium text-[2rem] text-[#FFF]">
                  23
                </h1>
              </div>
              <div className="flex flex-col items-start gap-[0.25rem] ">
                <p className="font-sans text-[1rem] font-normal leading-6">
                  Slot
                </p>
                <h1 className="leading-10 font-medium text-[2rem] text-[#FFF]">
                  12
                </h1>
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col items-start gap-[0.5rem] self-stretch">
          <h1 className="text-[1.5rem] font-sans text-[#FFF] font-semibold leading-9 tracking-wider ">
            Active withdrawal request
          </h1>
          <p className="font-sans text-[1rem] text-[#D1D5DD] font-normal leading-6 ">
            AOVR available for transfer on Thu 10 Oct 2022, 10.00 GMT
          </p>
        </div>

        <div className="p-[0.5rem] rounded-3xl bg-[#ED1E79] flex items-center gap-[0.625rem]">
          <h1 className="text-[1rem] text-[#FFF] font-normal leading-6	">
            COMPLETED
          </h1>
        </div>
      </div>
      {/* </div> */}
    </section>

     {/* .................>>>>>>>>>>>>................model.......... */}
     <Modal
     open={open}
     onClose={handleClose}
     aria-labelledby="modal-modal-title"
     aria-describedby="modal-modal-description"
   >
     <section className="flex   items-center justify-center text-white">
       <div className="flex  w-[36.875rem] py-[2rem] px-[1.5rem]   gap-[1.25rem] bg-slate-950 flex-col items-start stake-avor">
         {/* 1 div for icon */}
         <div className="flex justify-end items-center gap-[0.625rem] bg-slate-950 icon-pink text-pink-800 self-stretch">
         <img
             src="close.png"
             className=" w-[1,5rem] h-[1.5rem]"
             alt=""
             onClick={handleClose}
           ></img>
         </div>

         <h1 className="text-[2.5rem] font-sans font-medium leading-[120%] tracking-[-0.1] ">
           Request AOVR Withdrawal
         </h1>
         <div className="flex flex-col items-start gap-[1rem] self-stretch	">
           <p className="text-[1rem] font-sans font-normal leading-6 tracking-tighter ">
             After requesting the withdrawal of some or all of your 5000 AOVR
             it will take 1 week until you are able to claim your withdrawal.
             This measure is in place to prevent system manipulation.
           </p>
         </div>

         {/* div 78 */}
         <div className="flex flex-col items-start gap-[0.5rem] self-stretch ">
           <h1 className="text-[1.25rem] font-sans font-normal leading-[1.87rem]">
             Withdrawal Amount
           </h1>
           <div className="flex items-center gap-[0.625rem] py-[1rem] px-[1.5rem] stakeavor-with w-full">
             <h3 className="text-[1rem] leading-[1.5rem] font-normal ">
               500
             </h3>
           </div>
         </div>

         <div className="px-[1.5rem] py-[1rem]  bg-[#ED1E79]  gap-[0.5rem] items-center justify-center self-stretch flex btn-stakeavot	">
           <button className=" text-[1rem] font-medium leading-6 ">
             STAKE AOVR NOW
           </button>
           <img
             src="/arrow-up.png"
             className=" w-[22px] flex-shrink-0 h-[22px] bg-transparent "
             alt=""
           ></img>
         </div>
        
       </div>
     </section>
   </Modal>
   </>
  );
};

export default Pool;
