
import React, { useState } from 'react';

interface NavbarProps {
  onNavigate: (page: string) => void;
  activePage: string;
}

const Navbar: React.FC<NavbarProps> = ({ onNavigate, activePage }) => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: 'Home', id: 'home' },
    { name: 'About', id: 'about' },
    { name: 'Doctors', id: 'doctors' },
    { name: 'Departments', id: 'departments' },
    { name: 'Contact', id: 'contact' },
  ];

  return (
    <nav className="sticky top-0 z-50 bg-white border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20 items-center">
          <div className="flex items-center cursor-pointer group" onClick={() => onNavigate('home')}>
            <div className="w-10 h-10 bg-teal-600 rounded-lg flex items-center justify-center text-white mr-3">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
              </svg>
            </div>
            <div>
              <span className="text-xl font-bold tracking-tight text-slate-800 leading-none inline-block">Nova</span>
              <span className="text-xl font-bold text-teal-600 inline-block">Campus</span>
            </div>
          </div>

          <div className="hidden lg:flex space-x-8">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => onNavigate(link.id)}
                className={`text-sm font-medium transition-all ${
                  activePage === link.id ? 'text-teal-600' : 'text-slate-600 hover:text-teal-500'
                }`}
              >
                {link.name}
              </button>
            ))}
          </div>

          <div className="hidden lg:flex items-center">
            <button
              onClick={() => onNavigate('appointment')}
              className="bg-teal-600 text-white px-6 py-2 rounded-md font-semibold text-sm hover:bg-teal-700 transition-all"
            >
              Book Appointment
            </button>
          </div>

          <div className="lg:hidden flex items-center">
            <button onClick={() => setIsOpen(!isOpen)} className="text-slate-600 p-2">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {isOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="lg:hidden bg-white border-t border-slate-100 p-4 space-y-2">
          {navLinks.map((link) => (
            <button
              key={link.id}
              onClick={() => {
                onNavigate(link.id);
                setIsOpen(false);
              }}
              className="block w-full text-left px-4 py-2 text-slate-700 font-medium hover:bg-teal-50 rounded-lg"
            >
              {link.name}
            </button>
          ))}
          <button
            onClick={() => {
              onNavigate('appointment');
              setIsOpen(false);
            }}
            className="block w-full text-center bg-teal-600 text-white py-3 rounded-md font-bold"
          >
            Book Appointment
          </button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
