import React from "react";
import PropTypes from "prop-types";
import { motion } from "framer-motion";
import { Button } from "../../components/ui/button"; // Adjust relative path
import { Input } from "../../components/ui/input"; // Adjust relative path
import { Card } from "../../components/ui/card"; // Adjust relative path

export default function TravelDetails({
  bookingData,
  updateBookingData,
  nextStep,
  prevStep,
}) {
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    updateBookingData({ [name]: value });
  };

  const handleSelectChange = (name, value) => {
    updateBookingData({ [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    nextStep();
  };

  const hotelOptions = [
    {
      value: "budget",
      label: "Budget",
      bgcolor: "#cd7f32", // Bronze color for Budget
    },
    {
      value: "standard",
      label: "Standard",
      bgcolor: "#c0c0c0", // Silver color for Standard
    },
    {
      value: "luxury",
      label: "Luxury",
      bgcolor: "#ffd700", // Gold color for Luxury
    },
  ];

  const mealOptions = [
    {
      value: "breakfast",
      label: "Breakfast Only",
      image: "/src/assets/breakfast.webp",
    },
    {
      value: "all-meals",
      label: "All Meals",
      image: "/src/assets/lunch.webp",
    },
    {
      value: "no-meals",
      label: "No Meals",
      image: "/src/assets/whitebg.webp",
    },
  ];

  return (
    <motion.form
      onSubmit={handleSubmit}
      className="space-y-6"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label
            htmlFor="adults"
            className="block text-md font-semibold text-gray-700 mb-1"
          >
            Number of Adults
          </label>
          <Input
            type="number"
            id="adults"
            name="adults"
            value={bookingData.travelers.adults}
            onChange={(e) =>
              updateBookingData({
                travelers: {
                  ...bookingData.travelers,
                  adults: Number.parseInt(e.target.value),
                },
              })
            }
            min="1"
            className="p-2 font-semibold"
          />
        </div>
        <div>
          <label
            htmlFor="children"
            className="block text-md font-semibold text-gray-700 mb-1"
          >
            Number of Children
          </label>
          <Input
            type="number"
            id="children"
            name="children"
            value={bookingData.travelers.children}
            onChange={(e) =>
              updateBookingData({
                travelers: {
                  ...bookingData.travelers,
                  children: Number.parseInt(e.target.value),
                },
              })
            }
            min="0"
            className="p-2 font-semibold"
          />
        </div>
      </div>
      <div>
        <label className="block text-md font-semibold text-gray-700 mb-3">
          Hotel Preference
        </label>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {hotelOptions.map((option) => (
            <Card
              key={option.value}
              className={`cursor-pointer transition-all p-4 ${
                bookingData.hotelPreference === option.value
                  ? "ring-2 ring-primary"
                  : ""
              }`}
              style={{ backgroundColor: option.bgcolor }}
              onClick={() =>
                handleSelectChange("hotelPreference", option.value)
              }
            >
              <h3 className="font-semibold text-center">{option.label}</h3>
            </Card>
          ))}
        </div>
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-3">
          Meal Plan
        </label>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {mealOptions.map((option) => (
            <Card
              key={option.value}
              className={`cursor-pointer transition-all p-4 ${
                bookingData.mealPlan === option.value
                  ? "ring-2 ring-primary"
                  : ""
              }`}
              onClick={() => handleSelectChange("mealPlan", option.value)}
            >
              <img
                src={option.image || "/placeholder.svg"}
                alt={option.label}
                width={300}
                height={200}
                className="rounded-md mb-2 h-40 w-72 object-cover"
              />
              <h3 className="font-semibold text-center">{option.label}</h3>
            </Card>
          ))}
        </div>
      </div>
      <motion.div
        className="flex justify-between"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
      >
        <Button type="button" onClick={prevStep} variant="outline">
          Previous
        </Button>
        <Button type="submit">Next</Button>
      </motion.div>
    </motion.form>
  );
}

TravelDetails.propTypes = {
  bookingData: PropTypes.object.isRequired,
  updateBookingData: PropTypes.func.isRequired,
  nextStep: PropTypes.func.isRequired,
  prevStep: PropTypes.func.isRequired,
};
