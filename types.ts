export interface Accommodation {
  id: string;
  name: string;
  type: 'Suite' | 'Room' | 'Campsite' | 'Dorm';
  capacity: string;
  priceWeekend: string;
  priceWeekday?: string;
  amenities: string[];
  description: string;
  image: string;
  note?: string;
}

export interface Activity {
  id: string;
  name: string;
  description: string;
  location: string;
  image: string;
  price?: string;
  note?: string;
}

export interface ProduceItem {
  name: string;
  image: string;
}

export interface FarmInfo {
  totalArea: string;
  produce: ProduceItem[];
  livestock: string[];
}

export interface UIContent {
  nav: {
    home: string;
    accommodations: string;
    activities: string;
    contact: string;
  };
  home: {
    heroTitle: string;
    heroSubtitle: string;
    heroDesc: string;
    bookBtn: string;
    welcome: string;
    aboutTitle: string;
    aboutDesc: string;
    aboutFeatures: { title: string; desc: string; image: string }[];
    freshTitle: string;
    freshSubtitle: string;
    freshDesc: string;
    ctaTitle: string;
    ctaSubtitle: string;
    ctaDesc: string;
    ctaBtn: string;
    stats: { acres: string; organic: string };
  };
  footer: {
    explore: string;
    visitUs: string;
    desc: string;
  };
  contact: {
    title: string;
    subtitle: string;
    location: string;
    checkIn: string;
    reservations: string;
    policy: string;
    policyText: string;
  };
}

export interface AppData {
  farmInfo: FarmInfo;
  accommodations: Accommodation[];
  activities: Activity[];
  ui: UIContent;
}

export type Language = 'en' | 'zh';