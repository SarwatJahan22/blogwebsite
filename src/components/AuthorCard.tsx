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
            Sarwat Jahan is an experienced Microbiologist with a passion for web
            development and sharing knowledge{" "}
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
