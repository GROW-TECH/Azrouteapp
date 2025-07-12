'use client';
import React, { useState } from 'react';
import Image from 'next/image';


const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle login logic
    console.log('Email:', email, 'Password:', password);
  };

  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-white text-center px-4">
      {/* Logo & Branding */}
      <div className="flex flex-col items-center space-y-2 mb-8">
        <Image
  src="/image/logo.png"
  alt="Azroute Logo"
  width={100}
  height={100}
/>
       
      </div>

      {/* Login Heading */}
      <h2 className="text-2xl font-semibold mb-6">Login</h2>

      {/* Login Form */}
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-sm space-y-4 text-left"
      >
        <input
          type="email"
          placeholder="Email Address"
          className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />

        <input
          type="password"
          placeholder="Password"
          className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />

        <div className="text-sm text-right text-blue-700 cursor-pointer hover:underline">
          Forgot password?
        </div>

        <button
          type="submit"
          className="w-full bg-[#0a1a3c] text-white py-2 rounded font-semibold hover:bg-[#0c2456]"
        >
          Login
        </button>
      </form>
    </div>
  );
};

export default Login;
