
export type Section = 'Environmental' | 'Social' | 'Governance';
export type Score = 'A' | 'B' | 'C';

export interface ESGCriteria {
  section: Section;
  criteria: string;
  scoreA: string;
  scoreB: string;
  scoreC: string;
}

export interface ESGAnswer {
  section: Section;
  criteria: string;
  selectedScore?: Score;
  textInput?: string;
}

export interface ESGFormData {
  // Environmental
  energySource: string[];
  energySourceOther?: string;
  materialSustainability: 'Yes' | 'Partially' | 'No';
  sustainableMaterialsList?: string;
  acceptsReturns: boolean;
  recyclesMisprints: boolean;
  wasteHandling?: string;
  offsetsEmissions: 'Yes' | 'In Progress' | 'No';
  
  // Social
  diversityPolicy: boolean;
  diversityIndicators: string[];
  diversityIndicatorsOther?: string;
  trainingFrequency: 'Monthly' | 'Quarterly' | 'Annually' | '';
  wellnessPrograms: boolean;
  supportsCauses: boolean;
  causesDescription?: string;
  
  // Governance
  vetsSuppliers: boolean;
  suppliersISOCertified: 'Yes' | 'No' | 'In progress';
  isoStandards?: string;
  dataProtectionPolicy: boolean;
  privacyRegulationCompliance: boolean;
  esgAuditing: boolean;
  ethicalSourcingCertification: boolean;
  certificationDetails?: string;
}

export interface ESGResults {
  environmental: {
    energySource: Score;
    materialSustainability: Score;
    wasteManagement: Score;
    carbonEmissions: Score;
    overallScore: number;
  };
  social: {
    workforceDiversity: Score;
    trainingWellBeing: Score;
    socialImpact: Score;
    overallScore: number;
  };
  governance: {
    supplierResponsibility: Score;
    dataPrivacy: Score;
    transparency: Score;
    overallScore: number;
  };
  overallScore: number;
}
