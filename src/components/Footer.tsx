import React from "react";

const Footer = () => {
  return (
    <div className="bg-primary py-6 border items-center">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="text-black">
            <h1 className="text-2xl font-bold">About Us</h1>
            <p className="mt-4 text-black font-semibold">
              We are a team of talented developers making Blog websites.
            </p>
          </div>
          <div className="text-black">
            <h1 className="text-2xl font-bold">Contact Us</h1>
            <p className="mt-4 font-semibold">Email: sarwatj2022@gmail.com </p>
            <p className="text-black font-semibold">Phone Number : 0344-1234567</p>
          </div>
          </div>
        </div>
      </div>
  
  );
};

export default Footer;
