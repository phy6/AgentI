export type PageId = 'home' | 'services' | 'pricing' | 'why-private' | 'contact';

export interface NavItem {
  id: PageId;
  label: string;
}

export interface PricingPlan {
  id: string;
  name: string;
  tagline: string;
  upfrontPrice: number;
  monthlySupport: number;
  featured?: boolean;
  idealFor: string;
  hardwareSpecs: string[];
  softwareFeatures: string[];
  installationAndSupport: string[];
}
