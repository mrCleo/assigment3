import React, { useState, useEffect } from 'react';
import { Heart, Mail, CheckCircle, User, Home as HomeIcon } from 'lucide-react';
import FormInput from '../components/FormInput';
import PetCard, { Pet } from '../components/PetCard';

const Adopt: React.FC = () => {
  const [selectedPet, setSelectedPet] = useState<Pet | null>(null);
  const [formData, setFormData] = useState({
    // Adopter Information
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    address: '',
    city: '',
    postalCode: '',
    age: '',
    occupation: '',
    
    // Household Information
    homeType: '',
    ownRent: '',
    landlordApproval: '',
    householdSize: '',
    adultsChildren: '',
    childrenAges: '',
    
    // Pet Experience
    currentPets: '',
    currentPetsDetails: '',
    previousPets: '',
    previousPetsDetails: '',
    petExperience: '',
    
    // Lifestyle and Care
    hoursAlone: '',
    exercisePlan: '',
    petLocation: '',
    vacationPlan: '',
    vetPlan: '',
    emergencyPlan: '',
    
    // Specific Pet Interest
    petOfInterest: '',
    whyThisPet: '',
    expectations: '',
    commitment: '',
    
    // References
    vetReference: '',
    personalReference: '',
    
    // Additional Information
    additionalInfo: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  useEffect(() => {
    // Check if a pet was selected from the pets page
    const storedPet = localStorage.getItem('selectedPet');
    if (storedPet) {
      const pet = JSON.parse(storedPet);
      setSelectedPet(pet);
      setFormData(prev => ({
        ...prev,
        petOfInterest: pet.name
      }));
      // Clear the stored pet
      localStorage.removeItem('selectedPet');
    }
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Adoption application:', formData);
    
    // Create email content
    const emailContent = `
ADOPTION APPLICATION - Pet Heaven

Pet of Interest: ${formData.petOfInterest || 'General Inquiry'}

ADOPTER INFORMATION:
Name: ${formData.firstName} ${formData.lastName}
Email: ${formData.email}
Phone: ${formData.phone}
Address: ${formData.address}, ${formData.city} ${formData.postalCode}
Age: ${formData.age}
Occupation: ${formData.occupation}

HOUSEHOLD INFORMATION:
Home Type: ${formData.homeType}
Own/Rent: ${formData.ownRent}
Landlord Approval: ${formData.landlordApproval}
Household Size: ${formData.householdSize}
Adults/Children: ${formData.adultsChildren}
Children Ages: ${formData.childrenAges || 'N/A'}

PET EXPERIENCE:
Current Pets: ${formData.currentPets}
Current Pets Details: ${formData.currentPetsDetails || 'N/A'}
Previous Pets: ${formData.previousPets}
Previous Pets Details: ${formData.previousPetsDetails || 'N/A'}
Overall Experience: ${formData.petExperience}

LIFESTYLE AND CARE:
Hours Alone: ${formData.hoursAlone}
Exercise Plan: ${formData.exercisePlan}
Pet Location: ${formData.petLocation}
Vacation Plan: ${formData.vacationPlan}
Veterinary Plan: ${formData.vetPlan}
Emergency Plan: ${formData.emergencyPlan}

SPECIFIC INTEREST:
Why This Pet: ${formData.whyThisPet}
Expectations: ${formData.expectations}
Commitment Level: ${formData.commitment}

REFERENCES:
Veterinary Reference: ${formData.vetReference || 'None provided'}
Personal Reference: ${formData.personalReference}

Additional Information:
${formData.additionalInfo || 'None provided'}

Please review this application and schedule an interview with the applicant.
    `.trim();

    // Create mailto link
    const subject = encodeURIComponent(`Adoption Application - ${formData.petOfInterest || 'General'}`);
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
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Application Submitted!</h2>
            <p className="text-gray-600 mb-6">
              Thank you for your interest in adopting from Pet Heaven. Your application has been 
              submitted and forwarded to our adoption team for review.
            </p>
            <div className="bg-blue-50 border-l-4 border-blue-400 p-4 mb-6">
              <p className="text-blue-800">
                <strong>Next Steps:</strong> Our adoption coordinator will review your application 
                and contact you within 2-3 business days to schedule a meet-and-greet with your 
                potential new family member.
              </p>
            </div>
            <div className="bg-green-50 border-l-4 border-green-400 p-4">
              <p className="text-green-800">
                <strong>Application Process:</strong> After the initial meeting, we'll schedule a 
                home visit and reference checks to ensure the best match for both you and your new pet.
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
      <section className="bg-gradient-to-r from-orange-500 to-orange-700 text-white py-16 mb-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Heart className="w-16 h-16 mx-auto mb-6" />
          <h1 className="text-5xl font-bold mb-6">Pet Adoption Application</h1>
          <p className="text-xl text-orange-100 max-w-3xl mx-auto">
            Ready to welcome a new family member? Our adoption process ensures the perfect match 
            between pets and families for a lifetime of happiness together.
          </p>
        </div>
      </section>

      {/* Selected Pet Display */}
      {selectedPet && (
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 mb-12">
          <div className="bg-white rounded-xl shadow-lg p-6">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">You're interested in adopting:</h2>
            <div className="max-w-md">
              <PetCard pet={selectedPet} />
            </div>
          </div>
        </div>
      )}

      {/* Adoption Application Form */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-xl shadow-lg p-8">
          <div className="mb-8">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Adoption Application</h2>
            <p className="text-gray-600">
              Please complete this comprehensive application to help us find the perfect pet match for your family. 
              All information is kept confidential and is used solely for adoption matching purposes.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-8">
            {/* Adopter Information */}
            <div>
              <h3 className="text-xl font-semibold text-gray-800 mb-4 pb-2 border-b border-gray-200 flex items-center">
                <User className="w-6 h-6 mr-2" />
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
                <FormInput
                  label="Age"
                  name="age"
                  type="number"
                  value={formData.age}
                  onChange={handleChange}
                  required
                  placeholder="Your age"
                />
                <FormInput
                  label="Occupation"
                  name="occupation"
                  value={formData.occupation}
                  onChange={handleChange}
                  required
                  placeholder="Your occupation"
                />
              </div>
              
              <div className="grid md:grid-cols-3 gap-6 mt-6">
                <FormInput
                  label="Address"
                  name="address"
                  value={formData.address}
                  onChange={handleChange}
                  required
                  placeholder="Street address"
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
              </div>
            </div>

            {/* Household Information */}
            <div>
              <h3 className="text-xl font-semibold text-gray-800 mb-4 pb-2 border-b border-gray-200 flex items-center">
                <HomeIcon className="w-6 h-6 mr-2" />
                Household Information
              </h3>
              <div className="grid md:grid-cols-2 gap-6">
                <FormInput
                  label="Type of Home"
                  name="homeType"
                  type="select"
                  value={formData.homeType}
                  onChange={handleChange}
                  required
                  options={[
                    { value: 'apartment', label: 'Apartment' },
                    { value: 'condo', label: 'Condominium' },
                    { value: 'hdb', label: 'HDB Flat' },
                    { value: 'landed', label: 'Landed Property' },
                    { value: 'other', label: 'Other' }
                  ]}
                />
                <FormInput
                  label="Do you own or rent?"
                  name="ownRent"
                  type="select"
                  value={formData.ownRent}
                  onChange={handleChange}
                  required
                  options={[
                    { value: 'own', label: 'Own' },
                    { value: 'rent', label: 'Rent' }
                  ]}
                />
                {formData.ownRent === 'rent' && (
                  <FormInput
                    label="Landlord Permission for Pets"
                    name="landlordApproval"
                    type="select"
                    value={formData.landlordApproval}
                    onChange={handleChange}
                    required
                    options={[
                      { value: 'yes', label: 'Yes, I have permission' },
                      { value: 'pending', label: 'Will obtain permission' },
                      { value: 'no', label: 'No permission needed' }
                    ]}
                    className="md:col-span-2"
                  />
                )}
                <FormInput
                  label="Household Size"
                  name="householdSize"
                  type="number"
                  value={formData.householdSize}
                  onChange={handleChange}
                  required
                  placeholder="Number of people in household"
                />
                <FormInput
                  label="Adults and Children"
                  name="adultsChildren"
                  value={formData.adultsChildren}
                  onChange={handleChange}
                  required
                  placeholder="e.g., 2 adults, 1 child"
                />
                <FormInput
                  label="Children's Ages (if applicable)"
                  name="childrenAges"
                  value={formData.childrenAges}
                  onChange={handleChange}
                  placeholder="Ages of children in household"
                  className="md:col-span-2"
                />
              </div>
            </div>

            {/* Pet Experience */}
            <div>
              <h3 className="text-xl font-semibold text-gray-800 mb-4 pb-2 border-b border-gray-200">
                Pet Experience
              </h3>
              <div className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <FormInput
                    label="Do you currently have pets?"
                    name="currentPets"
                    type="select"
                    value={formData.currentPets}
                    onChange={handleChange}
                    required
                    options={[
                      { value: 'yes', label: 'Yes' },
                      { value: 'no', label: 'No' }
                    ]}
                  />
                  <FormInput
                    label="Have you had pets before?"
                    name="previousPets"
                    type="select"
                    value={formData.previousPets}
                    onChange={handleChange}
                    required
                    options={[
                      { value: 'yes', label: 'Yes' },
                      { value: 'no', label: 'No' }
                    ]}
                  />
                </div>
                {formData.currentPets === 'yes' && (
                  <FormInput
                    label="Current Pets Details"
                    name="currentPetsDetails"
                    type="textarea"
                    value={formData.currentPetsDetails}
                    onChange={handleChange}
                    placeholder="Please describe your current pets (type, age, breed, spayed/neutered, etc.)"
                    rows={3}
                  />
                )}
                {formData.previousPets === 'yes' && (
                  <FormInput
                    label="Previous Pets Details"
                    name="previousPetsDetails"
                    type="textarea"
                    value={formData.previousPetsDetails}
                    onChange={handleChange}
                    placeholder="Tell us about pets you've had in the past and what happened to them"
                    rows={3}
                  />
                )}
                <FormInput
                  label="Overall Pet Experience"
                  name="petExperience"
                  type="textarea"
                  value={formData.petExperience}
                  onChange={handleChange}
                  required
                  placeholder="Describe your overall experience with pets, training, care, etc."
                  rows={4}
                />
              </div>
            </div>

            {/* Lifestyle and Care */}
            <div>
              <h3 className="text-xl font-semibold text-gray-800 mb-4 pb-2 border-b border-gray-200">
                Lifestyle & Pet Care Plans
              </h3>
              <div className="space-y-6">
                <FormInput
                  label="Hours pet will be alone daily"
                  name="hoursAlone"
                  type="select"
                  value={formData.hoursAlone}
                  onChange={handleChange}
                  required
                  options={[
                    { value: '0-2', label: '0-2 hours' },
                    { value: '3-4', label: '3-4 hours' },
                    { value: '5-6', label: '5-6 hours' },
                    { value: '7-8', label: '7-8 hours' },
                    { value: '9+', label: '9+ hours' }
                  ]}
                />
                <FormInput
                  label="Exercise and Activity Plan"
                  name="exercisePlan"
                  type="textarea"
                  value={formData.exercisePlan}
                  onChange={handleChange}
                  required
                  placeholder="How will you provide exercise and mental stimulation for your pet?"
                  rows={3}
                />
                <FormInput
                  label="Where will the pet stay?"
                  name="petLocation"
                  type="select"
                  value={formData.petLocation}
                  onChange={handleChange}
                  required
                  options={[
                    { value: 'indoor', label: 'Indoor only' },
                    { value: 'outdoor', label: 'Outdoor only' },
                    { value: 'both', label: 'Indoor and outdoor access' }
                  ]}
                />
                <FormInput
                  label="Vacation/Travel Plans"
                  name="vacationPlan"
                  type="textarea"
                  value={formData.vacationPlan}
                  onChange={handleChange}
                  required
                  placeholder="What arrangements will you make for your pet when you travel?"
                  rows={3}
                />
                <FormInput
                  label="Veterinary Care Plan"
                  name="vetPlan"
                  type="textarea"
                  value={formData.vetPlan}
                  onChange={handleChange}
                  required
                  placeholder="How will you handle routine and emergency veterinary care?"
                  rows={3}
                />
                <FormInput
                  label="Emergency Plan"
                  name="emergencyPlan"
                  type="textarea"
                  value={formData.emergencyPlan}
                  onChange={handleChange}
                  required
                  placeholder="What would you do if you could no longer care for your pet?"
                  rows={3}
                />
              </div>
            </div>

            {/* Specific Pet Interest */}
            <div>
              <h3 className="text-xl font-semibold text-gray-800 mb-4 pb-2 border-b border-gray-200">
                Pet Preferences
              </h3>
              <div className="space-y-6">
                <FormInput
                  label="Specific Pet of Interest"
                  name="petOfInterest"
                  value={formData.petOfInterest}
                  onChange={handleChange}
                  placeholder="Pet name or 'open to suggestions'"
                />
                <FormInput
                  label="Why are you interested in this pet/type of pet?"
                  name="whyThisPet"
                  type="textarea"
                  value={formData.whyThisPet}
                  onChange={handleChange}
                  required
                  placeholder="What draws you to this particular pet or type of pet?"
                  rows={3}
                />
                <FormInput
                  label="What are your expectations?"
                  name="expectations"
                  type="textarea"
                  value={formData.expectations}
                  onChange={handleChange}
                  required
                  placeholder="What do you expect from pet ownership? What role will the pet play in your family?"
                  rows={4}
                />
                <FormInput
                  label="Long-term Commitment"
                  name="commitment"
                  type="select"
                  value={formData.commitment}
                  onChange={handleChange}
                  required
                  options={[
                    { value: 'lifetime', label: 'Lifetime commitment (10-20+ years)' },
                    { value: 'long-term', label: 'Long-term (5-10 years)' },
                    { value: 'short-term', label: 'Short-term (1-5 years)' },
                    { value: 'uncertain', label: 'Uncertain' }
                  ]}
                />
              </div>
            </div>

            {/* References */}
            <div>
              <h3 className="text-xl font-semibold text-gray-800 mb-4 pb-2 border-b border-gray-200">
                References
              </h3>
              <div className="space-y-6">
                <FormInput
                  label="Veterinary Reference"
                  name="vetReference"
                  value={formData.vetReference}
                  onChange={handleChange}
                  placeholder="Name and contact info of your veterinarian (if you have/had pets before)"
                />
                <FormInput
                  label="Personal Reference"
                  name="personalReference"
                  value={formData.personalReference}
                  onChange={handleChange}
                  required
                  placeholder="Name and contact info of someone who can vouch for your character and responsibility"
                />
              </div>
            </div>

            {/* Additional Information */}
            <div>
              <h3 className="text-xl font-semibold text-gray-800 mb-4 pb-2 border-b border-gray-200">
                Additional Information
              </h3>
              <FormInput
                label="Anything else you'd like us to know?"
                name="additionalInfo"
                type="textarea"
                value={formData.additionalInfo}
                onChange={handleChange}
                placeholder="Special circumstances, questions, or additional information about your application"
                rows={4}
              />
            </div>

            {/* Submit Button */}
            <div className="pt-6">
              <button
                type="submit"
                className="w-full bg-gradient-to-r from-orange-500 to-orange-600 text-white py-4 px-8 rounded-lg font-semibold text-lg hover:from-orange-600 hover:to-orange-700 transition-all duration-300 transform hover:scale-105 flex items-center justify-center space-x-2"
              >
                <Mail className="w-6 h-6" />
                <span>Submit Adoption Application</span>
              </button>
              <p className="text-sm text-gray-600 mt-4 text-center">
                By submitting this application, you agree to allow Pet Heaven staff to contact your references 
                and conduct a home visit as part of our adoption process.
              </p>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Adopt;