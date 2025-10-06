import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { FaBookMedical, FaUserCheck, FaBriefcaseMedical, FaHeartbeat } from "react-icons/fa";

// --- Donor Resources ---
const donorResources = [
  {
    icon: <FaBookMedical className="h-10 w-10 text-red-600" />,
    title: "The Donation Process",
    description: "Step-by-step guide from registration to post-donation care.",
  },
  {
    icon: <FaUserCheck className="h-10 w-10 text-red-600" />,
    title: "Eligibility Requirements",
    description: "Health and travel criteria to ensure you can donate safely.",
  },
  {
    icon: <FaBriefcaseMedical className="h-10 w-10 text-red-600" />,
    title: "Post-Donation Care",
    description: "Tips to feel your best after donating.",
  },
  {
    icon: <FaHeartbeat className="h-10 w-10 text-red-600" />,
    title: "Benefits of Donating",
    description: "Learn about health benefits and emotional rewards.",
  },
];

// --- Tips for Donors ---
const donorTips = [
  "Stay hydrated before and after donation.",
  "Eat a healthy meal before donating.",
  "Bring a valid ID and donor card (if any).",
  "Avoid heavy exercise immediately after donation.",
  "Report any discomfort to staff immediately.",
];

const ForDonors: React.FC = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true, offset: 100 });
  }, []);

  return (
    <div className="font-sans bg-white text-slate-800">
      {/* Hero */}
      <section className="bg-gradient-to-r from-red-50 to-rose-50 text-center py-28" data-aos="fade-up">
        <h2 className="text-5xl font-extrabold mb-6">
          For Donors <span className="text-red-600">Your Guide to Giving</span>
        </h2>
        <p className="text-lg text-slate-600 mb-8 max-w-2xl mx-auto">
          Everything you need to know to prepare, donate, and feel confident as a LifeLink donor.
        </p>
      </section>

      {/* Donor Resources */}
      <section className="py-20 container mx-auto px-4 text-center" data-aos="fade-up">
        <h3 className="text-4xl font-bold mb-12">Resources & Information</h3>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {donorResources.map((resource, i) => (
            <div
              key={i}
              className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition"
              data-aos="fade-up"
              data-aos-delay={i * 200}
            >
              <div className="flex justify-center mb-4">{resource.icon}</div>
              <h4 className="font-semibold text-lg">{resource.title}</h4>
              <p className="text-slate-600 mt-2">{resource.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Tips Section */}
      <section className="bg-rose-50 py-20" data-aos="fade-up">
        <div className="container mx-auto px-4 text-center max-w-3xl">
          <h3 className="text-4xl font-bold mb-12">Tips for Donors</h3>
          <ul className="list-disc list-inside text-slate-700 text-lg space-y-4">
            {donorTips.map((tip, i) => (
              <li key={i} data-aos="fade-up" data-aos-delay={i * 150}>{tip}</li>
            ))}
          </ul>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 text-center" data-aos="fade-up">
        <h3 className="text-4xl font-bold mb-6">Ready to Donate?</h3>
        <p className="text-lg text-slate-600 mb-8 max-w-xl mx-auto">
          Join thousands of donors who are making a real impact in their communities.
        </p>
        <a
          href="/find-drive"
          className="bg-red-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-red-700"
        >
          Find a Blood Drive
        </a>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 text-white py-16 text-center px-4" data-aos="fade-up">
        <p className="text-slate-400">&copy; {new Date().getFullYear()} LifeLink. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default ForDonors;
