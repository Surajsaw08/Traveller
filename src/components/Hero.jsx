// import React from "react";
// import { Link } from "react-router-dom";
// import Button from "@/components/ui/Button";
// import Card from "@/components/ui/Card";
// import { Users } from "react-feather";
// import heroimage from "../assets/travelheropage.jpg";
// const Hero = () => {
//   return (
//     <section className="container mx-auto px-4 py-12">
//       <div className="grid lg:grid-cols-2 gap-12 items-center">
//         <div className="space-y-6">
//           <p className="text-gray-700">Your Journey Begins Here!</p>
//           <h1 className="text-5xl font-bold text-gray-900">
//             Book Your Dream Vacation Today
//           </h1>
//           <p className="text-gray-700 text-lg">
//             Experience a hassle-free way to book hotels, activities, and travel
//             essentials with just a few clicks!
//           </p>
//           <Link to="/booking">
//             <Button className="rounded-full px-8 py-4 mt-10 bg-[#4A4238] hover:bg-[#5A5248] text-white">
//               Get Started
//             </Button>
//           </Link>
//         </div>

//         <div className="relative">
//           <div className="relative aspect-square rounded-full overflow-hidden w-[80%] h-auto ">
//             <img
//               src={heroimage}
//               alt="Traveler in airport"
//               className="object-cover w-full h-full"
//             />
//           </div>

//           {/* Card 1 */}
//           <Card className="absolute top-10 left-0">
//             <div className="flex items-center gap-2">
//               <Users className=" w-20 text-green-600" />
//               <div>
//                 <p className="font-bold">50+</p>
//                 <p className="text-sm text-gray-600">hotels</p>
//               </div>
//             </div>
//           </Card>

//           {/* Card 2 */}
//           <Card className="absolute bottom-10 right-0">
//             <div className="flex items-center gap-2">
//               <Users className=" w-20 text-green-600" />
//               <div>
//                 <p className="font-bold">5k+ travelers</p>
//                 <p className="text-sm text-gray-600">Real-Time Updates</p>
//               </div>
//             </div>
//           </Card>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Hero;

import React, { useState } from "react";
import { Link } from "react-router-dom";
import Button from "@/components/ui/Button";
import Card from "@/components/ui/Card";
import { Users } from "react-feather";
import heroimage from "../assets/travelheropage.jpg";
import BookingPage from "../../src/booking/BookingPage";

const Hero = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <section className="container mx-auto px-4 py-12">
      <div className="grid lg:grid-cols-2 gap-12 items-center">
        <div className="space-y-6">
          <p className="text-gray-700">Your Journey Begins Here!</p>
          <h1 className="text-5xl font-bold text-gray-900">
            Book Your Dream Vacation Today
          </h1>
          <p className="text-gray-700 text-lg">
            Experience a hassle-free way to book hotels, activities, and travel
            essentials with just a few clicks!
          </p>
          <Button
            onClick={handleOpenModal}
            className="rounded-full px-8 py-4 mt-10 bg-[#4A4238] hover:bg-[#5A5248] text-white"
          >
            Get Started
          </Button>
        </div>

        <div className="relative">
          <div className="relative aspect-square rounded-full overflow-hidden w-[80%] h-auto">
            <img
              src={heroimage}
              alt="Traveler in airport"
              className="object-cover w-full h-full"
            />
          </div>

          {/* Card 1 */}
          <Card className="absolute top-10 left-0">
            <div className="flex items-center gap-2">
              <Users className="w-20 text-green-600" />
              <div>
                <p className="font-bold">50+</p>
                <p className="text-sm text-gray-600">hotels</p>
              </div>
            </div>
          </Card>

          {/* Card 2 */}
          <Card className="absolute bottom-10 right-0">
            <div className="flex items-center gap-2">
              <Users className="w-20 text-green-600" />
              <div>
                <p className="font-bold">5k+ travelers</p>
                <p className="text-sm text-gray-600">Real-Time Updates</p>
              </div>
            </div>
          </Card>
        </div>
      </div>

      {/* Modal */}
      {isModalOpen && (
        <div
          className="fixed inset-0 bg-white bg-opacity-50 flex items-center justify-center z-50"
          onClick={handleCloseModal}
        >
          <div
            className="bg-grey-400 px-8 rounded-lg mt-5 w-[80%] h-[90%] overflow-y-scroll max-w-4xl relative"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header with Close Button */}
            {/* <div className="flex justify-between items-center">
              <h2 className="text-2xl font-bold mb-4">Get Started</h2>
              <button
                onClick={handleCloseModal}
                className="text-gray-500 hover:text-gray-800 text-xl"
              >
                &times; 
              </button>
            </div>
            
            */}

            <div className="my-5 flex justify-end absolute right-12 top-[-5px]">
              <Button
                onClick={handleCloseModal}
                className="bg-red-600 text-white rounded-full px-3 py-2 text-3xl text-center "
              >
                &times;
              </Button>
            </div>
            <BookingPage />
          </div>
        </div>
      )}
    </section>
  );
};

export default Hero;
