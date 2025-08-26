import React, { useState } from 'react';
import { Heart, Mail, CheckCircle, AlertCircle } from 'lucide-react';
import FormInput from '../components/FormInput';

const Release: React.FC = () => {
  const [formData, setFormData] = useState({
    // Owner Information
    ownerName: '',
    email: '',
    phone: '',
    address: '',
    
    // Pet Information
    petName: '',
    petType: '',
    breed: '',
    age: '',
    gender: '',
    weight: '',
    color: '',
    
    // Health & Behavior
    spayedNeutered: '',
    vaccinated: '',
    healthIssues: '',
    medications: '',
    behavior: '',
    goodWith: '',
    
    // Reason & Additional Info
    reason: '',
    timeline: '',
    supplies: '',
    additionalInfo: ''
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
    console.log('Pet release form:', formData);
    
    // Create email content
    const emailContent = `
Pet Release Request - Pet Heaven

OWNER INFORMATION:
Name: ${formData.ownerName}
Email: ${formData.email}
Phone: ${formData.phone}
Address: ${formData.address}

PET INFORMATION:
Name: ${formData.petName}
Type: ${formData.petType}
Breed: ${formData.breed}
Age: ${formData.age}
Gender: ${formData.gender}
Weight: ${formData.weight}
Color: ${formData.color}

HEALTH & BEHAVIOR:
Spayed/Neutered: ${formData.spayedNeutered}
Vaccinated: ${formData.vaccinated}
Health Issues: ${formData.healthIssues || 'None reported'}
Medications: ${formData.medications || 'None'}
Behavior: ${formData.behavior}
Good with: ${formData.goodWith}

SURRENDER DETAILS:
Reason: ${formData.reason}
Timeline: ${formData.timeline}
Supplies Available: ${formData.supplies || 'None mentioned'}

Additional Information:
${formData.additionalInfo || 'None provided'}

URGENT: Please contact this owner to discuss the pet surrender process.
    `.trim();

    // Create mailto link
    const subject = encodeURIComponent(`Pet Release Request - ${formData.petName} (${formData.petType})`);
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
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Request Submitted</h2>
            <p className="text-gray-600 mb-6">
              Thank you for reaching out to Pet Heaven. We understand that surrendering a pet is a 
              difficult decision, and we're here to help ensure your pet finds a loving new home.
            </p>
            <div className="bg-blue-50 border-l-4 border-blue-400 p-4 mb-6">
              <p className="text-blue-800">
                <strong>Next Steps:</strong> Our intake coordinator will contact you within 24 hours 
                to discuss the surrender process, timeline, and any questions you may have.
              </p>
            </div>
            <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4">
              <p className="text-yellow-800">
                <strong>Emergency:</strong> If this is an urgent situation, please call us directly 
                at +65 6234 5678.
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
      <section className="bg-gradient-to-r from-purple-600 to-purple-800 text-white py-16 mb-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Heart className="w-16 h-16 mx-auto mb-6" />
          <h1 className="text-5xl font-bold mb-6">Pet Release Form</h1>
          <p className="text-xl text-purple-100 max-w-3xl mx-auto">
            We understand that sometimes circumstances change, and you may need to find a new home 
            for your beloved pet. Pet Heaven is here to help ensure your pet finds a loving family.
          </p>
        </div>
      </section>

      {/* Important Notice */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 mb-8">
        <div className="bg-amber-50 border-l-4 border-amber-400 p-6 rounded-r-lg">
          <div className="flex items-start">
            <AlertCircle className="w-6 h-6 text-amber-600 mt-1 mr-3" />
            <div>
              <h3 className="text-lg font-semibold text-amber-800 mb-2">Before You Surrender</h3>
              <p className="text-amber-700 mb-3">
                Pet surrender is a permanent decision. We encourage you to explore all options first:
              </p>
              <ul className="text-amber-700 space-y-1">
                <li>• Temporary fostering with friends or family</li>
                <li>• Pet behavioral training resources</li>
                <li>• Financial assistance programs for pet care</li>
                <li>• Re-homing directly to someone you know</li>
              </ul>
              <p className="text-amber-700 mt-3">
                If you've exhausted these options, we're here to help find your pet a loving new home.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Release Form */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-xl shadow-lg p-8">
          <div className="mb-8">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Pet Release Information</h2>
            <p className="text-gray-600">
              Please provide detailed information about your pet to help us find them the best possible home. 
              All information is kept confidential.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-8">
            {/* Owner Information */}
            <div>
              <h3 className="text-xl font-semibold text-gray-800 mb-4 pb-2 border-b border-gray-200">
                Your Information
              </h3>
              <div className="grid md:grid-cols-2 gap-6">
                <FormInput
                  label="Full Name"
                  name="ownerName"
                  value={formData.ownerName}
                  onChange={handleChange}
                  required
                  placeholder="Enter your full name"
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
                <FormInput
                  label="Address"
                  name="address"
                  value={formData.address}
                  onChange={handleChange}
                  required
                  placeholder="Your current address"
                />
              </div>
            </div>

            {/* Pet Information */}
            <div>
              <h3 className="text-xl font-semibold text-gray-800 mb-4 pb-2 border-b border-gray-200">
                Pet Information
              </h3>
              <div className="grid md:grid-cols-2 gap-6">
                <FormInput
                  label="Pet's Name"
                  name="petName"
                  value={formData.petName}
                  onChange={handleChange}
                  required
                  placeholder="Your pet's name"
                />
                <FormInput
                  label="Pet Type"
                  name="petType"
                  type="select"
                  value={formData.petType}
                  onChange={handleChange}
                  required
                  options={[
                    { value: 'dog', label: 'Dog' },
                    { value: 'cat', label: 'Cat' }
                  ]}
                />
                <FormInput
                  label="Breed"
                  name="breed"
                  value={formData.breed}
                  onChange={handleChange}
                  required
                  placeholder="Breed or mix"
                />
                <FormInput
                  label="Age"
                  name="age"
                  value={formData.age}
                  onChange={handleChange}
                  required
                  placeholder="e.g., 3 years, 6 months"
                />
                <FormInput
                  label="Gender"
                  name="gender"
                  type="select"
                  value={formData.gender}
                  onChange={handleChange}
                  required
                  options={[
                    { value: 'male', label: 'Male' },
                    { value: 'female', label: 'Female' }
                  ]}
                />
                <FormInput
                  label="Weight"
                  name="weight"
                  value={formData.weight}
                  onChange={handleChange}
                  placeholder="e.g., 15 kg, 5 kg"
                />
                <FormInput
                  label="Color/Markings"
                  name="color"
                  value={formData.color}
                  onChange={handleChange}
                  placeholder="Description of color and markings"
                  className="md:col-span-2"
                />
              </div>
            </div>

            {/* Health & Behavior */}
            <div>
              <h3 className="text-xl font-semibold text-gray-800 mb-4 pb-2 border-b border-gray-200">
                Health & Behavior
              </h3>
              <div className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <FormInput
                    label="Spayed/Neutered"
                    name="spayedNeutered"
                    type="select"
                    value={formData.spayedNeutered}
                    onChange={handleChange}
                    required
                    options={[
                      { value: 'yes', label: 'Yes' },
                      { value: 'no', label: 'No' },
                      { value: 'unknown', label: 'Unknown' }
                    ]}
                  />
                  <FormInput
                    label="Up to Date on Vaccinations"
                    name="vaccinated"
                    type="select"
                    value={formData.vaccinated}
                    onChange={handleChange}
                    required
                    options={[
                      { value: 'yes', label: 'Yes, current' },
                      { value: 'partial', label: 'Partially vaccinated' },
                      { value: 'no', label: 'No' },
                      { value: 'unknown', label: 'Unknown' }
                    ]}
                  />
                </div>
                <FormInput
                  label="Health Issues or Medical Conditions"
                  name="healthIssues"
                  type="textarea"
                  value={formData.healthIssues}
                  onChange={handleChange}
                  placeholder="Please describe any known health issues, injuries, or ongoing medical conditions"
                  rows={3}
                />
                <FormInput
                  label="Current Medications"
                  name="medications"
                  type="textarea"
                  value={formData.medications}
                  onChange={handleChange}
                  placeholder="List any medications your pet is currently taking"
                  rows={2}
                />
                <FormInput
                  label="Behavior and Personality"
                  name="behavior"
                  type="textarea"
                  value={formData.behavior}
                  onChange={handleChange}
                  required
                  placeholder="Describe your pet's personality, energy level, favorite activities, any behavioral issues..."
                  rows={4}
                />
                <FormInput
                  label="Good With"
                  name="goodWith"
                  type="textarea"
                  value={formData.goodWith}
                  onChange={handleChange}
                  placeholder="Children, other dogs, cats, small animals, etc. Please be specific about ages and experience"
                  rows={3}
                />
              </div>
            </div>

            {/* Surrender Details */}
            <div>
              <h3 className="text-xl font-semibold text-gray-800 mb-4 pb-2 border-b border-gray-200">
                Surrender Details
              </h3>
              <div className="space-y-6">
                <FormInput
                  label="Reason for Surrender"
                  name="reason"
                  type="textarea"
                  value={formData.reason}
                  onChange={handleChange}
                  required
                  placeholder="Please explain why you need to surrender your pet. This helps us understand their needs and find the right home."
                  rows={4}
                />
                <FormInput
                  label="Timeline"
                  name="timeline"
                  type="select"
                  value={formData.timeline}
                  onChange={handleChange}
                  required
                  options={[
                    { value: 'immediate', label: 'Immediate (within 1 week)' },
                    { value: '2weeks', label: 'Within 2 weeks' },
                    { value: '1month', label: 'Within 1 month' },
                    { value: 'flexible', label: 'Flexible timing' }
                  ]}
                />
                <FormInput
                  label="Pet Supplies Available"
                  name="supplies"
                  type="textarea"
                  value={formData.supplies}
                  onChange={handleChange}
                  placeholder="List any food, toys, bed, crate, or other supplies you can provide (optional)"
                  rows={3}
                />
                <FormInput
                  label="Additional Information"
                  name="additionalInfo"
                  type="textarea"
                  value={formData.additionalInfo}
                  onChange={handleChange}
                  placeholder="Anything else you'd like us to know about your pet or situation"
                  rows={4}
                />
              </div>
            </div>

            {/* Submit Button */}
            <div className="pt-6">
              <button
                type="submit"
                className="w-full bg-gradient-to-r from-purple-600 to-purple-700 text-white py-4 px-8 rounded-lg font-semibold text-lg hover:from-purple-700 hover:to-purple-800 transition-all duration-300 transform hover:scale-105 flex items-center justify-center space-x-2"
              >
                <Mail className="w-6 h-6" />
                <span>Submit Release Request</span>
              </button>
              <p className="text-sm text-gray-600 mt-4 text-center">
                By submitting this form, you agree to work with Pet Heaven staff to ensure the best 
                outcome for your pet and acknowledge that surrender is a permanent decision.
              </p>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Release;