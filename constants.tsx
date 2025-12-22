
import React from 'react';
import { Doctor, Department, Testimonial, Facility } from './types';

export const DOCTORS: Doctor[] = [
  {
    id: '1',
    name: 'Dr. Ananya Rao',
    specialization: 'Neuroscience Specialist',
    experience: 8,
    bio: 'Leads our Neuroscience department with a focus on compassionate, patient-centric diagnosis and treatment.',
    imageUrl: 'https://media.istockphoto.com/id/479378798/photo/portrait-of-female-doctor.jpg?s=612x612&w=0&k=20&c=P-W8KSJBYhYj2RSx1Zhff6FCGvtRDC3AAzox8deMmew=',
    available: true
  },
  {
    id: '2',
    name: 'Dr. Marcus Thorne',
    specialization: 'Heart Institute Chief',
    experience: 18,
    bio: 'Dedicated to interventional cardiology and heart health education in the community.',
    imageUrl: 'https://www.shutterstock.com/image-photo/healthcare-medical-staff-concept-portrait-600nw-2281024823.jpg',
    available: true
  },
  {
    id: '3',
    name: 'Dr. Sarah Jenkins',
    specialization: 'Pediatric Specialist',
    experience: 15,
    bio: 'Known for her gentle approach that puts both children and parents at ease.',
    imageUrl: 'https://images.unsplash.com/photo-1594824476967-48c8b964273f?auto=format&fit=crop&q=80&w=400&h=500',
    available: true
  },
  {
    id: '4',
    name: 'Dr. Julian Chen',
    specialization: 'Orthopedic Surgeon',
    experience: 20,
    bio: 'Helping athletes return to peak performance through minimally invasive techniques.',
    imageUrl: 'https://images.unsplash.com/photo-1622253692010-333f2da6031d?auto=format&fit=crop&q=80&w=400&h=500',
    available: false
  }
];

export const DEPARTMENTS: Department[] = [
  {
    id: 'heart',
    name: 'Heart Institute',
    icon: '❤️',
    description: 'Pioneering cardiac care with a focus on minimally invasive procedures and preventive cardiology.',
    image: 'https://safartibbi.com/wp-content/uploads/2023/08/Asian-Heart-Institute-image-2.jpg'
  },
  {
    id: 'neuro',
    name: 'Neuroscience',
    icon: '🧠',
    description: 'Comprehensive care for the brain and spine, utilizing the latest in neuro-navigation technology.',
    image: 'https://images.unsplash.com/photo-1559757175-5700dde675bc?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 'ortho',
    name: 'Orthopedics & Sports',
    icon: '🦴',
    description: 'Restoring mobility through advanced joint replacement and dedicated sports medicine rehabilitation.',
    image: 'https://www.balajihospitaljaipur.com/uploads/orthopedic/1760073381-cases%20and%20injuries.jpg'
  },
  {
    id: 'peds',
    name: 'Pediatrics',
    icon: '👶',
    description: 'Family-centered care for our youngest patients, from newborn intensive care to adolescent health.',
    image: 'https://www.kulkarni-hospital.com/wp-content/uploads/2019/07/Pediatrics.jpg'
  },
  {
    id: 'cancer',
    name: 'Cancer Center',
    icon: '🔬',
    description: 'Compassionate, personalized oncology care combining cutting-edge research with holistic support.',
    image: 'https://mangalprabhu.com/wp-content/uploads/2020/02/WhatsApp-Image-2020-01-23-at-12.29.25.jpeg'
  },
  {
    id: 'emergency',
    name: 'Trauma & Emergency',
    icon: '🚨',
    description: 'Level 1 Trauma Center staffed 24/7 by board-certified emergency medicine specialists.',
    image: 'https://eozxehncj7g.exactdn.com/wp-content/uploads/2025/04/Integrated-Emergency-Room-ER-equipped-to-manage-cardiac-trauma-and-critical-emergencies-1.jpg'
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 't1',
    name: 'Margaret Thompson',
    treatment: 'KNEE REPLACEMENT',
    quote: "From the moment I walked in, I felt seen and heard. The recovery suites felt more like a hotel than a hospital.",
    image: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80&w=200&h=200'
  },
  {
    id: 't2',
    name: 'Robert Davis',
    treatment: 'EMERGENCY CARE',
    quote: "The speed and coordination of the emergency team was phenomenal. They saved my life, plain and simple.",
    image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=200&h=200'
  },
  {
    id: 't3',
    name: 'Emily Chen',
    treatment: 'MATERNITY',
    quote: "Giving birth at Nova was a beautiful experience. The nurses were incredibly supportive and attentive to my every need.",
    image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80&w=200&h=200'
  }
];

export const FACILITIES: Facility[] = [
  {
    title: 'Precision Labs',
    description: 'Ultra-high resolution imaging and diagnostics.',
    image: 'https://images.unsplash.com/photo-1579154235884-3320230ca37b?auto=format&fit=crop&q=80&w=1200'
  },
  {
    title: 'Nova Recovery Suites',
    description: 'Luxury recovery environments for optimized healing.',
    image: 'https://images.unsplash.com/photo-1516549655169-df83a0774514?auto=format&fit=crop&q=80&w=1200'
  }
];
