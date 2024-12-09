import Head from "next/head";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Food Bean Process</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>

      <section className="relative bg-black text-white">
        <div className="relative flex flex-col md:flex-row items-center max-w-7xl mx-auto p-6">
          {/* Image Section */}
          <div className="w-full md:w-1/2">
            <img
              src="unsplash_E6DsqnZbZ4o.png" 
              alt="Food Process"
              className="rounded-lg object-cover w-full h-full"
            />
          </div>

          {/* Text Section */}
          <div className="w-full md:w-1/2 mt-6 md:mt-0 md:ml-8 text-center md:text-left">
            <h2 className="text-brandprimary font-semibold text-lg">
              Restaurant Active Process
            </h2>
            <h1 className="text-4xl font-bold mt-4">
              <span className="text-brandprimary">We</span> Document Every Food <br />
              Bean Process until it is saved
            </h1>
            <p className="text-gray-300 mt-4">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque diam pellentesque bibendum non dui
              volutpat fringilla bibendum.
            </p>

            <div className="mt-6 flex justify-center md:justify-start space-x-4">
              <button className="bg-black hover-border-brandprimary text-white font-semibold py-2 px-6 rounded-full border-brandprimary">
                Read More
              </button>
              <button className="bg-gray-700 hover:bg-gray-600 text-white font-semibold py-2 px-6 rounded">
                Play Video
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
