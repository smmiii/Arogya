import React from 'react';
import BgPolygon from "../assets/polygon.png";
import Vector from "../assets/vector-wave.png";

const bgStyle = {
  backgroundImage: `url(${BgPolygon})`,
  backgroundRepeat: "no-repeat",
  backgroundPosition: "center",
  backgroundSize: "cover",
  width: "100%",
  height: "100%",
  backgroundColor: "white", // Ensure the main background is white
  position: "relative",
};

const Question = () => {
  return (
    <div style={bgStyle} className="relative py-14">
      {/* Wave vector overlay */}
      <div className="absolute top-0 w-full h-full">
        <img src={Vector} alt="wave overlay" className="w-full h-auto" />
      </div>

      <div className="container min-h-[500px] relative z-10 flex flex-col items-center">
        <h1 className="pt-20 text-4xl font-semibold text-white tracking-wider text-center">
          Do you have PCOS?
        </h1>

        {/* Card Section */}
        <div className="bg-white bg-opacity-80 p-10 my-10 max-w-lg rounded-lg shadow-lg text-center">
          <p className="text-gray-700 mb-6">
            Public awareness of PCOS is necessary because over half of the 6,000,000 people
            that have PCOS are unaware of it. Awareness helps the public understand that symptoms
            like irregular periods and excessive hair growth are often signs of a larger health
            concern and can be managed with proper treatment and lifestyle changes.
          </p>

          <div className="flex justify-center">
            <button className="bg-pink-500 text-white px-6 py-2 rounded-full shadow-md hover:bg-pink-600 transition">
              Want to check symptoms?
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Question;
