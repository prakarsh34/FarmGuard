import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
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
  FaUserCircle,
  FaSignOutAlt,
  FaSignInAlt,
  FaRobot,
} from "react-icons/fa";
import { db, auth } from "../firebase";
import { collection, getDocs, orderBy, limit, query } from "firebase/firestore";
import { onAuthStateChanged, signOut } from "firebase/auth";

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
    description:
      "We merge satellite, weather, and soil data to help you decide smarter.",
  },
  {
    icon: <FaSeedling className="h-10 w-10 text-green-700" />,
    title: "Actionable Tips",
    description:
      "Know when to plant, water, and protect — all in one dashboard.",
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
  {
    question: "Can I add multiple farms?",
    answer:
      "Yes, you can manage multiple farms and crops through your dashboard easily.",
  },
];

const Home: React.FC = () => {
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null);
  const [farmerName, setFarmerName] = useState<string>("");
  const [primaryCrop, setPrimaryCrop] = useState<string>("");
  const [user, setUser] = useState<any>(null);
  const navigate = useNavigate();

  useEffect(() => {
    AOS.init({ duration: 1000, once: true, offset: 100 });

    const fetchFarmerData = async () => {
      try {
        const q = query(
          collection(db, "farmers"),
          orderBy("createdAt", "desc"),
          limit(1)
        );
        const snapshot = await getDocs(q);
        if (!snapshot.empty) {
          const farmer = snapshot.docs[0].data();
          setFarmerName(farmer.farmerName || "");
          setPrimaryCrop(farmer.primaryCrop || "");
        }
      } catch (err) {
        console.error("Error fetching farmer data:", err);
      }
    };

    fetchFarmerData();

    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });

    return () => unsubscribe();
  }, []);

  // ✅ Logout
  const handleLogout = async () => {
    try {
      await signOut(auth);
      localStorage.clear();
      sessionStorage.clear();
      setUser(null);
      alert("👋 You’ve been logged out successfully!");
      navigate("/login", { replace: true });
    } catch (error) {
      console.error("Logout failed:", error);
      alert("⚠️ Failed to log out. Please try again.");
    }
  };

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

        {/* ✅ Auth + Chatbot Button */}
        <div className="flex items-center space-x-4">
          <button
            onClick={() => navigate("/chatbot")}
            className="flex items-center bg-green-600 text-white px-4 py-2 rounded-full font-semibold hover:bg-green-700 transition"
          >
            <FaRobot className="mr-2" /> Talk to AI Assistant
          </button>

          {user ? (
            <>
              <div className="flex items-center space-x-2">
                <FaUserCircle className="text-green-700 text-xl" />
                <span className="font-medium text-amber-800">
                  {user.displayName || user.email}
                </span>
              </div>
              <button
                onClick={handleLogout}
                className="flex items-center bg-red-600 text-white px-4 py-2 rounded-full font-semibold hover:bg-red-700 transition"
              >
                <FaSignOutAlt className="mr-2" /> Logout
              </button>
            </>
          ) : (
            <button
              onClick={() => navigate("/login")}
              className="flex items-center bg-green-700 text-white px-4 py-2 rounded-full font-semibold hover:bg-green-800 transition"
            >
              <FaSignInAlt className="mr-2" /> Login
            </button>
          )}
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative text-center py-28 overflow-hidden">
        <div className="absolute top-0 left-0 w-72 h-72 bg-green-200 rounded-full blur-3xl opacity-30 animate-pulse"></div>
        <div className="absolute bottom-0 right-0 w-80 h-80 bg-amber-100 rounded-full blur-3xl opacity-40 animate-bounce-slow"></div>

        <div className="relative z-10" data-aos="fade-up">
          <h2 className="text-5xl font-extrabold mb-6 leading-snug">
            Welcome{" "}
            {user ? (
              <span className="text-green-700">
                {user.displayName || farmerName || "Farmer"}
              </span>
            ) : (
              "Farmer"
            )}
            <br />
            Growing the Future with{" "}
            <span className="text-green-700">
              {primaryCrop || "your crops"}
            </span>
          </h2>

          <p className="text-lg text-amber-800 mb-8 max-w-2xl mx-auto">
            AI-powered guidance to grow more, waste less, and nurture your land
            sustainably.
          </p>

          <div className="flex flex-wrap justify-center gap-4">
            <Link
              to="/dashboard"
              className="bg-green-700 text-white px-8 py-4 rounded-full font-semibold hover:bg-green-800 transition"
            >
              Explore Dashboard 🌱
            </Link>

            <Link
              to="/get-started"
              className="bg-amber-600 text-white px-8 py-4 rounded-full font-semibold hover:bg-amber-700 transition"
            >
              Get Started 🚜
            </Link>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-20 bg-white" data-aos="fade-up">
        <h2 className="text-4xl font-bold text-center mb-12 text-green-800">
          Why Choose FarmGuard?
        </h2>
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10 px-6">
          {features.map((f, index) => (
            <div
              key={index}
              className="p-6 bg-[#fefcf6] rounded-2xl shadow-md hover:shadow-lg transition text-center"
            >
              <div className="flex justify-center mb-4">{f.icon}</div>
              <h3 className="text-2xl font-semibold mb-2">{f.title}</h3>
              <p className="text-amber-800">{f.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Resources */}
      <section className="py-20 bg-amber-50" data-aos="fade-up">
        <h2 className="text-4xl font-bold text-center mb-12 text-green-800">
          Resources for Every Farmer
        </h2>
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 px-6">
          {resources.map((r, index) => (
            <div
              key={index}
              className="p-6 bg-white rounded-xl shadow-md hover:shadow-lg transition text-center"
            >
              <div className="flex justify-center mb-3">{r.icon}</div>
              <h3 className="text-xl font-bold mb-2">{r.title}</h3>
              <p className="text-gray-600">{r.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 bg-white" data-aos="fade-up">
        <h2 className="text-4xl font-bold text-center mb-10 text-green-800">
          Frequently Asked Questions
        </h2>
        <div className="max-w-3xl mx-auto px-6">
          {faqData.map((item, index) => (
            <div key={index} className="border-b border-amber-200 py-4">
              <button
                onClick={() =>
                  setOpenFaqIndex(openFaqIndex === index ? null : index)
                }
                className="w-full flex justify-between items-center text-left text-lg font-semibold text-amber-900"
              >
                <span>{item.question}</span>
                <FaChevronDown
                  className={`transition-transform duration-300 ${
                    openFaqIndex === index
                      ? "rotate-180 text-green-700"
                      : "text-amber-700"
                  }`}
                />
              </button>
              {openFaqIndex === index && (
                <p className="mt-3 text-amber-700">{item.answer}</p>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-green-700 text-white py-6 text-center">
        <p>© {new Date().getFullYear()} FarmGuard. All rights reserved.</p>
        <p className="text-sm mt-2">Empowering farmers with data and AI 🌱</p>
      </footer>
    </div>
  );
};

export default Home;
