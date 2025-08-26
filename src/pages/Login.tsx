import React, { useState } from 'react';
import { LogIn, Eye, EyeOff, Mail, Lock } from 'lucide-react';

interface LoginProps {
  onNavigate: (page: string) => void;
  onLoginSuccess: () => void; // ✅ Added for App-level login state
}

const Login: React.FC<LoginProps> = ({ onNavigate, onLoginSuccess }) => {
  const [formData, setFormData] = useState({ email: '', password: '' });
  const [showPassword, setShowPassword] = useState(false);
  const [rememberMe, setRememberMe] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const storedUserJSON = localStorage.getItem('petheaven_user');
    if (!storedUserJSON) {
      alert('No account found. Please sign up first.');
      return;
    }

    const storedUser = JSON.parse(storedUserJSON);
    if (
      storedUser.email === formData.email &&
      storedUser.password === formData.password
    ) {
      alert(`Welcome back, ${storedUser.firstName || 'Pet Lover'}!`);
      
      // Save "logged in" state for persistence if Remember Me is on
      if (rememberMe) {
        localStorage.setItem('petheaven_loggedIn', 'true');
      }

      // ✅ Call parent App to set loggedIn state and navigate to Home
      onLoginSuccess();
    } else {
      alert('Invalid email or password!');
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 to-blue-50 py-16">
      <div className="max-w-md mx-auto bg-white rounded-xl shadow-lg p-8">
        {/* Header */}
        <div className="text-center mb-8">
          <div className="w-16 h-16 bg-gradient-to-br from-orange-400 to-orange-600 rounded-full flex items-center justify-center mx-auto mb-4">
            <LogIn className="w-8 h-8 text-white" />
          </div>
          <h1 className="text-3xl font-bold text-gray-800 mb-2">Welcome Back</h1>
          <p className="text-gray-600">Sign in to your Pet Heaven account</p>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Email */}
          <div>
            <label>Email Address</label>
            <div className="relative">
              <Mail className="absolute left-3 top-3 text-gray-400 w-5 h-5" />
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full pl-10 border p-2 rounded"
              />
            </div>
          </div>

          {/* Password */}
          <div>
            <label>Password</label>
            <div className="relative">
              <Lock className="absolute left-3 top-3 text-gray-400 w-5 h-5" />
              <input
                type={showPassword ? 'text' : 'password'}
                name="password"
                value={formData.password}
                onChange={handleChange}
                required
                className="w-full pl-10 pr-10 border p-2 rounded"
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-3 text-gray-400"
              >
                {showPassword ? <EyeOff /> : <Eye />}
              </button>
            </div>
          </div>

          {/* Remember Me */}
          <label className="flex items-center space-x-2">
            <input
              type="checkbox"
              checked={rememberMe}
              onChange={(e) => setRememberMe(e.target.checked)}
            />
            <span>Remember me</span>
          </label>

          {/* Submit */}
          <button
            type="submit"
            className="bg-orange-500 text-white px-4 py-2 rounded w-full hover:bg-orange-600"
          >
            Sign In
          </button>
        </form>

        {/* Navigation */}
        <div className="mt-6 text-center">
          <button
            onClick={() => onNavigate('signup')}
            className="text-orange-600 hover:underline"
          >
            Create New Account
          </button>
        </div>
      </div>
    </div>
  );
};

export default Login;