// frontend/src/components/about/ProcessSteps.tsx
import { CheckCircle, Clock, Target, Users, Rocket } from 'lucide-react';

interface ProcessStep {
  step: number;
  title: string;
  description: string;
  duration: string;
}

interface ProcessStepsProps {
  steps: ProcessStep[];
}

const ProcessSteps = ({ steps }: ProcessStepsProps) => {
  const getIcon = (step: number) => {
    const icons = [Target, Users, Rocket, CheckCircle, Clock];
    return icons[step - 1] || CheckCircle;
  };

  return (
    <div className="relative">
      {/* Connection line */}
      <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gray-200 hidden md:block" />
      
      {/* Steps */}
      <div className="space-y-12">
        {steps.map((step) => {
          const Icon = getIcon(step.step);
          
          return (
            <div key={step.step} className="relative">
              {/* Step indicator */}
              <div className="absolute left-0 md:left-8 transform -translate-x-1/2 z-10">
                <div className="w-16 h-16 rounded-full bg-white border-4 border-primary-500 shadow-lg flex items-center justify-center">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-primary-600">{step.step}</div>
                    <Icon className="w-4 h-4 mx-auto mt-1 text-primary-500" />
                  </div>
                </div>
              </div>
              
              {/* Content */}
              <div className="ml-20 md:ml-24">
                <div className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                    <h3 className="text-xl font-bold text-gray-900 mb-2 md:mb-0">
                      {step.title}
                    </h3>
                    <div className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-gray-100 text-gray-700">
                      <Clock className="w-3 h-3 mr-1" />
                      {step.duration}
                    </div>
                  </div>
                  
                  <p className="text-gray-600">
                    {step.description}
                  </p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ProcessSteps;