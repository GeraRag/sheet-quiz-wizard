
import React from 'react';
import { Checkbox } from "@/components/ui/checkbox";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { ESGFormData } from '@/types/esg';

interface EnvironmentalQuestionsProps {
  formData: ESGFormData;
  setFormData: React.Dispatch<React.SetStateAction<ESGFormData>>;
}

export const EnvironmentalQuestions: React.FC<EnvironmentalQuestionsProps> = ({
  formData,
  setFormData
}) => {
  const handleEnergySourceChange = (source: string) => {
    if (formData.energySource.includes(source)) {
      setFormData({
        ...formData,
        energySource: formData.energySource.filter(s => s !== source)
      });
    } else {
      setFormData({
        ...formData,
        energySource: [...formData.energySource, source]
      });
    }
  };

  return (
    <div className="space-y-8">
      <div>
        <h3 className="text-lg font-semibold mb-4">2.1 Energy Source</h3>
        <p className="text-sm text-gray-500 mb-4">Select one or more:</p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="flex items-center space-x-2">
            <Checkbox 
              id="solar" 
              checked={formData.energySource.includes('Solar Power')}
              onCheckedChange={() => handleEnergySourceChange('Solar Power')}
            />
            <Label htmlFor="solar">Solar Power</Label>
          </div>
          <div className="flex items-center space-x-2">
            <Checkbox 
              id="wind" 
              checked={formData.energySource.includes('Wind Power')}
              onCheckedChange={() => handleEnergySourceChange('Wind Power')}
            />
            <Label htmlFor="wind">Wind Power</Label>
          </div>
          <div className="flex items-center space-x-2">
            <Checkbox 
              id="hydro" 
              checked={formData.energySource.includes('Hydro Power')}
              onCheckedChange={() => handleEnergySourceChange('Hydro Power')}
            />
            <Label htmlFor="hydro">Hydro Power</Label>
          </div>
          <div className="flex items-center space-x-2">
            <Checkbox 
              id="mixed" 
              checked={formData.energySource.includes('Mixed Grid')}
              onCheckedChange={() => handleEnergySourceChange('Mixed Grid')}
            />
            <Label htmlFor="mixed">Mixed Grid</Label>
          </div>
          <div className="flex items-center space-x-2">
            <Checkbox 
              id="fossil" 
              checked={formData.energySource.includes('Fossil Fuels')}
              onCheckedChange={() => handleEnergySourceChange('Fossil Fuels')}
            />
            <Label htmlFor="fossil">Fossil Fuels</Label>
          </div>
          <div className="flex items-center space-x-2">
            <Checkbox 
              id="other-energy" 
              checked={formData.energySource.includes('Other')}
              onCheckedChange={() => handleEnergySourceChange('Other')}
            />
            <Label htmlFor="other-energy">Other</Label>
          </div>
        </div>
        {formData.energySource.includes('Other') && (
          <div className="mt-4">
            <Label htmlFor="energy-other">Please specify other energy source:</Label>
            <Input 
              id="energy-other" 
              value={formData.energySourceOther || ''}
              onChange={(e) => setFormData({...formData, energySourceOther: e.target.value})}
              className="mt-1"
            />
          </div>
        )}
      </div>

      <div>
        <h3 className="text-lg font-semibold mb-4">2.2 Material Sustainability</h3>
        <p className="text-sm text-gray-500 mb-4">Do you use recycled or biodegradable filaments?</p>
        <RadioGroup 
          value={formData.materialSustainability || ''} 
          onValueChange={(value) => setFormData({
            ...formData, 
            materialSustainability: value as 'Yes' | 'Partially' | 'No'
          })}
        >
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="Yes" id="material-yes" />
            <Label htmlFor="material-yes">Yes</Label>
          </div>
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="Partially" id="material-partially" />
            <Label htmlFor="material-partially">Partially</Label>
          </div>
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="No" id="material-no" />
            <Label htmlFor="material-no">No</Label>
          </div>
        </RadioGroup>
        
        <div className="mt-4">
          <Label htmlFor="material-list">List brands or types of sustainable materials used:</Label>
          <Input 
            id="material-list" 
            value={formData.sustainableMaterialsList || ''}
            onChange={(e) => setFormData({...formData, sustainableMaterialsList: e.target.value})}
            className="mt-1"
          />
        </div>
      </div>

      <div>
        <h3 className="text-lg font-semibold mb-4">2.3 Waste Management & Recycling</h3>
        <div className="space-y-4">
          <div>
            <p className="text-sm text-gray-500 mb-2">Do you accept returns of prints for recycling?</p>
            <RadioGroup 
              value={formData.acceptsReturns ? "Yes" : "No"} 
              onValueChange={(value) => setFormData({...formData, acceptsReturns: value === "Yes"})}
            >
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="Yes" id="returns-yes" />
                <Label htmlFor="returns-yes">Yes</Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="No" id="returns-no" />
                <Label htmlFor="returns-no">No</Label>
              </div>
            </RadioGroup>
          </div>

          <div>
            <p className="text-sm text-gray-500 mb-2">Do you recycle misprints or leftover materials?</p>
            <RadioGroup 
              value={formData.recyclesMisprints ? "Yes" : "No"} 
              onValueChange={(value) => setFormData({...formData, recyclesMisprints: value === "Yes"})}
            >
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="Yes" id="misprints-yes" />
                <Label htmlFor="misprints-yes">Yes</Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="No" id="misprints-no" />
                <Label htmlFor="misprints-no">No</Label>
              </div>
            </RadioGroup>
          </div>

          <div>
            <Label htmlFor="waste-handling">How are unusable waste materials handled?</Label>
            <Textarea 
              id="waste-handling" 
              value={formData.wasteHandling || ''}
              onChange={(e) => setFormData({...formData, wasteHandling: e.target.value})}
              className="mt-1"
            />
          </div>
        </div>
      </div>

      <div>
        <h3 className="text-lg font-semibold mb-4">2.4 Carbon Emissions Management</h3>
        <p className="text-sm text-gray-500 mb-4">Do you offset emissions from shipping or production?</p>
        <RadioGroup 
          value={formData.offsetsEmissions || ''} 
          onValueChange={(value) => setFormData({
            ...formData, 
            offsetsEmissions: value as 'Yes' | 'In Progress' | 'No'
          })}
        >
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="Yes" id="carbon-yes" />
            <Label htmlFor="carbon-yes">Yes</Label>
          </div>
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="In Progress" id="carbon-progress" />
            <Label htmlFor="carbon-progress">In Progress</Label>
          </div>
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="No" id="carbon-no" />
            <Label htmlFor="carbon-no">No</Label>
          </div>
        </RadioGroup>
      </div>
    </div>
  );
};
