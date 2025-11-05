// src/pages/GetStarted.tsx
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { db } from "../firebase"; // ✅ import Firestore
import { doc, setDoc } from "firebase/firestore";

// --- SVG Icons (unchanged) ---
const UserIcon = () => <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" /></svg>;
const LocationIcon = () => <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>;
const SeedlingIcon = () => <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>;
const CheckCircleIcon = () => <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>;

const Step = ({
  icon,
  title,
  stepNumber,
  isActive,
}: {
  icon: React.ReactNode;
  title: string;
  stepNumber: number;
  isActive: boolean;
}) => (
  <div className={`flex items-center space-x-3 ${isActive ? "text-green-600" : "text-gray-400"}`}>
    <div
      className={`w-10 h-10 rounded-full flex items-center justify-center border-2 ${
        isActive ? "border-green-600 bg-green-50" : "border-gray-300"
      }`}
    >
      {icon}
    </div>
    <div>
      <p className="text-sm font-semibold">STEP {stepNumber}</p>
      <h3 className="text-lg font-bold">{title}</h3>
    </div>
  </div>
);

const GetStarted: React.FC = () => {
  const navigate = useNavigate();
  const [step, setStep] = useState(1);
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    farmerName: "",
    farmName: "",
    location: "",
    primaryCrop: "",
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const nextStep = () => setStep((prev) => (prev < 4 ? prev + 1 : prev));
  const prevStep = () => setStep((prev) => (prev > 1 ? prev - 1 : prev));

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      // Save to localStorage
      localStorage.setItem("farmerData", JSON.stringify(formData));

      // ✅ Save to Firestore (creates or updates doc)
      const docRef = doc(db, "farmers", formData.farmerName.replace(/\s+/g, "_"));
      await setDoc(docRef, {
        ...formData,
        createdAt: new Date(),
      });

      console.log("✅ Farmer data saved to Firestore successfully");
      navigate("/dashboard", { state: { farmerData: formData }, replace: true });
    } catch (err) {
      console.error("❌ Firestore update failed:", err);
      alert("Failed to save data to Firebase. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const isNextDisabled = () => {
    switch (step) {
      case 1:
        return !formData.farmerName || !formData.farmName;
      case 2:
        return !formData.location;
      case 3:
        return !formData.primaryCrop;
      default:
        return false;
    }
  };

  return (
    <div className="font-sans bg-gray-50 min-h-screen flex items-center justify-center p-4">
      <div className="w-full max-w-4xl bg-white rounded-2xl shadow-xl overflow-hidden md:flex">
        {/* Left: Steps */}
        <div className="w-full md:w-1/3 bg-gradient-to-b from-green-500 to-emerald-600 p-8 text-white">
          <h2 className="text-2xl font-bold mb-8">Farm Setup</h2>
          <div className="space-y-8">
            <Step icon={<UserIcon />} title="Your Profile" stepNumber={1} isActive={step >= 1} />
            <Step icon={<LocationIcon />} title="Farm Location" stepNumber={2} isActive={step >= 2} />
            <Step icon={<SeedlingIcon />} title="Primary Crop" stepNumber={3} isActive={step >= 3} />
          </div>
        </div>

        {/* Right: Form */}
        <div className="w-full md:w-2/3 p-8 md:p-12">
          <form onSubmit={handleSubmit}>
            {/* Step 1 */}
            {step === 1 && (
              <div>
                <h2 className="text-3xl font-bold mb-2">Welcome to FarmGuard!</h2>
                <p className="text-gray-600 mb-6">Let's start by setting up your profile.</p>
                <div className="space-y-4">
                  <div>
                    <label htmlFor="farmerName" className="font-semibold">Your Name</label>
                    <input
                      id="farmerName"
                      name="farmerName"
                      value={formData.farmerName}
                      onChange={handleInputChange}
                      className="w-full mt-1 p-3 border rounded-lg"
                      placeholder="e.g., Ramesh Kumar"
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="farmName" className="font-semibold">Farm Name</label>
                    <input
                      id="farmName"
                      name="farmName"
                      value={formData.farmName}
                      onChange={handleInputChange}
                      className="w-full mt-1 p-3 border rounded-lg"
                      placeholder="e.g., Green Valley Farm"
                      required
                    />
                  </div>
                </div>
              </div>
            )}

            {/* Step 2 */}
            {step === 2 && (
              <div>
                <h2 className="text-3xl font-bold mb-2">Pinpoint Your Farm</h2>
                <p className="text-gray-600 mb-6">This helps us provide accurate weather and soil data.</p>
                <div>
                  <label htmlFor="location" className="font-semibold">Location or Pincode</label>
                  <input
                    id="location"
                    name="location"
                    value={formData.location}
                    onChange={handleInputChange}
                    className="w-full mt-1 p-3 border rounded-lg"
                    placeholder="e.g., Kattankulathur or 603203"
                    required
                  />
                </div>
              </div>
            )}

            {/* Step 3 */}
            {step === 3 && (
              <div>
                <h2 className="text-3xl font-bold mb-2">What's Your Main Crop?</h2>
                <p className="text-gray-600 mb-6">You can add more later in your dashboard.</p>
                <div>
                  <label htmlFor="primaryCrop" className="font-semibold">Primary Crop</label>
                  <select
                    id="primaryCrop"
                    name="primaryCrop"
                    value={formData.primaryCrop}
                    onChange={handleInputChange}
                    className="w-full mt-1 p-3 border rounded-lg bg-white"
                    required
                  >
                    <option value="">Select a crop</option>
                    <option value="Rice">Rice</option>
                    <option value="Wheat">Wheat</option>
                    <option value="Corn">Corn (Maize)</option>
                    <option value="Tomatoes">Tomatoes</option>
                    <option value="Sugarcane">Sugarcane</option>
                    <option value="Cotton">Cotton</option>
                  </select>
                </div>
              </div>
            )}

            {/* Step 4 */}
            {step === 4 && (
              <div className="text-center">
                <CheckCircleIcon />
                <h2 className="text-3xl font-bold mt-4">All Set!</h2>
                <p className="text-gray-600 my-4">Your FarmGuard profile has been created successfully.</p>
                <button
                  type="submit"
                  disabled={loading}
                  className="w-full bg-green-600 text-white font-bold py-3 px-6 rounded-lg hover:bg-green-700 transition-colors"
                >
                  {loading ? "Saving..." : "Go to Dashboard"}
                </button>
              </div>
            )}

            {/* Nav Buttons */}
            {step < 4 && (
              <div className="mt-8 flex justify-between">
                <button
                  type="button"
                  onClick={prevStep}
                  className={`font-bold py-3 px-6 rounded-lg ${
                    step === 1 ? "invisible" : "bg-gray-200 hover:bg-gray-300"
                  }`}
                >
                  Back
                </button>
                {step < 3 ? (
                  <button
                    type="button"
                    onClick={nextStep}
                    disabled={isNextDisabled()}
                    className="bg-green-600 text-white font-bold py-3 px-6 rounded-lg hover:bg-green-700 disabled:bg-gray-400"
                  >
                    Next
                  </button>
                ) : (
                  <button
                    type="submit"
                    disabled={isNextDisabled() || loading}
                    className="bg-green-600 text-white font-bold py-3 px-6 rounded-lg hover:bg-green-700 disabled:bg-gray-400"
                  >
                    {loading ? "Saving..." : "Finish Setup"}
                  </button>
                )}
              </div>
            )}
          </form>
        </div>
      </div>
    </div>
  );
};

export default GetStarted;
