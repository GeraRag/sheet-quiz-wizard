
import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { EnvironmentalQuestions } from './EnvironmentalQuestions';
import { SocialQuestions } from './SocialQuestions';
import { GovernanceQuestions } from './GovernanceQuestions';
import { ESGResults } from './ESGResults';
import { ESGFramework } from './ESGFramework';
import { ESGFormData, ESGResults as ESGResultsType } from '@/types/esg';
import { calculateESGScores } from '@/utils/esgCalculator';
import { Leaf, Users, Building2, Calculator, FileSpreadsheet } from 'lucide-react';

export const ESGQuestionnaire: React.FC = () => {
  const [activeTab, setActiveTab] = useState<string>('environmental');
  const [showResults, setShowResults] = useState<boolean>(false);
  const [showFramework, setShowFramework] = useState<boolean>(false);
  
  const [formData, setFormData] = useState<ESGFormData>({
    // Environmental
    energySource: [],
    materialSustainability: 'No',
    acceptsReturns: false,
    recyclesMisprints: false,
    offsetsEmissions: 'No',
    
    // Social
    diversityPolicy: false,
    diversityIndicators: [],
    trainingFrequency: '',
    wellnessPrograms: false,
    supportsCauses: false,
    
    // Governance
    vetsSuppliers: false,
    suppliersISOCertified: 'No',
    dataProtectionPolicy: false,
    privacyRegulationCompliance: false,
    esgAuditing: false,
    ethicalSourcingCertification: false,
  });

  const [results, setResults] = useState<ESGResultsType | null>(null);

  const handleTabChange = (newTab: string) => {
    setActiveTab(newTab);
    setShowResults(false);
    setShowFramework(false);
  };

  const handleCalculate = () => {
    const calculatedResults = calculateESGScores(formData);
    setResults(calculatedResults);
    setShowResults(true);
    setShowFramework(false);
  };

  const handleShowFramework = () => {
    setShowResults(false);
    setShowFramework(true);
  };

  const handleBack = () => {
    setShowResults(false);
    setShowFramework(false);
  };

  const handleNextTab = () => {
    if (activeTab === 'environmental') setActiveTab('social');
    else if (activeTab === 'social') setActiveTab('governance');
    else if (activeTab === 'governance') handleCalculate();
  };

  const handlePreviousTab = () => {
    if (activeTab === 'social') setActiveTab('environmental');
    else if (activeTab === 'governance') setActiveTab('social');
  };

  return (
    <div className="container mx-auto py-8">
      <Card className="w-full">
        <CardHeader>
          <CardTitle className="text-2xl md:text-3xl">ESG Assessment Tool</CardTitle>
          <CardDescription>
            Complete the questionnaire to assess your organization's ESG performance
          </CardDescription>
        </CardHeader>
        <CardContent>
          {!showResults && !showFramework ? (
            <Tabs value={activeTab} onValueChange={handleTabChange} className="w-full">
              <TabsList className="grid grid-cols-3 mb-8">
                <TabsTrigger value="environmental" className="flex items-center gap-2">
                  <Leaf className="w-4 h-4" /> 
                  <span className="hidden sm:inline">Environmental</span>
                </TabsTrigger>
                <TabsTrigger value="social" className="flex items-center gap-2">
                  <Users className="w-4 h-4" /> 
                  <span className="hidden sm:inline">Social</span>
                </TabsTrigger>
                <TabsTrigger value="governance" className="flex items-center gap-2">
                  <Building2 className="w-4 h-4" /> 
                  <span className="hidden sm:inline">Governance</span>
                </TabsTrigger>
              </TabsList>
              
              <TabsContent value="environmental">
                <EnvironmentalQuestions formData={formData} setFormData={setFormData} />
              </TabsContent>
              <TabsContent value="social">
                <SocialQuestions formData={formData} setFormData={setFormData} />
              </TabsContent>
              <TabsContent value="governance">
                <GovernanceQuestions formData={formData} setFormData={setFormData} />
              </TabsContent>
            </Tabs>
          ) : showResults && results ? (
            <ESGResults results={results} />
          ) : showFramework ? (
            <ESGFramework />
          ) : null}
        </CardContent>
        <CardFooter className="flex flex-wrap justify-between gap-2">
          {!showResults && !showFramework ? (
            <>
              <div>
                <Button 
                  variant="outline"
                  onClick={handleShowFramework}
                  className="flex items-center gap-2"
                >
                  <FileSpreadsheet className="w-4 h-4" /> View Scoring Framework
                </Button>
              </div>
              <div className="flex gap-2">
                {activeTab !== 'environmental' && (
                  <Button 
                    variant="outline"
                    onClick={handlePreviousTab}
                  >
                    Previous
                  </Button>
                )}
                <Button 
                  onClick={handleNextTab}
                  className="flex items-center gap-2"
                >
                  {activeTab === 'governance' ? (
                    <>
                      <Calculator className="w-4 h-4" /> Calculate Scores
                    </>
                  ) : 'Next'}
                </Button>
              </div>
            </>
          ) : (
            <Button 
              variant="outline"
              onClick={handleBack}
            >
              Back to Questionnaire
            </Button>
          )}
        </CardFooter>
      </Card>
    </div>
  );
};
