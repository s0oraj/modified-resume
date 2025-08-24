import React from 'react';
import { Header } from './sections/Header';
import { Education } from './sections/Education';
import { Skills } from './sections/Skills';
import { Experience } from './sections/Experience';
import { Projects } from './sections/Projects';
import { Achievements } from './sections/Achievements';
import { Research } from './sections/Research';
export function Resume() {
  return <div className="w-full max-w-5xl mx-auto text-gray-200 py-6 px-4 sm:px-6">
      <Header />
      <div className="mt-6">
        <div className="mb-8">
          <Education />
        </div>
        <div className="mb-8">
          <Skills />
        </div>
        <div className="mb-8">
          <h2 className="text-xl font-bold text-gray-200 mb-2 flex items-center">
            <span className="text-[#5DC22D] mr-2">
              Explore titles related to:
            </span>{' '}
            Work Experience
          </h2>
          <Experience />
        </div>
        <div className="mb-8">
          <Projects />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <Achievements />
          </div>
          <div>
            <Research />
          </div>
        </div>
      </div>
    </div>;
}