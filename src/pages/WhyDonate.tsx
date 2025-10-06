import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import {
  FaHeartbeat,
  FaTint,
  FaUsers,
  FaHandsHelping,
  FaShieldAlt,
  FaSmileBeam,
} from "react-icons/fa";
import { Link } from "react-router-dom";

const benefits = [
  {
    icon: <FaHeartbeat className="h-10 w-10 text-red-600" />,
    title: "Improves Heart Health",
    desc: "Regular blood donation helps balance iron levels and reduces the risk of heart disease.",
  },
  {
    icon: <FaShieldAlt className="h-10 w-10 text-red-600" />,
    title: "Boosts Immunity",
    desc: "Stimulates the production of new blood cells and strengthens your immune system.",
  },
  {
    icon: <FaSmileBeam className="h-10 w-10 text-red-600" />,
    title: "Enhances Well-Being",
    desc: "Knowing that you’ve saved lives gives an unmatched sense of happiness and purpose.",
  },
  {
    icon: <FaUsers className="h-10 w-10 text-red-600" />,
    title: "Supports Community",
    desc: "Each donation can help multiple patients—children, accident victims, or cancer fighters.",
  },
];

const myths = [
  { myth: "Donating blood makes you weak.", fact: "False. Your body quickly replenishes the donated blood within 24–48 hours." },
  { myth: "It’s unsafe or painful.", fact: "Absolutely safe and mostly painless. Only sterile, single-use needles are used." },
  { myth: "You can’t donate if you don’t know your blood type.", fact: "We’ll test and inform you after your first donation!" },
  { myth: "Older adults can’t donate blood.", fact: "Healthy adults up to age 65 (or more) can safely donate with doctor approval." },
];

const WhyDonate: React.FC = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true, offset: 100 });
  }, []);

  return (
    <div className="font-sans bg-white text-slate-800">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-rose-50 to-red-50 py-28 text-center" data-aos="fade-up">
        <h1 className="text-5xl font-extrabold mb-6">
          Why Donate Blood? <span className="text-red-600">Because Every Drop Matters.</span>
        </h1>
        <p className="text-lg text-slate-600 max-w-3xl mx-auto mb-10">
          Blood donation isn’t just about giving — it’s about saving lives, fostering compassion, and creating a healthier community.
        </p>
        <Link
          to="/find-drive"
          className="bg-red-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-red-700 transition"
        >
          Become a Donor Today ❤️
        </Link>
      </section>

      {/* Why It Matters */}
      <section className="py-20 container mx-auto px-6 text-center" data-aos="fade-up">
        <h2 className="text-4xl font-bold mb-8">Every Donation Creates Hope</h2>
        <p className="text-lg text-slate-600 max-w-3xl mx-auto mb-12">
          Every 2 seconds, someone needs blood — be it accident victims, cancer patients, or newborns.
          Your single donation can save up to <span className="font-semibold text-red-600">three lives.</span>
          It’s the simplest act of kindness with the most powerful impact.
        </p>
        <div className="flex justify-center">
          <FaTint className="text-red-500 w-24 h-24 animate-bounce" />
        </div>
      </section>

      {/* Benefits Section */}
      <section className="bg-slate-50 py-20" data-aos="fade-up">
        <div className="container mx-auto px-6 text-center">
          <h3 className="text-4xl font-bold mb-12">Health Benefits of Donating</h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((b, i) => (
              <div
                key={i}
                className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition"
                data-aos="fade-up"
                data-aos-delay={i * 200}
              >
                <div className="flex justify-center mb-4">{b.icon}</div>
                <h4 className="font-semibold text-lg">{b.title}</h4>
                <p className="text-slate-600 mt-2">{b.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Myths vs Facts */}
      <section className="py-20 container mx-auto px-6" data-aos="fade-up">
        <h3 className="text-4xl font-bold text-center mb-12">Myths vs Facts</h3>
        <div className="grid md:grid-cols-2 gap-10">
          {myths.map((m, i) => (
            <div
              key={i}
              className="bg-white border border-slate-200 p-6 rounded-xl shadow-sm hover:shadow-md transition"
              data-aos="zoom-in"
              data-aos-delay={i * 150}
            >
              <p className="font-bold text-red-600 mb-2">Myth: {m.myth}</p>
              <p className="text-slate-700">Fact: {m.fact}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Global Impact */}
      <section className="bg-red-600 text-white py-20 text-center" data-aos="zoom-in">
        <h3 className="text-4xl font-bold mb-6">A Global Lifeline</h3>
        <p className="max-w-3xl mx-auto text-lg mb-8">
          Every year, over <span className="font-semibold">120 million blood donations</span> are made worldwide.
          Yet, shortages persist. Your contribution strengthens our collective ability to respond to emergencies,
          surgeries, and everyday medical needs.
        </p>
        <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-10 container mx-auto px-4">
          <div><p className="text-5xl font-bold">3x</p><p>Lives Saved Per Donation</p></div>
          <div><p className="text-5xl font-bold">120M+</p><p>Annual Global Donors</p></div>
          <div><p className="text-5xl font-bold">15%</p><p>Increase in Need Yearly</p></div>
          <div><p className="text-5xl font-bold">∞</p><p>Impact You Can Create</p></div>
        </div>
      </section>

      {/* Final Call to Action */}
      <section className="py-20 text-center bg-rose-50" data-aos="fade-up">
        <FaHandsHelping className="mx-auto text-red-600 w-14 h-14 mb-6" />
        <h3 className="text-4xl font-bold mb-4">Be the Reason Someone Smiles Today</h3>
        <p className="text-lg text-slate-600 max-w-2xl mx-auto mb-8">
          The world needs heroes who give without expecting. You have the power to change lives.
          Start with one simple step — donate blood.
        </p>
        <Link
          to="/find-drive"
          className="bg-red-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-red-700 transition"
        >
          Find a Donation Drive Near You →
        </Link>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 text-white py-12 text-center">
        <p className="text-slate-400">&copy; {new Date().getFullYear()} LifeLink. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default WhyDonate;
