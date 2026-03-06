import React from "react";
import { motion } from "framer-motion";

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="py-20 px-6 scroll-mt-20 bg-muted/50">
      <div className="mx-auto max-w-7xl">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold sm:text-4xl text-white">
            How MentorHub Works
          </h2>

          <p className="mt-4 text-lg text-[#87b1d3]">
            Get started in three simple steps.
          </p>
        </motion.div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

          {/* Step 1 */}
          <motion.div
            initial={{ opacity: 0, y: 80 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-teal-500 text-white text-lg font-bold">
              1
            </div>

            <h3 className="text-lg font-semibold text-white">
              Create Your Profile
            </h3>

            <p className="mt-2 text-sm text-[#87b1d3]">
              Sign up and tell us about your interests, goals, and what kind of mentor you're looking for.
            </p>
          </motion.div>

          {/* Step 2 */}
          <motion.div
            initial={{ opacity: 0, y: 80 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-teal-500 text-white text-lg font-bold">
              2
            </div>

            <h3 className="text-lg font-semibold text-white">
              Get Matched
            </h3>

            <p className="mt-2 text-sm text-[#87b1d3]">
              Our matching algorithm connects you with mentors who align with your goals.
            </p>
          </motion.div>

          {/* Step 3 */}
          <motion.div
            initial={{ opacity: 0, y: 80 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-teal-500 text-white text-lg font-bold">
              3
            </div>

            <h3 className="text-lg font-semibold text-white">
              Start Growing
            </h3>

            <p className="mt-2 text-sm text-[#87b1d3]">
              Book mentorship sessions, receive guidance, and track your learning progress.
            </p>
          </motion.div>

        </div>
      </div>
    </section>
  );
}