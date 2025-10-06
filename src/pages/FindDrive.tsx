import React, { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { FaMapMarkerAlt, FaCalendarAlt, FaClock, FaSearch } from "react-icons/fa";
import { Link } from "react-router-dom";

interface Drive {
  location: string;
  date: string;
  time: string;
  organizer: string;
  city: string;
}

const sampleDrives: Drive[] = [
  {
    location: "City General Hospital",
    date: "Oct 12, 2025",
    time: "10:00 AM - 4:00 PM",
    organizer: "Red Hope Foundation",
    city: "Chennai",
  },
  {
    location: "SRM University Main Hall",
    date: "Oct 14, 2025",
    time: "9:00 AM - 3:30 PM",
    organizer: "Youth Bloodline",
    city: "Kattankulathur",
  },
  {
    location: "Metro Health Center",
    date: "Oct 18, 2025",
    time: "11:00 AM - 5:00 PM",
    organizer: "Rotary Club",
    city: "Tambaram",
  },
  {
    location: "Community Town Hall",
    date: "Oct 20, 2025",
    time: "10:30 AM - 4:30 PM",
    organizer: "LifeLink Volunteers",
    city: "Velachery",
  },
];

const FindDrive: React.FC = () => {
  const [query, setQuery] = useState("");
  const [filteredDrives, setFilteredDrives] = useState<Drive[]>(sampleDrives);

  useEffect(() => {
    AOS.init({ duration: 1000, once: true, offset: 100 });
  }, []);

  useEffect(() => {
    const results = sampleDrives.filter((drive) =>
      drive.city.toLowerCase().includes(query.toLowerCase())
    );
    setFilteredDrives(results);
  }, [query]);

  return (
    <div className="font-sans bg-white text-slate-800">
      {/* Hero */}
      <section
        className="bg-gradient-to-r from-red-50 to-rose-50 py-28 text-center"
        data-aos="fade-up"
      >
        <h1 className="text-5xl font-extrabold mb-6">
          Find a Blood Donation Drive Near You 🩸
        </h1>
        <p className="text-lg text-slate-600 max-w-2xl mx-auto mb-8">
          Discover upcoming donation events and join a drive in your city.
          Together, let’s save lives one donation at a time.
        </p>

        {/* Search Bar */}
        <div className="flex justify-center">
          <div className="flex items-center bg-white shadow-md rounded-full overflow-hidden w-full max-w-lg">
            <FaSearch className="text-slate-500 ml-4" />
            <input
              type="text"
              placeholder="Search by city or pin code..."
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              className="w-full px-4 py-3 focus:outline-none text-slate-700"
            />
          </div>
        </div>
      </section>

      {/* Drives List */}
      <section className="py-20 container mx-auto px-6" data-aos="fade-up">
        <h2 className="text-3xl font-bold text-center mb-12">
          Upcoming Blood Donation Drives
        </h2>

        {filteredDrives.length > 0 ? (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredDrives.map((drive, i) => (
              <div
                key={i}
                className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition"
                data-aos="fade-up"
                data-aos-delay={i * 150}
              >
                <h3 className="text-xl font-semibold text-red-600 mb-2">
                  {drive.location}
                </h3>
                <p className="flex items-center text-slate-700 mb-1">
                  <FaMapMarkerAlt className="mr-2 text-red-500" /> {drive.city}
                </p>
                <p className="flex items-center text-slate-700 mb-1">
                  <FaCalendarAlt className="mr-2 text-red-500" /> {drive.date}
                </p>
                <p className="flex items-center text-slate-700 mb-1">
                  <FaClock className="mr-2 text-red-500" /> {drive.time}
                </p>
                <p className="text-slate-600 mt-3">
                  Organized by:{" "}
                  <span className="font-medium">{drive.organizer}</span>
                </p>

                <Link
                  to="/schedule-donation"
                  className="block bg-red-600 text-white px-5 py-2 mt-5 rounded-lg text-center font-semibold hover:bg-red-700 transition"
                >
                  Book Slot
                </Link>
              </div>
            ))}
          </div>
        ) : (
          <p className="text-center text-slate-600 text-lg">
            No drives found for "{query}". Try searching another city.
          </p>
        )}
      </section>

      {/* CTA */}
      <section className="bg-rose-50 py-20 text-center" data-aos="fade-up">
        <h3 className="text-4xl font-bold mb-4">
          Can’t Find a Drive Near You?
        </h3>
        <p className="text-lg text-slate-600 mb-8">
          You can still make an impact. Register to be notified about upcoming
          drives in your area or host one yourself!
        </p>
        <Link
          to="/register-donor"
          className="bg-red-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-red-700 transition"
        >
          Register as a Donor →
        </Link>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 text-white py-12 text-center">
        <p className="text-slate-400">
          &copy; {new Date().getFullYear()} LifeLink. All rights reserved.
        </p>
      </footer>
    </div>
  );
};

export default FindDrive;
