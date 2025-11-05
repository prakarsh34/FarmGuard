import React, { useState, useEffect } from "react";

// --- SVG Icons ---
const SunIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="h-16 w-16 text-yellow-400"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <circle cx="12" cy="12" r="5"></circle>
    <line x1="12" y1="1" x2="12" y2="3"></line>
    <line x1="12" y1="21" x2="12" y2="23"></line>
    <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line>
    <line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line>
    <line x1="1" y1="12" x2="3" y2="12"></line>
    <line x1="21" y1="12" x2="23" y2="12"></line>
    <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line>
    <line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line>
  </svg>
);

const PartlyCloudyIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="h-16 w-16 text-gray-400"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M12 5.5A5.5 5.5 0 0 1 17.5 11H18a4 4 0 1 1 0 8H7a5 5 0 0 1-1-9.9V9a5.5 5.5 0 0 1 5.5-5.5z"></path>
  </svg>
);

const RainIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="h-8 w-8 text-blue-500"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M16 13.3A5 5 0 1 1 8 13.3M12 4v7m-2 2l-2 2m8-2l2 2m-4 0l-2 2"></path>
  </svg>
);

const SunForecastIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="h-8 w-8 text-yellow-400"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <circle cx="12" cy="12" r="5"></circle>
    <line x1="12" y1="1" x2="12" y2="3"></line>
    <line x1="12" y1="21" x2="12" y2="23"></line>
  </svg>
);

const CloudSunIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="h-8 w-8 text-gray-400"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M12 5.5A5.5 5.5 0 0 1 17.5 11H18a4 4 0 1 1 0 8H7a5 5 0 0 1-1-9.9V9a5.5 5.5 0 0 1 5.5-5.5z"></path>
  </svg>
);

const BugAlertIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="h-6 w-6 text-red-500 mr-3"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M20 8.7c0-2.2-1.8-4-4-4h-1.5c-1.2 0-2.3.7-2.8 1.8l-1.4 3.1c-.2.5-.7.8-1.3.8h-1c-.6 0-1.1-.3-1.3-.8L5.3 6.5C4.8 5.4 3.7 4.7 2.5 4.7H1c-2.2 0-4 1.8-4 4v.2c0 1.1.9 2 2 2h1v1c0 2.2 1.8 4 4 4h8c2.2 0 4-1.8 4-4v-1h1c1.1 0 2-.9 2-2V8.7z"></path>
  </svg>
);

const WaterAlertIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="h-6 w-6 text-blue-500 mr-3"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M12 2.69l5.66 5.66a8 8 0 1 1-11.31 0L12 2.69z"></path>
  </svg>
);

const DollarAlertIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="h-6 w-6 text-green-500 mr-3"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M12 1v22M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path>
  </svg>
);

// --- Mock Data ---
const weatherData = {
  location: "Kattankulathur, Tamil Nadu",
  temperature: 29,
  condition: "Partly Cloudy",
  humidity: 75,
  windSpeed: 15,
  forecast: [
    { day: "Today", temp: 31, icon: <SunForecastIcon /> },
    { day: "Fri", temp: 32, icon: <CloudSunIcon /> },
    { day: "Sat", temp: 30, icon: <RainIcon /> },
  ],
};

const alertsData = [
  {
    id: 1,
    type: "High",
    message:
      "High probability of Aphid infestation in Plot B. Recommend neem oil spray.",
    icon: <BugAlertIcon />,
  },
  {
    id: 2,
    type: "Medium",
    message:
      "Soil moisture in Plot A is low. Irrigation recommended within 24 hours.",
    icon: <WaterAlertIcon />,
  },
  {
    id: 3,
    type: "Info",
    message:
      "Market price for tomatoes is up by 8%. Consider harvesting soon.",
    icon: <DollarAlertIcon />,
  },
];

const cropsData = [
  {
    id: 1,
    name: "Plot A - Tomatoes",
    stage: "Flowering",
    moisture: "25%",
    health: "Good",
    alert: "Low Moisture",
  },
  {
    id: 2,
    name: "Plot B - Corn",
    stage: "Vegetative",
    moisture: "60%",
    health: "Excellent",
    alert: "Pest Warning",
  },
  {
    id: 3,
    name: "Plot C - Wheat",
    stage: "Grain Fill",
    moisture: "55%",
    health: "Good",
    alert: "None",
  },
];

