import React from "react";

const Testimonial = () => {
  return (
    <section className="container mx-auto px-12 py-16 my-5">
      <h2 className="text-4xl font-bold text-center text-gray-900 mb-12">
        What Our Happy Travelers Say
      </h2>
      <div className="grid md:grid-cols-3 gap-8">
        {/* Testimonial 1 */}
        <div className="p-6 border rounded-xl shadow-lg hover:shadow-2xl transition-all">
          <div className="flex items-center mb-4">
            <img
              src="https://randomuser.me/api/portraits/men/85.jpg" // Replace with actual traveler photo
              alt="Traveler 1"
              className="w-16 h-16 rounded-full mr-4"
            />
            <div>
              <p className="font-semibold text-lg text-gray-900">John Doe</p>
              <p className="text-sm text-gray-600">Traveler</p>
            </div>
          </div>
          <p className="text-gray-700 italic">
            "Traveller made my vacation stress-free. I got the best deals, and
            the experience was seamless from start to finish. Highly recommend!"
          </p>
        </div>

        {/* Testimonial 2 */}
        <div className="p-6 border rounded-xl shadow-lg hover:shadow-2xl transition-all">
          <div className="flex items-center mb-4">
            <img
              src="https://randomuser.me/api/portraits/men/3.jpg" // Replace with actual traveler photo
              alt="Traveler 2"
              className="w-16 h-16 rounded-full mr-4"
            />
            <div>
              <p className="font-semibold text-lg text-gray-900">Jane Smith</p>
              <p className="text-sm text-gray-600">Traveler</p>
            </div>
          </div>
          <p className="text-gray-700 italic">
            "Booking with Traveller was such a smooth experience! The hotel
            options and activities were perfect for my family trip."
          </p>
        </div>

        {/* Testimonial 3 */}
        <div className="p-6 border rounded-xl shadow-lg hover:shadow-2xl transition-all">
          <div className="flex items-center mb-4">
            <img
              src="https://randomuser.me/api/portraits/men/45.jpg" // Replace with actual traveler photo
              alt="Traveler 3"
              className="w-16 h-16 rounded-full mr-4"
            />
            <div>
              <p className="font-semibold text-lg text-gray-900">
                Alex Johnson
              </p>
              <p className="text-sm text-gray-600">Traveler</p>
            </div>
          </div>
          <p className="text-gray-700 italic">
            "I had the best experience with Traveller. From easy booking to
            excellent customer service, they made my trip unforgettable."
          </p>
        </div>
      </div>
    </section>
  );
};

export default Testimonial;
