import React from "react";
import { useState } from "react";

const Form = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevFormData) => ({ ...prevFormData, [name]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    alert(
      `Name: ${formData.name}, Email: ${formData.email}, Message: ${formData.message}`
    );
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className=" border-2 border-black p-8">
        <div className="flex flex-col  ">
          <span className="pb-1 ">Your Name</span>
          <input
            className="selection:border-black "
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            
            style={{
              border: "2px solid ",
              fontSize: "12px",
              padding: "5px",
              backgroundColor:"#E6F3F1"
            }}
          />
        </div>
        <div className="flex flex-col ">
          <span className="pb-1 pt-4">Your Email</span>
          <input
            className="selection:border-black "
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            style={{
              border: "2px solid ",
              fontSize: "12px",
              padding: "5px",
              backgroundColor:"#E6F3F1"
            }}
          />
        </div>
        <div className="flex flex-col ">
          <span className="pb-1 pt-4">Your Message</span>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            //   className="selection:border-black "
            style={{
              border: "2px solid ",
              fontSize: "12px",
              padding: "5px",
              height: "130px",
              backgroundColor:"#E6F3F1"
            }}
          />
        </div>
        <div className="pt-8">
          <a href="#" className="">
            <button type="submit" className="transition ease-in-out delay-0    hover:bg-[#338c8c] duration-150 hover:text-white bg-[#1AABAC] px-5 py-3  w-full">
              Check out my LinkedIn
            </button>
          </a>
        </div>
      </div>
    </form>
  );
};

export default Form;