const Dashboard: React.FC = () => {
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => setCurrentTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  const getAlertColor = (type: string) => {
    switch (type) {
      case "High":
        return "border-red-500";
      case "Medium":
        return "border-yellow-500";
      case "Info":
        return "border-blue-500";
      default:
        return "border-gray-300";
    }
  };

  return (
    <div className="font-sans bg-gray-50 min-h-screen p-4 md:p-8">
      <div className="container mx-auto">
        {/* Header */}
        <header className="mb-8">
          <h1 className="text-4xl font-bold text-gray-800">
            Welcome back, Farmer!
          </h1>
          <p className="text-gray-500 text-lg">
            {currentTime.toLocaleDateString("en-US", {
              weekday: "long",
              year: "numeric",
              month: "long",
              day: "numeric",
            })}{" "}
            | {currentTime.toLocaleTimeString()}
          </p>
        </header>

        {/* Main Grid */}
        <main className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Column */}
          <div className="lg:col-span-2 space-y-8">
            {/* Weather Widget */}
            <section className="bg-white p-6 rounded-xl shadow-lg">
              <h2 className="text-2xl font-bold mb-4">Weather Overview</h2>
              <div className="flex flex-col md:flex-row items-start md:items-center justify-between">
                <div>
                  <p className="text-lg text-gray-600">{weatherData.location}</p>
                  <p className="text-6xl font-bold text-gray-800">
                    {weatherData.temperature}°C
                  </p>
                  <p className="text-xl text-gray-700">
                    {weatherData.condition}
                  </p>
                </div>
                <div className="mt-4 md:mt-0">
                  <PartlyCloudyIcon />
                </div>
                <div className="w-full md:w-auto mt-4 md:mt-0">
                  <p>Humidity: {weatherData.humidity}%</p>
                  <p>Wind: {weatherData.windSpeed} km/h</p>
                </div>
              </div>
              <div className="mt-6 pt-4 border-t flex justify-around">
                {weatherData.forecast.map((f) => (
                  <div key={f.day} className="text-center">
                    <p className="font-bold">{f.day}</p>
                    {f.icon}
                    <p>{f.temp}°C</p>
                  </div>
                ))}
              </div>
            </section>

            {/* Crop Status Widget */}
            <section className="bg-white p-6 rounded-xl shadow-lg">
              <h2 className="text-2xl font-bold mb-4">Crop Status</h2>
              <div className="space-y-4">
                {cropsData.map((crop) => (
                  <div
                    key={crop.id}
                    className="p-4 border rounded-lg flex justify-between items-center"
                  >
                    <div>
                      <h3 className="font-bold text-lg">{crop.name}</h3>
                      <p className="text-sm text-gray-500">
                        Stage: {crop.stage} | Soil Moisture: {crop.moisture}
                      </p>
                    </div>
                    <div
                      className={`px-3 py-1 text-sm rounded-full ${
                        crop.alert !== "None"
                          ? "bg-red-100 text-red-700"
                          : "bg-green-100 text-green-700"
                      }`}
                    >
                      {crop.alert !== "None" ? crop.alert : "Healthy"}
                    </div>
                  </div>
                ))}
              </div>
            </section>
          </div>

          {/* Right Column (Alerts) */}
          <div className="lg:col-span-1">
            <section className="bg-white p-6 rounded-xl shadow-lg">
              <h2 className="text-2xl font-bold mb-4">Actionable Alerts</h2>
              <div className="space-y-4">
                {alertsData.map((alert) => (
                  <div
                    key={alert.id}
                    className={`p-4 rounded-lg border-l-4 ${getAlertColor(
                      alert.type
                    )} bg-gray-50 flex items-start`}
                  >
                    {alert.icon}
                    <div>
                      <h3 className="font-bold">{alert.type} Priority</h3>
                      <p className="text-sm text-gray-600">{alert.message}</p>
                    </div>
                  </div>
                ))}
              </div>
            </section>
          </div>
        </main>
      </div>
    </div>
  );
};

export default Dashboard;
