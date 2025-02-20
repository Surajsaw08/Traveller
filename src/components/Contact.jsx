import React, { useState } from "react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission, e.g., send an email or save to a database
    console.log(formData);
    alert("Message sent successfully!");
    setFormData({ name: "", email: "", message: "" }); // Reset form fields after submission
  };

  return (
    <section className="container mx-auto px-4 py-16">
      <h2 className="text-4xl font-bold text-center text-gray-900 mb-12">
        Contact Us
      </h2>
      <div className="grid md:grid-cols-2 gap-8">
        {/* Contact Form */}
        <div className="bg-white p-6 border rounded-xl shadow-lg">
          <h3 className="text-2xl font-semibold text-gray-900 mb-4">
            Send Us a Message
          </h3>
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label htmlFor="name" className="block text-gray-700">
                Full Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-[#4A4238] focus:border-[#4A4238]"
              />
            </div>

            <div className="mb-4">
              <label htmlFor="email" className="block text-gray-700">
                Email Address
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-[#4A4238] focus:border-[#4A4238]"
              />
            </div>

            <div className="mb-4">
              <label htmlFor="message" className="block text-gray-700">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows="5"
                className="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-[#4A4238] focus:border-[#4A4238]"
              />
            </div>

            <button
              type="submit"
              className="w-full py-3 bg-[#4A4238] text-white rounded-lg hover:bg-[#5A5248] transition duration-200"
            >
              Send Message
            </button>
          </form>
        </div>

        <section className="bg-[#E2E5C8] py-16 px-4 rounded-lg">
          <div className="container mx-auto text-center">
            <h2 className="text-4xl font-bold text-gray-900 mb-8">
              Our Contact Information
            </h2>

            <div className="grid sm:grid-rows-3 gap-8">
              <div className="bg-transparent p-2 rounded-lg shadow-lg">
                <div className="flex items-center gap-4">
                  <h3 className="text-xl font-semibold text-gray-700">
                    Address:
                  </h3>
                  <p className="text-gray-600">
                    123, Main Street, Bhopal, Madhya Pradesh, 462001
                  </p>
                </div>
              </div>

              <div className="bg-transparent p-2 rounded-lg shadow-lg">
                <div className="flex items-center gap-4">
                  <h3 className="text-xl font-semibold text-gray-700">
                    Phone:
                  </h3>
                  <p className="text-gray-600">
                    <a
                      href="tel:+917878654321"
                      className="text-[#4A4238] hover:text-[#5A5248]"
                    >
                      +91 787 865 4321
                    </a>
                  </p>
                </div>
              </div>

              <div className="bg-transparent   p-2 rounded-lg shadow-lg">
                <div className="flex items-center gap-4">
                  <h3 className="text-xl font-semibold text-gray-700">
                    Email:
                  </h3>
                  <p className="text-gray-600">
                    <a
                      href="mailto:contact@travelguide.com"
                      className="text-[#4A4238] hover:text-[#5A5248]"
                    >
                      contact@travelguide.com
                    </a>
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-12">
              <h3 className="text-2xl font-semibold text-gray-700 mb-4">
                Stay Connected
              </h3>
              <div className="flex justify-center gap-6">
                <a href="#" className="text-gray-600 hover:text-[#4A4238]">
                  <i className="fab fa-facebook-f text-xl"></i>
                </a>
                <a href="#" className="text-gray-600 hover:text-[#4A4238]">
                  <i className="fab fa-twitter text-xl"></i>
                </a>
                <a href="#" className="text-gray-600 hover:text-[#4A4238]">
                  <i className="fab fa-instagram text-xl"></i>
                </a>
                <a href="#" className="text-gray-600 hover:text-[#4A4238]">
                  <i className="fab fa-linkedin-in text-xl"></i>
                </a>
              </div>
            </div>
          </div>
        </section>
      </div>

      {/* Map Section */}
      <div className="mt-16">
        <h3 className="text-2xl font-semibold text-center text-gray-900 mb-8">
          Find Us on the Map
        </h3>
        <div className="relative aspect-w-16 aspect-h-9">
          <iframe
            title="HotelJet Location"
            src="https://www.google.com/maps/embed?pb=...your-location-embed-url..."
            className="w-full h-full rounded-xl shadow-lg"
            allowFullScreen
            loading="lazy"
          ></iframe>
        </div>
      </div>
    </section>
  );
};

export default Contact;
