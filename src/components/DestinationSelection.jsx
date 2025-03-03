import React, { useState } from "react";
import PropTypes from "prop-types";
import { motion } from "framer-motion";
import { Button } from "../../components/ui/button"; // Adjust import paths
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../../components/ui/select"; // Adjust import paths
import { Calendar } from "../../components/ui/calendar"; // Adjust import paths
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "../../components/ui/popover"; // Adjust import paths
import { format } from "date-fns";
import { CalendarIcon } from "lucide-react";
import { cn } from "../lib/utils"; // Adjust import paths

export default function DestinationSelection({
  bookingData,
  updateBookingData,
  nextStep,
}) {
  const [date, setDate] = useState({
    from: bookingData.dates.startDate,
    to: bookingData.dates.endDate,
  });

  const handleDestinationChange = (value) => {
    updateBookingData({ destination: value });
  };

  const handleDateChange = (newDate) => {
    setDate(newDate);
    updateBookingData({
      dates: { startDate: newDate.from, endDate: newDate.to },
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    nextStep();
  };

  const cities = [
    { value: "shimla", label: "Shimla" },
    { value: "manali", label: "Manali" },
    { value: "dharamshala", label: "Dharamshala" },
    { value: "mcleod-ganj", label: "McLeod Ganj" },
    { value: "dalhousie", label: "Dalhousie" },
    { value: "kullu", label: "Kullu" },
    { value: "spiti-valley", label: "Spiti Valley" },
    { value: "kinnaur", label: "Kinnaur" },
    { value: "chamba", label: "Chamba" },
    { value: "kasol", label: "Kasol" },
    { value: "bir-billing", label: "Bir Billing" },
    { value: "mandi", label: "Mandi" },
    { value: "palampur", label: "Palampur" },
    { value: "solan", label: "Solan" },
    { value: "barot-valley", label: "Barot Valley" },
    { value: "tirthan-valley", label: "Tirthan Valley" },
    { value: "narkanda", label: "Narkanda" },
    { value: "jibhi", label: "Jibhi" },
  ];

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
          htmlFor="destination"
          className="block text-lg font-medium text-gray-700 mb-1"
        >
          Destination
        </label>
        <Select
          onValueChange={handleDestinationChange}
          value={bookingData.destination}
        >
          <SelectTrigger className="w-full px-5 py-4 font-semibold">
            <SelectValue placeholder="Select a destination" />
          </SelectTrigger>
          <SelectContent className="gap-2 p-4 h-56 w-[54vw] mt-1 bg-white overflow-y-scroll">
            {cities.map((city) => (
              <SelectItem
                key={city.value}
                value={city.value}
                className="border p-2 rounded-md font-medium mt-2"
              >
                {city.label}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>
      <div>
        <label className="block text-lg font-medium text-gray-700 mb-4 mt-10">
          Travel Dates
        </label>
        <Popover>
          <PopoverTrigger asChild>
            <Button
              variant="outline"
              className={`w-full justify-center text-left font-medium px-4 py-2 border rounded-lg shadow-sm transition hover:bg-gray-100 ${
                !date ? "text-gray-500" : ""
              }`}
            >
              <CalendarIcon className="mr-2 h-5 w-5 text-gray-600" />
              {date?.from ? (
                date.to ? (
                  <>
                    {format(date.from, "LLL dd, y")} -{" "}
                    {format(date.to, "LLL dd, y")}
                  </>
                ) : (
                  format(date.from, "LLL dd, y")
                )
              ) : (
                <span>Pick a date</span>
              )}
            </Button>
          </PopoverTrigger>
          <PopoverContent
            className="p-6 bg-white rounded-lg shadow-lg border w-full"
            align="start"
          >
            <div className="grid grid-cols-3 gap-1 mb-4">
              <Calendar
                initialFocus
                mode="range"
                defaultMonth={date?.from}
                selected={date}
                onSelect={handleDateChange}
                numberOfMonths={1}
                className="rounded-md border p-4"
                classNames={{
                  head_cell: "rdp-head_cell",
                }}
              />
              <span className="font-bold text-center justify-center">TO</span>
              <Calendar
                initialFocus
                mode="range"
                defaultMonth={date?.from}
                selected={date}
                onSelect={handleDateChange}
                numberOfMonths={1}
                className="p-2 rounded-md border"
                classNames={{
                  head_cell: "rdp-head_cell", // Add gaps between day headers
                }}
              />
            </div>
          </PopoverContent>
        </Popover>
      </div>
      <motion.div
        className="flex justify-end"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
      >
        <Button type="submit">Next</Button>
      </motion.div>
    </motion.form>
  );
}

DestinationSelection.propTypes = {
  bookingData: PropTypes.object.isRequired,
  updateBookingData: PropTypes.func.isRequired,
  nextStep: PropTypes.func.isRequired,
};
