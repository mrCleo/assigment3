import React, { useState } from 'react';
import { MapPin, Phone, Mail, Clock, Send, CheckCircle } from 'lucide-react';
import FormInput from '../components/FormInput';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
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
    console.log('Contact form:', formData);
    
    // Create email content
    const emailContent = `
Contact Form Submission - Pet Heaven

Name: ${formData.name}
Email: ${formData.email}
Phone: ${formData.phone}
Subject: ${formData.subject}

Message:
${formData.message}

Please respond to this inquiry as soon as possible.
    `.trim();

    // Create mailto link
    const subject = encodeURIComponent(`Contact Form: ${formData.subject}`);
    const body = encodeURIComponent(emailContent);
    const mailtoLink = `mailto:info@petheaven.org?subject=${subject}&body=${body}`;
    
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
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Message Sent!</h2>
            <p className="text-gray-600 mb-6">
              Thank you for contacting Pet Heaven. We've received your message and will respond 
              as soon as possible, typically within 24 hours.
            </p>
            <div className="bg-blue-50 border-l-4 border-blue-400 p-4">
              <p className="text-blue-800">
                <strong>For urgent matters:</strong> Please call us directly at +65 6234 5678
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }

  const contactInfo = [
    {
      icon: MapPin,
      title: 'Visit Us',
      details: ['123 Compassion Street', 'Singapore 123456'],
      color: 'text-red-600'
    },
    {
      icon: Phone,
      title: 'Call Us',
      details: ['+65 6234 5678', 'Daily: 9:00 AM - 6:00 PM'],
      color: 'text-green-600'
    },
    {
      icon: Mail,
      title: 'Email Us',
      details: ['info@petheaven.org', 'We reply within 24 hours'],
      color: 'text-blue-600'
    },
    {
      icon: Clock,
      title: 'Operating Hours',
      details: ['Monday - Sunday', '9:00 AM - 6:00 PM'],
      color: 'text-purple-600'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Mail className="w-16 h-16 mx-auto mb-6" />
          <h1 className="text-5xl font-bold mb-6">Contact Pet Heaven</h1>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto">
            Have questions about adoption, volunteering, or our services? We'd love to hear from you! 
            Get in touch with our friendly team and we'll help you in any way we can.
          </p>
        </div>
      </section>

      {/* Contact Information Cards */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {contactInfo.map((info, index) => (
              <div key={index} className="text-center p-6 bg-gray-50 rounded-xl hover:shadow-lg transition-all duration-300 transform hover:-translate-y-2">
                <div className={`inline-flex items-center justify-center w-16 h-16 rounded-full mb-4 ${info.color.replace('text-', 'bg-').replace('-600', '-100')}`}>
                  <info.icon className={`w-8 h-8 ${info.color}`} />
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-3">{info.title}</h3>
                {info.details.map((detail, detailIndex) => (
                  <p key={detailIndex} className="text-gray-600 mb-1">{detail}</p>
                ))}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-xl shadow-lg p-8">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold text-gray-800 mb-4">Send Us a Message</h2>
              <p className="text-gray-600">
                Fill out the form below and we'll get back to you as soon as possible. 
                For urgent matters, please call us directly.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <FormInput
                  label="Full Name"
                  name="name"
                  value={formData.name}
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
              </div>
              
              <div className="grid md:grid-cols-2 gap-6">
                <FormInput
                  label="Phone Number"
                  name="phone"
                  type="tel"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="+65 9123 4567"
                />
                <FormInput
                  label="Subject"
                  name="subject"
                  type="select"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  options={[
                    { value: 'adoption', label: 'Pet Adoption Inquiry' },
                    { value: 'surrender', label: 'Pet Surrender/Release' },
                    { value: 'volunteer', label: 'Volunteering Opportunities' },
                    { value: 'donation', label: 'Donations & Support' },
                    { value: 'visit', label: 'Visit Information' },
                    { value: 'general', label: 'General Inquiry' },
                    { value: 'other', label: 'Other' }
                  ]}
                />
              </div>

              <FormInput
                label="Message"
                name="message"
                type="textarea"
                value={formData.message}
                onChange={handleChange}
                required
                placeholder="Please tell us how we can help you..."
                rows={6}
              />

              <button
                type="submit"
                className="w-full bg-gradient-to-r from-blue-600 to-blue-700 text-white py-4 px-8 rounded-lg font-semibold text-lg hover:from-blue-700 hover:to-blue-800 transition-all duration-300 transform hover:scale-105 flex items-center justify-center space-x-2"
              >
                <Send className="w-6 h-6" />
                <span>Send Message</span>
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Find Us</h2>
            <p className="text-gray-600">
              Visit our facility to meet our wonderful pets or volunteer with our team
            </p>
          </div>
          
          <div className="bg-gray-200 rounded-xl h-96 flex items-center justify-center">
            <div className="text-center">
              <MapPin className="w-16 h-16 text-gray-400 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-600 mb-2">Interactive Map</h3>
              <p className="text-gray-500">
                123 Compassion Street, Singapore 123456
              </p>
              <p className="text-sm text-gray-400 mt-2">
                (Map integration would be implemented with Google Maps or similar service)
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Emergency Contact */}
      <section className="py-12 bg-red-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl font-bold mb-4">Emergency Animal Situations</h2>
          <p className="text-red-100 mb-6">
            If you've found an injured or abandoned animal that needs immediate help, 
            please call our emergency hotline right away.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="tel:+6562345678"
              className="bg-white text-red-600 px-8 py-3 rounded-lg font-semibold hover:bg-red-50 transition-colors duration-300 flex items-center justify-center space-x-2"
            >
              <Phone className="w-5 h-5" />
              <span>Emergency: +65 6234 5678</span>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;