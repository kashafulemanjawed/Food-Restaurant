import Image from 'next/image';

const Foodcatagory = () => {
  return (
    <div className='bg-black w-full h-[486px]'>
       <div>
           <h1 className='text-brandprimary items-center justify-around flex text-xl'>Food Catagory</h1>
       <div className='justify-around items-center flex' >
            <h2 className="flex items-center font-bold text-xl">
               <span className='text-brandprimary'>Ch</span>
               <span className='text-white'>oose Food Item</span>
            </h2>
      </div>
     
     </div>
     <div className='flex justify-around items-center gap-4'>
            <div  className="food-grid items-center gap-6 justify-around space-y-8 flex">
              <div className="food-card w-[206px] h-[97px] border-radius-[6px]">
              <img src="unsplash_-lHZUkiWM74.png"></img>
          {/* <p className="badge">Save 30%</p>
          <p>Fast Food Dish</p> */}
          </div> 
          <div className="food-card w-[206px] h-[97px] border-radius-[6px]">
          <img src='unsplash_dphM2U1xq0U.png'></img>
        </div>
        <div className="food-card w-[206px] h-[97px] border-radius-[6px]">
          <img src='unsplash_MRHyv-hHxgk.png'></img>
        </div>
        <div className="food-card w-[206px] h-[97px] border-radius-[6px]">
          <img src='unsplash_q54Oxq44MZs.png'></img>
         </div>
            </div>
            </div>
     </div>
  );
};

export default Foodcatagory;