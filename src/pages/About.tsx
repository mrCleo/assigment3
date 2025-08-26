import React from 'react';
import { Heart, Shield, Users, Home as HomeIcon, Award, Clock, MapPin, Phone } from 'lucide-react';

const About: React.FC = () => {
  const values = [
    {
      icon: Heart,
      title: 'Compassion',
      description: 'Every animal deserves love, care, and a second chance at happiness.'
    },
    {
      icon: Shield,
      title: 'Protection',
      description: 'We provide safe shelter and medical care for abandoned pets.'
    },
    {
      icon: Users,
      title: 'Community',
      description: 'Building a network of caring individuals committed to animal welfare.'
    },
    {
      icon: HomeIcon,
      title: 'Forever Homes',
      description: 'Matching pets with loving families for lifelong companionship.'
    }
  ];

  const facilities = [
    {
      name: 'Medical Care Center',
      description: 'Fully equipped veterinary clinic with 24/7 emergency care',
      features: ['On-site veterinarian', 'Surgery suite', 'Dental care', 'Emergency treatment']
    },
    {
      name: 'Adoption Center',
      description: 'Comfortable spaces for pets to interact with potential families',
      features: ['Meeting rooms', 'Play areas', 'Quiet spaces', 'Family consultation']
    },
    {
      name: 'Rehabilitation Wing',
      description: 'Specialized care for pets recovering from trauma or medical issues',
      features: ['Physical therapy', 'Behavioral training', 'Socialization programs', 'Special needs care']
    },
    {
      name: 'Quarantine Facility',
      description: 'Safe isolation areas for new arrivals and sick animals',
      features: ['Climate controlled', 'Individual spaces', 'Medical monitoring', 'Stress-free environment']
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-blue-600 to-blue-800 text-white py-20">
        <div className="absolute inset-0">
          <img 
            src="https://images.pexels.com/photos/2607544/pexels-photo-2607544.jpeg?auto=compress&cs=tinysrgb&w=1600" 
            alt="Pet shelter"
            className="w-full h-full object-cover opacity-30"
          />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl">
            <h1 className="text-5xl font-bold mb-6">About Pet Heaven</h1>
            <p className="text-xl text-blue-100">
              Founded in 2015, Pet Heaven has been a beacon of hope for abandoned cats and dogs in Singapore. 
              Our mission is simple yet profound: to provide a safe haven for pets in need and connect them 
              with loving families who will cherish them forever.
            </p>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-gray-800 mb-6">Our Story</h2>
              <div className="space-y-4 text-gray-600">
                <p>
                  Pet Heaven began with a simple observation: too many loving animals were without homes, 
                  and too many families were searching for the perfect pet companion. Our founder, 
                  Dr. Sarah Chen, started with just a small shelter and a big dream.
                </p>
                <p>
                  Over the past 10 years, we've grown from a modest operation caring for 20 animals to 
                  a comprehensive facility that can house over 200 pets at any given time. But our 
                  mission remains unchanged: every pet deserves a loving home.
                </p>
                <p>
                  Today, Pet Heaven is proud to be Singapore's leading animal rescue organization, 
                  with a 95% adoption success rate and zero euthanasia policy. We work tirelessly 
                  to ensure that every animal that comes through our doors finds their happily ever after.
                </p>
              </div>
            </div>
            <div className="relative">
              <img 
                src="https://images.pexels.com/photos/4681107/pexels-photo-4681107.jpeg?auto=compress&cs=tinysrgb&w=800" 
                alt="Volunteers with pets"
                className="rounded-lg shadow-lg"
              />
              <div className="absolute -bottom-4 -right-4 bg-orange-500 text-white p-4 rounded-lg shadow-lg">
                <div className="flex items-center space-x-2">
                  <Award className="w-6 h-6" />
                  <div>
                    <div className="font-bold">2,200+</div>
                    <div className="text-sm">Successful Adoptions</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">Our Values</h2>
            <p className="text-xl text-gray-600">
              The principles that guide everything we do at Pet Heaven
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div key={index} className="bg-white rounded-xl p-6 text-center shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-orange-400 to-orange-600 rounded-full mb-4">
                  <value.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-3">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Facilities */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">Our Facilities</h2>
            <p className="text-xl text-gray-600">
              State-of-the-art facilities designed with pet comfort and care in mind
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {facilities.map((facility, index) => (
              <div key={index} className="bg-gray-50 rounded-xl p-6 hover:shadow-lg transition-all duration-300">
                <h3 className="text-xl font-bold text-gray-800 mb-3">{facility.name}</h3>
                <p className="text-gray-600 mb-4">{facility.description}</p>
                <div className="grid grid-cols-2 gap-2">
                  {facility.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
                      <span className="text-sm text-gray-700">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Visit Us */}
      <section className="py-16 bg-gradient-to-r from-orange-500 to-orange-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold mb-6">Visit Pet Heaven</h2>
              <p className="text-orange-100 mb-8">
                Come and see our facilities, meet our amazing pets, and learn more about our mission. 
                We welcome visitors and potential adopters every day of the week.
              </p>
              
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <MapPin className="w-6 h-6" />
                  <div>
                    <div className="font-semibold">Address</div>
                    <div className="text-orange-100">123 Compassion Street, Singapore 123456</div>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <Clock className="w-6 h-6" />
                  <div>
                    <div className="font-semibold">Operating Hours</div>
                    <div className="text-orange-100">Mon-Sun: 9:00 AM - 6:00 PM</div>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <Phone className="w-6 h-6" />
                  <div>
                    <div className="font-semibold">Contact</div>
                    <div className="text-orange-100">+65 6234 5678</div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="relative">
              <img 
                src="https://images.pexels.com/photos/7516726/pexels-photo-7516726.jpeg?auto=compress&cs=tinysrgb&w=800" 
                alt="Pet Heaven facility"
                className="rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;