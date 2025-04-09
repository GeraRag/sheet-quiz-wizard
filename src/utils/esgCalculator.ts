
import { ESGFormData, ESGResults, Score } from "../types/esg";

// Helper function to convert scores to numerical values for calculations
const scoreValue = (score: Score): number => {
  switch (score) {
    case 'A': return 3;
    case 'B': return 2;
    case 'C': return 1;
    default: return 0;
  }
};

export const calculateESGScores = (formData: ESGFormData): ESGResults => {
  // Calculate Environmental scores
  const energySource: Score = formData.energySource.some(src => 
    ['Solar Power', 'Wind Power', 'Hydro Power'].includes(src)) ? 'A' : 
    formData.energySource.includes('Mixed Grid') ? 'B' : 'C';
  
  const materialSustainability: Score = 
    formData.materialSustainability === 'Yes' ? 'A' : 
    formData.materialSustainability === 'Partially' ? 'B' : 'C';
  
  const wasteManagement: Score = 
    (formData.acceptsReturns && formData.recyclesMisprints) ? 'A' :
    (formData.acceptsReturns || formData.recyclesMisprints) ? 'B' : 'C';
  
  const carbonEmissions: Score =
    formData.offsetsEmissions === 'Yes' ? 'A' :
    formData.offsetsEmissions === 'In Progress' ? 'B' : 'C';

  // Calculate Social scores
  const workforceDiversity: Score = 
    (formData.diversityPolicy && formData.diversityIndicators.length >= 3) ? 'A' :
    (formData.diversityPolicy && formData.diversityIndicators.length >= 1) ? 'B' : 'C';
  
  const trainingWellBeing: Score =
    (formData.trainingFrequency === 'Monthly' && formData.wellnessPrograms) ? 'A' :
    formData.trainingFrequency === 'Quarterly' ? 'B' : 'C';
  
  const socialImpact: Score =
    formData.supportsCauses ? 'A' : 'C';

  // Calculate Governance scores
  const supplierResponsibility: Score =
    (formData.vetsSuppliers && formData.suppliersISOCertified === 'Yes') ? 'A' :
    formData.suppliersISOCertified === 'In progress' ? 'B' : 'C';
  
  const dataPrivacy: Score =
    (formData.dataProtectionPolicy && formData.privacyRegulationCompliance) ? 'A' : 'C';
  
  const transparency: Score =
    (formData.esgAuditing && formData.ethicalSourcingCertification) ? 'A' : 'C';

  // Calculate overall scores for each section
  const environmentalScores = [energySource, materialSustainability, wasteManagement, carbonEmissions];
  const socialScores = [workforceDiversity, trainingWellBeing, socialImpact];
  const governanceScores = [supplierResponsibility, dataPrivacy, transparency];

  const calculateSectionScore = (scores: Score[]): number => {
    const total = scores.reduce((sum, score) => sum + scoreValue(score), 0);
    return Math.round((total / (scores.length * 3)) * 100);
  };

  const environmentalOverall = calculateSectionScore(environmentalScores);
  const socialOverall = calculateSectionScore(socialScores);
  const governanceOverall = calculateSectionScore(governanceScores);
  
  const overallScore = Math.round(
    (environmentalOverall + socialOverall + governanceOverall) / 3
  );

  return {
    environmental: {
      energySource,
      materialSustainability,
      wasteManagement,
      carbonEmissions,
      overallScore: environmentalOverall
    },
    social: {
      workforceDiversity,
      trainingWellBeing,
      socialImpact,
      overallScore: socialOverall
    },
    governance: {
      supplierResponsibility,
      dataPrivacy,
      transparency,
      overallScore: governanceOverall
    },
    overallScore
  };
};
