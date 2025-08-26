import React, { useState } from 'react';
import { Search, Filter, Heart } from 'lucide-react';
import PetCard, { Pet } from '../components/PetCard';
import { availablePets } from '../data/pets';

interface PetsProps {
  onNavigate: (page: string) => void;
}

const Pets: React.FC<PetsProps> = ({ onNavigate }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [typeFilter, setTypeFilter] = useState('all');
  const [ageFilter, setAgeFilter] = useState('all');
  const [urgentOnly, setUrgentOnly] = useState(false);

  const filteredPets = availablePets.filter(pet => {
    const matchesSearch = pet.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         pet.breed.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesType = typeFilter === 'all' || pet.type === typeFilter;
    const matchesAge = ageFilter === 'all' || 
                      (ageFilter === 'young' && parseInt(pet.age) <= 2) ||
                      (ageFilter === 'adult' && parseInt(pet.age) > 2 && parseInt(pet.age) <= 6) ||
                      (ageFilter === 'senior' && parseInt(pet.age) > 6);
    const matchesUrgent = !urgentOnly || pet.isUrgent;

    return matchesSearch && matchesType && matchesAge && matchesUrgent;
  });

  const handleAdopt = (pet: Pet) => {
    // Store selected pet in localStorage for the adoption form
    localStorage.setItem('selectedPet', JSON.stringify(pet));
    onNavigate('adopt');
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-purple-600 to-purple-800 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl font-bold mb-6">Meet Our Amazing Pets</h1>
          <p className="text-xl text-purple-100 max-w-3xl mx-auto">
            Every pet has a unique story and is looking for their perfect match. Browse our available 
            cats and dogs, each one ready to bring joy and love to their new family.
          </p>
        </div>
      </section>

      {/* Filters Section */}
      <section className="bg-white shadow-sm py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-6 items-center">
            {/* Search */}
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Search by name or breed..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
              />
            </div>

            {/* Filters */}
            <div className="flex flex-wrap gap-4">
              <select
                value={typeFilter}
                onChange={(e) => setTypeFilter(e.target.value)}
                className="px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
              >
                <option value="all">All Types</option>
                <option value="dog">Dogs</option>
                <option value="cat">Cats</option>
              </select>

              <select
                value={ageFilter}
                onChange={(e) => setAgeFilter(e.target.value)}
                className="px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
              >
                <option value="all">All Ages</option>
                <option value="young">Young (0-2 years)</option>
                <option value="adult">Adult (3-6 years)</option>
                <option value="senior">Senior (7+ years)</option>
              </select>

              <label className="flex items-center space-x-2 px-4 py-3 bg-red-50 border border-red-200 rounded-lg cursor-pointer hover:bg-red-100 transition-colors">
                <input
                  type="checkbox"
                  checked={urgentOnly}
                  onChange={(e) => setUrgentOnly(e.target.checked)}
                  className="text-red-600 focus:ring-red-500"
                />
                <span className="text-red-700 font-medium">Urgent Only</span>
              </label>
            </div>
          </div>

          {/* Results count */}
          <div className="mt-4 text-gray-600">
            Showing {filteredPets.length} of {availablePets.length} pets
            {urgentOnly && <span className="text-red-600 ml-2">(Urgent cases only)</span>}
          </div>
        </div>
      </section>

      {/* Pets Grid */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {filteredPets.length === 0 ? (
            <div className="text-center py-12">
              <Filter className="w-16 h-16 text-gray-400 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-600 mb-2">No pets found</h3>
              <p className="text-gray-500">Try adjusting your search criteria to see more results.</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
              {filteredPets.map((pet) => (
                <PetCard
                  key={pet.id}
                  pet={pet}
                  onAdopt={handleAdopt}
                />
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Call to Action */}
      <section className="bg-gradient-to-r from-orange-500 to-orange-600 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Heart className="w-16 h-16 mx-auto mb-6" />
          <h2 className="text-4xl font-bold mb-6">Didn't Find Your Perfect Match?</h2>
          <p className="text-xl text-orange-100 mb-8 max-w-2xl mx-auto">
            New pets arrive regularly! Become a member to get notified when pets that match your 
            preferences become available for adoption.
          </p>
          <button
            onClick={() => onNavigate('register')}
            className="bg-white text-orange-600 px-8 py-3 rounded-lg font-semibold hover:bg-orange-50 transition-all duration-300 transform hover:scale-105"
          >
            Become a Member
          </button>
        </div>
      </section>
    </div>
  );
};

export default Pets;