import React from "react";
import plans from "./plans.js";
import Button from "../Button/Button.jsx";

export default function Pricing() {
  return (
    <section id="pricing" className="py-20 px-6 bg-[#001a33]">
      <div className="max-w-7xl mx-auto">

        {/* Heading */}
        <div className="text-center mb-14">
          <h2 className="text-4xl font-bold text-white">
            Simple, transparent pricing
          </h2>

          <p className="mt-4 text-[#87b1d3] text-lg">
            Choose the plan that fits your journey. No hidden fees.
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">

          {plans.map((plan, i) => (
            <div
              key={i}
              className={`relative border rounded-2xl p-8 text-white flex flex-col transition transform hover:-translate-y-2
              ${
                plan.popular
                  ? "border-teal-500 shadow-lg shadow-teal-500/20"
                  : "border-gray-500/40"
              }`}
            >

              {/* Popular Badge */}
              {plan.popular && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-teal-500 text-xs px-3 py-1 rounded-full font-semibold">
                  Most Popular
                </div>
              )}

              {/* Title */}
              <h3 className="text-xl font-semibold">{plan.name}</h3>

              <p className="text-sm text-[#87b1d3] mt-1">{plan.tag}</p>

              <p className="text-[#87b1d3] text-sm mt-2">{plan.desc}</p>

              {/* Price */}
              <div className="mt-6 text-4xl font-bold">
                {plan.price}
                <span className="text-sm text-[#87b1d3] ml-1">
                  {plan.duration}
                </span>
              </div>

              {plan.yearly && (
                <p className="text-xs text-[#87b1d3]">{plan.yearly}</p>
              )}

              {/* Features */}
              <ul className="mt-6 space-y-3 text-sm text-[#87b1d3]">
                {plan.features.map((feature, index) => (
                  <li key={index} className="flex gap-2">
                    <span className="text-teal-400">✓</span>
                    {feature}
                  </li>
                ))}
              </ul>

              {/* Button aligned at bottom */}
              <div className="mt-auto pt-8">
                <Button
                  styleType={plan.popular ? "special-btn" : "btn-2"}
                  text={plan.button}
                  className="w-full"
                />
              </div>

            </div>
          ))}

        </div>
      </div>
    </section>
  );
}