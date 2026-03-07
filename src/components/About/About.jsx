import React from "react";
import about from '../../assets/about.png'

function About() {
  return (
    <section
      id="about"
      className="py-20 px-6 scroll-mt-20 bg-muted/50"
    >
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">

        {/* Left Side - Image */}
        <div>
          <img
            src={about}
            alt="team working"
            className="rounded-2xl shadow-lg w-full object-cover"
          />
        </div>

        {/* Right Side - Content */}
        <div>
          <h2 className="text-4xl font-bold text-[#87b1d3] mb-6">
            About Us
          </h2>

          <p className="text-gray-600 leading-relaxed mb-4">
            We are a passionate team of developers and designers focused on
            building modern digital solutions. Our mission is to create
            high-quality products that help businesses grow and deliver
            exceptional user experiences.
          </p>

          <p className="text-gray-600 leading-relaxed mb-6">
            With expertise in modern technologies, we develop scalable
            applications, intuitive interfaces, and powerful platforms
            designed to solve real-world problems.
          </p>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-6 text-center">
            <div>
              <h3 className="text-3xl font-bold text-blue-600">100+</h3>
              <p className="text-gray-500 text-sm">Mentees</p>
            </div>

            <div>
              <h3 className="text-3xl font-bold text-blue-600">10+</h3>
              <p className="text-gray-500 text-sm">Mentors</p>
            </div>

            <div>
              <h3 className="text-3xl font-bold text-blue-600">2+</h3>
              <p className="text-gray-500 text-sm">Years Experience</p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}

export default About;