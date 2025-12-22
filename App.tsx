
import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Calendar from './components/Calendar';
import { DOCTORS, DEPARTMENTS, TESTIMONIALS, FACILITIES } from './constants';
import { Doctor, Department } from './types';

const App: React.FC = () => {
  const [currentPage, setCurrentPage] = useState('home');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedId, setSelectedId] = useState<string | null>(null);
  const [preselectedDeptId, setPreselectedDeptId] = useState<string | null>(null);
  const [selectedDate, setSelectedDate] = useState<string>('');
  const [lastBookingInfo, setLastBookingInfo] = useState<{ name: string; email: string; date?: string; time?: string } | null>(null);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [currentPage, selectedId]);

  const handleNavigate = (page: string, id: string | null = null) => {
    setCurrentPage(page);
    setSelectedId(id);
  };

  const handleBookWithContext = (deptId: string | null) => {
    setPreselectedDeptId(deptId);
    handleNavigate('appointment');
  };

  const handleFormSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    setLastBookingInfo({
      name: formData.get('name') as string,
      email: formData.get('email') as string,
      date: selectedDate,
      time: formData.get('time') as string,
    });
    handleNavigate('confirmation');
  };

  const timeSlots = [
    "09:00 AM", "09:30 AM", "10:00 AM", "10:30 AM", "11:00 AM", "11:30 AM",
    "01:00 PM", "01:30 PM", "02:00 PM", "02:30 PM", "03:00 PM", "03:30 PM",
    "04:00 PM", "04:30 PM"
  ];

  const renderHome = () => (
    <div className="animate-in fade-in duration-700">
      {/* Hero Section */}
      <section className="relative min-h-[85vh] flex items-center overflow-hidden bg-slate-900 text-white">
        <div className="absolute inset-0 opacity-50">
           <img 
            src="https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&q=80&w=1600" 
            alt="Hospital Interior" 
            className="w-full h-full object-cover"
          />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10">
          <div className="max-w-2xl">
            <div className="inline-flex items-center px-4 py-1.5 rounded-full bg-slate-800/80 backdrop-blur-md text-teal-400 font-bold text-xs uppercase tracking-widest mb-8 border border-slate-700">
              <span className="mr-2">✓</span> Accredited Center of Excellence
            </div>
            <h1 className="text-5xl lg:text-7xl font-bold mb-6 leading-tight serif-font">
              Expertise You Trust.<br />
              <span className="text-teal-400">Care You Deserve.</span>
            </h1>
            <p className="text-xl text-slate-300 mb-10 leading-relaxed max-w-lg">
              Welcome to Nova Medical Campus. We combine state-of-the-art medical technology with a deeply personal approach to healing.
            </p>
            <div className="flex flex-wrap gap-4">
              <button 
                onClick={() => handleNavigate('appointment')}
                className="bg-teal-600 text-white px-8 py-4 rounded-md font-bold text-lg hover:bg-teal-700 transition-all shadow-lg"
              >
                Book Your Visit
              </button>
              <button 
                onClick={() => handleNavigate('doctors')}
                className="bg-slate-800/60 backdrop-blur-md text-white border border-slate-700 px-8 py-4 rounded-md font-bold text-lg hover:bg-slate-700 transition-all flex items-center"
              >
                Find a Specialist <span className="ml-2">→</span>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Stats Section */}
      <section className="py-12 bg-white border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 grid grid-cols-2 lg:grid-cols-4 gap-8">
          {[
            { label: 'Specialists', val: '150+' },
            { label: 'Years Experience', val: '25+' },
            { label: 'Patient Satisfaction', val: '99%' },
            { label: 'Successful Surgeries', val: '40k+' },
          ].map((stat, i) => (
            <div key={i} className="text-center">
              <div className="text-3xl font-bold text-slate-900 serif-font mb-1">{stat.val}</div>
              <div className="text-xs font-bold text-teal-600 uppercase tracking-widest">{stat.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Featured Departments */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-end mb-16">
            <div>
               <h2 className="text-4xl font-bold text-slate-900 mb-4 serif-font">Leading Departments</h2>
               <p className="text-slate-500">World-class facilities across major disciplines.</p>
            </div>
            <button onClick={() => handleNavigate('departments')} className="text-teal-600 font-bold hover:translate-x-1 transition-transform">
              Explore All →
            </button>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {DEPARTMENTS.slice(0, 3).map((dept) => (
              <div key={dept.id} onClick={() => handleNavigate('departmentDetail', dept.id)} className="group cursor-pointer bg-white rounded-3xl p-8 border border-slate-100 hover:shadow-2xl transition-all">
                <div className="text-4xl mb-6">{dept.icon}</div>
                <h3 className="text-2xl font-bold text-slate-900 mb-4 serif-font">{dept.name}</h3>
                <p className="text-slate-500 text-sm mb-8 leading-relaxed line-clamp-2">{dept.description}</p>
                <div className="text-teal-600 font-bold text-sm">View Details →</div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );

  const renderAbout = () => (
    <div className="animate-in fade-in duration-700">
      <section className="py-24 bg-slate-900 text-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold mb-6 serif-font">About Nova Medical</h1>
          <p className="text-xl text-slate-300 leading-relaxed">Nova Campus was founded on the principle that healthcare should be a blend of scientific precision and human kindness.</p>
        </div>
      </section>
      <section className="py-24 bg-white">
         <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <img src="https://images.unsplash.com/photo-1516549655169-df83a0774514?auto=format&fit=crop&q=80&w=1200" alt="Hospital" className="rounded-3xl shadow-2xl" />
            <div>
               <h2 className="text-4xl font-bold text-slate-900 mb-6 serif-font">Our Mission</h2>
               <p className="text-slate-600 mb-8 leading-relaxed">To deliver exceptional patient-centered care through clinical excellence, advanced research, and compassionate community service. We strive to lead the healthcare industry by continuously integrating innovative medical technologies into our practice.</p>
               <button onClick={() => handleNavigate('contact')} className="bg-slate-900 text-white px-8 py-3 rounded-xl font-bold hover:bg-teal-600 transition-colors">Contact Our Concierge</button>
            </div>
         </div>
      </section>
    </div>
  );

  const renderDoctors = () => (
    <div className="animate-in fade-in duration-700 py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-slate-900 mb-4 serif-font">Meet Our Medical Faculty</h1>
          <p className="text-slate-500">Board-certified experts from around the globe.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {DOCTORS.map((doc) => (
            <div key={doc.id} onClick={() => handleNavigate('doctorDetail', doc.id)} className="bg-white rounded-2xl overflow-hidden border border-slate-100 hover:shadow-xl transition-all group cursor-pointer">
              <div className="aspect-[4/5] relative overflow-hidden">
                <img src={doc.imageUrl} alt={doc.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform" />
              </div>
              <div className="p-6">
                <h3 className="font-bold text-lg text-slate-900 mb-1 serif-font">{doc.name}</h3>
                <p className="text-teal-600 text-xs font-bold uppercase mb-4">{doc.specialization}</p>
                <div className="text-xs font-medium text-slate-400">View Bio →</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );

  const renderDoctorDetail = (id: string) => {
    const doc = DOCTORS.find(d => d.id === id);
    if (!doc) return null;

    return (
      <div className="animate-in fade-in slide-in-from-right-4 duration-700 py-24 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <button onClick={() => handleNavigate('doctors')} className="mb-12 flex items-center gap-2 text-slate-400 hover:text-slate-900 transition-colors">
            ← Back to Faculty
          </button>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-start">
            <div className="sticky top-28">
              <div className="rounded-3xl overflow-hidden shadow-2xl relative">
                <img src={doc.imageUrl} alt={doc.name} className="w-full" />
                <div className="absolute bottom-0 left-0 right-0 p-8 bg-gradient-to-t from-slate-900/80 to-transparent text-white">
                   <h1 className="text-4xl font-bold serif-font mb-2">{doc.name}</h1>
                   <p className="text-teal-400 font-bold uppercase tracking-widest text-sm">{doc.specialization}</p>
                </div>
              </div>
            </div>
            <div>
              <div className="mb-10">
                <h2 className="text-2xl font-bold text-slate-900 mb-6 serif-font">Professional Background</h2>
                <p className="text-slate-600 leading-relaxed text-lg mb-8">{doc.bio}</p>
                <div className="grid grid-cols-2 gap-6">
                   <div className="p-6 bg-slate-50 rounded-2xl">
                      <div className="text-2xl font-bold text-teal-600 serif-font">{doc.experience} Years</div>
                      <div className="text-[10px] font-bold uppercase text-slate-400 tracking-widest">Experience</div>
                   </div>
                   <div className="p-6 bg-slate-50 rounded-2xl">
                      <div className="text-2xl font-bold text-teal-600 serif-font">Available</div>
                      <div className="text-[10px] font-bold uppercase text-slate-400 tracking-widest">Status</div>
                   </div>
                </div>
              </div>

              <div className="mb-10">
                <h3 className="text-xl font-bold text-slate-900 mb-6 serif-font">Core Expertise</h3>
                <div className="flex flex-wrap gap-3">
                  {['Surgical Precision', 'Patient Consult', 'Advanced Diagnostics', 'Clinical Research'].map(tag => (
                    <span key={tag} className="px-4 py-2 bg-teal-50 text-teal-700 rounded-full text-xs font-bold">{tag}</span>
                  ))}
                </div>
              </div>

              <div className="p-8 bg-slate-900 rounded-3xl text-white">
                 <h3 className="text-xl font-bold mb-4 serif-font">Schedule a Consultation</h3>
                 <p className="text-slate-400 text-sm mb-8 leading-relaxed">Book a direct meeting with {doc.name} through our simplified appointment request system.</p>
                 <button 
                  onClick={() => handleBookWithContext(null)} 
                  className="w-full bg-teal-600 text-white font-bold py-4 rounded-xl hover:bg-teal-500 transition-all"
                 >
                   Request Appointment Now
                 </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };

  const renderDepartments = () => (
    <div className="animate-in fade-in duration-700 py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-20">
          <h1 className="text-5xl font-bold text-slate-900 mb-6 serif-font">Centers of Excellence</h1>
          <p className="text-xl text-slate-500 max-w-2xl mx-auto">Explore our specialized departments where advanced technology meets compassionate care.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {DEPARTMENTS.map((dept) => (
            <div key={dept.id} onClick={() => handleNavigate('departmentDetail', dept.id)} className="group relative rounded-3xl overflow-hidden cursor-pointer h-[400px]">
              <img src={dept.image} alt={dept.name} className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000" />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/40 to-transparent"></div>
              <div className="absolute inset-0 p-10 flex flex-col justify-end text-white">
                <div className="text-4xl mb-6 transform group-hover:-translate-y-2 transition-transform">{dept.icon}</div>
                <h2 className="text-3xl font-bold serif-font mb-4">{dept.name}</h2>
                <p className="text-slate-300 text-sm line-clamp-2 mb-6 group-hover:opacity-100 transition-opacity opacity-80">{dept.description}</p>
                <div className="text-teal-400 font-bold text-sm uppercase tracking-widest flex items-center gap-2">
                  View Department Info <span className="text-xl">→</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );

  const renderDepartmentDetail = (id: string) => {
    const dept = DEPARTMENTS.find(d => d.id === id);
    if (!dept) return null;

    return (
      <div className="animate-in fade-in slide-in-from-bottom-4 duration-700">
        <div className="relative h-[60vh] flex items-center">
          <img src={dept.image} alt={dept.name} className="absolute inset-0 w-full h-full object-cover" />
          <div className="absolute inset-0 bg-slate-900/60 backdrop-blur-[2px]"></div>
          <div className="max-w-7xl mx-auto px-4 w-full relative z-10">
             <div className="max-w-3xl">
               <button onClick={() => handleNavigate('departments')} className="mb-8 text-teal-400 font-bold flex items-center gap-2">← Back to Services</button>
               <div className="text-6xl mb-8">{dept.icon}</div>
               <h1 className="text-6xl font-bold text-white serif-font mb-8">{dept.name}</h1>
               <p className="text-xl text-slate-200 leading-relaxed mb-10">{dept.description}</p>
               <button onClick={() => handleBookWithContext(dept.id)} className="bg-teal-600 text-white px-10 py-4 rounded-xl font-bold hover:bg-teal-700 transition-all shadow-xl">Book a Visit in {dept.name}</button>
             </div>
          </div>
        </div>
      </div>
    );
  };

  const renderContact = () => (
    <div className="animate-in fade-in duration-700 py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-slate-900 mb-4 serif-font">Get in Touch</h1>
          <p className="text-slate-500">We're here to help 24/7 with your medical inquiries.</p>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <div className="space-y-8">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-teal-50 rounded-xl flex items-center justify-center text-teal-600 shrink-0">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
              </div>
              <div>
                <h3 className="font-bold text-slate-900">Campus Address</h3>
                <p className="text-slate-500">123 Wellness Blvd, Healthcare City, HC 54321</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-teal-50 rounded-xl flex items-center justify-center text-teal-600 shrink-0">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
              </div>
              <div>
                <h3 className="font-bold text-slate-900">Phone Support</h3>
                <p className="text-slate-500">+1 (555) 911-0000 (Emergency)</p>
                <p className="text-slate-500">+1 (555) 000-1234 (General Inquiry)</p>
              </div>
            </div>
          </div>
          <form className="space-y-6 bg-slate-50 p-8 rounded-3xl" onSubmit={(e) => { e.preventDefault(); handleNavigate('home'); }}>
            <div className="grid grid-cols-2 gap-4">
              <input type="text" placeholder="First Name" className="w-full p-4 rounded-xl border-none outline-none focus:ring-2 focus:ring-teal-500/50" />
              <input type="text" placeholder="Last Name" className="w-full p-4 rounded-xl border-none outline-none focus:ring-2 focus:ring-teal-500/50" />
            </div>
            <input type="email" placeholder="Email Address" className="w-full p-4 rounded-xl border-none outline-none focus:ring-2 focus:ring-teal-500/50" />
            <textarea placeholder="Your Message" rows={4} className="w-full p-4 rounded-xl border-none outline-none focus:ring-2 focus:ring-teal-500/50 resize-none"></textarea>
            <button type="submit" className="w-full bg-teal-600 text-white py-4 rounded-xl font-bold hover:bg-teal-700 transition-all">Send Message</button>
          </form>
        </div>
      </div>
    </div>
  );

  const renderPrivacyPolicy = () => (
    <div className="animate-in fade-in duration-700 py-24 bg-white">
      <div className="max-w-4xl mx-auto px-4">
        <h1 className="text-4xl font-bold text-slate-900 mb-8 serif-font">Privacy Policy</h1>
        <div className="prose prose-slate max-w-none space-y-6 text-slate-600">
          <p>Your privacy is important to us. It is Nova Medical Campus's policy to respect your privacy regarding any information we may collect from you across our website.</p>
          <h2 className="text-2xl font-bold text-slate-800">1. Information We Collect</h2>
          <p>We only ask for personal information when we truly need it to provide a service to you. We collect it by fair and lawful means, with your knowledge and consent.</p>
          <h2 className="text-2xl font-bold text-slate-800">2. Data Security</h2>
          <p>We only retain collected information for as long as necessary to provide you with your requested service. What data we store, we’ll protect within commercially acceptable means to prevent loss and theft.</p>
          <h2 className="text-2xl font-bold text-slate-800">3. Third-party Access</h2>
          <p>We do not share any personally identifying information publicly or with third-parties, except when required to by law.</p>
        </div>
      </div>
    </div>
  );

  const renderConfirmation = () => (
    <div className="animate-in fade-in zoom-in-95 duration-700 py-32 bg-slate-50 min-h-[80vh] flex items-center justify-center">
      <div className="max-w-xl w-full mx-4">
        <div className="bg-white rounded-3xl shadow-2xl p-12 text-center border border-slate-100 relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-2 bg-teal-600"></div>
          <div className="w-20 h-20 bg-teal-50 text-teal-600 rounded-full flex items-center justify-center mx-auto mb-8 text-4xl shadow-inner">✓</div>
          <h1 className="text-4xl font-bold text-slate-900 mb-4 serif-font">Request Received</h1>
          <p className="text-slate-500 mb-10 leading-relaxed">
            Thank you, <span className="text-slate-900 font-bold">{lastBookingInfo?.name || 'Patient'}</span>. 
            We've scheduled your request for <span className="text-slate-900 font-bold">{lastBookingInfo?.date}</span> at <span className="text-teal-600 font-bold">{lastBookingInfo?.time}</span>. 
            A summary has been sent to <span className="text-teal-600 font-medium">{lastBookingInfo?.email || 'your email'}</span>. 
          </p>
          <div className="space-y-4">
            <button onClick={() => handleNavigate('home')} className="w-full bg-teal-600 text-white py-4 rounded-xl font-bold hover:bg-teal-700 transition-all shadow-lg shadow-teal-900/10">Return Home</button>
          </div>
        </div>
      </div>
    </div>
  );

  const renderFooter = () => (
    <footer className="bg-slate-900 text-slate-400 py-16 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-12">
        <div className="col-span-1 md:col-span-2">
          <div className="flex items-center mb-6">
            <div className="w-8 h-8 bg-teal-600 rounded flex items-center justify-center text-white mr-2">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/></svg>
            </div>
            <span className="text-xl font-bold text-white">Nova<span className="text-teal-400">Campus</span></span>
          </div>
          <p className="max-w-sm mb-8">Providing exceptional healthcare services with a focus on patient comfort and advanced medical science.</p>
          <div className="flex gap-4">
            {['Twitter', 'Facebook', 'LinkedIn', 'Instagram'].map(social => (
              <a key={social} href="#" className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-teal-600 transition-colors">
                <span className="sr-only">{social}</span>
                <div className="w-4 h-4 bg-slate-400"></div>
              </a>
            ))}
          </div>
        </div>
        <div>
          <h3 className="text-white font-bold mb-6 uppercase text-xs tracking-widest">Navigation</h3>
          <ul className="space-y-4 text-sm">
            <li><button onClick={() => handleNavigate('home')} className="hover:text-teal-400 transition-colors">Home</button></li>
            <li><button onClick={() => handleNavigate('about')} className="hover:text-teal-400 transition-colors">About Us</button></li>
            <li><button onClick={() => handleNavigate('doctors')} className="hover:text-teal-400 transition-colors">Our Doctors</button></li>
            <li><button onClick={() => handleNavigate('departments')} className="hover:text-teal-400 transition-colors">Departments</button></li>
          </ul>
        </div>
        <div>
          <h3 className="text-white font-bold mb-6 uppercase text-xs tracking-widest">Legal</h3>
          <ul className="space-y-4 text-sm">
            <li><button onClick={() => handleNavigate('privacy')} className="hover:text-teal-400 transition-colors">Privacy Policy</button></li>
            <li><button className="hover:text-teal-400 transition-colors">Terms of Service</button></li>
            <li><button className="hover:text-teal-400 transition-colors">Cookie Policy</button></li>
          </ul>
        </div>
      </div>
      <div className="max-w-7xl mx-auto px-4 mt-16 pt-8 border-t border-slate-800 text-center text-xs">
        <p>&copy; {new Date().getFullYear()} Nova Medical Campus. All rights reserved.</p>
      </div>
    </footer>
  );

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Navbar onNavigate={(page) => handleNavigate(page)} activePage={currentPage} />
      
      <main className="flex-1">
        {currentPage === 'home' && renderHome()}
        {currentPage === 'about' && renderAbout()}
        {currentPage === 'doctors' && renderDoctors()}
        {currentPage === 'departments' && renderDepartments()}
        {currentPage === 'doctorDetail' && selectedId && renderDoctorDetail(selectedId)}
        {currentPage === 'departmentDetail' && selectedId && renderDepartmentDetail(selectedId)}
        {currentPage === 'contact' && renderContact()}
        {currentPage === 'privacy' && renderPrivacyPolicy()}
        {currentPage === 'confirmation' && renderConfirmation()}
        {currentPage === 'appointment' && (
          <div className="py-16 bg-slate-50 min-h-screen animate-in fade-in slide-in-from-bottom-4 duration-700">
            <div className="max-w-6xl mx-auto px-4">
              <div className="bg-white rounded-3xl shadow-2xl overflow-hidden flex flex-col lg:flex-row border border-slate-100">
                <div className="lg:w-1/3 bg-slate-900 p-12 text-white flex flex-col justify-between relative overflow-hidden">
                  <div className="relative z-10">
                    <div className="w-12 h-12 bg-teal-600 rounded-xl flex items-center justify-center mb-8 shadow-lg shadow-teal-900">
                      <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2-2v12a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <h2 className="text-4xl font-bold mb-6 serif-font leading-tight">Your Journey to Wellness Starts Here.</h2>
                    <p className="text-slate-400 mb-10 leading-relaxed">Schedule your consultation with our world-class specialists. We prioritize your comfort and time.</p>
                  </div>
                  <div className="mt-12 pt-8 border-t border-slate-800 relative z-10">
                    <p className="text-xs text-slate-500 font-bold uppercase tracking-widest mb-4">Emergency Assistance</p>
                    <a href="tel:+15559110000" className="text-xl font-bold text-teal-400 hover:text-teal-300 transition-colors">+1 (555) 911-0000</a>
                  </div>
                  <div className="absolute -bottom-16 -right-16 w-64 h-64 bg-teal-600/10 rounded-full blur-3xl"></div>
                </div>

                <div className="lg:w-2/3 p-8 lg:p-16">
                  <div className="mb-12">
                    <h1 className="text-3xl font-bold text-slate-900 mb-4 serif-font">Appointment Request</h1>
                    <div className="h-1.5 w-16 bg-teal-600 rounded-full"></div>
                  </div>

                  <form className="space-y-8" onSubmit={handleFormSubmit}>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                      <div className="group">
                        <label className="block text-xs font-bold uppercase text-slate-400 mb-3 tracking-widest group-focus-within:text-teal-600 transition-colors">Patient Full Name</label>
                        <div className="relative">
                          <input name="name" required type="text" className="w-full bg-slate-50 border-2 border-slate-50 px-5 py-4 rounded-2xl focus:bg-white focus:border-teal-500/50 focus:ring-4 focus:ring-teal-500/5 outline-none transition-all text-slate-800 placeholder:text-slate-300" placeholder="e.g. Margaret Thompson" />
                        </div>
                      </div>
                      <div className="group">
                        <label className="block text-xs font-bold uppercase text-slate-400 mb-3 tracking-widest group-focus-within:text-teal-600 transition-colors">Email Address</label>
                        <div className="relative">
                          <input name="email" required type="email" className="w-full bg-slate-50 border-2 border-slate-50 px-5 py-4 rounded-2xl focus:bg-white focus:border-teal-500/50 focus:ring-4 focus:ring-teal-500/5 outline-none transition-all text-slate-800 placeholder:text-slate-300" placeholder="your@email.com" />
                        </div>
                      </div>
                    </div>

                    <div className="group">
                      <label className="block text-xs font-bold uppercase text-slate-400 mb-3 tracking-widest group-focus-within:text-teal-600 transition-colors">Preferred Department</label>
                      <div className="relative">
                        <select name="department" defaultValue={preselectedDeptId || ''} className="w-full bg-slate-50 border-2 border-slate-50 px-5 py-4 rounded-2xl focus:bg-white focus:border-teal-500/50 focus:ring-4 focus:ring-teal-500/5 outline-none transition-all text-slate-800 appearance-none">
                          <option value="" disabled>Select Department</option>
                          {DEPARTMENTS.map(d => <option key={d.id} value={d.id}>{d.name}</option>)}
                        </select>
                      </div>
                    </div>

                    <div className="bg-slate-50/50 p-8 rounded-3xl border border-slate-100">
                      <h3 className="text-sm font-bold text-slate-900 mb-6 uppercase tracking-widest">Select Appointment Schedule</h3>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                        <div className="group">
                          <label className="block text-[10px] font-bold uppercase text-slate-400 mb-3 tracking-widest group-focus-within:text-teal-600 transition-colors flex items-center gap-2">
                             <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2-2v12a2 2 0 002 2z" /></svg>
                             Availability Date
                          </label>
                          <Calendar selectedDate={selectedDate} onDateSelect={setSelectedDate} />
                          <input type="hidden" name="date" value={selectedDate} required />
                        </div>
                        
                        <div className="flex flex-col">
                          <div className="group mb-8">
                            <label className="block text-[10px] font-bold uppercase text-slate-400 mb-3 tracking-widest group-focus-within:text-teal-600 transition-colors flex items-center gap-2">
                               <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                               Preferred Time
                            </label>
                            <div className="relative">
                              <select name="time" required className="w-full bg-white border-2 border-slate-100 px-5 py-4 rounded-2xl focus:border-teal-500/50 focus:ring-4 focus:ring-teal-500/5 outline-none transition-all text-slate-800 appearance-none">
                                <option value="">Choose Time Slot</option>
                                {timeSlots.map(slot => <option key={slot} value={slot}>{slot}</option>)}
                              </select>
                              <span className="absolute right-5 top-1/2 -translate-y-1/2 text-slate-300 pointer-events-none">
                                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
                              </span>
                            </div>
                          </div>
                          
                          <div className="p-6 bg-teal-50 rounded-2xl border border-teal-100">
                             <h4 className="text-xs font-bold text-teal-800 mb-2 uppercase tracking-widest">Schedule Summary</h4>
                             <p className="text-sm text-teal-700 leading-relaxed">
                               {selectedDate ? `Date: ${selectedDate}` : 'Please select a date from the calendar.'}
                             </p>
                             <p className="text-xs text-teal-600 mt-2 italic">Faculty availability is confirmed after request submission.</p>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="group">
                      <label className="block text-xs font-bold uppercase text-slate-400 mb-3 tracking-widest group-focus-within:text-teal-600 transition-colors">Health Context / Reason for Visit</label>
                      <textarea name="context" className="w-full bg-slate-50 border-2 border-slate-50 px-5 py-4 rounded-2xl focus:bg-white focus:border-teal-500/50 focus:ring-4 focus:ring-teal-500/5 outline-none transition-all text-slate-800 placeholder:text-slate-300 resize-none" rows={4} placeholder="Briefly describe your symptoms or concern..."></textarea>
                    </div>

                    <div className="pt-6">
                      <button type="submit" disabled={!selectedDate} className={`w-full py-5 rounded-2xl font-bold text-lg transition-all flex items-center justify-center gap-3 active:scale-[0.98] ${!selectedDate ? 'bg-slate-200 text-slate-400 cursor-not-allowed' : 'bg-teal-600 text-white hover:bg-teal-700 hover:shadow-2xl hover:shadow-teal-200'}`}>
                        Confirm Booking Request
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" /></svg>
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        )}
      </main>

      {renderFooter()}
    </div>
  );
};

export default App;
