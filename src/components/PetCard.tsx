import React from 'react';
import { Heart, Calendar, MapPin } from 'lucide-react';

export interface Pet {
  id: string;
  name: string;
  type: 'dog' | 'cat';
  breed: string;
  age: string;
  gender: 'male' | 'female';
  description: string;
  image: string;
  location: string;
  dateArrived: string;
  specialNeeds?: string;
  isUrgent?: boolean;
}

interface PetCardProps {
  pet: Pet;
  onAdopt?: (pet: Pet) => void;
  className?: string;
}

const PetCard: React.FC<PetCardProps> = ({ pet, onAdopt, className = '' }) => {
  return (
    <div className={`bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 overflow-hidden ${className}`}>
      {pet.isUrgent && (
        <div className="bg-red-500 text-white text-sm font-semibold px-3 py-1 text-center">
          🚨 URGENT: Needs Home Soon
        </div>
      )}
      
      <div className="relative">
        <img 
          src={pet.image} 
          alt={pet.name}
          className="w-full h-64 object-cover"
        />
        <div className="absolute top-3 right-3">
          <div className={`px-3 py-1 rounded-full text-sm font-medium ${
            pet.type === 'dog' 
              ? 'bg-blue-100 text-blue-800' 
              : 'bg-purple-100 text-purple-800'
          }`}>
            {pet.type === 'dog' ? '🐕 Dog' : '🐱 Cat'}
          </div>
        </div>
      </div>

      <div className="p-6">
        <div className="flex justify-between items-start mb-3">
          <h3 className="text-xl font-bold text-gray-800">{pet.name}</h3>
          <div className={`px-2 py-1 rounded text-sm ${
            pet.gender === 'male' 
              ? 'bg-blue-100 text-blue-700' 
              : 'bg-pink-100 text-pink-700'
          }`}>
            {pet.gender === 'male' ? '♂ Male' : '♀ Female'}
          </div>
        </div>

        <div className="space-y-2 mb-4">
          <p className="text-gray-600">
            <span className="font-medium">Breed:</span> {pet.breed}
          </p>
          <p className="text-gray-600">
            <span className="font-medium">Age:</span> {pet.age}
          </p>
          <div className="flex items-center text-gray-600">
            <MapPin className="w-4 h-4 mr-1" />
            <span className="text-sm">{pet.location}</span>
          </div>
          <div className="flex items-center text-gray-600">
            <Calendar className="w-4 h-4 mr-1" />
            <span className="text-sm">Arrived: {pet.dateArrived}</span>
          </div>
        </div>

        <p className="text-gray-700 text-sm mb-4 line-clamp-3">
          {pet.description}
        </p>

        {pet.specialNeeds && (
          <div className="bg-yellow-50 border-l-4 border-yellow-400 p-3 mb-4">
            <p className="text-yellow-800 text-sm">
              <span className="font-medium">Special Care:</span> {pet.specialNeeds}
            </p>
          </div>
        )}

        {onAdopt && (
          <button
            onClick={() => onAdopt(pet)}
            className="w-full bg-gradient-to-r from-orange-500 to-orange-600 text-white py-3 px-4 rounded-lg font-medium hover:from-orange-600 hover:to-orange-700 transition-all duration-300 transform hover:scale-105 flex items-center justify-center space-x-2"
          >
            <Heart className="w-5 h-5" />
            <span>Request to Adopt {pet.name}</span>
          </button>
        )}
      </div>
    </div>
  );
};

export default PetCard;