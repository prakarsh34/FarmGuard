import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
import {
  FaLeaf,
  FaCloudSunRain,
  FaTractor,
  FaChevronDown,
  FaBookOpen,
  FaShieldAlt,
  FaBrain,
  FaSeedling,
} from "react-icons/fa";

const navLinks = [
  { to: "/", label: "Home" },
  { to: "/features", label: "Features" },
  { to: "/dashboard", label: "Dashboard" },
  { to: "/about-us", label: "About Us" },
];

const features = [
  {
    icon: <FaTractor className="h-10 w-10 text-green-700" />,
    title: "Farm Setup",
    description: "Add your farm details and get tailored AI insights instantly.",
  },
  {
    icon: <FaBrain className="h-10 w-10 text-green-700" />,
    title: "Smart Analysis",
    description: "We merge satellite, weather, and soil data to help you decide smarter.",
  },
  {
    icon: <FaSeedling className="h-10 w-10 text-green-700" />,
    title: "Actionable Tips",
    description: "Know when to plant, water, and protect — all in one dashboard.",
  },
];

const resources = [
  {
    icon: <FaBookOpen className="h-10 w-10 text-green-700" />,
    title: "Crop Guides",
    desc: "Step-by-step guides crafted by experts for every crop type.",
  },
  {
    icon: <FaCloudSunRain className="h-10 w-10 text-green-700" />,
    title: "Weather Insights",
    desc: "Predict patterns and plan your sowing season smartly.",
  },
  {
    icon: <FaShieldAlt className="h-10 w-10 text-green-700" />,
    title: "Pest Safety",
    desc: "Eco-friendly pest management strategies for healthy yields.",
  },
  {
    icon: <FaLeaf className="h-10 w-10 text-green-700" />,
    title: "Soil Health",
    desc: "Enhance fertility with proven organic techniques.",
  },
];

const FAQItem = ({
  item,
  isOpen,
  onClick,
}: {
  item: { question: string; answer: string };
  isOpen: boolean;
  onClick: () => void;
}) => (
  <div
    className="border-b border-amber-200 py-4 transition-all duration-300"
    data-aos="fade-up"
  >
    <button
      onClick={onClick}
      className="w-full flex justify-between items-center text-left text-lg font-semibold text-amber-900"
    >
      <span>{item.question}</span>
      <FaChevronDown
        className={`transition-transform duration-300 ${
          isOpen ? "rotate-180 text-green-700" : "text-amber-700"
        }`}
      />
    </button>
    {isOpen && <p className="mt-3 text-amber-700">{item.answer}</p>}
  </div>
);

const faqData = [
  {
    question: "Is FarmGuard suitable for small farmers?",
    answer:
      "Yes! FarmGuard is designed to empower every farmer — from family farms to large cooperatives.",
  },
  {
    question: "Does it work offline?",
    answer:
      "You can access previously synced data offline, and new insights appear once you reconnect.",
  },
  {
    question: "Is my data safe?",
    answer:
      "Absolutely. We use end-to-end encryption and your farm data is never shared.",
  },
];

