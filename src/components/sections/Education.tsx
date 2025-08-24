import React from 'react';
import { SectionTitle } from '../ui/SectionTitle';
export function Education() {
  return <div>
      <SectionTitle>Education</SectionTitle>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-3">
        <div className="bg-card p-3 rounded">
          <div className="flex justify-between items-start">
            <div>
              <h3 className="text-gray-200 font-semibold">
                C.V. Raman Global University
              </h3>
              <p className="text-sm text-gray-400">B.Tech in CS & IT</p>
              <p className="text-xs text-gray-500">Bhubaneshwar, Odisha</p>
            </div>
            <div className="text-right">
              <span className="text-[#FF9900] text-sm">06/2024</span>
              <div className="bg-[#FF9900] text-black text-xs px-2 py-0.5 rounded mt-1 font-medium">
                CGPA: 8.5
              </div>
            </div>
          </div>
          <button className="mt-2 bg-gray-800 bg-btn-hover rounded-full w-6 h-6 flex items-center justify-center">
            <svg className="w-4 h-4 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M12 5v14M5 12h14"></path>
            </svg>
          </button>
        </div>
      </div>
    </div>;
}