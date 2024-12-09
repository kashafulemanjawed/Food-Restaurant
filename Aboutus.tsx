const AboutUs = () => {
  return (
    <section className="bg-black text-white py-16">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 px-5">
        {/* Left Column: Text */}
        <div>
          <h3 className="text-sm text-brandprimary font-semibold mb-2">About us</h3>
          <h2 className="text-4xl lg:text-5xl font-bold mb-4">
           <span className="text-brandprimary"> We </span> Create the best <br /> foody product
          </h2>
          <p className="text-white mb-4">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque diam pellentesque bibendum non dui volutpat fringilla bibendum. Urna, elit augue urna, vitae feugiat pretium donec id elementum. Ultrices mattis sed vitae mus risus. Lacus nisi, et ac dapibus sit eu velit in consequat.
          </p>

          {/* Checklist */}
          <ul className="space-y-2 mb-6">
            <li className="flex items-center space-x-3">
              <input type="checkbox" className="text-brandprimary" checked readOnly />
              <span>Lacus nisi, et ac dapibus sit eu velit in consequat.</span>
            </li>
            <li className="flex items-center space-x-3">
              <input type="checkbox" className="text-brandprimary" checked readOnly />
              <span>Quisque diam pellentesque bibendum non dui volutpat fringilla.</span>
            </li>
            <li className="flex items-center space-x-3">
              <input type="checkbox" className="text-brandprimary" checked readOnly />
              <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</span>
            </li>
          </ul>

          <button className="px-6 py-3 bg-brandprimary text-white font-semibold rounded-full hover:bg-brandprimary">
            Read More
          </button>
        </div>

        {/* Right Column: Images */}
        <div className="grid grid-cols-2 gap-4">
          {/* Main Image */}
          <div className="col-span-2">
            <img src="unsplash_fdlZBWIP0aM.png"></img>
          </div>
          {/* Two Smaller Images */}
          <img src="unsplash_jpkfc5_d-DI.png"></img>
          <img src="unsplash_mAQZ3X_8_l0.png"></img>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
