"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

import DestinationSelection from "../components/DestinationSelection";
import TravelDetails from "../components/TravelDetails";
import Preferences from "../components/Preferences";
import PricingSummary from "../components/PricingSummary";
import Progress from "../../components/ui/progress";

const steps = [
  { title: "Destination", component: DestinationSelection },
  { title: "Travel Details", component: TravelDetails },
  { title: "Preferences", component: Preferences },
  { title: "Summary", component: PricingSummary },
];

export default function BookingPage() {
  const [step, setStep] = useState(1);
  const [bookingData, setBookingData] = useState({
    destination: "",
    dates: { startDate: null, endDate: null },
    travelers: { adults: 1, children: 0 },
    hotelPreference: "",
    mealPlan: "",
    tripType: "",
    activities: [],
    pickupLocation: "",
    dropLocation: "",
    specialRequests: "",
    email_id: "",
  });

  const updateBookingData = (newData) => {
    setBookingData((prevData) => ({ ...prevData, ...newData }));
  };

  const nextStep = () => setStep(step + 1);
  const prevStep = () => setStep(step - 1);

  const CurrentStepComponent = steps[step - 1].component;

  return (
    <div className="">
      <div className="container mx-auto max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="bg-white rounded-xl shadow-lg p-8"
        >
          <h1 className="text-3xl font-bold mb-6 text-center text-gray-800">
            Book Your Perfect Stay
          </h1>
          <div className="mb-8">
            <Progress value={(step / steps.length) * 100} className="w-full" />
            <div className="flex justify-between mt-2">
              {steps.map((s, index) => (
                <motion.div
                  key={s.title}
                  initial={{ opacity: 0.5 }}
                  animate={{ opacity: step >= index + 1 ? 1 : 0.5 }}
                  className={`text-sm ${
                    step >= index + 1
                      ? "text-red-600 font-semibold"
                      : "text-gray-400"
                  }`}
                >
                  {s.title}
                </motion.div>
              ))}
            </div>
          </div>
          <AnimatePresence mode="wait">
            <motion.div
              key={step}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.3 }}
            >
              <CurrentStepComponent
                bookingData={bookingData}
                updateBookingData={updateBookingData}
                nextStep={nextStep}
                prevStep={prevStep}
              />
            </motion.div>
          </AnimatePresence>
        </motion.div>
      </div>
    </div>
  );
}
