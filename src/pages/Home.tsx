// src/pages/Home.tsx
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
  const [farmerName, setFarmerName] = useState<string>("");
  const [primaryCrop, setPrimaryCrop] = useState<string>("");
  const [user, setUser] = useState<any>(null);
  const navigate = useNavigate();

  // ✅ Fetch farmer data + auth state
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

  // ✅ Proper Logout Handler
  const handleLogout = async () => {
    try {
      await signOut(auth); // Firebase sign-out
      localStorage.clear(); // clear any cached farmer data
      sessionStorage.clear();
      setUser(null); // instantly update UI
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

        {/* ✅ Auth Buttons */}
        <div className="flex items-center space-x-4">
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
    </div>
  );
};

export default Home;
