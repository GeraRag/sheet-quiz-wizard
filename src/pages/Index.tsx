
import React from 'react';
import { ESGQuestionnaire } from '@/components/ESGQuestionnaire';

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-secondary/30 py-6">
      <header className="container mx-auto px-4 mb-12">
        <h1 className="text-center text-4xl font-bold text-primary mb-2">ESG Assessment Wizard</h1>
        <p className="text-center text-muted-foreground max-w-2xl mx-auto">
          Evaluate your organization's Environmental, Social, and Governance performance using our
          comprehensive assessment tool and scoring system.
        </p>
      </header>
      
      <main className="container mx-auto px-4">
        <ESGQuestionnaire />
      </main>
      
      <footer className="mt-16 py-6 border-t">
        <div className="container mx-auto px-4 text-center text-sm text-muted-foreground">
          &copy; 2025 ESG Assessment Wizard. All rights reserved.
        </div>
      </footer>
    </div>
  );
};

export default Index;
