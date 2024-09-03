import React, { useState, useContext } from "react";
import MyContext from "../context/myContext";
import { showTranslated } from "../utils/showTranslated";
const ContactPage = () => {
  // State to track input values
  const [form, setForm] = useState({
    name: "",
    phone: "",
    email: "",
    subject: "",
    message: "",
  });

  // State to track input focus
  const [focused, setFocused] = useState({
    name: false,
    phone: false,
    email: false,
    subject: false,
    message: false,
  });

  // Function to handle input change
  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  // Function to handle input focus and blur
  const handleFocus = (field, isFocused) => {
    setFocused((prev) => ({ ...prev, [field]: isFocused }));
  };

  // Function to check if input has content or is focused
  const isLabelActive = (field) => form[field] || focused[field];

  return (
    <div className="lg:w-[1200px] mx-auto text-[#CAD1E9] mt-20">
      <h1 className="text-4xl text-white">
        {showTranslated("Imate pitanje?", "Have a question?")}
        <br /> {showTranslated("Kontaktirajte nas!", "Contact us!")}
      </h1>
      <div className="w-full h-auto bg-[#1e1d21] mt-10 rounded-2xl p-8 ">
        <h1 className="text-5xl uppercase mb-8">
          {" "}
          {showTranslated("Kontakt", "Contact")}
        </h1>

        <form className="space-y-6">
          {/* Name and Phone Number */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
            {/* Name Input */}
            <div className="relative">
              <input
                type="text"
                name="name"
                value={form.name}
                onChange={handleChange}
                onFocus={() => handleFocus("name", true)}
                onBlur={() => handleFocus("name", false)}
                className="w-full p-3 border-b-2 border-gray bg-transparent text-white rounded-md focus:outline-none peer"
                required
              />
              <label
                className={`absolute left-3 transition-all duration-300 ${
                  isLabelActive("name")
                    ? "text-xs -top-2 text-[#888]"
                    : "text-base top-3"
                }`}
              >
                {showTranslated("Ime", "Name")}
              </label>
            </div>

            {/* Phone Input */}
            <div className="relative">
              <input
                type="text"
                name="phone"
                value={form.phone}
                onChange={handleChange}
                onFocus={() => handleFocus("phone", true)}
                onBlur={() => handleFocus("phone", false)}
                className="w-full p-3 border-b-2 border-gray bg-transparent text-white rounded-md focus:outline-none peer"
                required
              />
              <label
                className={`absolute left-3 transition-all duration-300 ${
                  isLabelActive("phone")
                    ? "text-xs -top-2 text-[#888]"
                    : "text-base top-3"
                }`}
              >
                {showTranslated("Broj telefona", "Phone")}
              </label>
            </div>
          </div>

          {/* Email Input */}
          <div className="relative">
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              onFocus={() => handleFocus("email", true)}
              onBlur={() => handleFocus("email", false)}
              className="w-full p-3 border-b-2 border-gray bg-transparent text-white rounded-md focus:outline-none peer"
              required
            />
            <label
              className={`absolute left-3 transition-all duration-300 ${
                isLabelActive("email")
                  ? "text-xs -top-2 text-[#888]"
                  : "text-base top-3"
              }`}
            >
              {showTranslated("Mejl", "Email")}
            </label>
          </div>

          {/* Subject Input */}
          <div className="relative">
            <input
              type="text"
              name="subject"
              value={form.subject}
              onChange={handleChange}
              onFocus={() => handleFocus("subject", true)}
              onBlur={() => handleFocus("subject", false)}
              className="w-full p-3 border-b-2 border-gray bg-transparent text-white rounded-md focus:outline-none peer"
              required
            />
            <label
              className={`absolute left-3 transition-all duration-300 ${
                isLabelActive("subject")
                  ? "text-xs -top-2 text-[#888]"
                  : "text-base top-3"
              }`}
            >
              {showTranslated("Naslov", "Subject")}
            </label>
          </div>

          {/* Message Textarea */}
          <div className="relative">
            <textarea
              name="message"
              value={form.message}
              onChange={handleChange}
              onFocus={() => handleFocus("message", true)}
              onBlur={() => handleFocus("message", false)}
              className="w-full p-3 border-b-2 border-gray bg-transparent text-white rounded-md focus:outline-none peer h-22"
              required
            />
            <label
              className={`absolute left-3 transition-all duration-300 ${
                isLabelActive("message")
                  ? "text-xs -top-2 text-[#888]"
                  : "text-base top-3"
              }`}
            >
              {showTranslated("Vaša poruka", "Your message")}
            </label>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full p-3 mt-6 border-2 hover:bg-red-500 border-red-500 text-white rounded-md text-xl hover:from-yellow-500 hover:to-red-500"
          >
            {showTranslated("Pošalji poruku", "Send message")}
          </button>
        </form>
      </div>
    </div>
  );
};

export default ContactPage;
