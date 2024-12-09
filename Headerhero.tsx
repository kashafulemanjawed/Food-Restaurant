import Image from "next/image";

const Hero = () => {
  return (
    <section className="bg-black text-white py-20">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 items-center gap-10 px-5">
        {/* Left Section: Text */}
        <div>
          <h3 className="text-lg text-brandprimary font-semibold font-serif mb-2">It's Quick & Amusing!</h3>
          <h1 className="text-4xl lg:text-5xl font-bold leading-snug text-bold">
            <span className=" text-brandprimary">Th</span>
            <span className=" text-white">e Art of Speed</span>
            <br />
            <span className="text-white">Food Quality</span>
          </h1>
          <p className="text-gray-400 mt-4">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.<br /> Varius sed pharetra dictum neque massa congue.
          </p>
          <button className="mt-6 px-8 py-3 bg-brandprimary text-white font-semibold rounded-full hover:bg-brandprimary">
            See Menu
          </button>
        </div>

        {/* Right Section: Image */}
        <div className="relative flex">
          <div className="w-[624.15px] h-[633.51px] top-[234.49px] left-[939.86px]">
        <img src="Rectangle 8926.png"></img>
        </div>
        <div className="absolute rounded-full p-3 angle: -95.37">
            <img src="image 68.png"></img>
          </div>
         
          <div className="absolute -bottom-10 -right-10 bg-white rounded-full p-3">
            <img className=""></img>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;




      