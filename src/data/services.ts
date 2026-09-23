import type { Project } from '../types';
import { projects } from './projects';

export interface Service {
  id: string;
  name: string;
  shortDesc: string;
  fullDesc: string;
  included: string[];
  projects: Project[];
}

export const services: Service[] = [
  {
    id: 's1',
    name: 'Design',
    shortDesc: 'Brand & Creative',
    fullDesc: 'Building brand identities that stand out — logos, guidelines, and visual systems that define who you are.',
    included: [],
    projects: projects.filter(p => p.category === 'Design')
  },
  {
    id: 's2',
    name: 'Develop',
    shortDesc: 'Web Development',
    fullDesc: 'Robust, scalable, and lightning-fast web applications built on modern technology stacks.',
    included: [],
    projects: projects.filter(p => p.category === 'Develop')
  },
  {
    id: 's3',
    name: 'Market',
    shortDesc: 'Comprehensive Digital Campaigns',
    fullDesc: 'Creating holistic digital strategies that connect every touchpoint of your customer journey.',
    included: [],
    projects: projects.filter(p => p.category === 'Market')
  },
  {
    id: 's4',
    name: 'Scale',
    shortDesc: 'SEO Mastery & Targeted Ads',
    fullDesc: 'Maximising ROI through precise audience targeting across platforms and boosting your site on search engines.',
    included: [],
    projects: projects.filter(p => p.category === 'Scale')
  }
];