const Home: React.FC = () => {
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null);

  useEffect(() => {
    AOS.init({ duration: 1000, once: true, offset: 100 });
  }, []);

  return (
    <div className="font-sans bg-[#fffdf6] text-amber-900 overflow-x-hidden">
      {/* Header */}
      <header
        className="bg-white/90 shadow-sm py-4 px-8 flex justify-between items-center sticky top-0 z-50 backdrop-blur-md"
        data-aos="fade-down"
      >
        <h1 className="text-3xl font-bold text-green-700">🌾 FarmGuard</h1>

        <nav className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              className="text-amber-800 hover:text-green-700 font-medium transition"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <Link
          to="/get-started"
          className="bg-green-700 text-white px-5 py-2 rounded-full font-semibold hover:bg-green-800 transition"
        >
          Get Started
        </Link>
      </header>

      {/* Hero Section */}
      <section className="relative text-center py-28 overflow-hidden">
        {/* Background blob */}
        <div className="absolute top-0 left-0 w-72 h-72 bg-green-200 rounded-full blur-3xl opacity-30 animate-pulse"></div>
        <div className="absolute bottom-0 right-0 w-80 h-80 bg-amber-100 rounded-full blur-3xl opacity-40 animate-bounce-slow"></div>

        <div className="relative z-10" data-aos="fade-up">
          <h2 className="text-5xl font-extrabold mb-6 leading-snug">
            <span className="text-green-700">Smarter Farming</span> <br />
            For Every Growing Future
          </h2>
          <p className="text-lg text-amber-800 mb-8 max-w-2xl mx-auto">
            AI-powered guidance to grow more, waste less, and nurture your land
            sustainably.
          </p>
          <Link
            to="/dashboard"
            className="bg-green-700 text-white px-8 py-4 rounded-full font-semibold hover:bg-green-800 transition"
          >
            Explore Dashboard 🌱
          </Link>
        </div>
      </section>

      {/* Curved Divider */}
      <div className="w-full h-24 bg-gradient-to-b from-green-50 to-amber-50 rounded-t-[100%] mt-[-2rem]"></div>

      {/* Features Section */}
      <section className="py-20 bg-gradient-to-br from-green-50 to-amber-50" data-aos="fade-up">
        <h3 className="text-4xl font-bold text-center mb-12">
          How FarmGuard Works
        </h3>
        <div className="flex flex-wrap justify-center gap-10 px-4">
          {features.map((f, i) => (
            <div
              key={i}
              className={`relative bg-white rounded-3xl shadow-md p-8 w-80 transition-transform hover:-translate-y-2 hover:shadow-xl ${i % 2 === 0 ? "rotate-1" : "-rotate-1"}`}
              data-aos="zoom-in"
              data-aos-delay={i * 200}
            >
              <div className="absolute -top-6 left-1/2 transform -translate-x-1/2 bg-green-100 rounded-full p-4">
                {f.icon}
              </div>
              <h4 className="mt-8 font-bold text-xl">{f.title}</h4>
              <p className="text-amber-700 mt-2">{f.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Resources */}
      <section
        className="relative py-24 bg-white overflow-hidden"
        data-aos="fade-up"
      >
        <div className="absolute top-0 left-0 w-80 h-80 bg-amber-100 rounded-full blur-3xl opacity-30 animate-float"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-green-100 rounded-full blur-3xl opacity-40 animate-float-slow"></div>

        <div className="container mx-auto text-center relative z-10 px-4">
          <h3 className="text-4xl font-bold mb-12">
            Farmer’s Toolkit & Knowledge Base
          </h3>
          <div className="flex flex-wrap justify-center gap-10">
            {resources.map((r, i) => (
              <div
                key={i}
                className={`bg-gradient-to-b from-amber-50 to-green-50 shadow-md rounded-[2rem] p-6 w-72 transform hover:scale-105 transition-all duration-500`}
                data-aos="fade-up"
                data-aos-delay={i * 150}
              >
                <div className="flex justify-center mb-4">{r.icon}</div>
                <h4 className="font-semibold text-lg text-amber-900">
                  {r.title}
                </h4>
                <p className="text-amber-700 mt-2">{r.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section
        className="py-20 bg-gradient-to-r from-amber-50 to-green-50"
        data-aos="fade-up"
      >
        <h3 className="text-4xl font-bold text-center mb-10">
          Frequently Asked Questions
        </h3>
        <div className="max-w-2xl mx-auto px-4">
          {faqData.map((item, i) => (
            <FAQItem
              key={i}
              item={item}
              isOpen={openFaqIndex === i}
              onClick={() =>
                setOpenFaqIndex(openFaqIndex === i ? null : i)
              }
            />
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-amber-900 text-amber-100 py-10 mt-10">
        <div className="container mx-auto text-center">
          <p className="text-lg font-semibold mb-2">
            🌱 FarmGuard — Growing Smarter, Together
          </p>
          <p className="text-sm">
            © {new Date().getFullYear()} FarmGuard. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Home;
