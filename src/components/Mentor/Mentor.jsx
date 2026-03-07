import React from "react";
import { motion } from "framer-motion";

import Sadashiv from "../../assets/Sadashiv.jpeg";
import Vedant from "../../assets/Vedant.jpeg";
import Krushna from "../../assets/Krushna.jpeg";

function Mentors() {

  const mentors = [
    {
      name: "Sadashiv Kale",
      role: "MERN Stack Expert",
      experience: "3 Years Experience",
      img: Sadashiv
    },
    {
      name: "Vedant Shinde",
      role: "Cyber Security Expert",
      experience: "1.5 Years Experience",
      img: Vedant
    },
    {
      name: "Krushna Bokhare",
      role: "Data Scientist",
      experience: "2 Years Experience",
      img: Krushna
    },
  ];

  // container animation
  const container = {
    hidden: {},
    show: {
      transition: {
        staggerChildren: 0.25
      }
    }
  };

  // card animation
  const card = {
    hidden: { opacity: 0, y: 60, scale: 0.95 },
    show: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 120,
        damping: 14
      }
    }
  };

  return (
    <section id="mentors" className="py-20 px-6 bg-[#002244] text-[#87b1d3]">
      <div className="max-w-7xl mx-auto">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-white mb-4">
            Meet Our Expert Mentors
          </h2>

          <p className="max-w-2xl mx-auto">
            Learn from experienced professionals who specialize in modern
            technology and help students grow in the IT industry.
          </p>
        </motion.div>

        {/* Mentor Cards */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-10"
        >
          {mentors.map((mentor, index) => (
            <motion.div
              key={index}
              variants={card}
              whileHover={{ y: -10, scale: 1.03 }}
              className="bg-[#001a33] rounded-2xl shadow-lg hover:shadow-2xl transition duration-300 p-8 text-center border border-[#87b1d3]/20"
            >

              {/* Image */}
              <motion.img
                src={mentor.img}
                alt={mentor.name}
                whileHover={{ scale: 1.1 }}
                transition={{ duration: 0.3 }}
                className="w-32 h-32 mx-auto rounded-full object-cover mb-6 border-4 border-[#87b1d3]"
              />

              {/* Name */}
              <h3 className="text-xl font-semibold text-white">
                {mentor.name}
              </h3>

              {/* Role */}
              <p className="mt-2 font-medium">
                {mentor.role}
              </p>

              {/* Experience */}
              <p className="text-sm mt-2 opacity-80">
                {mentor.experience}
              </p>

            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
}

export default Mentors;