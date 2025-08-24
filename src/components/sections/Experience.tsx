import React from 'react';
import { MapPinIcon } from 'lucide-react';
export function Experience() {
  const experiences = [{
    company: 'Wipro Technologies',
    position: 'Data Engineer L2 - Top 4 BFSI Client',
    period: '03/2025 - Present',
    location: 'Hyderabad',
    points: ['Building distributed systems for processing multi-terabyte datasets through Genesis DataMart', 'Optimizing PySpark DAG execution using topological sorting algorithms for SUBGL processes', 'Implementing SQL/Hive partitioning strategies for banking data across dual holding layers', 'Processing multi-stream PP-SGL reconciliation via BTEQ scripts with Teradata']
  }, {
    company: 'Roboslog Pvt Ltd',
    position: 'Software Developer Intern (Java)',
    period: '06/2022 - 08/2022',
    location: 'Delhi, NCR',
    points: ['Developed Agent-Driver Android apps with Firebase Cloud Messaging for live order notifications', 'Designed and implemented REST API integration using Retrofit for authentication', 'Integrated multiple payment gateways with commission split architecture']
  }];
  return <div className="space-y-4">
      {experiences.map((exp, index) => <div key={index} className="bg-[#394556] p-4 rounded">
          <div className="flex justify-between items-start mb-2">
            <h3 className="text-gray-200 font-semibold">{exp.company}</h3>
            <span className="text-[#FF9900] text-sm">{exp.period}</span>
          </div>
          <div className="flex justify-between items-start mb-2">
            <p className="text-sm text-gray-300">{exp.position}</p>
            <div className="flex items-center text-xs text-gray-400">
              <MapPinIcon size={12} className="mr-1" />
              <span>{exp.location}</span>
            </div>
          </div>
          <ul className="space-y-1 mt-2">
            {exp.points.map((point, idx) => <li key={idx} className="flex items-start text-xs text-gray-400">
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
            <button className="bg-gray-800 hover:bg-gray-700 rounded-full w-8 h-8 flex items-center justify-center">
              <svg className="w-5 h-5 text-white" viewBox="0 0 24 24" fill="currentColor">
                <path d="M9 21h9c.83 0 1.54-.5 1.84-1.22l3.02-7.05c.09-.23.14-.47.14-.73v-2c0-1.1-.9-2-2-2h-6.31l.95-4.57.03-.32c0-.41-.17-.79-.44-1.06L14.17 1 7.58 7.59C7.22 7.95 7 8.45 7 9v10c0 1.1.9 2 2 2zM9 9l4.34-4.34L12 10h9v2l-3 7H9V9zM1 9h4v12H1z"></path>
              </svg>
            </button>
          </div>
        </div>)}
    </div>;
}