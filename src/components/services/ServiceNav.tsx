'use client';

interface ServiceNavProps {
  sections: string[];
  activeSection: string;
  onSectionChange: (section: string) => void;
}

export default function ServiceNav({ sections, activeSection, onSectionChange }: ServiceNavProps) {
  return (
    <nav className="sticky top-16 md:top-20 bg-white/95 backdrop-blur-xl border-b border-gray-200 z-40">
      <div className="w-full flex justify-center">
        <div className="w-4/5 max-w-7xl px-4">
          <div className="flex overflow-x-auto gap-2 md:gap-4 py-3 md:py-4">
            {sections.map((section) => (
              <button
                key={section}
                onClick={() => onSectionChange(section)}
                className={`px-3 md:px-4 py-1 md:py-2 font-semibold rounded-lg transition whitespace-nowrap text-sm md:text-base ${
                  activeSection === section
                    ? 'bg-[#e38f00] text-white'
                    : 'text-gray-700 hover:bg-[#e38f00]/10'
                }`}
              >
                {section.charAt(0).toUpperCase() + section.slice(1)}
              </button>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
}