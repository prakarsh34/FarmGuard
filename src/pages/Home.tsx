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
  FaTwitter,
  FaLinkedin,
  FaInstagram,
} from "react-icons/fa";

// --- Navigation ---
const navLinks = [
  { to: "/", label: "Home" },
  { to: "/features", label: "Features" },
  { to: "/dashboard", label: "Dashboard" },
  { to: "/about-us", label: "About Us" },
];

// --- Data Source Logos ---
const keyDataSources = [
  "Global Weather APIs",
  "NASA Earth Data",
  "USDA Crop Data",
  "OpenSoilData Initiative",
  "Local Weather Stations",
  "Satellite Imagery Corp",
  "AgriResearch Institute",
];

// --- Core Features / How It Works ---
const features = [
  {
    icon: <FaTractor className="h-8 w-8 text-green-600" />,
    title: "1. Input Your Farm Data",
    description: "Easily input your farm's location, crop type, and soil characteristics to get started.",
  },
  {
    icon: <FaBrain className="h-8 w-8 text-green-600" />,
    title: "2. AI-Powered Analysis",
    description: "Our system processes real-time weather, soil moisture, and satellite data using advanced algorithms.",
  },
  {
    icon: <FaSeedling className="h-8 w-8 text-green-600" />,
    title: "3. Get Smart Recommendations",
    description: "Receive actionable insights on when to plant, irrigate, fertilize, and protect your crops.",
  },
];

// --- Farmer Resources ---
const resources = [
  {
    icon: <FaBookOpen className="h-10 w-10 text-emerald-600" />,
    title: "Crop-Specific Guides",
    desc: "In-depth guides for various crops, from planting to harvest.",
  },
  {
    icon: <FaCloudSunRain className="h-10 w-10 text-emerald-600" />,
    title: "Weather Pattern Insights",
    desc: "Learn to interpret long-term weather forecasts for better planning.",
  },
  {
    icon: <FaShieldAlt className="h-10 w-10 text-emerald-600" />,
    title: "Integrated Pest Management",
    desc: "Sustainable strategies to protect your crops from common pests.",
  },
  {
    icon: <FaLeaf className="h-10 w-10 text-emerald-600" />,
    title: "Soil Health Manual",
    desc: "Tips and techniques to improve and maintain the health of your soil.",
  },
];

// --- Success Stories ---
const successStories = [
  {
    title: "20% Yield Increase in Maize Fields with Optimized Irrigation",
    excerpt: "See how a community in Punjab used our irrigation alerts to conserve water and boost their harvest.",
  },
  {
    title: "Preventing a Blight Outbreak in Potato Crops",
    excerpt: "A farmer in the Nilgiris shares how early pest warnings saved his entire crop from devastation.",
  },
  {
    title: "From Novice to Pro: A First-Generation Farmer's Journey",
    excerpt: "Read how our crop guides helped a new farmer successfully manage a diverse vegetable farm.",
  },
];

// --- Testimonials ---
const testimonials = [
  {
    quote: "FarmGuard transformed the way I manage my fields. The recommendations are incredibly accurate and easy to follow.",
    author: "Ravi Kumar",
    company: "Farmer, Haryana",
  },
  {
    quote: "The data integration is seamless. We use it for our entire cooperative to make collective decisions.",
    author: "Sunita Reddy",
    company: "Co-op Manager, Andhra Pradesh",
  },
  {
    quote: "As an agronomist, I recommend FarmGuard to all my clients. It's a powerful tool that brings modern tech to traditional farming.",
    author: "Dr. Alok Verma",
    company: "Agricultural Consultant",
  },
];

// --- FAQ ---
const faqData = [
    { question: "How does FarmGuard get its data?", answer: "We integrate data from leading sources, including satellite imagery providers, national weather services, and agricultural research institutions." },
    { question: "Is it difficult to set up?", answer: "Not at all! Our setup process is simple and guided. You can have your farm profile ready in less than 15 minutes." },
    { question: "Can I use this for a small, family-owned farm?", answer: "Absolutely. FarmGuard is designed to be scalable, providing valuable insights for farms of all sizes, from smallholdings to large agricultural enterprises." },
    { question: "How often is the data updated?", answer: "Weather data is updated in real-time, while soil and crop data are updated based on the latest satellite passes and sensor readings, typically on a daily basis." },
    { question: "Is my farm's data kept private?", answer: "Yes, data privacy and security are our top priorities. Your farm's specific data is encrypted and is never shared without your explicit consent." },
];

