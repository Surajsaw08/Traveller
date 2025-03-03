"use client";

import { useState } from "react";
import PropTypes from "prop-types";
import { motion } from "framer-motion";
import { Button } from "../../components/ui/button";
import { Checkbox } from "../../components/ui/checkbox";
import { Input } from "../../components/ui/input";
import { Label } from "../../components/ui/label";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../../components/ui/select";

export default function Preferences({
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

  const handleCheckboxChange = (activity) => {
    const updatedActivities = bookingData.activities.includes(activity)
      ? bookingData.activities.filter((a) => a !== activity)
      : [...bookingData.activities, activity];
    updateBookingData({ activities: updatedActivities });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    nextStep();
  };

  return (
    <motion.form
      onSubmit={handleSubmit}
      className="space-y-6"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <div>
        <label
          htmlFor="tripType"
          className="block text-md font-semibold text-gray-700 mb-1"
        >
          Type of Trip
        </label>
        <Select
          onValueChange={(value) => handleSelectChange("tripType", value)}
          value={bookingData.tripType}
        >
          <SelectTrigger className="w-full px-5 py-4 font-semibold">
            <SelectValue placeholder="Select trip type" />
          </SelectTrigger>
          <SelectContent className="gap-2 p-4 h-56 w-[54vw] mt-1 bg-white overflow-y-scroll">
            <SelectItem
              value="solo"
              className="border p-2 rounded-md font-medium mt-2"
            >
              Solo
            </SelectItem>
            <SelectItem
              value="family"
              className="border p-2 rounded-md font-medium mt-2"
            >
              Family
            </SelectItem>
            <SelectItem
              value="honeymoon"
              className="border p-2 rounded-md font-medium mt-2"
            >
              Honeymoon
            </SelectItem>
            <SelectItem
              value="adventure"
              className="border p-2 rounded-md font-medium mt-2"
            >
              Adventure
            </SelectItem>
          </SelectContent>
        </Select>
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Activities
        </label>
        <div className="space-y-2">
          {["Sightseeing", "Adventure", "Trekking"].map((activity) => (
            <div key={activity} className="flex items-center">
              <Checkbox
                id={activity}
                checked={bookingData.activities.includes(activity)}
                onCheckedChange={() => handleCheckboxChange(activity)}
              />
              <Label htmlFor={activity} className="ml-2 border px-4 py-2 w-40">
                {activity}
              </Label>
            </div>
          ))}
        </div>
      </div>

      <div>
        <label
          htmlFor="specialRequests"
          className="block text-md font-semibold text-gray-700 mb-1"
        >
          Special Requests
        </label>
        <Input
          type="text"
          id="specialRequests"
          name="specialRequests"
          value={bookingData.specialRequests}
          onChange={handleInputChange}
          className="px-5 py-2"
        />
      </div>
      <div>
        <label
          htmlFor="email_id"
          className="block text-md font-semibold text-gray-700 mb-1"
        >
          Email id
        </label>
        <Input
          type="email"
          id="email_id"
          name="email_id"
          value={bookingData.email_id}
          onChange={handleInputChange}
          className="px-5 py-2"
        />
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

Preferences.propTypes = {
  bookingData: PropTypes.object.isRequired,
  updateBookingData: PropTypes.func.isRequired,
  nextStep: PropTypes.func.isRequired,
  prevStep: PropTypes.func.isRequired,
};
