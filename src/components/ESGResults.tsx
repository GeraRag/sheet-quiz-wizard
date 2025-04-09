
import React from 'react';
import { ESGResults as ESGResultsType } from '@/types/esg';
import { Progress } from "@/components/ui/progress";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

interface ESGResultsProps {
  results: ESGResultsType;
}

export const ESGResults: React.FC<ESGResultsProps> = ({ results }) => {
  const getScoreClass = (score: string) => {
    return `score-${score.toLowerCase()}`;
  };

  return (
    <div className="space-y-8">
      <div>
        <h2 className="text-3xl font-bold">ESG Assessment Results</h2>
        <div className="mt-6 flex flex-col space-y-4">
          <Card>
            <CardHeader className="pb-2">
              <CardTitle>Overall ESG Score</CardTitle>
              <CardDescription>Combined score from all three ESG dimensions</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="text-5xl font-bold mt-2 mb-4 text-primary">{results.overallScore}%</div>
              <Progress value={results.overallScore} className="h-3" />
            </CardContent>
          </Card>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card>
          <CardHeader className="bg-esg-environmental/10 pb-2">
            <CardTitle className="text-esg-environmental">Environmental</CardTitle>
            <CardDescription>Score: {results.environmental.overallScore}%</CardDescription>
          </CardHeader>
          <CardContent className="pt-4">
            <Progress value={results.environmental.overallScore} className="h-2 progress-bar-environmental mb-4" />
            <ul className="space-y-2">
              <li className="flex justify-between">
                <span>Energy Source:</span> 
                <span className={getScoreClass(results.environmental.energySource)}>
                  {results.environmental.energySource}
                </span>
              </li>
              <li className="flex justify-between">
                <span>Material Sustainability:</span> 
                <span className={getScoreClass(results.environmental.materialSustainability)}>
                  {results.environmental.materialSustainability}
                </span>
              </li>
              <li className="flex justify-between">
                <span>Waste Management:</span> 
                <span className={getScoreClass(results.environmental.wasteManagement)}>
                  {results.environmental.wasteManagement}
                </span>
              </li>
              <li className="flex justify-between">
                <span>Carbon Emissions:</span> 
                <span className={getScoreClass(results.environmental.carbonEmissions)}>
                  {results.environmental.carbonEmissions}
                </span>
              </li>
            </ul>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="bg-esg-social/10 pb-2">
            <CardTitle className="text-esg-social">Social</CardTitle>
            <CardDescription>Score: {results.social.overallScore}%</CardDescription>
          </CardHeader>
          <CardContent className="pt-4">
            <Progress value={results.social.overallScore} className="h-2 progress-bar-social mb-4" />
            <ul className="space-y-2">
              <li className="flex justify-between">
                <span>Workforce Diversity:</span> 
                <span className={getScoreClass(results.social.workforceDiversity)}>
                  {results.social.workforceDiversity}
                </span>
              </li>
              <li className="flex justify-between">
                <span>Training & Well-Being:</span> 
                <span className={getScoreClass(results.social.trainingWellBeing)}>
                  {results.social.trainingWellBeing}
                </span>
              </li>
              <li className="flex justify-between">
                <span>Social Impact:</span> 
                <span className={getScoreClass(results.social.socialImpact)}>
                  {results.social.socialImpact}
                </span>
              </li>
            </ul>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="bg-esg-governance/10 pb-2">
            <CardTitle className="text-esg-governance">Governance</CardTitle>
            <CardDescription>Score: {results.governance.overallScore}%</CardDescription>
          </CardHeader>
          <CardContent className="pt-4">
            <Progress value={results.governance.overallScore} className="h-2 progress-bar-governance mb-4" />
            <ul className="space-y-2">
              <li className="flex justify-between">
                <span>Supplier Responsibility:</span> 
                <span className={getScoreClass(results.governance.supplierResponsibility)}>
                  {results.governance.supplierResponsibility}
                </span>
              </li>
              <li className="flex justify-between">
                <span>Data Privacy & Security:</span> 
                <span className={getScoreClass(results.governance.dataPrivacy)}>
                  {results.governance.dataPrivacy}
                </span>
              </li>
              <li className="flex justify-between">
                <span>Transparency & Conduct:</span> 
                <span className={getScoreClass(results.governance.transparency)}>
                  {results.governance.transparency}
                </span>
              </li>
            </ul>
          </CardContent>
        </Card>
      </div>

      <div className="p-4 bg-muted rounded-lg">
        <h3 className="text-lg font-medium mb-2">Score Legend</h3>
        <div className="flex flex-wrap gap-4">
          <div className="flex items-center gap-2">
            <span className="w-4 h-4 bg-esg-score-a inline-block rounded-full"></span>
            <span>A: Best Practice</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="w-4 h-4 bg-esg-score-b inline-block rounded-full"></span>
            <span>B: Satisfactory</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="w-4 h-4 bg-esg-score-c inline-block rounded-full"></span>
            <span>C: Needs Improvement</span>
          </div>
        </div>
      </div>
    </div>
  );
};
