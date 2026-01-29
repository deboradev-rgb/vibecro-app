// frontend/src/components/about/ValueCard.tsx
import { ReactNode } from 'react';

interface ValueCardProps {
  value: {
    icon: ReactNode;
    title: string;
    description: string;
  };
}

const ValueCard = ({ value }: ValueCardProps) => {
  return (
    <div className="bg-white rounded-xl border border-gray-200 p-8 hover:shadow-lg transition-shadow group">
      <div className="w-16 h-16 bg-primary-50 rounded-xl flex items-center justify-center mb-6 group-hover:bg-primary-100 transition-colors">
        <div className="text-primary-600 group-hover:scale-110 transition-transform">
          {value.icon}
        </div>
      </div>
      
      <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-primary-600 transition-colors">
        {value.title}
      </h3>
      
      <p className="text-gray-600">
        {value.description}
      </p>
    </div>
  );
};

export default ValueCard;