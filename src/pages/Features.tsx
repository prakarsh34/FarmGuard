import React, { useEffect } from "react";

// --- SVG Icons (replaces react-icons dependency) ---

const CloudSunRainIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-green-600 mb-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M7 18.27A3.5 3.5 0 0 1 3.5 15a3.5 3.5 0 0 1 3.5-3.5h.5a8 8 0 0 1 8-8 8 8 0 0 1 8 8h.5a3.5 3.5 0 0 1 0 7H7zM12 2v2m-5.66 1.34l-1.42 1.42M22 12h-2m-1.34 5.66l-1.42-1.42M12 18.27V22m-4-6.27v4m4-4v4"></path>
  </svg>
);

const LeafIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-green-600 mb-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
    <path d="M12 12v-2a4 4 0 0 1 4-4h0"></path>
  </svg>
);

const WaterIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-green-600 mb-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 2.69l5.66 5.66a8 8 0 1 1-11.31 0L12 2.69z"></path>
  </svg>
);

const BugIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-green-600 mb-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M20 8.7c0-2.2-1.8-4-4-4h-1.5c-1.2 0-2.3.7-2.8 1.8l-1.4 3.1c-.2.5-.7.8-1.3.8h-1c-.6 0-1.1-.3-1.3-.8L5.3 6.5C4.8 5.4 3.7 4.7 2.5 4.7H1c-2.2 0-4 1.8-4 4v.2c0 1.1.9 2 2 2h1v1c0 2.2 1.8 4 4 4h8c2.2 0 4-1.8 4-4v-1h1c1.1 0 2-.9 2-2V8.7zM7 15v-4m10 4v-4m-5-4V3"></path>
  </svg>
);

const ChartLineIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-green-600 mb-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M3 3v18h18"></path>
    <path d="M18.7 8.3l-4.4 4.4-3.4-3.4-4.4 4.4"></path>
  </svg>
);

const TractorIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-green-600 mb-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M5 11v-1a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v1h2a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2zm0 0h14M7 11V5a2 2 0 0 1 2-2h2M17 11V8m-5 8a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-8 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4z"></path>
  </svg>
);

const DollarSignIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-green-600 mb-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 1v22M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path>
  </svg>
);

const FileAltIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-green-600 mb-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
    <polyline points="14 2 14 8 20 8"></polyline>
    <line x1="16" y1="13" x2="8" y2="13"></line>
    <line x1="16" y1="17" x2="8" y2="17"></line>
    <polyline points="10 9 9 9 8 9"></polyline>
  </svg>
);

// --- Detailed Features Data ---
const detailedFeatures = [
  {
    icon: <CloudSunRainIcon />,
    title: "Real-Time Weather Forecasting",
    description: "Access hyper-local, real-time weather forecasts and historical data to plan your farming activities with precision. Avoid risks from sudden weather changes.",
  },
  {
    icon: <LeafIcon />,
    title: "AI-Powered Soil Analysis",
    description: "Our AI analyzes soil data, including moisture and nutrient levels, to provide clear recommendations for fertilization and soil health management.",
  },
  {
    icon: <WaterIcon />,
    title: "Optimized Irrigation Scheduling",
    description: "Conserve water and ensure crop health. FarmGuard calculates the exact amount of water your crops need based on weather, soil type, and growth stage.",
  },
  {
    icon: <BugIcon />,
    title: "Pest & Disease Prediction",
    description: "Get early warnings about potential pest and disease outbreaks. Our predictive models help you take preventive action, saving your crops and reducing pesticide use.",
  },
  {
    icon: <ChartLineIcon />,
    title: "Crop Yield Forecasting",
    description: "Make informed business decisions with accurate yield predictions. Our system analyzes growth patterns and environmental data to forecast your harvest.",
  },
  {
    icon: <TractorIcon />,
    title: "Personalized Crop Recommendations",
    description: "Receive tailored advice for your specific crops and farm conditions, from planting density to the best time for harvesting, maximizing your output.",
  },
   {
    icon: <DollarSignIcon />,
    title: "Market Price Tracking",
    description: "Connect to real-time market data to track crop prices. Decide the most profitable time to sell your produce and maximize your financial returns.",
  },
  {
    icon: <FileAltIcon />,
    title: "Automated Farm Reporting",
    description: "Generate comprehensive reports on resource usage, crop performance, and overall farm efficiency to help with planning and compliance.",
  },
];

const Features: React.FC = () => {
  return (
    <div className="font-sans bg-white text-slate-800">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-green-50 to-emerald-50 text-center py-20">
        <h1 className="text-4xl md:text-5xl font-extrabold mb-4">Core Features of FarmGuard</h1>
        <p className="text-lg text-slate-600 max-w-3xl mx-auto px-4">
          Explore the powerful, data-driven tools designed to enhance every aspect of your farming operation.
        </p>
      </section>

      {/* Features Grid */}
      <section className="py-20 container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
          {detailedFeatures.map((feature, index) => (
            <div
              key={index}
              className="bg-white p-8 rounded-xl shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 flex items-start space-x-6"
            >
              <div className="flex-shrink-0">
                {feature.icon}
              </div>
              <div>
                <h3 className="text-2xl font-bold mb-2">{feature.title}</h3>
                <p className="text-slate-600 leading-relaxed">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

       {/* Call to Action Section */}
       <section className="bg-green-600 text-white text-center py-20">
            <div className="container mx-auto px-4">
                <h2 className="text-4xl font-bold mb-4">Ready to Transform Your Farm?</h2>
                <p className="text-lg mb-8 max-w-2xl mx-auto">
                    Join hundreds of farmers who are using data to grow more, save resources, and increase profits.
                </p>
                <a
                    href="/dashboard"
                    className="bg-white text-green-600 px-8 py-4 rounded-lg font-bold text-lg hover:bg-gray-100 transition-colors"
                >
                    Get Started Now
                </a>
            </div>
        </section>
    </div>
  );
};

export default Features;

