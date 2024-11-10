


import Image from 'next/image';

import Button from './Button';

const AboutMe = () => {
  return (
    <>
    <div className="flex flex-col lg:flex-row items-center justify-center lg:justify-between p-8 lg:p-16 space-y-8 lg:space-y-0 lg:space-x-12 md:max-h-screen">
       
      <div className="text-left w-auto h-md p-6 text-black space-y-2 lg:w-1/2  rounded-lg transition duration-700 ease-in-out transform hover:scale-105">
     <h2 className="lg:text-4xl md:text-4xl text-3xl  font-bold text-center mb-12 text-white">
          {" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-br from-purple-500 via-pink-500 to-blue-400 font-serif lg:text-6xl md:text-5xl text-4xl">
           About Me
          </span>
        </h2>
        <h1 className="text-4xl font-bold">I am a Passionate FrontEnd Developer</h1>
        <p className="text-2xl font-semibold">I am creating responsive modern web applications</p>
        <p className="text-2xl font-semibold">I am Student at GIAIC Governer Initiative for Artificial Intelligence Web 3.0 & Metaverse </p>
        <p className="text-2xl font-semibold">As I have been working On HTML CSS Tailwind-css  Javascript Typescript & Next.js</p>
        <p className="text-2xl font-semibold">Simultaneously I have been learning React js and Basics of FrontEnd Development in Xounity Online FrontEnd Bootcamp</p>
        <p className="text-2xl font-semibold">Driven by innovation I combine design with seamless functionality</p>
        <Button text="Linked in" href="https://www.linkedin.com/in/erum-waris-16008b282/" />
        <Button text="github" href="https://github.com/erum-waris" />
      </div>

      {/* Right Image */}
      <div className="flex justify-center lg:w-1/2 transition duration-700 ease-in-out transform hover:scale-105">
        <Image
          src="/images/AI_img_1.jpeg"
          alt="Developer"
          className="rounded-lg lg:w-full lg:h-full   hover:shadow-xl"
          width={550}
          height={500}
        />
      </div>
    </div>
    </>
  );
};

export default AboutMe;
