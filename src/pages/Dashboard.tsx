import React, { useState, useEffect } from 'react';
import { auth, db } from '../firebase';
import { doc, getDoc } from 'firebase/firestore';
import { onAuthStateChanged } from 'firebase/auth';
import axios from 'axios';

// --- Types ---
type WeatherResponse = {
  main: { temp: number; humidity: number };
  wind: { speed: number };
  weather: { main: string; description: string }[];
  name: string;
};

type UserData = {
  farmerName: string;
  farmName: string;
  location: string;
  primaryCrop: string;
};

// --- Icons ---
const SunIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 text-yellow-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="5" />
    <line x1="12" y1="1" x2="12" y2="3" />
    <line x1="12" y1="21" x2="12" y2="23" />
    <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" />
    <line x1="18.36" y1="18.36" x2="19.78" y2="19.78" />
    <line x1="1" y1="12" x2="3" y2="12" />
    <line x1="21" y1="12" x2="23" y2="12" />
    <line x1="4.22" y1="19.78" x2="5.64" y2="18.36" />
    <line x1="18.36" y1="5.64" x2="19.78" y2="4.22" />
  </svg>
);

const PartlyCloudyIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 text-gray-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 5.5A5.5 5.5 0 0 1 17.5 11H18a4 4 0 1 1 0 8H7a5 5 0 0 1-1-9.9V9a5.5 5.5 0 0 1 5.5-5.5z" />
  </svg>
);

// Alerts icons
const BugAlertIcon = () => <span className="text-red-500 mr-3">🐛</span>;
const WaterAlertIcon = () => <span className="text-blue-500 mr-3">💧</span>;
const DollarAlertIcon = () => <span className="text-green-500 mr-3">💵</span>;

// --- Dashboard Component ---
const Dashboard: React.FC = () => {
  const [currentTime, setCurrentTime] = useState(new Date());
  const [userData, setUserData] = useState<UserData | null>(null);
  const [weather, setWeather] = useState<{ temp: number; humidity: number; wind: number; description: string; city: string } | null>(null);

  // Clock
  useEffect(() => {
    const timer = setInterval(() => setCurrentTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  // Fetch user data from Firestore
  useEffect(() => {
    const fetchUserData = async () => {
      onAuthStateChanged(auth, async (user) => {
        if (user) {
          const docRef = doc(db, 'farmers', user.uid);
          const docSnap = await getDoc(docRef);
          if (docSnap.exists()) {
            setUserData(docSnap.data() as UserData);
          }
        }
      });
    };
    fetchUserData();
  }, []);

  // Fetch weather data
  useEffect(() => {
    const fetchWeather = async () => {
      if (!userData) return;
      try {
        const res = await axios.get<WeatherResponse>(
          `https://api.openweathermap.org/data/2.5/weather?zip=${userData.location},IN&units=metric&appid=${process.env.REACT_APP_WEATHER_API_KEY}`
        );

        const { temp, humidity } = res.data.main;
        const wind = res.data.wind.speed;
        const description = res.data.weather[0].main;
        const city = res.data.name;

        setWeather({ temp, humidity, wind, description, city });
      } catch (err) {
        console.error(err);
      }
    };
    fetchWeather();
  }, [userData]);

  if (!userData || !weather) return <p className="text-center mt-20 text-xl">Loading dashboard...</p>;

  // Crop recommendations based on weather
  const cropRecs: string[] = [];
  if (weather.temp > 30) cropRecs.push('Irrigation needed frequently due to high temperature.');
  if (weather.humidity < 40) cropRecs.push('Consider moisture retention techniques.');
  if (weather.description.toLowerCase().includes('rain')) cropRecs.push('Check drainage to prevent waterlogging.');

  const alertsData = [
    { id: 1, type: 'High', message: 'High probability of Aphid infestation. Recommend neem oil spray.', icon: <BugAlertIcon /> },
    { id: 2, type: 'Medium', message: 'Soil moisture low. Irrigation recommended.', icon: <WaterAlertIcon /> },
    { id: 3, type: 'Info', message: 'Market price for tomatoes is up by 8%.', icon: <DollarAlertIcon /> }
  ];

  return (
    <div className="font-sans bg-gray-50 min-h-screen p-4 md:p-8">
      <div className="container mx-auto">
        {/* Header */}
        <header className="mb-8">
          <h1 className="text-4xl font-bold text-gray-800">Welcome back, {userData.farmerName}!</h1>
          <p className="text-gray-500 text-lg">
            {currentTime.toLocaleDateString('en-US', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })} | {currentTime.toLocaleTimeString()}
          </p>
          <p className="text-gray-600 text-lg mt-1">Location: {weather.city}, Karnataka</p>
        </header>

        {/* Main Grid */}
        <main className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Column */}
          <div className="lg:col-span-2 space-y-8">
            {/* Weather Widget */}
            <section className="bg-white p-6 rounded-xl shadow-lg flex flex-col md:flex-row items-center justify-between">
              <div>
                <p className="text-lg text-gray-600">{weather.city}</p>
                <p className="text-6xl font-bold text-gray-800">{Math.round(weather.temp)}°C</p>
                <p className="text-xl text-gray-700">{weather.description}</p>
                <p className="text-sm text-gray-500">Humidity: {weather.humidity}% | Wind: {weather.wind} km/h</p>
              </div>
              <div className="mt-4 md:mt-0">
                {weather.description.toLowerCase().includes('cloud') ? <PartlyCloudyIcon /> : <SunIcon />}
              </div>
            </section>

            {/* Crop Recommendations */}
            <section className="bg-white p-6 rounded-xl shadow-lg">
              <h2 className="text-2xl font-bold mb-4">Crop Recommendations</h2>
              <ul className="list-disc pl-5 space-y-2">
                {cropRecs.length > 0 ? cropRecs.map((rec, idx) => <li key={idx}>{rec}</li>) : <li>All conditions are optimal.</li>}
              </ul>
            </section>
          </div>

          {/* Right Column (Alerts) */}
          <div className="lg:col-span-1">
            <section className="bg-white p-6 rounded-xl shadow-lg">
              <h2 className="text-2xl font-bold mb-4">Actionable Alerts</h2>
              <div className="space-y-4">
                {alertsData.map(alert => (
                  <div key={alert.id} className={`p-4 rounded-lg border-l-4 ${alert.type === 'High' ? 'border-red-500' : alert.type === 'Medium' ? 'border-yellow-500' : 'border-blue-500'} bg-gray-50 flex items-start`}>
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
