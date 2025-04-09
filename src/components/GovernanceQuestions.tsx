
import React from 'react';
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { ESGFormData } from '@/types/esg';

interface GovernanceQuestionsProps {
  formData: ESGFormData;
  setFormData: React.Dispatch<React.SetStateAction<ESGFormData>>;
}

export const GovernanceQuestions: React.FC<GovernanceQuestionsProps> = ({
  formData,
  setFormData
}) => {
  return (
    <div className="space-y-8">
      <div>
        <h3 className="text-lg font-semibold mb-4">4.1 Supplier Responsibility</h3>
        <div className="mb-4">
          <p className="text-sm text-gray-500 mb-2">Do you vet suppliers for ESG compliance?</p>
          <RadioGroup 
            value={formData.vetsSuppliers ? "Yes" : "No"} 
            onValueChange={(value) => setFormData({...formData, vetsSuppliers: value === "Yes"})}
          >
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="Yes" id="vets-suppliers-yes" />
              <Label htmlFor="vets-suppliers-yes">Yes</Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="No" id="vets-suppliers-no" />
              <Label htmlFor="vets-suppliers-no">No</Label>
            </div>
          </RadioGroup>
        </div>

        <div>
          <p className="text-sm text-gray-500 mb-2">Are your suppliers ISO certified?</p>
          <RadioGroup 
            value={formData.suppliersISOCertified || ''} 
            onValueChange={(value) => setFormData({
              ...formData, 
              suppliersISOCertified: value as 'Yes' | 'No' | 'In progress'
            })}
          >
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="Yes" id="iso-yes" />
              <Label htmlFor="iso-yes">Yes</Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="No" id="iso-no" />
              <Label htmlFor="iso-no">No</Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="In progress" id="iso-progress" />
              <Label htmlFor="iso-progress">In progress</Label>
            </div>
          </RadioGroup>
          
          {formData.suppliersISOCertified === 'Yes' && (
            <div className="mt-4">
              <Label htmlFor="iso-standards">List standards:</Label>
              <Input 
                id="iso-standards" 
                value={formData.isoStandards || ''}
                onChange={(e) => setFormData({...formData, isoStandards: e.target.value})}
                className="mt-1"
              />
            </div>
          )}
        </div>
      </div>

      <div>
        <h3 className="text-lg font-semibold mb-4">4.2 Data Privacy & Security</h3>
        <div className="mb-4">
          <p className="text-sm text-gray-500 mb-2">Do you have a data protection policy?</p>
          <RadioGroup 
            value={formData.dataProtectionPolicy ? "Yes" : "No"} 
            onValueChange={(value) => setFormData({...formData, dataProtectionPolicy: value === "Yes"})}
          >
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="Yes" id="data-policy-yes" />
              <Label htmlFor="data-policy-yes">Yes</Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="No" id="data-policy-no" />
              <Label htmlFor="data-policy-no">No</Label>
            </div>
          </RadioGroup>
        </div>

        <div>
          <p className="text-sm text-gray-500 mb-2">Compliance with any privacy regulations? (eg, GDPR)</p>
          <RadioGroup 
            value={formData.privacyRegulationCompliance ? "Yes" : "No"} 
            onValueChange={(value) => setFormData({...formData, privacyRegulationCompliance: value === "Yes"})}
          >
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="Yes" id="gdpr-yes" />
              <Label htmlFor="gdpr-yes">Yes</Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="No" id="gdpr-no" />
              <Label htmlFor="gdpr-no">No</Label>
            </div>
          </RadioGroup>
        </div>
      </div>

      <div>
        <h3 className="text-lg font-semibold mb-4">4.3 Transparency & Fair Conduct</h3>
        <div className="mb-4">
          <p className="text-sm text-gray-500 mb-2">Do you maintain internal auditing or reporting for ESG?</p>
          <RadioGroup 
            value={formData.esgAuditing ? "Yes" : "No"} 
            onValueChange={(value) => setFormData({...formData, esgAuditing: value === "Yes"})}
          >
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="Yes" id="auditing-yes" />
              <Label htmlFor="auditing-yes">Yes</Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="No" id="auditing-no" />
              <Label htmlFor="auditing-no">No</Label>
            </div>
          </RadioGroup>
        </div>

        <div>
          <p className="text-sm text-gray-500 mb-2">Is your business certified under any ethical sourcing frameworks?</p>
          <RadioGroup 
            value={formData.ethicalSourcingCertification ? "Yes" : "No"} 
            onValueChange={(value) => setFormData({...formData, ethicalSourcingCertification: value === "Yes"})}
          >
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="Yes" id="certification-yes" />
              <Label htmlFor="certification-yes">Yes</Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="No" id="certification-no" />
              <Label htmlFor="certification-no">No</Label>
            </div>
          </RadioGroup>
          
          {formData.ethicalSourcingCertification && (
            <div className="mt-4">
              <Label htmlFor="certification-details">Specify:</Label>
              <Input 
                id="certification-details" 
                value={formData.certificationDetails || ''}
                onChange={(e) => setFormData({...formData, certificationDetails: e.target.value})}
                className="mt-1"
              />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