// --- FAQ Item Typing ---
interface FAQItemProps {
  item: { question: string; answer: string };
  isOpen: boolean;
  onClick: () => void;
}

// --- FAQ Item Component ---
const FAQItem: React.FC<FAQItemProps> = ({ item, isOpen, onClick }) => (
  <div className="border-b border-slate-200 py-4" data-aos="fade-up">
    <button
      onClick={onClick}
      className="w-full flex justify-between items-center text-left text-lg font-medium text-slate-800"
    >
      <span>{item.question}</span>
      <FaChevronDown
        className={`transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`}
      />
    </button>
    {isOpen && <p className="mt-3 text-slate-600">{item.answer}</p>}
  </div>
);

const Home: React.FC = () => {
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null);

  useEffect(() => {
    AOS.init({ duration: 1000, once: true, offset: 100 });
  }, []);

  return (
    <div className="font-sans bg-white text-slate-800">
      {/* Header */}
      <header
        className="bg-white/90 shadow-sm py-4 px-8 flex justify-between items-center sticky top-0 z-50 backdrop-blur-md"
        data-aos="fade-down"
      >
        <h1 className="text-3xl font-bold text-green-600">FarmGuard</h1>

        <nav className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              className="text-slate-600 hover:text-green-600"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <Link
          to="/get-started"
          className="bg-green-600 text-white px-5 py-2 rounded-lg font-bold hover:bg-green-700"
        >
          Get Started
        </Link>
      </header>

      {/* Hero */}
      <section className="bg-gradient-to-r from-green-50 to-emerald-50 text-center py-28" data-aos="fade-up">
        <h2 className="text-5xl font-extrabold mb-6">
          Cultivating the Future. <span className="text-green-600">Harvest with Intelligence.</span>
        </h2>
        <p className="text-lg text-slate-600 mb-8 max-w-2xl mx-auto">
          Leverage AI and real-time data to make smarter farming decisions, increase yields, and optimize resources.
        </p>
        <Link
          to="/dashboard"
          className="bg-green-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-green-700"
        >
          Go to Dashboard 🌱
        </Link>
      </section>

      {/* Data Sources Marquee */}
      <section className="bg-slate-50 py-6" data-aos="fade-up">
        <p className="text-center text-slate-500 font-semibold mb-4">POWERED BY TRUSTED DATA SOURCES</p>
        <div className="train-track">
          <div className="train">
            {/* Render the list of sources */}
            {keyDataSources.map((logo, i) => (
              <span key={i}>{logo}</span>
            ))}
            {/* Render the list AGAIN for a seamless loop */}
            {keyDataSources.map((logo, i) => (
              <span key={`dup-${i}`}>{logo}</span>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section id="features" className="py-20 text-center container mx-auto px-4" data-aos="fade-up">
        <h3 className="text-4xl font-bold mb-12">How FarmGuard Works</h3>
        <div className="grid md:grid-cols-3 gap-8">
          {features.map((f, i) => (
            <div
              key={i}
              className="bg-white p-6 rounded-xl shadow hover:-translate-y-1 transition"
              data-aos="zoom-in"
              data-aos-delay={i * 200}
            >
              {f.icon}
              <h4 className="mt-4 font-semibold text-lg">{f.title}</h4>
              <p className="text-slate-600 mt-2">{f.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Resources */}
      <section id="resources" className="bg-green-50 py-20" data-aos="fade-up">
        <div className="container mx-auto text-center px-4">
          <h3 className="text-4xl font-bold mb-12">Farmer's Toolkit & Knowledge Base</h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {resources.map((r, i) => (
              <div
                key={i}
                className="bg-white p-6 rounded-xl shadow hover:shadow-lg"
                data-aos="fade-up"
                data-aos-delay={i * 200}
              >
                <div className="flex justify-center mb-4">{r.icon}</div>
                <h4 className="font-semibold text-lg">{r.title}</h4>
                <p className="text-slate-600 mt-2">{r.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Placeholder for other sections like Testimonials, FAQ, Footer etc. */}
      {/* ... Add other sections like Testimonials and FAQ here using the data provided ... */}

    </div>
  );
};

export default Home;