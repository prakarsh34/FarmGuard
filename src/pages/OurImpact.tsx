import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { FaUsers, FaHeartbeat, FaHandHoldingHeart, FaChartLine } from "react-icons/fa";

// --- Impact Metrics ---
const impactMetrics = [
  { icon: <FaUsers className="h-10 w-10 text-red-600" />, value: "30k+", label: "Lives Saved" },
  { icon: <FaHeartbeat className="h-10 w-10 text-red-600" />, value: "10k+", label: "Active Donors" },
  { icon: <FaHandHoldingHeart className="h-10 w-10 text-red-600" />, value: "500+", label: "Drives Conducted" },
  { icon: <FaChartLine className="h-10 w-10 text-red-600" />, value: "4.9/5", label: "Donor Rating" },
];

// --- Stories of Impact ---
const impactStories = [
  {
    title: "A Newborn's Second Chance",
    description: "Baby Aisha required a rare blood type for emergency surgery. Donors came together to save her life.",
  },
  {
    title: "Community Drive Success",
    description: "Our drive in partnership with TechCorp helped save 150 lives and raised awareness about blood donation.",
  },
  {
    title: "Students Making a Difference",
    description: "College students organized a donation drive, inspiring peers to participate and help the community.",
  },
];

const OurImpact: React.FC = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true, offset: 100 });
  }, []);

  return (
    <div className="font-sans bg-white text-slate-800">
      {/* Hero */}
      <section className="bg-gradient-to-r from-red-50 to-rose-50 text-center py-28" data-aos="fade-up">
        <h2 className="text-5xl font-extrabold mb-6">
          Our Impact <span className="text-red-600">In Numbers</span>
        </h2>
        <p className="text-lg text-slate-600 mb-8 max-w-2xl mx-auto">
          Every donation makes a difference. See how our community has come together to save lives and improve healthcare.
        </p>
      </section>

      {/* Metrics */}
      <section className="py-20 container mx-auto px-4 text-center" data-aos="fade-up">
        <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-12">
          {impactMetrics.map((metric, i) => (
            <div
              key={i}
              className="bg-white p-8 rounded-xl shadow hover:-translate-y-1 transition"
              data-aos="zoom-in"
              data-aos-delay={i * 200}
            >
              <div className="flex justify-center mb-4">{metric.icon}</div>
              <p className="text-3xl font-bold">{metric.value}</p>
              <p className="text-slate-600 mt-2">{metric.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Impact Stories */}
      <section className="bg-rose-50 py-20" data-aos="fade-up">
        <div className="container mx-auto px-4 text-center">
          <h3 className="text-4xl font-bold mb-12">Stories of Change</h3>
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {impactStories.map((story, i) => (
              <div
                key={i}
                className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition"
                data-aos="fade-up"
                data-aos-delay={i * 200}
              >
                <h4 className="font-semibold text-xl mb-2">{story.title}</h4>
                <p className="text-slate-600">{story.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 text-center" data-aos="fade-up">
        <h3 className="text-4xl font-bold mb-6">Join Us in Making an Impact</h3>
        <p className="text-lg text-slate-600 mb-8 max-w-xl mx-auto">
          Every donation counts. Become part of a community that saves lives and spreads hope.
        </p>
        <a
          href="/find-drive"
          className="bg-red-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-red-700"
        >
          Donate Blood Today ❤️
        </a>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 text-white py-16 text-center px-4" data-aos="fade-up">
        <p className="text-slate-400">&copy; {new Date().getFullYear()} LifeLink. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default OurImpact;
