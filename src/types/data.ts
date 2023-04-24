

export interface ServiceCategory {
  name: string;
  description: string;
  image: string;
  position: string;
  services: string[];
}

export interface Review {
  name: string;
  rating: number;
  review: string;
}

export interface TeamMember {
  name: string;
  position: string;
}