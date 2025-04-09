
import React from 'react';
import { Checkbox } from "@/components/ui/checkbox";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { ESGFormData } from '@/types/esg';

interface SocialQuestionsProps {
  formData: ESGFormData;
  setFormData: React.Dispatch<React.SetStateAction<ESGFormData>>;
}

export const SocialQuestions: React.FC<SocialQuestionsProps> = ({
  formData,
  setFormData
}) => {
  const handleDiversityIndicatorChange = (indicator: string) => {
    if (formData.diversityIndicators.includes(indicator)) {
      setFormData({
        ...formData,
        diversityIndicators: formData.diversityIndicators.filter(i => i !== indicator)
      });
    } else {
      setFormData({
        ...formData,
        diversityIndicators: [...formData.diversityIndicators, indicator]
      });
    }
  };

  return (
    <div className="space-y-8">
      <div>
        <h3 className="text-lg font-semibold mb-4">3.1 Workforce Diversity</h3>
        <div className="mb-4">
          <p className="text-sm text-gray-500 mb-2">Do you have a policy for hiring a diverse and inclusive workforce?</p>
          <RadioGroup 
            value={formData.diversityPolicy ? "Yes" : "No"} 
            onValueChange={(value) => setFormData({...formData, diversityPolicy: value === "Yes"})}
          >
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="Yes" id="diversity-policy-yes" />
              <Label htmlFor="diversity-policy-yes">Yes</Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="No" id="diversity-policy-no" />
              <Label htmlFor="diversity-policy-no">No</Label>
            </div>
          </RadioGroup>
        </div>

        <div>
          <p className="text-sm text-gray-500 mb-2">Please list diversity indicators:</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="flex items-center space-x-2">
              <Checkbox 
                id="gender" 
                checked={formData.diversityIndicators.includes('Gender balance')}
                onCheckedChange={() => handleDiversityIndicatorChange('Gender balance')}
              />
              <Label htmlFor="gender">Gender balance</Label>
            </div>
            <div className="flex items-center space-x-2">
              <Checkbox 
                id="ethnic" 
                checked={formData.diversityIndicators.includes('Ethnic inclusion')}
                onCheckedChange={() => handleDiversityIndicatorChange('Ethnic inclusion')}
              />
              <Label htmlFor="ethnic">Ethnic inclusion</Label>
            </div>
            <div className="flex items-center space-x-2">
              <Checkbox 
                id="age" 
                checked={formData.diversityIndicators.includes('Age diversity')}
                onCheckedChange={() => handleDiversityIndicatorChange('Age diversity')}
              />
              <Label htmlFor="age">Age diversity</Label>
            </div>
            <div className="flex items-center space-x-2">
              <Checkbox 
                id="disability" 
                checked={formData.diversityIndicators.includes('Disability support')}
                onCheckedChange={() => handleDiversityIndicatorChange('Disability support')}
              />
              <Label htmlFor="disability">Disability support</Label>
            </div>
            <div className="flex items-center space-x-2">
              <Checkbox 
                id="other-diversity" 
                checked={formData.diversityIndicators.includes('Other')}
                onCheckedChange={() => handleDiversityIndicatorChange('Other')}
              />
              <Label htmlFor="other-diversity">Other</Label>
            </div>
          </div>

          {formData.diversityIndicators.includes('Other') && (
            <div className="mt-4">
              <Label htmlFor="diversity-other">Please specify other diversity indicator:</Label>
              <Input 
                id="diversity-other" 
                value={formData.diversityIndicatorsOther || ''}
                onChange={(e) => setFormData({...formData, diversityIndicatorsOther: e.target.value})}
                className="mt-1"
              />
            </div>
          )}
        </div>
      </div>

      <div>
        <h3 className="text-lg font-semibold mb-4">3.2 Training & Team Well-Being</h3>
        <div className="mb-4">
          <p className="text-sm text-gray-500 mb-2">Frequency of employee training:</p>
          <RadioGroup 
            value={formData.trainingFrequency || ''} 
            onValueChange={(value) => setFormData({
              ...formData, 
              trainingFrequency: value as 'Monthly' | 'Quarterly' | 'Annually' | ''
            })}
          >
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="Monthly" id="training-monthly" />
              <Label htmlFor="training-monthly">Monthly</Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="Quarterly" id="training-quarterly" />
              <Label htmlFor="training-quarterly">Quarterly</Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="Annually" id="training-annually" />
              <Label htmlFor="training-annually">Annually</Label>
            </div>
          </RadioGroup>
        </div>

        <div>
          <p className="text-sm text-gray-500 mb-2">Team-building or wellness programs in place?</p>
          <RadioGroup 
            value={formData.wellnessPrograms ? "Yes" : "No"} 
            onValueChange={(value) => setFormData({...formData, wellnessPrograms: value === "Yes"})}
          >
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="Yes" id="wellness-yes" />
              <Label htmlFor="wellness-yes">Yes</Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="No" id="wellness-no" />
              <Label htmlFor="wellness-no">No</Label>
            </div>
          </RadioGroup>
        </div>
      </div>

      <div>
        <h3 className="text-lg font-semibold mb-4">3.3 Social Impact Initiatives</h3>
        <div className="mb-4">
          <p className="text-sm text-gray-500 mb-2">Do you support any local causes, NGOs, or schools?</p>
          <RadioGroup 
            value={formData.supportsCauses ? "Yes" : "No"} 
            onValueChange={(value) => setFormData({...formData, supportsCauses: value === "Yes"})}
          >
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="Yes" id="causes-yes" />
              <Label htmlFor="causes-yes">Yes</Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="No" id="causes-no" />
              <Label htmlFor="causes-no">No</Label>
            </div>
          </RadioGroup>
        </div>

        {formData.supportsCauses && (
          <div>
            <Label htmlFor="causes-description">If yes, describe the initiative(s):</Label>
            <Textarea 
              id="causes-description" 
              value={formData.causesDescription || ''}
              onChange={(e) => setFormData({...formData, causesDescription: e.target.value})}
              className="mt-1"
            />
          </div>
        )}
      </div>
    </div>
  );
};
