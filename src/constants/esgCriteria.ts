
import { ESGCriteria } from "../types/esg";

export const esgCriteriaFramework: ESGCriteria[] = [
  {
    section: 'Environmental',
    criteria: 'Energy Source',
    scoreA: 'Solar/Wind/Hydro/Other (renewable)',
    scoreB: 'Mixed Grid',
    scoreC: 'Fossil Fuels/Other (non-renewable)',
  },
  {
    section: 'Environmental',
    criteria: 'Material Sustainability',
    scoreA: 'Yes',
    scoreB: 'Partially',
    scoreC: 'No',
  },
  {
    section: 'Environmental',
    criteria: 'Waste Management & Recycling',
    scoreA: 'Accept returns & Recycle misprints',
    scoreB: 'Either accepts returns OR recycles misprints',
    scoreC: 'No recycling or returns',
  },
  {
    section: 'Environmental',
    criteria: 'Carbon Emissions Management',
    scoreA: 'Offsets emissions',
    scoreB: 'In progress',
    scoreC: 'No offsets',
  },
  {
    section: 'Social',
    criteria: 'Workforce Diversity',
    scoreA: 'Diversity policy + ≥3 indicators',
    scoreB: 'Diversity policy + 1–2 indicators',
    scoreC: 'No diversity policy or indicators',
  },
  {
    section: 'Social',
    criteria: 'Training & Team Well-Being',
    scoreA: 'Monthly training + wellness programs',
    scoreB: 'Quarterly training',
    scoreC: 'Annual or no training',
  },
  {
    section: 'Social',
    criteria: 'Social Impact Initiatives',
    scoreA: 'Supports local causes',
    scoreB: '—',
    scoreC: 'Does not support causes',
  },
  {
    section: 'Governance',
    criteria: 'Supplier Responsibility',
    scoreA: 'Vets suppliers + ISO certified',
    scoreB: 'ISO certification in progress',
    scoreC: 'No supplier vetting or certification',
  },
  {
    section: 'Governance',
    criteria: 'Data Privacy & Security',
    scoreA: 'Data policy + GDPR compliance',
    scoreB: '—',
    scoreC: 'No data policy or compliance',
  },
  {
    section: 'Governance',
    criteria: 'Transparency & Fair Conduct',
    scoreA: 'ESG auditing + Ethical sourcing',
    scoreB: '—',
    scoreC: 'No audits or certifications',
  },
];
