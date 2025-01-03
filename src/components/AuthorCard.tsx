import React from "react";


const AuthorCard = () => {
  return (
    <div className="bg-white shadow-lg rounded-lg p-6 mt-12">
     
          <h3 className="text-xl font-bold">Sarwat Jahan</h3>
          <p className="text-slate-600">
            {" "}
            Web Developer | Microbiologist | Content Writer{" "}
          </p>
          <p className="mt-4 text-black leading-relaxed">
            {" "}
            I am a web developer and a microbiologist. I have a passion for
            writing and sharing my knowledge with others. I am always looking
            for new opportunities to learn and grow. As a web developer, 
            I specialize in creating dynamic, user-friendly websites and applications that
             blend functionality with aesthetics. With a strong foundation in HTML, CSS, JavaScript, 
             and frameworks like Next.js, I aim to deliver responsive designs that perform seamlessly 
             across devices. {" "}
          </p>

          <div className="mt-4 flex space-x-3">
            <a
              href="#"
              className="px-4 py-2 text-white-500 bg-blue-600 rounded-md hover:text-red-600 transition-duration-300"
            >
              Twitter
            </a>

            <a
              href="#"
              className="px-4 py-2 text-white-500 bg-blue-600 rounded-md hover:text-red-600 transition-duration-300"
            >
              LinedIn
            </a>


            <a
              href="#"
              className="px-4 py-2 text-white-500 bg-blue-600 rounded-md hover:text-red-600 transition-duration-300"
            >
              GitHub
            </a>







          </div>
        </div>
   
  );
};

export default AuthorCard;
