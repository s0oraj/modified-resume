import React from 'react';
import { SectionTitle } from '../ui/SectionTitle';
import { ExternalLinkIcon, GithubIcon } from 'lucide-react';
export function Projects() {
  const projects = [{
    title: 'Advanced Coding Interview Patterns (ACIP)',
    link: 'https://acip.vercel.app/',
    repo: 'https://github.com/s0oraj/acip',
    technologies: 'React, Vite, Three.js, Framer-motion-3D, Zustand',
    points: ['Built GPU-accelerated 3D galaxy UI with Solar systems as individual Coding Roadmaps, 500K stars at 60 FPS', 'Implemented 51 interactive step-by-step UX visualizations for each algorithm pattern']
  }, {
    title: 'ACIP Backend - Pattern Tracker',
    link: 'https://github.com/s0oraj/pattern-tracker',
    repo: 'https://github.com/s0oraj/pattern-tracker',
    technologies: 'Spring Boot, OAuth2, PostgreSQL, JPA/Hibernate, Maven',
    points: ['Built Spring Boot REST API with Google OAuth2 and JWT authentication for secure user sessions', 'Implemented question tracking system with CRUD operations across 220+ coding interview patterns']
  }];
  return <div>
      <SectionTitle>Projects</SectionTitle>
      <div className="space-y-4 mt-3">
        {projects.map((project, index) => <div key={index} className="bg-[#394556] p-4 rounded">
            <div className="flex justify-between items-start">
              <h3 className="text-gray-200 font-semibold">{project.title}</h3>
              <div className="flex gap-2">
                <a href={project.link} target="_blank" rel="noopener noreferrer" className="inline-flex items-center text-xs bg-gray-800 hover:bg-gray-700 text-gray-300 px-2 py-1 rounded">
                  <ExternalLinkIcon size={10} className="mr-1 text-[#FF9900]" />
                  Demo
                </a>
                <a href={project.repo} target="_blank" rel="noopener noreferrer" className="inline-flex items-center text-xs bg-gray-800 hover:bg-gray-700 text-gray-300 px-2 py-1 rounded">
                  <GithubIcon size={10} className="mr-1 text-[#FF9900]" />
                  Repo
                </a>
              </div>
            </div>
            <div className="text-xs text-[#FF9900] mt-1 mb-2">
              {project.technologies}
            </div>
            <ul className="space-y-1">
              {project.points.map((point, idx) => <li key={idx} className="flex items-start text-xs text-gray-400">
                  <span className="text-[#FF9900] mr-2 mt-0.5">•</span>
                  <span>{point}</span>
                </li>)}
            </ul>
            <div className="flex mt-3 space-x-2">
              <button className="bg-gray-800 hover:bg-gray-700 rounded-full w-8 h-8 flex items-center justify-center">
                <svg className="w-4 h-4 text-white" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M8 5v14l11-7z"></path>
                </svg>
              </button>
              <button className="bg-gray-800 hover:bg-gray-700 rounded-full w-8 h-8 flex items-center justify-center">
                <svg className="w-4 h-4 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M12 5v14M5 12h14"></path>
                </svg>
              </button>
            </div>
          </div>)}
      </div>
    </div>;
}