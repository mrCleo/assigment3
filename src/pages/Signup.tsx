import React, { useState } from 'react';
import { UserPlus, Eye, EyeOff, Mail, Lock, User, Phone } from 'lucide-react';

interface SignupProps {
  onNavigate: (page: string) => void;
}

const Signup: React.FC<SignupProps> = ({ onNavigate }) => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    password: '',
    confirmPassword: ''
  });
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [agreeToTerms, setAgreeToTerms] = useState(false);
  const [subscribeNewsletter, setSubscribeNewsletter] = useState(true);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (formData.password !== formData.confirmPassword) {
      alert('Passwords do not match!');
      return;
    }
    if (!agreeToTerms) {
      alert('Please agree to the Terms of Service and Privacy Policy');
      return;
    }

    // Save the user into localStorage (demo purpose)
    const userData = {
      email: formData.email,
      password: formData.password,
      firstName: formData.firstName,
      lastName: formData.lastName,
      phone: formData.phone
    };
    localStorage.setItem('petheaven_user', JSON.stringify(userData));

    alert('Account created successfully! Please log in.');
    onNavigate('login');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-blue-50 py-16">
      <div className="max-w-md mx-auto bg-white rounded-xl shadow-lg p-8">
        {/* Header */}
        <div className="text-center mb-8">
          <div className="w-16 h-16 bg-gradient-to-br from-green-400 to-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
            <UserPlus className="w-8 h-8 text-white" />
          </div>
          <h1 className="text-3xl font-bold text-gray-800 mb-2">Join Pet Heaven</h1>
          <p className="text-gray-600">Create your account to help pets find homes</p>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* First & Last Name */}
          <div className="grid grid-cols-2 gap-4">
            <input type="text" name="firstName" placeholder="First name" value={formData.firstName} onChange={handleChange} required className="border p-2 rounded" />
            <input type="text" name="lastName" placeholder="Last name" value={formData.lastName} onChange={handleChange} required className="border p-2 rounded" />
          </div>

          {/* Email */}
          <input type="email" name="email" placeholder="your.email@example.com" value={formData.email} onChange={handleChange} required className="border p-2 rounded w-full" />

          {/* Phone */}
          <input type="tel" name="phone" placeholder="+65 9123 4567" value={formData.phone} onChange={handleChange} required className="border p-2 rounded w-full" />

          {/* Password */}
          <div className="relative">
            <input type={showPassword ? 'text' : 'password'} name="password" placeholder="Password" value={formData.password} onChange={handleChange} required className="border p-2 rounded w-full" />
            <button type="button" onClick={() => setShowPassword(!showPassword)} className="absolute right-2 top-2 text-gray-500">
              {showPassword ? <EyeOff /> : <Eye />}
            </button>
          </div>

          {/* Confirm Password */}
          <div className="relative">
            <input type={showConfirmPassword ? 'text' : 'password'} name="confirmPassword" placeholder="Confirm Password" value={formData.confirmPassword} onChange={handleChange} required className="border p-2 rounded w-full" />
            <button type="button" onClick={() => setShowConfirmPassword(!showConfirmPassword)} className="absolute right-2 top-2 text-gray-500">
              {showConfirmPassword ? <EyeOff /> : <Eye />}
            </button>
          </div>

          {/* Terms */}
          <label className="flex items-center space-x-2">
            <input type="checkbox" checked={agreeToTerms} onChange={(e) => setAgreeToTerms(e.target.checked)} />
            <span>I agree to the Terms of Service & Privacy Policy</span>
          </label>

          {/* Submit */}
          <button type="submit" className="bg-green-500 text-white px-4 py-2 rounded w-full hover:bg-green-600">
            Create Account
          </button>
        </form>
      </div>
    </div>
  );
};

export default Signup;