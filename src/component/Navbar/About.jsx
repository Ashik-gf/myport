import React from "react";
import photos from '../../../public/photos.png'

const About = () => {
  return (
    <div>
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <img
            src={photos}
            className="max-w-sm rounded-lg "
          />
          <div>
            <h1 className="text-3xl  font-bold">Front-End Developer</h1>
            <div className="py-6">
             <p className=" text-purple-700 font-bold text-xl">Name: <span className="text-xl font-bold text-black">Ashik Hasan</span>
             </p>
             <p className=" text-purple-700 font-bold text-xl"> Profession: <span className="text-xl font-bold text-black">Front-end Developer</span>
             </p>
             <p className=" text-purple-700 font-bold text-xl"> Expart At: <span className="text-xl font-bold text-black">Not-yet! Work with Java Script</span>
             </p>
             <p className=" text-purple-700 font-bold text-xl"> Experience: 
             <span className="text-xl font-bold text-black"> I work last 6 months...</span>
             </p>
             <p className=" text-purple-700 font-bold text-xl"> Resume: 
             <span className="text-xl font-bold text-black"> For get More Information </span>
             </p>
             <button className="btn my-8 bg-black text-white">Get Started</button>
            </div>
            
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
