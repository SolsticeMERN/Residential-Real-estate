const About = () => {
  return (
    <div className="dark:bg-gray-100 dark:text-gray-800 rounded-2xl pb-5">
      <div data-aos="fade-down" data-aos-duration="1000" className="text-center text-5xl p-10 text-[#0dcdbd] font-bold">About Us</div>
      <div className="flex pt-5 px-6 md:px-20 mb-5 items-center justify-center bg-hero overflow-hidden">
        <div className="flex flex-col  gap-6 md:flex-row items-center max-w-8xl">
          <div className="w-full md:w-1/2 lg:pr-32">
            <h2 className="text-4xl lg:text-5xl text-center md:text-left text-blue-900 leading-tight font-medium">
              Who We Are <br /> Best and Award Winning <br /> Real Estate
              Business in USA 2024
            </h2>
            <h3 className="mt-6 md:mt-10 text-md lg:text-xl text-center md:text-left text-gray-700 font-light tracking-wider leading-relaxed">
              We are the premier, award-winning real estate business in the USA,
              renowned for excellence and innovation in 2024.
            </h3>
            <div className="mt-10 flex flex-col sm:flex-row justify-center md:justify-start">
              <button className="w-full sm:w-40 px-4 py-3 rounded font-semibold text-md bg-blue-500 text-white border-2 border-blue-500">
                Cretified Company
              </button>
              <button className="w-full mt-4 sm:mt-0 sm:ml-4 sm:w-40 px-4 py-3 rounded font-semibold text-md bg-white text-blue-500 border-2 border-gray-500">
                Highly experienced
              </button>
            </div>
          </div>
          <div data-aos="zoom-in" data-aos-duration="1000" data-aos-delay="100" className="w-full md:w-1/2 flex  justify-center md:justify-end">
            <img className="rounded-2xl" src="https://demo.graygrids.com/themes/estatebit/assets/img/about/img-2.jpg" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
