"use client";

import PropTypes from "prop-types";
import { motion } from "framer-motion";
import { Button } from "../../components/ui/button";
import { Card } from "../../components/ui/card";
import { useState } from "react";

export default function PricingSummary({ bookingData, prevStep }) {
  const [isLoading, setIsLoading] = useState(false);
  const [message, setMessage] = useState("");

  const handleGetCotation = async () => {
    setIsLoading(true);
    setMessage("");

    try {
      // Make sure the URL points to the correct backend API endpoint
      const response = await fetch("http://localhost:4000/api/send-quotation", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: bookingData.email_id,
          quotationDetails: `
            Destination: ${bookingData.destination}
            Travel Dates: ${bookingData.dates.startDate?.toDateString()} - ${bookingData.dates.endDate?.toDateString()}
            Travelers: ${bookingData.travelers.adults} Adults, ${
            bookingData.travelers.children
          } Children
            Hotel Preference: ${bookingData.hotelPreference}
            Meal Plan: ${bookingData.mealPlan}
            Trip Type: ${bookingData.tripType}
            Activities: ${bookingData.activities.join(", ")}
            Special Requests: ${bookingData.specialRequests}
          `,
        }),
      });

      const data = await response.json();
      if (data.success) {
        setMessage("Quotation sent successfully. Please check your email!");
      } else {
        setMessage("Error sending email. Please try again. dd");
      }
    } catch (error) {
      setMessage("Error sending email. Please try again. ww");
    }

    setIsLoading(false);
  };

  return (
    <motion.div
      className="space-y-6"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <h2 className="text-2xl font-bold text-gray-800">Booking Summary</h2>
      <Card className="p-6 space-y-4 bg-gray-50">
        <div className="grid grid-cols-2 gap-4">
          <div>
            <p className="font-semibold">Destination:</p>
            <p>{bookingData.destination}</p>
          </div>
          <div>
            <p className="font-semibold">Travel Dates:</p>
            <p>
              {bookingData.dates.startDate?.toDateString()} -{" "}
              {bookingData.dates.endDate?.toDateString()}
            </p>
          </div>
          <div>
            <p className="font-semibold">Travelers:</p>
            <p>
              {bookingData.travelers.adults} Adults,{" "}
              {bookingData.travelers.children} Children
            </p>
          </div>
          <div>
            <p className="font-semibold">Hotel Preference:</p>
            <p>{bookingData.hotelPreference}</p>
          </div>
          <div>
            <p className="font-semibold">Meal Plan:</p>
            <p>{bookingData.mealPlan}</p>
          </div>
          <div>
            <p className="font-semibold">Trip Type:</p>
            <p>{bookingData.tripType}</p>
          </div>
          <div>
            <p className="font-semibold">Activities:</p>
            <p>{bookingData.activities.join(", ")}</p>
          </div>
          <div>
            <p className="font-semibold">Special Requests:</p>
            <p>{bookingData.specialRequests}</p>
          </div>
          <div>
            <p className="font-semibold">Email Id:</p>
            <p>{bookingData.email_id}</p>
          </div>
        </div>
      </Card>
      <motion.div
        className="flex justify-between"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
      >
        <Button onClick={prevStep} variant="outline">
          Previous
        </Button>
        <Button
          variant="outline"
          onClick={handleGetCotation}
          disabled={isLoading}
        >
          {isLoading ? "Sending..." : "Get a Cotation"}
        </Button>
      </motion.div>
      {message && (
        <div className="mt-4 text-center text-red-500">{message}</div>
      )}
    </motion.div>
  );
}

PricingSummary.propTypes = {
  bookingData: PropTypes.object.isRequired,
  prevStep: PropTypes.func.isRequired,
};
