import React from "react";

import { FaCheck } from "react-icons/fa";
import hotel from "../assets/hotel2.jpg";
import food from "../assets/food2.jpg";
import activity from "../assets/activity2.jpg";

const Midportion = () => {
  return (
    <section className="container mx-auto px-20 py-16 mt-10 mb-20">
      <div className="grid lg:grid-cols-2 gap-18 items-center">
        <div className="space-y-6 px-10">
          <h2 className="text-5xl font-bold text-gray-900">
            Seamless Booking for Exceptional Travel Experiences
          </h2>
          <p className="text-gray-700">
            Dynamic pricing and real-time updates ensure tailored travel
            packages suit every budget.
          </p>
          <ul className="space-y-4">
            <li className="flex items-center gap-2">
              <FaCheck className="h-5 w-5 text-green-600" />
              <span>Dynamic Pricing</span>
            </li>
            <li className="flex items-center gap-2">
              <FaCheck className="h-5 w-5 text-green-600" />
              <span>Real-Time Updates</span>
            </li>
            <li className="flex items-center gap-2">
              <FaCheck className="h-5 w-5 text-green-600" />
              <span>Flexible Options</span>
            </li>
          </ul>
        </div>

        <div className="relative grid grid-cols-3 gap-[-2] h-full">
          <div className="relative w-[70%] h-full">
            <img
              src={hotel}
              alt="Hotel booking interface"
              className="object-cover w-full h-full rounded-xl"
            />
          </div>

          <div className="relative w-[70%] h-full ">
            <img
              src={food}
              alt="Meal options"
              className="object-cover w-full h-full absolute top-10 left-0 rounded-xl"
            />
          </div>
          <div className="relative w-[70%] h-full ">
            <img
              src={activity}
              alt="Meal options"
              className="object-cover w-full h-full absolute top-0 left-0 rounded-xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Midportion;
