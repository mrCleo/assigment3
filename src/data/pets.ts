import { Pet } from '../components/PetCard';

export const availablePets: Pet[] = [
  {
    id: '1',
    name: 'Luna',
    type: 'dog',
    breed: 'Golden Retriever Mix',
    age: '3 years',
    gender: 'female',
    description: 'Luna is a gentle, loving dog who adores children and other pets. She enjoys long walks, playing fetch, and cuddling on the couch. Luna is fully house-trained and knows basic commands. She would thrive in a family environment with a yard to play in.',
    image: 'https://images.pexels.com/photos/1805164/pexels-photo-1805164.jpeg?auto=compress&cs=tinysrgb&w=800',
    location: 'Main Shelter',
    dateArrived: '2024-12-15',
    isUrgent: false
  },
  {
    id: '2',
    name: 'Shadow',
    type: 'cat',
    breed: 'Domestic Shorthair',
    age: '5 years',
    gender: 'male',
    description: 'Shadow is a calm, affectionate cat who loves to purr and be petted. He gets along well with other cats and would do best in a quiet home. Shadow enjoys sitting by windows and watching birds, and he loves interactive toys.',
    image: 'https://images.pexels.com/photos/104827/cat-pet-animal-domestic-104827.jpeg?auto=compress&cs=tinysrgb&w=800',
    location: 'Foster Care',
    dateArrived: '2024-11-28',
    isUrgent: false
  },
  {
    id: '3',
    name: 'Buddy',
    type: 'dog',
    breed: 'Labrador Mix',
    age: '7 years',
    gender: 'male',
    description: 'Buddy is a senior dog with a heart full of love to give. Despite his age, he still enjoys moderate walks and loves meeting new people. He would be perfect for someone looking for a calm, loyal companion who just wants to be loved.',
    image: 'https://images.pexels.com/photos/1108099/pexels-photo-1108099.jpeg?auto=compress&cs=tinysrgb&w=800',
    location: 'Main Shelter',
    dateArrived: '2024-10-20',
    specialNeeds: 'Senior care - joint supplements recommended',
    isUrgent: true
  },
  {
    id: '4',
    name: 'Whiskers',
    type: 'cat',
    breed: 'Persian Mix',
    age: '2 years',
    gender: 'female',
    description: 'Whiskers is a beautiful, fluffy cat with striking blue eyes. She is initially shy but warms up quickly to gentle handling. She loves to be brushed and would benefit from daily grooming. Whiskers prefers to be the only cat in the household.',
    image: 'https://images.pexels.com/photos/617278/pexels-photo-617278.jpeg?auto=compress&cs=tinysrgb&w=800',
    location: 'Foster Care',
    dateArrived: '2024-12-01',
    specialNeeds: 'Daily grooming required for long coat'
  },
  {
    id: '5',
    name: 'Max',
    type: 'dog',
    breed: 'Border Collie Mix',
    age: '4 years',
    gender: 'male',
    description: 'Max is an intelligent, energetic dog who loves to learn new tricks and stay active. He would be perfect for an active family or individual who enjoys hiking, running, or outdoor activities. Max knows several commands and is eager to please.',
    image: 'https://images.pexels.com/photos/551628/pexels-photo-551628.jpeg?auto=compress&cs=tinysrgb&w=800',
    location: 'Main Shelter',
    dateArrived: '2024-11-15',
    isUrgent: false
  },
  {
    id: '6',
    name: 'Mittens',
    type: 'cat',
    breed: 'Tabby',
    age: '1 year',
    gender: 'female',
    description: 'Mittens is a playful young cat with distinctive white paws that gave her the name. She loves to chase toys, climb cat trees, and play with other cats. Mittens is very social and would do well in a home with other cats or as a single cat with lots of attention.',
    image: 'https://images.pexels.com/photos/45201/kitty-cat-kitten-pet-45201.jpeg?auto=compress&cs=tinysrgb&w=800',
    location: 'Foster Care',
    dateArrived: '2024-12-10',
    isUrgent: false
  },
  {
    id: '7',
    name: 'Rocky',
    type: 'dog',
    breed: 'Pit Bull Mix',
    age: '6 years',
    gender: 'male',
    description: 'Rocky is a gentle giant with a heart of gold. Despite misconceptions about his breed, he is incredibly sweet and loves children. He enjoys playing tug-of-war, going for walks, and receiving belly rubs. Rocky would thrive with an experienced dog owner.',
    image: 'https://images.pexels.com/photos/1254140/pexels-photo-1254140.jpeg?auto=compress&cs=tinysrgb&w=800',
    location: 'Main Shelter',
    dateArrived: '2024-09-30',
    isUrgent: true
  },
  {
    id: '8',
    name: 'Princess',
    type: 'cat',
    breed: 'Siamese Mix',
    age: '8 years',
    gender: 'female',
    description: 'Princess is a regal senior cat who prefers the finer things in life. She enjoys sunny windowsills, soft blankets, and gentle petting sessions. Princess would be perfect for someone looking for a calm, low-maintenance companion who still has lots of love to give.',
    image: 'https://images.pexels.com/photos/208984/pexels-photo-208984.jpeg?auto=compress&cs=tinysrgb&w=800',
    location: 'Foster Care',
    dateArrived: '2024-11-05',
    specialNeeds: 'Senior care - regular vet checkups recommended'
  }
];