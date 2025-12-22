
export interface Doctor {
  id: string;
  name: string;
  specialization: string;
  experience: number;
  bio: string;
  imageUrl: string;
  available: boolean;
}

export interface Department {
  id: string;
  name: string;
  icon: string;
  description: string;
  image: string;
}

export interface Testimonial {
  id: string;
  name: string;
  quote: string;
  treatment: string;
  image: string;
}

export interface Facility {
  title: string;
  description: string;
  image: string;
}
