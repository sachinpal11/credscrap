"use client"

import { useState, useEffect, useRef } from "react";
import axios from "axios";

export default function Chatbot() {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");
  const chatEndRef = useRef(null);

  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const handleSend = async () => {
    if (input.trim() === "") return;

    const newMessages = [...messages, { text: input, sender: "user" }];
    setMessages(newMessages);
    setInput("");

    setTimeout(async () => {
      const botReply = await getBotResponse(input);
      setMessages([...newMessages, { text: botReply, sender: "bot" }]);
    }, 500);
  };

  const getBotResponse = async (message) => {
    const lowerMessage = message.toLowerCase();

    if (lowerMessage.includes("hello") || lowerMessage.includes("hi")) {
      return "Hello! Welcome to Cred Scrap. How can I assist you today?";
    }

    if (lowerMessage.includes("cred scrap")) {
      return "Cred Scrap is here to help you with all your e-waste management needs. How can we assist you?";
    }

    try {
      const wikiResponse = await axios.get(
        `https://en.wikipedia.org/api/rest_v1/page/summary/${encodeURIComponent(
          message
        )}`
      );

      if (wikiResponse.data.extract) return wikiResponse.data.extract;
    } catch (error) { }

    try {
      const whoResponse = await axios.get(
        `https://www.who.int/api/pages/search?query=${encodeURIComponent(
          message
        )}`
      );

      if (whoResponse.data && whoResponse.data.length > 0) {
        return whoResponse.data[0].title + " - " + whoResponse.data[0].description;
      }
    } catch (error) { }

    return "Sorry, I couldn't find relevant information.";
  };

  return (
    <div className="p-6 max-w-md mx-auto border rounded-xl shadow-lg bg-gradient-to-r from-gray-900 to-black text-white">
      <h2 className="text-center text-3xl font-bold mb-4 text-green-400">Cred Scrap Chatbot</h2>
      <div className="h-72 overflow-y-auto border-b mb-2 p-4 bg-gray-800 rounded-md shadow-md text-white">
        {messages.map((msg, index) => (
          <div
            key={index}
            className={`p-3 my-2 rounded-lg max-w-xs ${msg.sender === "user" ? "bg-green-500 text-white self-end ml-auto" : "bg-gray-600 text-white"
              }`}
          >
            {msg.text}
          </div>
        ))}
        <div ref={chatEndRef} />
      </div>
      <div className="flex mt-3">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          className="flex-grow p-3 border rounded-l-lg text-black"
          placeholder="Ask me anything..."
        />
        <button
          onClick={handleSend}
          className="bg-green-500 text-white p-3 rounded-r-lg hover:bg-green-600 transition duration-300"
        >Send</button>
      </div>
    </div>
  );
}