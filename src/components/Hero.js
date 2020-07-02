import React from "react";

function Hero() {
  function redirect(url) {
    window.location.href = url;
  }

  return (
    <section className="text-gray-500 bg-gray-900 body-font">
      <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
        <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
          <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-white">
            Patrick Brophy - Software Developer
          </h1>
          <p className="mb-8 leading-relaxed">
            I am a 17 year old software developer from Cleveland, Ohio. I love
            to run, hang out with friends, build robots with my highschool
            robotics team. I am passionate to learn about and problem solve with
            code. Checkout my Github for any projects and please email me with
            any inquiries.
          </p>
          <div className="flex justify-center">
            <button className="inline-flex text-white bg-blue-500 border-0 py-2 px-6 focus:outline-none hover:bg-blue-600 rounded text-lg">
              Email me
            </button>
            <button
              className="ml-4 inline-flex text-gray-400 bg-gray-800 border-0 py-2 px-6 focus:outline-none hover:bg-gray-700 hover:text-white rounded text-lg"
              onClick={() => redirect("https://github.com/washedDeveloper")}
            >
              View Github
            </button>
          </div>
        </div>
        <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
          <img
            className="object-cover object-center rounded"
            alt="hero"
            src="https://dummyimage.com/300x200/000/fff"
          />
        </div>
      </div>
    </section>
  );
}

export default Hero;
