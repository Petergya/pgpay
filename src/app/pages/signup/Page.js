// pages/signup.js
import { useState } from 'react';
import axios from 'axios';
import Nav from '../components/Nav';

export default function Signup() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleSignup = async () => {
    if (password !== confirmPassword) {
      alert('Passwords do not match');
      return;
    }

    try {
      setIsLoading(true);
      const response = await axios.post('/api/signup', { email, password });
      alert('Signup successful');
      // Redirect to login or home
    } catch (error) {
      alert('Failed to signup');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-100">
      <Nav />
      <div className="flex flex-col items-center justify-center min-h-screen">
        <h2 className="text-2xl font-bold mb-4">Signup</h2>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="border p-2 mb-4 w-full max-w-xs"
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="border p-2 mb-4 w-full max-w-xs"
        />
        <input
          type="password"
          placeholder="Confirm Password"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
          className="border p-2 mb-4 w-full max-w-xs"
        />
        <button
          onClick={handleSignup}
          disabled={isLoading}
          className={`bg-blue-500 text-white px-4 py-2 rounded-lg ${isLoading ? 'opacity-50' : ''}`}
        >
          {isLoading ? 'Signing up...' : 'Signup'}
        </button>
      </div>
    </div>
  );
}
