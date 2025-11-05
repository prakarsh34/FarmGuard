import React, { useState, useRef, useEffect } from "react";
import { Send } from "lucide-react";
import { motion } from "framer-motion";

// Message type definition
type Message = {
  text: string;
  sender: "user" | "bot";
};

const Chatbot: React.FC = () => {
  const [messages, setMessages] = useState<Message[]>([
    {
      text: "👋 Namaste! I’m your FarmGuard Assistant. Ask me about weather, crops, soil, or market tips!",
      sender: "bot",
    },
  ]);

  const [input, setInput] = useState("");
  const chatEndRef = useRef<HTMLDivElement | null>(null);
  const inputRef = useRef<HTMLInputElement | null>(null);

  // Scroll to latest message
  const scrollToBottom = () => {
    chatEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  useEffect(() => {
    inputRef.current?.focus();
  }, []);

  const handleSend = () => {
    if (!input.trim()) return;

    const userMsg: Message = { text: input.trim(), sender: "user" };
    setMessages((prev) => [...prev, userMsg]);
    setInput("");

    setTimeout(() => {
      const botReply: Message = {
        text: getBotResponse(input.trim()),
        sender: "bot",
      };
      setMessages((prev) => [...prev, botReply]);
    }, 700);
  };

  const getBotResponse = (msg: string): string => {
    msg = msg.toLowerCase();

    // --- Weather & Climate ---
    if (msg.includes("weather") || msg.includes("temperature"))
      return "🌦 Today’s weather looks pleasant! Mild temperature with light winds — great for field work.";
    if (msg.includes("rain") || msg.includes("monsoon"))
      return "🌧 The forecast shows light to moderate rain in the next 2 days. Keep your crops covered and check drainage.";

    // --- Soil & Fertility ---
    if (msg.includes("soil") && msg.includes("health"))
      return "🪴 Healthy soil = strong crops! Ensure proper pH balance and add compost every 2 weeks.";
    if (msg.includes("fertilizer") || msg.includes("compost"))
      return "🌱 Use organic compost like cow dung or vermicompost. Avoid over-fertilizing; it can harm roots.";
    if (msg.includes("ph"))
      return "🧪 Ideal soil pH for most crops is between 6.0 and 7.5. You can use lime to reduce acidity.";

    // --- Crops & Irrigation ---
    if (msg.includes("crop") && msg.includes("suggest"))
      return "🌾 Try Rice, Maize, or Pulses depending on your region’s rainfall and soil type.";
    if (msg.includes("irrigation") || msg.includes("water"))
      return "💧 Drip irrigation is the most efficient method — saves 30–40% water!";
    if (msg.includes("sow") || msg.includes("plant"))
      return "🌿 The best time to sow depends on rainfall. Generally, June–July is ideal for Kharif crops.";

    // --- Pest & Disease Control ---
    if (msg.includes("pest") || msg.includes("insect"))
      return "🐛 Watch out for aphids and leaf miners this season. Neem oil spray works well every 10 days.";
    if (msg.includes("fungus") || msg.includes("disease"))
      return "🍃 Use organic antifungal sprays like baking soda solution to prevent leaf spots and mildew.";

    // --- Market & Economy ---
    if (msg.includes("price") || msg.includes("market"))
      return "💹 Tomato and wheat prices are up by 8–10% this week. Great time to sell your produce!";
    if (msg.includes("loan") || msg.includes("subsidy"))
      return "💰 The government offers PM Kisan Yojana and fertilizer subsidies. You can apply via your local Krishi office.";

    // --- Sustainability & Technology ---
    if (msg.includes("drone") || msg.includes("technology"))
      return "🚁 Drones can spray pesticides evenly and save up to 80% of your time.";
    if (msg.includes("organic"))
      return "🌿 Organic farming helps retain soil fertility. Use compost, green manure, and natural pest control.";

    // --- Greetings ---
    if (msg.includes("hello") || msg.includes("hi") || msg.includes("namaste"))
      return "👋 Namaste! How can I assist you today with your farm?";
    if (msg.includes("thank"))
      return "🙏 You’re most welcome! I’m happy to help, farmer ji.";
    if (msg.includes("bye"))
      return "👋 Goodbye! Wishing you a great harvest season.";

    // Default fallback
    return "🤖 I’m still learning! Try asking about weather, soil, crops, pests, or market prices.";
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") handleSend();
  };

  return (
    <div className="flex flex-col h-[85vh] w-full max-w-3xl mx-auto bg-[#e5ddd5] rounded-xl shadow-lg overflow-hidden">
      {/* Header */}
      <div className="bg-[#075E54] text-white px-5 py-3 flex items-center justify-between">
        <div className="flex items-center space-x-3">
          <div className="bg-white/20 rounded-full w-8 h-8 flex items-center justify-center text-white font-semibold">
            🌾
          </div>
          <h2 className="text-lg font-semibold">FarmGuard Assistant</h2>
        </div>
        <span className="text-sm opacity-80">Online</span>
      </div>

      {/* Chat Messages */}
      <div className="flex-1 overflow-y-auto px-4 py-3 space-y-3 scrollbar-thin scrollbar-thumb-gray-400 scrollbar-track-transparent">
        {messages.map((msg, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.2 }}
            className={`flex ${
              msg.sender === "user" ? "justify-end" : "justify-start"
            }`}
          >
            <div
              className={`max-w-[75%] px-4 py-2 rounded-lg shadow text-sm leading-relaxed ${
                msg.sender === "user"
                  ? "bg-[#dcf8c6] text-gray-800 rounded-br-none"
                  : "bg-white text-gray-800 rounded-bl-none"
              }`}
            >
              {msg.text}
              <div className="text-[10px] text-gray-500 text-right mt-1">
                {new Date().toLocaleTimeString([], {
                  hour: "2-digit",
                  minute: "2-digit",
                })}
              </div>
            </div>
          </motion.div>
        ))}
        <div ref={chatEndRef} />
      </div>

      {/* Input Box */}
      <div className="bg-[#f0f0f0] flex items-center p-3 border-t">
        <input
          type="text"
          placeholder="Ask about crops, weather, or soil..."
          value={input}
          ref={inputRef}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={handleKeyDown}
          className="flex-1 px-4 py-2 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-500"
        />
        <button
          onClick={handleSend}
          className="ml-3 bg-[#075E54] text-white p-2 rounded-full hover:bg-green-700 transition"
        >
          <Send size={18} />
        </button>
      </div>
    </div>
  );
};

export default Chatbot;
