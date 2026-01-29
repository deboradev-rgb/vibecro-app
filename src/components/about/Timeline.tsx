// frontend/src/components/about/Timeline.tsx
'use client';

import { Calendar, MapPin, Users, Rocket } from 'lucide-react';

interface TimelineEvent {
  year: string;
  title: string;
  description: string;
}

interface TimelineProps {
  events: TimelineEvent[];
}

const Timeline = ({ events }: TimelineProps) => {
  const getIcon = (index: number) => {
    const icons = [Calendar, MapPin, Users, Rocket];
    return icons[index % icons.length];
  };

  return (
    <div className="relative">
      {/* Timeline line */}
      <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 h-full w-1 md:w-0.5 bg-gradient-to-b from-primary-500 to-secondary-500" />
      
      {/* Events */}
      <div className="space-y-12">
        {events.map((event, index) => {
          const Icon = getIcon(index);
          const isEven = index % 2 === 0;
          
          return (
            <div 
              key={index}
              className={`relative flex flex-col md:flex-row items-center ${
                isEven ? 'md:flex-row-reverse' : ''
              }`}
            >
              {/* Dot */}
              <div className="absolute left-0 md:left-1/2 transform -translate-x-1/2 md:-translate-x-1/2 z-10">
                <div className="w-10 h-10 rounded-full bg-white border-4 border-primary-500 shadow-lg flex items-center justify-center">
                  <Icon className="w-5 h-5 text-primary-600" />
                </div>
              </div>
              
              {/* Content */}
              <div className={`w-full md:w-5/12 ${isEven ? 'md:text-right md:pr-12' : 'md:pl-12'} ml-12 md:ml-0`}>
                <div className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow">
                  <div className="inline-flex items-center px-3 py-1 rounded-full text-sm font-semibold mb-3 bg-primary-100 text-primary-800">
                    {event.year}
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{event.title}</h3>
                  <p className="text-gray-600">{event.description}</p>
                </div>
              </div>
              
              {/* Year marker */}
              <div className="hidden md:block w-5/12 text-center">
                <div className="text-2xl font-bold text-primary-600">{event.year}</div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Timeline;