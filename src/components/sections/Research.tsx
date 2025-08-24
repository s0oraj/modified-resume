import React from 'react';
import { SectionTitle } from '../ui/SectionTitle';
import { ExternalLinkIcon, GithubIcon } from 'lucide-react';
export function Research() {
  return <div>
      <SectionTitle>Research - ML</SectionTitle>
      <div className="bg-card p-4 rounded mt-3">
        <div className="flex justify-between items-start mb-3">
          <div>
            <h3 className="text-gray-200 font-semibold text-sm">
              C.V. Raman Global University
            </h3>
            <p className="text-xs text-gray-400">Undergraduate Researcher</p>
          </div>
          <span className="text-[#FF9900] text-xs">12/2022 - 06/2023</span>
        </div>
        <ul className="space-y-3">
          <li>
            <div className="flex justify-between items-start">
              <h3 className="text-gray-200 font-semibold text-sm">
                Early-Stage Glaucoma Detection
              </h3>
              <div className="flex gap-1">
                <a href="https://github.com/s0oraj/Early_Stage_Glaucoma_Detection/tree/main" target="_blank" rel="noopener noreferrer" className="inline-flex items-center text-xs bg-gray-800 bg-btn-hover text-gray-300 px-1.5 py-0.5 rounded">
                  <GithubIcon size={8} className="mr-1 text-[#FF9900]" />
                  Repo
                </a>
              </div>
            </div>
            <p className="text-xs text-[#FF9900] mt-1">
              CNN, Transfer Learning, 96% accuracy
            </p>
          </li>
          <li>
            <div className="flex justify-between items-start">
              <h3 className="text-gray-200 font-semibold text-sm">
                Alzheimer's Disease Detection
              </h3>
              <div className="flex gap-1">
                <a href="https://ieeexplore.ieee.org/document/10306481" target="_blank" rel="noopener noreferrer" className="inline-flex items-center text-xs bg-gray-800 bg-btn-hover text-gray-300 px-1.5 py-0.5 rounded">
                  <ExternalLinkIcon size={8} className="mr-1 text-[#FF9900]" />
                  Paper
                </a>
              </div>
            </div>
            <p className="text-xs text-[#FF9900] mt-1">
              DWT, SWT, CLAHE, 98% accuracy
            </p>
          </li>
        </ul>
      </div>
    </div>;
}