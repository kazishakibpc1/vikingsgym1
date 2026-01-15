export interface FacilityImage {
  src: string;
  alt: string;
  description: string;
}

export interface ChatMessage {
  role: 'user' | 'model';
  text: string;
}

export enum SectionId {
  HOME = 'home',
  FACILITY = 'facility',
  WORKOUTS = 'workouts',
  MEMBERSHIP = 'membership',
  CONTACT = 'contact',
}