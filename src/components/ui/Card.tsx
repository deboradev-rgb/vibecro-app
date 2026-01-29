// src/components/ui/Card.tsx
import React from 'react';

interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  className?: string;
}

const Card = ({
  children,
  className = '',
  ...props
}: CardProps) => {
  const baseClasses = 'rounded-lg border border-gray-200 bg-white shadow-lg';
  
  return (
    <div
      className={`${baseClasses} ${className}`}
      {...props}
    >
      {children}
    </div>
  );
};

export default Card;
