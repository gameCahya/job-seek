// src/components/RegistrationStep.tsx
import React from 'react';

interface StepProps {
  number: number;
  title: string;
  description: string;
}

const RegistrationStep: React.FC<{ step: StepProps }> = ({ step }) => {
  return (
    <div className="mb-8">
      <div className="flex items-center mb-3">
        <div className="flex items-center justify-center w-8 h-8 rounded-full bg-blue-500 text-white font-bold mr-3">
          {step.number}
        </div>
        <h3 className="text-lg font-semibold">{step.title}</h3>
      </div>
      <p className="text-gray-600 ml-11">{step.description}</p>
    </div>
  );
};

export default RegistrationStep;
