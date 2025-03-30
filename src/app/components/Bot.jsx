"use client"


import axios from 'axios';
import React, { useState } from 'react'
import { motion } from 'motion/react'
import ReactMarkdown from 'react-markdown'
import { BotIcon, ChartArea, ChartBarStackedIcon, ChevronDown, Cross } from 'lucide-react';
function Bot() {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");
  const [isOpen, setIsOpen] = useState(false);

  const sendMessage = async () => {
    if (!input.trim()) return;

    const userMessage = { role: "user", content: input };
    setMessages((prev) => [...prev, userMessage]);
    setInput("");

    try {
      const response = await axios.post(
        `https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=${process.env.NEXT_PUBLIC_GEMINI_API_KEY}`,
        {
          contents: [{ parts: [{ text: input }] }],
        }
      );

      const rawText =
        response.data?.candidates?.[0]?.content?.parts?.[0]?.text || "No response";

      const botMessage = { role: "bot", content: rawText };
      setMessages((prev) => [...prev, botMessage]);
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <div className="fixed bottom-5 right-5">
      {!isOpen ? (
        <button
          onClick={() => setIsOpen(true)}
          className="bg-green-500 flex items-center justify-center gap-2 text-xl font-semibold text-white px-4 py-2 rounded-full shadow-lg"
        >
          <BotIcon /> Ask CredScrap
        </button>
      ) : (
        <motion.div
          initial={{ opacity: 0, y: 20, height: 0, width: 0 }}
          animate={{ opacity: 1, y: 20, height: 350, width: 300 }}
          exit={{ opacity: 0, y: 20, height: 0, width: 0 }}
          transition={{ duration: 0.3 }}
          className="fixed bottom-10 overflow-hidden right-5 max-w-lg p-4 bg-gray-900/50 backdrop-blur-2xl  text-white rounded-lg shadow-lg"
        >
          <div className="flex justify-between mb-2">
            <h2 className="text-xl font-bold">CredScrap AI</h2>
            <button onClick={() => setIsOpen(false)} className="text-gray-400"><ChevronDown /></button>
          </div>
          <div className="h-64 overflow-y-auto scrollbar-hidden p-2 bg-gray-800 rounded-md mb-2">
            {messages.map((msg, index) => (
              <div key={index} className="mb-2">
                <strong className={msg.role === "user" ? "text-blue-400" : "text-green-400"}>
                  {msg.role === "user" ? "You: " : "CredScrap: "}
                </strong>
                <ReactMarkdown>{msg.content}</ReactMarkdown>
              </div>
            ))}
          </div>
          <div className="flex">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              className="flex-1 p-2 text-gray-300 outline-0 rounded-l-md"
              placeholder="Ask something..."
            />
            <button
              onClick={sendMessage}
              className="bg-green-500 px-4 py-2 rounded-r-md disabled:opacity-50"
              disabled={!input.trim()}
            >
              Send
            </button>
          </div>
        </motion.div>
      )}
    </div>
  );
}

export default Bot
