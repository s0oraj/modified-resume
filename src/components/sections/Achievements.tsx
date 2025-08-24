import React from 'react';
import { SectionTitle } from '../ui/SectionTitle';
import { ExternalLinkIcon } from 'lucide-react';
export function Achievements() {
  return <div>
      <SectionTitle>Achievements</SectionTitle>
      <div className="bg-[#394556] p-4 rounded mt-3">
        <ul className="space-y-3">
          <li>
            <div className="flex justify-between items-start">
              <h3 className="text-gray-200 font-semibold text-sm">
                IIT Kanpur Research Internship Offer
              </h3>
              <span className="text-[#FF9900] text-xs">01/2024</span>
            </div>
            <p className="text-xs text-gray-400 mt-1">
              Research internship by Prof. Tushar Sandhan from IIT Kanpur for
              heart image segmentation.
            </p>
          </li>
          <li>
            <div className="flex justify-between items-start">
              <h3 className="text-gray-200 font-semibold text-sm">
                Amazon ML Challenge
              </h3>
              <span className="text-[#FF9900] text-xs">04/2023</span>
            </div>
            <p className="text-xs text-gray-400 mt-1">
              Ranked 228 globally out of 30,000+ teams
            </p>
            <div className="flex flex-wrap gap-1 mt-1">
              <a href="https://www.kaggle.com/code/umitsahoo/nlp-with-regression/notebook" target="_blank" rel="noopener noreferrer" className="inline-flex items-center text-xs bg-gray-800 hover:bg-gray-700 text-gray-300 px-1.5 py-0.5 rounded">
                <ExternalLinkIcon size={8} className="mr-1 text-[#FF9900]" />
                Code
              </a>
            </div>
          </li>
          <li>
            <div className="flex justify-between items-start">
              <h3 className="text-gray-200 font-semibold text-sm">LeetCode</h3>
              <span className="text-[#FF9900] text-xs">05/2024</span>
            </div>
            <p className="text-xs text-gray-400 mt-1">
              Top 9.53% of all contestants with rating of 1755
            </p>
          </li>
        </ul>
      </div>
    </div>;
}