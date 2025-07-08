/* eslint-disable @typescript-eslint/no-unused-vars */
"use client";

import React, { FC, useState } from "react";
import { motion } from "framer-motion";
import gsap from "gsap";
import emailjs from "@emailjs/browser";

const ContactPage: FC = () => {
  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [message, setMessage] = useState<string>("");
  const [success, setSuccess] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);

    emailjs
      .send(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,
        {
          from_name: name,
          from_email: email,
          message,
        },
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!
      )
      .then(() => {
        setSuccess(true);
        setName("");
        setEmail("");
        setMessage("");
        setLoading(false);

        setTimeout(() => setSuccess(false), 4000);
      })
      .catch((error) => {
        console.error("Failed to send message:", error);
        setLoading(false);
      });
  };

  return (
    <div
      className="flex flex-col items-center justify-center min-h-screen px-4 text-center overflow-hidden"
      style={{
        backgroundColor: "#000",
        backgroundImage:
          "linear-gradient(90deg, rgba(255,255,255,0.05) 1px, transparent 1px), linear-gradient(rgba(255,255,255,0.05) 1px, transparent 1px)",
        backgroundSize: "40px 40px",
      }}
    >
      <motion.h1
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-4xl md:text-6xl font-bold mb-4 text-[#d8c499]"
        style={{fontFamily: "neuro"}}
      >
        Get in Touch
      </motion.h1>

      <motion.p
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.6 }}
        className="text-lg text-[#e8dcc0] max-w-xl mb-10"
        style={{fontFamily: "nolinga"}}
      >
        Let’s connect! Drop a message and I’ll get back to you soon.
      </motion.p>

      <motion.form
        onSubmit={handleSubmit}
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.4, duration: 0.6 }}
        className="w-full max-w-xl bg-[#111] p-8 rounded-2xl shadow-lg space-y-5 text-left"
      >
        <input
          type="text"
          placeholder="Your Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="w-full p-4 border border-gray-700 bg-black text-[#d8c499] rounded placeholder-[#d8c499] focus:outline-none focus:ring-2 focus:ring-[#bc9153]"
          style={{fontFamily: "nolinga"}}
        />
        <input
          type="email"
          placeholder="Your Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full p-4 border border-gray-700 bg-black text-[#d8c499] rounded placeholder-[#d8c499] focus:outline-none focus:ring-2 focus:ring-[#bc9153]"
          style={{fontFamily: "nolinga"}}
        />
        <textarea
          placeholder="Your Message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          className="w-full p-4 border border-gray-700 bg-black text-[#d8c499] rounded placeholder-[#d8c499] h-40 resize-none focus:outline-none focus:ring-2 focus:ring-[#bc9153]"
          style={{fontFamily: "nolinga"}}
        ></textarea>

        <button
          type="submit"
          disabled={loading}
          className="w-full py-4 cursor-pointer bg-[#bc9153] text-black font-semibold rounded-lg hover:bg-[#a17b45] transition duration-300 flex justify-center items-center gap-2"
          style={{fontFamily: "neuro"}}
        >
          {loading ? (
            <>
              <svg
                className="w-5 h-5 animate-spin"
                viewBox="0 0 24 24"
                fill="none"
              >
                <circle
                  className="opacity-25"
                  cx="12"
                  cy="12"
                  r="10"
                  stroke="currentColor"
                  strokeWidth="4"
                ></circle>
                <path
                  className="opacity-75"
                  fill="currentColor"
                  d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"
                ></path>
              </svg>
              Sending...
            </>
          ) : (
            "Send Message"
          )}
        </button>

        {success && (
          <p className="text-green-400 mt-4 text-center">
            ✅ Message sent successfully!
          </p>
        )}
      </motion.form>
    </div>
  );
};

export default ContactPage;
