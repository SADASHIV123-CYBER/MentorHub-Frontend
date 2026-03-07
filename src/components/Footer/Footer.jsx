import React from "react";

function Footer() {
  return (
    <footer className="bg-[#002244] text-[#87b1d3] py-12 px-6">
      <div className="max-w-7xl mx-auto grid md:grid-cols-4 gap-10">

        <div>
          <h2 className="text-2xl font-bold text-white mb-4">
            MentorHub
          </h2>
          <p className="text-sm leading-relaxed">
            We provide high quality guidance in technology and development.
            Helping students and developers learn modern IT skills and grow
            in their careers.
          </p>
        </div>

        <div>
          <h3 className="text-lg font-semibold text-white mb-4">
            Services
          </h3>
          <ul className="space-y-2 text-sm">
            <li>Web Development Guidance</li>
            <li>MERN Stack Mentorship</li>
            <li>Programming Fundamentals</li>
            <li>Career Guidance</li>
          </ul>
        </div>

        <div>
          <h3 className="text-lg font-semibold text-white mb-4">
            Quick Links
          </h3>
          <ul className="space-y-2 text-sm">
            <li onClick={() => {
              const section = document.getElementById("home");
              section?.scrollIntoView({behavior: "smooth"})
            }} className="hover:text-blue-500 hover:cursor-pointer" >Home</li>
            <li onClick={() => {
              const section = document.getElementById("about");
              section?.scrollIntoView({behavior: "smooth"})
            }} className="hover:text-blue-500 hover:cursor-pointer" >About</li>
            {/* <li>Courses</li> */}
            {/* <li>Contact</li> */}
          </ul>
        </div>

        <div>
          <h3 className="text-lg font-semibold text-white mb-4">
            Contact
          </h3>
          <ul className="space-y-2 text-sm">
            <li>Email: sadashivkale604@gmail.com</li>
            <li>Phone: +91 9322852954</li>
            <li>Expertise: Teaching Tech & IT Topics</li>
          </ul>
        </div>

      </div>

      <div className="border-t border-[#87b1d3]/20 mt-10 pt-6 text-center text-sm">
        © {new Date().getFullYear()} MentorHub. All rights reserved.
      </div>
    </footer>
  );
}

export default Footer;