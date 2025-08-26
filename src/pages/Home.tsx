import React from 'react';
import { Heart, Users, Home as HomeIcon, Award, ArrowRight, PawPrint } from 'lucide-react';

interface HomeProps {
  onNavigate: (page: string) => void;
}

const Home: React.FC<HomeProps> = ({ onNavigate }) => {
  const stats = [
    { icon: Heart, number: '2,500+', label: 'Pets Rescued' },
    { icon: HomeIcon, number: '2,200+', label: 'Successful Adoptions' },
    { icon: Users, number: '850+', label: 'Active Members' },
    { icon: Award, number: '10', label: 'Years of Service' },
  ];

  const features = [
    {
      title: 'Find Your Perfect Match',
      description: 'Browse our available cats and dogs to find your new best friend.',
      action: 'View Available Pets',
      page: 'pets',
      gradient: 'from-blue-500 to-blue-600'
    },
    {
      title: 'Become a Member',
      description: 'Join our community of pet lovers and support our mission.',
      action: 'Register Now',
      page: 'register',
      gradient: 'from-green-500 to-green-600'
    },
    {
      title: 'Need to Rehome?',
      description: 'We help pet owners find loving homes for their companions.',
      action: 'Release Pet Form',
      page: 'release',
      gradient: 'from-purple-500 to-purple-600'
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-orange-400 via-orange-500 to-orange-600 text-white py-20 overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-black opacity-20"></div>
          <img 
            src="https://images.pexels.com/photos/406014/pexels-photo-406014.jpeg?auto=compress&cs=tinysrgb&w=1600" 
            alt="Happy pets"
            className="w-full h-full object-cover"
          />
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-fade-in">
              Welcome to
              <span className="block text-yellow-200">Pet Heaven</span>
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-orange-100 animate-fade-in-delay">
              Where abandoned pets find their forever homes and loving families find their perfect companions
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-delay-2">
              <button
                onClick={() => onNavigate('pets')}
                className="bg-white text-orange-600 px-8 py-4 rounded-full font-semibold text-lg hover:bg-orange-50 transition-all duration-300 transform hover:scale-105 shadow-lg flex items-center justify-center space-x-2"
              >
                <PawPrint className="w-6 h-6" />
                <span>Meet Our Pets</span>
              </button>
              <button
                onClick={() => onNavigate('about')}
                className="border-2 border-white text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-white hover:text-orange-600 transition-all duration-300 transform hover:scale-105 flex items-center justify-center space-x-2"
              >
                <span>Learn More</span>
                <ArrowRight className="w-6 h-6" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center group">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-orange-400 to-orange-600 rounded-full mb-4 group-hover:scale-110 transition-transform duration-300">
                  <stat.icon className="w-8 h-8 text-white" />
                </div>
                <div className="text-3xl font-bold text-gray-800 mb-2">{stat.number}</div>
                <div className="text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">Our Mission</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Pet Heaven is dedicated to rescuing abandoned cats and dogs, providing them with medical care, 
              love, and finding them permanent loving homes where they can thrive.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 overflow-hidden">
                <div className={`h-2 bg-gradient-to-r ${feature.gradient}`}></div>
                <div className="p-8">
                  <h3 className="text-xl font-bold text-gray-800 mb-4">{feature.title}</h3>
                  <p className="text-gray-600 mb-6">{feature.description}</p>
                  <button
                    onClick={() => onNavigate(feature.page)}
                    className={`w-full bg-gradient-to-r ${feature.gradient} text-white py-3 px-6 rounded-lg font-medium hover:opacity-90 transition-all duration-300 transform hover:scale-105`}
                  >
                    {feature.action}
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-gradient-to-r from-orange-500 to-orange-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Make a Difference?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Every pet deserves a loving home. Whether you're looking to adopt, volunteer, or support our cause, 
            there are many ways to get involved with Pet Heaven.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={() => onNavigate('adopt')}
              className="bg-white text-orange-600 px-8 py-3 rounded-lg font-semibold hover:bg-orange-50 transition-all duration-300 transform hover:scale-105"
            >
              Start Adoption Process
            </button>
            <button
              onClick={() => onNavigate('register')}
              className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-orange-600 transition-all duration-300 transform hover:scale-105"
            >
              Become a Member
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;