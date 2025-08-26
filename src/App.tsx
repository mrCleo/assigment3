import React, { useState, useEffect } from 'react';
import Navigation from './components/Navigation';
import Home from './pages/Home';
import About from './pages/About';
import Pets from './pages/Pets';
import Register from './pages/Register';
import Release from './pages/Release';
import Adopt from './pages/Adopt';
import Contact from './pages/Contact';
import Login from './pages/Login';
import Signup from './pages/Signup';
import ResetPassword from './pages/ResetPassword';
import Footer from './components/Footer';

function App() {
  const [currentPage, setCurrentPage] = useState('home');
  const [loggedIn, setLoggedIn] = useState(false);

  // Restore login state on refresh
  useEffect(() => {
    const status = localStorage.getItem('petheaven_loggedIn');
    if (status === 'true') {
      setLoggedIn(true);
    }
  }, []);

  // Called when login succeeds
  const handleLoginSuccess = () => {
    setLoggedIn(true);
    localStorage.setItem('petheaven_loggedIn', 'true');
    setCurrentPage('home');
  };

  const handleLogout = () => {
    setLoggedIn(false);
    localStorage.removeItem('petheaven_loggedIn');
    setCurrentPage('home');
  };

  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return <Home onNavigate={setCurrentPage} />;
      case 'about':
        return <About />;
      case 'pets':
        return <Pets onNavigate={setCurrentPage} />;
      case 'register':
        return <Register />;
      case 'release':
        return <Release />;
      case 'adopt':
        return <Adopt />;
      case 'contact':
        return <Contact />;
      case 'login':
        return (
          <Login
            onNavigate={setCurrentPage}
            onLoginSuccess={handleLoginSuccess}
          />
        );
      case 'signup':
        return <Signup onNavigate={setCurrentPage} />;
      case 'reset-password':
        return <ResetPassword onNavigate={setCurrentPage} />;
      default:
        return <Home onNavigate={setCurrentPage} />;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation
        currentPage={currentPage}
        onNavigate={setCurrentPage}
        loggedIn={loggedIn}
        onLogout={handleLogout}
      />
      <main className="pt-16">
        {renderPage()}
      </main>
      <Footer onNavigate={setCurrentPage} />
    </div>
  );
}

export default App;