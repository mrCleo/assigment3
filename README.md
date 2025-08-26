# Pet Heaven Charity Web Application

A modern, responsive React-based web application for Pet Heaven, a charity society dedicated to caring for abandoned cats and dogs and helping them find loving homes.

## 🌟 Live Demo

**Deployed Application**: [https://cute-caramel-325441.netlify.app](https://cute-caramel-325441.netlify.app)

## 📋 Table of Contents

- [Overview](#overview)
- [Features](#features)
- [Technology Stack](#technology-stack)
- [Project Structure](#project-structure)
- [Installation](#installation)
- [Usage](#usage)
- [Components](#components)
- [Pages](#pages)
- [Design Decisions](#design-decisions)
- [Assignment Requirements](#assignment-requirements)
- [Future Enhancements](#future-enhancements)
- [Contributing](#contributing)
- [License](#license)

## 🎯 Overview

Pet Heaven is a comprehensive web application designed to serve as the digital presence for a pet charity organization. The application facilitates the connection between abandoned pets and potential adopters while providing essential services for pet owners who need to surrender their pets.

### Mission Statement
"Every pet deserves a loving home. Pet Heaven bridges the gap between abandoned animals and caring families, ensuring no pet is left behind."

## ✨ Features

### Core Functionality
- **Pet Listings**: Browse available cats and dogs with detailed profiles
- **Advanced Search & Filtering**: Filter pets by type, age, location, and urgent cases
- **Member Registration**: Join the Pet Heaven community as a supporter
- **Pet Adoption Process**: Complete adoption application with comprehensive screening
- **Pet Surrender System**: Structured process for pet owners to release pets
- **Contact System**: Multiple communication channels with the organization

### User Experience Features
- **Responsive Design**: Optimized for mobile, tablet, and desktop devices
- **Smooth Animations**: Engaging micro-interactions and transitions
- **Intuitive Navigation**: Easy-to-use single-page application structure
- **Form Validation**: Comprehensive input validation and error handling
- **Email Integration**: Automated email generation for form submissions
- **Accessibility**: WCAG compliant design with proper contrast ratios

### Technical Features
- **Component-Based Architecture**: Reusable React components
- **TypeScript Integration**: Type-safe development
- **Modern CSS**: Tailwind CSS for consistent styling
- **Performance Optimized**: Fast loading and smooth interactions
- **SEO Friendly**: Proper meta tags and semantic HTML structure

## 🛠 Technology Stack

### Frontend
- **React 18.3.1**: Modern React with hooks and functional components
- **TypeScript**: Type-safe JavaScript development
- **Vite**: Fast build tool and development server
- **Tailwind CSS**: Utility-first CSS framework

### UI/UX
- **Lucide React**: Beautiful, customizable icons
- **Custom Animations**: CSS keyframes and transitions
- **Responsive Grid System**: Mobile-first design approach
- **Color Psychology**: Warm, welcoming color palette

### Development Tools
- **ESLint**: Code linting and quality assurance
- **PostCSS**: CSS processing and optimization
- **Autoprefixer**: Automatic vendor prefixing

### Deployment
- **Netlify**: Continuous deployment and hosting
- **Git**: Version control and collaboration

## 📁 Project Structure

```
pet-heaven-app/
├── public/
│   ├── vite.svg
│   └── index.html
├── src/
│   ├── components/          # Reusable UI components
│   │   ├── Navigation.tsx   # Main navigation component
│   │   ├── Footer.tsx       # Site footer with links
│   │   ├── PetCard.tsx      # Pet display card component
│   │   └── FormInput.tsx    # Reusable form input component
│   ├── pages/               # Application pages/views
│   │   ├── Home.tsx         # Landing page with hero section
│   │   ├── About.tsx        # Organization information
│   │   ├── Pets.tsx         # Pet listings with search
│   │   ├── Register.tsx     # Member registration
│   │   ├── Release.tsx      # Pet surrender form
│   │   ├── Adopt.tsx        # Adoption application
│   │   └── Contact.tsx      # Contact information and form
│   ├── data/
│   │   └── pets.ts          # Sample pet data
│   ├── App.tsx              # Main application component
│   ├── main.tsx             # Application entry point
│   └── index.css            # Global styles and animations
├── package.json             # Dependencies and scripts
├── tailwind.config.js       # Tailwind CSS configuration
├── tsconfig.json            # TypeScript configuration
├── vite.config.ts           # Vite build configuration
└── README.md                # Project documentation
```

## 🚀 Installation

### Prerequisites
- Node.js (version 16 or higher)
- npm or yarn package manager
- Git (for cloning the repository)

### Setup Instructions

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd pet-heaven-app
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npm run dev
   ```

4. **Open in browser**
   Navigate to `http://localhost:5173`

### Build for Production
```bash
npm run build
npm run preview  # Preview production build locally
```

## 💻 Usage

### For Visitors
1. **Browse Pets**: Visit the "Our Pets" section to view available animals
2. **Filter Search**: Use filters to find pets matching your preferences
3. **Learn About Organization**: Read about Pet Heaven's mission and facilities
4. **Contact**: Use multiple contact methods to reach the organization

### For Potential Adopters
1. **Register as Member**: Sign up to receive updates and notifications
2. **Select Pet**: Choose a pet from the available listings
3. **Complete Application**: Fill out comprehensive adoption form
4. **Submit Request**: Application is automatically emailed to administrators

### For Pet Owners
1. **Access Release Form**: Navigate to "Release Pet" section
2. **Provide Pet Information**: Complete detailed pet profile
3. **Submit Request**: Form is processed and sent to intake coordinators

## 🧩 Components

### Navigation Component
- **Purpose**: Main site navigation with responsive mobile menu
- **Features**: Active page highlighting, smooth transitions, mobile hamburger menu
- **Reusability**: Used across all pages with consistent styling

### PetCard Component
- **Purpose**: Display individual pet information in card format
- **Features**: Pet photos, details, adoption buttons, urgent case highlighting
- **Props**: Pet object, adoption handler, custom styling
- **Reusability**: Used in pet listings, search results, and adoption forms

### FormInput Component
- **Purpose**: Standardized form input with validation
- **Features**: Multiple input types, validation states, consistent styling
- **Types Supported**: Text, email, phone, select, textarea
- **Reusability**: Used across all forms in the application

### Footer Component
- **Purpose**: Site footer with links and contact information
- **Features**: Social media links, quick navigation, contact details
- **Responsive**: Adapts layout for different screen sizes

## 📄 Pages

### Home Page
- **Hero Section**: Compelling introduction with call-to-action buttons
- **Statistics**: Key metrics about Pet Heaven's impact
- **Mission Statement**: Clear explanation of organizational purpose
- **Feature Cards**: Quick access to main application functions

### About Page
- **Organization Story**: History and founding principles
- **Values Section**: Core beliefs and operational philosophy
- **Facilities Overview**: Description of physical infrastructure
- **Contact Information**: Location, hours, and contact methods

### Pets Page
- **Pet Listings**: Grid display of available animals
- **Search Functionality**: Filter by type, age, location, urgency
- **Detailed Profiles**: Comprehensive pet information
- **Adoption Integration**: Direct link to adoption process

### Registration Page
- **Member Signup**: Comprehensive registration form
- **Interest Tracking**: Volunteer and support preferences
- **Communication Preferences**: Newsletter and update subscriptions

### Release Page
- **Pet Surrender Form**: Detailed pet information collection
- **Owner Information**: Contact and background details
- **Surrender Reasoning**: Understanding circumstances
- **Timeline Management**: Flexible surrender scheduling

### Adoption Page
- **Comprehensive Application**: Multi-section adoption form
- **Background Screening**: Experience and lifestyle assessment
- **Reference Collection**: Veterinary and personal references
- **Commitment Evaluation**: Long-term care planning

### Contact Page
- **Multiple Contact Methods**: Phone, email, physical address
- **Contact Form**: Direct message system
- **Operating Hours**: Clear availability information
- **Emergency Contacts**: Urgent situation handling

## 🎨 Design Decisions

### Color Palette
- **Primary Orange (#F97316)**: Warm, welcoming, associated with happiness
- **Secondary Blue (#3B82F6)**: Trust, reliability, professionalism
- **Accent Green (#10B981)**: Growth, harmony, positive outcomes
- **Neutral Grays**: Clean, modern, accessible contrast ratios

### Typography
- **Font Strategy**: System fonts for performance and readability
- **Hierarchy**: Clear distinction between headings, body text, and captions
- **Line Height**: Optimized for readability (150% body, 120% headings)
- **Font Weights**: Maximum 3 weights for consistency

### Layout Principles
- **8px Grid System**: Consistent spacing throughout application
- **Mobile-First**: Responsive design starting from mobile screens
- **Card-Based Design**: Organized information in digestible chunks
- **White Space**: Intentional spacing for reduced cognitive load

### Animation Strategy
- **Micro-Interactions**: Hover states, button feedback, form validation
- **Page Transitions**: Smooth navigation between sections
- **Loading States**: Visual feedback during form submissions
- **Performance**: CSS-based animations for optimal performance

## 📚 Assignment Requirements Fulfillment

### Core Requirements ✅
- [x] **ReactJS Implementation**: Modern React with hooks and components
- [x] **Pet Information Display**: Comprehensive pet profiles and listings
- [x] **Member Registration**: Complete signup system with preferences
- [x] **Pet Release Form**: Detailed surrender process
- [x] **Adoption Form**: Comprehensive adoption application
- [x] **Email Integration**: Automated form submission to administrators
- [x] **Single Page Application**: Seamless navigation without page reloads

### Extra Credit Features ✅
- [x] **Quality Web Design**: Professional, modern, accessible design
- [x] **Reusable Components**: PetCard, FormInput, Navigation components
- [x] **Deployment**: Live application on Netlify platform
- [x] **Search and Filtering**: Advanced pet search functionality
- [x] **Responsive Design**: Optimized for all device sizes
- [x] **Form Validation**: Comprehensive input validation
- [x] **Accessibility**: WCAG compliant design principles

### Technical Excellence ✅
- [x] **Component Architecture**: Modular, maintainable code structure
- [x] **TypeScript Integration**: Type-safe development practices
- [x] **Performance Optimization**: Fast loading and smooth interactions
- [x] **Code Quality**: ESLint configuration and best practices
- [x] **Documentation**: Comprehensive README and code comments

## 🔮 Future Enhancements

### Phase 1: Backend Integration
- **Database Implementation**: MySQL or MongoDB for pet data storage
- **User Authentication**: Secure login system for members
- **Admin Dashboard**: Management interface for staff
- **Real-time Updates**: Live pet availability status

### Phase 2: Advanced Features
- **Pet Matching Algorithm**: AI-powered pet-owner compatibility
- **Virtual Pet Tours**: 360° photos and video integration
- **Appointment Scheduling**: Online booking for visits
- **Donation System**: Integrated payment processing

### Phase 3: Community Features
- **Success Stories**: Adopted pet photo sharing
- **Volunteer Portal**: Shift scheduling and task management
- **Foster Network**: Temporary care coordination
- **Educational Resources**: Pet care guides and training materials

## 🤝 Contributing

### Development Guidelines
1. **Code Style**: Follow existing TypeScript and React patterns
2. **Component Design**: Maintain reusability and single responsibility
3. **Testing**: Add unit tests for new components
4. **Documentation**: Update README for new features

### Contribution Process
1. Fork the repository
2. Create feature branch (`git checkout -b feature/amazing-feature`)
3. Commit changes (`git commit -m 'Add amazing feature'`)
4. Push to branch (`git push origin feature/amazing-feature`)
5. Open Pull Request

## 📞 Support

### Technical Support
- **Email**: support@petheaven.org
- **Documentation**: Refer to this README and inline code comments
- **Issues**: Use GitHub Issues for bug reports and feature requests

### Pet Heaven Contact
- **Phone**: +65 6234 5678
- **Email**: info@petheaven.org
- **Address**: 123 Compassion Street, Singapore 123456
- **Hours**: Monday - Sunday, 9:00 AM - 6:00 PM

## 📄 License

This project is developed for educational purposes as part of ISIT207 Frontend Web Programming assignment. All rights reserved to the University of Wollongong and the student developer.

### Academic Use
- This project is submitted as Assignment 3 for ISIT207
- Developed by: [Your Name]
- Student ID: [Your Student ID]
- Session: SIM Session 3, 2025
- Submission Date: 24 Aug 2025

---

**Pet Heaven - Where Every Pet Finds Their Forever Home** 🐾❤️