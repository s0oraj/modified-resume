import React from 'react';
import { SectionTitle } from '../ui/SectionTitle';
export function Skills() {
  return <div>
      <SectionTitle>Skills</SectionTitle>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-3">
        <div className="bg-gray-900 p-3 rounded">
          <h3 className="text-gray-200 font-semibold mb-2">
            Functional Skills
          </h3>
          <ul className="space-y-1">
            {['Spring', 'Java', 'Python', 'Android Development', 'PostgreSQL', 'PySpark', 'SQL', 'Hive'].map(skill => <li key={skill} className="flex items-center text-sm text-gray-400">
                <span className="text-[#5DC22D] mr-2">•</span>
                {skill}
              </li>)}
          </ul>
          <button className="mt-2 bg-gray-800 hover:bg-gray-700 rounded-full w-6 h-6 flex items-center justify-center">
            <svg className="w-4 h-4 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M12 5v14M5 12h14"></path>
            </svg>
          </button>
        </div>
        <div className="bg-gray-900 p-3 rounded">
          <h3 className="text-gray-200 font-semibold mb-2">Technical Skills</h3>
          <ul className="space-y-1">
            {['React.js', 'Three.js', 'Framer Motion 3D', 'Jetpack Compose', 'Javascript', 'XML', 'Docker', 'Git'].map(skill => <li key={skill} className="flex items-center text-sm text-gray-400">
                <span className="text-[#5DC22D] mr-2">•</span>
                {skill}
              </li>)}
          </ul>
          <button className="mt-2 bg-gray-800 hover:bg-gray-700 rounded-full w-6 h-6 flex items-center justify-center">
            <svg className="w-4 h-4 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M12 5v14M5 12h14"></path>
            </svg>
          </button>
        </div>
      </div>
    </div>;
}