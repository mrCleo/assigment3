import React, { useState } from 'react';
import { Users, Mail, CheckCircle } from 'lucide-react';
import FormInput from '../components/FormInput';

const Register: React.FC = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    address: '',
    city: '',
    postalCode: '',
    occupation: '',
    experience: '',
    interests: '',
    volunteer: '',
    newsletter: 'yes',
    updates: 'yes'
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate form submission
    console.log('Member registration:', formData);
    
    // Create email content
    const emailContent = `
New Member Registration - Pet Heaven

Personal Information:
Name: ${formData.firstName} ${formData.lastName}
Email: ${formData.email}
Phone: ${formData.phone}
Address: ${formData.address}, ${formData.city} ${formData.postalCode}
Occupation: ${formData.occupation}

Pet Experience: ${formData.experience}
Interests: ${formData.interests}
Volunteer Interest: ${formData.volunteer}

Communication Preferences:
Newsletter: ${formData.newsletter}
Pet Updates: ${formData.updates}

Please follow up with this new member registration.
    `.trim();

    // Create mailto link
    const subject = encodeURIComponent('New Member Registration - Pet Heaven');
    const body = encodeURIComponent(emailContent);
    const mailtoLink = `mailto:admin@petheaven.org?subject=${subject}&body=${body}`;
    
    // Open email client
    window.location.href = mailtoLink;
    
    setIsSubmitted(true);
  };

  if (isSubmitted) {
    return (
      <div className="min-h-screen bg-gray-50 py-16">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-xl shadow-lg p-8 text-center">
            <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-6" />
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Welcome to Pet Heaven!</h2>
            <p className="text-gray-600 mb-6">
              Thank you for becoming a member of our community. Your registration has been submitted 
              and forwarded to our team. We'll be in touch soon with your membership details and 
              information about how you can get involved.
            </p>
            <div className="bg-orange-50 border-l-4 border-orange-400 p-4 mb-6">
              <p className="text-orange-800">
                <strong>Next Steps:</strong> Check your email for a confirmation message. Our team 
                will contact you within 2-3 business days to complete your membership registration.
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 py-16">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-green-600 to-green-800 text-white py-16 mb-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Users className="w-16 h-16 mx-auto mb-6" />
          <h1 className="text-5xl font-bold mb-6">Become a Member</h1>
          <p className="text-xl text-green-100 max-w-3xl mx-auto">
            Join our community of pet lovers and make a difference in the lives of abandoned animals. 
            Members receive updates on new arrivals, volunteer opportunities, and special events.
          </p>
        </div>
      </section>

      {/* Registration Form */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-xl shadow-lg p-8">
          <div className="mb-8">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Member Registration</h2>
            <p className="text-gray-600">
              Fill out the form below to become a Pet Heaven member. All information is kept confidential 
              and used only to better serve our pet community.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-8">
            {/* Personal Information */}
            <div>
              <h3 className="text-xl font-semibold text-gray-800 mb-4 pb-2 border-b border-gray-200">
                Personal Information
              </h3>
              <div className="grid md:grid-cols-2 gap-6">
                <FormInput
                  label="First Name"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleChange}
                  required
                  placeholder="Enter your first name"
                />
                <FormInput
                  label="Last Name"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleChange}
                  required
                  placeholder="Enter your last name"
                />
                <FormInput
                  label="Email Address"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  placeholder="your.email@example.com"
                />
                <FormInput
                  label="Phone Number"
                  name="phone"
                  type="tel"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                  placeholder="+65 9123 4567"
                />
              </div>
            </div>

            {/* Address Information */}
            <div>
              <h3 className="text-xl font-semibold text-gray-800 mb-4 pb-2 border-b border-gray-200">
                Address Information
              </h3>
              <div className="grid md:grid-cols-2 gap-6">
                <FormInput
                  label="Address"
                  name="address"
                  value={formData.address}
                  onChange={handleChange}
                  required
                  placeholder="Street address"
                  className="md:col-span-2"
                />
                <FormInput
                  label="City"
                  name="city"
                  value={formData.city}
                  onChange={handleChange}
                  required
                  placeholder="City"
                />
                <FormInput
                  label="Postal Code"
                  name="postalCode"
                  value={formData.postalCode}
                  onChange={handleChange}
                  required
                  placeholder="123456"
                />
                <FormInput
                  label="Occupation"
                  name="occupation"
                  value={formData.occupation}
                  onChange={handleChange}
                  placeholder="Your occupation"
                  className="md:col-span-2"
                />
              </div>
            </div>

            {/* Pet Experience and Interests */}
            <div>
              <h3 className="text-xl font-semibold text-gray-800 mb-4 pb-2 border-b border-gray-200">
                Pet Experience & Interests
              </h3>
              <div className="space-y-6">
                <FormInput
                  label="Pet Experience"
                  name="experience"
                  type="textarea"
                  value={formData.experience}
                  onChange={handleChange}
                  placeholder="Tell us about your experience with pets (current pets, previous pets, etc.)"
                  rows={4}
                />
                <FormInput
                  label="What aspects of pet care interest you most?"
                  name="interests"
                  type="textarea"
                  value={formData.interests}
                  onChange={handleChange}
                  placeholder="e.g., adoption, fostering, volunteering, education, fundraising..."
                  rows={3}
                />
                <FormInput
                  label="Are you interested in volunteering?"
                  name="volunteer"
                  type="select"
                  value={formData.volunteer}
                  onChange={handleChange}
                  options={[
                    { value: 'yes-immediately', label: 'Yes, I can start immediately' },
                    { value: 'yes-future', label: 'Yes, but in the future' },
                    { value: 'maybe', label: 'Maybe, tell me more' },
                    { value: 'no', label: 'No, just membership for now' }
                  ]}
                />
              </div>
            </div>

            {/* Communication Preferences */}
            <div>
              <h3 className="text-xl font-semibold text-gray-800 mb-4 pb-2 border-b border-gray-200">
                Communication Preferences
              </h3>
              <div className="grid md:grid-cols-2 gap-6">
                <FormInput
                  label="Monthly Newsletter"
                  name="newsletter"
                  type="select"
                  value={formData.newsletter}
                  onChange={handleChange}
                  options={[
                    { value: 'yes', label: 'Yes, send me the newsletter' },
                    { value: 'no', label: 'No, thank you' }
                  ]}
                />
                <FormInput
                  label="New Pet Arrival Updates"
                  name="updates"
                  type="select"
                  value={formData.updates}
                  onChange={handleChange}
                  options={[
                    { value: 'yes', label: 'Yes, notify me of new pets' },
                    { value: 'no', label: 'No, thank you' }
                  ]}
                />
              </div>
            </div>

            {/* Submit Button */}
            <div className="pt-6">
              <button
                type="submit"
                className="w-full bg-gradient-to-r from-green-600 to-green-700 text-white py-4 px-8 rounded-lg font-semibold text-lg hover:from-green-700 hover:to-green-800 transition-all duration-300 transform hover:scale-105 flex items-center justify-center space-x-2"
              >
                <Mail className="w-6 h-6" />
                <span>Submit Registration</span>
              </button>
              <p className="text-sm text-gray-600 mt-4 text-center">
                By submitting this form, you agree to receive communications from Pet Heaven and 
                confirm that all information provided is accurate.
              </p>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;