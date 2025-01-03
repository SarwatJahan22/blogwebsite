import React from "react";

const Feature = () => {
  return (
    <div>
      <section className="py-8 bg-neutrral-50 mb-20">
        <h2 className="text-center text-3xl font-bold md:text-5xl lg:text-left animate-fade-in-up transition-all duration-500 ease-in-out transform hover:translate-y-[-5px] hover:text-black text-red-600">
          Sarwat Jahan: Blog on Fitness and Wellbeing!
        </h2>
        <p className="text-center m-4 mt-4 text-sm text-black sm:text-base md:mb-12 lg:mb-16 animate-fade-in-up delay-100">
          As a passionate web developer, I specialize in creating dynamic,
          user-friendly websites and applications that merge functionality with
          aesthetic appeal. With a strong foundation in front-end technologies
          like HTML, CSS, and JavaScript, complemented by expertise in
          frameworks such as React and Next.js, I craft seamless digital
          experiences. My backend proficiency includes working with Node.js,
          databases, and RESTful APIs, ensuring robust and scalable solutions. I
          thrive on solving complex problems, learning new tools, and staying
          updated with the ever-evolving web technologies to deliver innovative
          and impactful projects. My goal is to transform ideas into engaging
          web solutions that resonate with users.
        </p>

<div className="mx-auto max-w-7xl px-5">
    <h1 className="text-3xl font-bold text-center my-8 text-red-600 animate-color-change">Exploring Different Fitness Blogs</h1>

<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 animate-fade-in-up delay-100">
    {[
        "Fitness Challenges",
        "Yoga for Stress Relief",
        "The Science of Rest Days",
        "Stay fit while Traveling",
        "Mental Health in Physical Fitness",
    ].map((category, index) => (
        <div key={index}
            className="relative group p-6 bg-white rounded-lg shadow-lg hover:bg-sky-300 hover:text-black transition duration-300 ease-in-out transform hover:sacel-105 cursor-pointer flex items-center text-neutral-600">
            <p className="text-center text-lg font-semibold"> {category}</p>
<div className="absolute inset-0 border-2 border-transparent group-hover:border-white rounded-lg transition duration-300 ease-in-out"></div>

</div>

        
        ))}
    </div>
</div>
      </section>
    </div>
  );
};

export default Feature;
