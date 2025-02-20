import React from "react";
import { Users } from "react-feather";
import hotel from "../assets/hotel2.jpg";
import food from "../assets/food2.jpg";
import activity from "../assets/activity2.jpg";
import Button from "./ui/Button";
const Features = () => {
  return (
    <section className="container mx-2 px-10 py-16">
      <div className="my-20 flex flex-col items-center">
        <p className="text-black-500 font-semibold text-xl mb-5">
          Tailored Experiences
        </p>
        <h1 className="text-black-500 font-bold text-4xl mb-1">
          Comprehensive Booking
        </h1>
        <h1 className="text-black-500 font-bold text-4xl mb-1">
          Solutions for Your Travel
        </h1>
        <h1 className="text-black-500 font-bold text-4xl mb-1">Experience </h1>
        <p className="text-gray-500 font-semibold text-lg mb-1">
          Explore our versatile travel packages for booking hotels and
          activities that suit your needs.
        </p>
      </div>
      <div className="grid md:grid-cols-3 gap-8">
        {/* Card 1 */}
        <div className="p-6 space-y-4 border rounded-lg shadow-lg">
          <div className="aspect-video relative rounded-lg overflow-hidden">
            <img
              src={hotel}
              alt="Luxury hotel room"
              className="object-cover w-full h-full"
            />
          </div>
          <div>
            <p className="text-gray-600">Luxury and Budget Packages</p>
            <h3 className="text-2xl font-bold">Hotel Preferences</h3>
            <p className="text-gray-600 mt-2">
              Choose your preferred hotel class: Budget, Standard, or Luxury to
              match your travel style.
            </p>
          </div>
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Users className="h-5 w-5" />
              <p className="text-sm">95% satisfied</p>
            </div>
            <p className="text-pink-500 font-bold">$499</p>
          </div>
        </div>

        {/* Card 2 */}
        <div className="p-6 space-y-4 border rounded-lg shadow-lg">
          <div className="aspect-video relative rounded-lg overflow-hidden">
            <img
              src={food}
              alt="Delicious meal"
              className="object-cover w-full h-full"
            />
          </div>
          <div>
            <p className="text-gray-600">
              Delicious meal options provided at your choice of hotel.
            </p>
            <h3 className="text-2xl font-bold">Meal Options</h3>
            <p className="text-gray-600 mt-2">
              Enjoy a wide range of meal plans tailored to your travel
              preferences and dietary needs.
            </p>
          </div>
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Users className="h-5 w-5" />
              <p className="text-sm">600+ meal plans</p>
            </div>
            <p className="text-pink-500 font-bold">$50</p>
          </div>
        </div>

        {/* Card 3 */}
        <div className="p-6 space-y-4 border rounded-lg shadow-lg">
          <div className="aspect-video relative rounded-lg overflow-hidden">
            <img
              src={activity}
              alt="Adventure activities"
              className="object-cover w-full h-full"
            />
          </div>
          <div>
            <p className="text-gray-600">
              Exciting adventure activities to enrich your travel experience
              await!
            </p>
            <h3 className="text-2xl font-bold">Activity Selection</h3>
            <p className="text-gray-600 mt-2">
              Select activities as part of your travel to enhance your vacation
              experience.
            </p>
          </div>
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Users className="h-5 w-5" />
              <p className="text-sm">300+ selections</p>
            </div>
            <p className="text-pink-500 font-bold">$79</p>
          </div>
        </div>
      </div>
      <div className="flex items-center justify-center mt-10">
        <button className="bg-transparent text-green-800 border px-8 py-5 rounded-xl hover:bg-green-400 hover:text-white">
          Start Your journey Now
        </button>
      </div>
    </section>
  );
};

export default Features;
