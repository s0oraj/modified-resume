import React from 'react';
import { AtSignIcon, GithubIcon, LinkedinIcon, PhoneIcon, MapPinIcon, GlobeIcon } from 'lucide-react';
export function Header() {
  return <div className="border-b border-gray-800 pb-6">
      <div className="flex flex-col md:flex-row items-start md:items-center justify-between">
        <div className="flex items-center">
          {/* Cohesity Logo */}
          <div className="mr-4">
            <img src="/pasted-image.png" alt="Cohesity Logo" className="h-10 mb-3" />
          </div>
          <h1 className="text-3xl font-bold text-gray-100 uppercase tracking-wider">
            SURAJ SINGH
          </h1>
        </div>
        <div className="bg-[#5DC22D] text-black px-3 py-1 rounded font-bold text-sm mt-2 md:mt-0">
          #1 in SDET Applicants Today
        </div>
      </div>
      <div className="mt-4">
        <p className="text-gray-300 mb-4">
          Software Development Engineer in Test with expertise in distributed
          systems and data engineering. Strong background in test automation,
          performance optimization, and cloud-native solutions.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-sm">
          <div className="flex items-center gap-2 text-gray-400">
            <MapPinIcon size={14} className="text-[#5DC22D]" />
            <span>Hyderabad, India</span>
          </div>
          <div className="flex items-center gap-2 text-gray-400">
            <AtSignIcon size={14} className="text-[#5DC22D]" />
            <span>hotmailsuraj@gmail.com</span>
          </div>
          <div className="flex items-center gap-2 text-gray-400">
            <PhoneIcon size={14} className="text-[#5DC22D]" />
            <span>+91 8766039312</span>
          </div>
          <div className="flex items-center gap-2 text-gray-400">
            <LinkedinIcon size={14} className="text-[#5DC22D]" />
            <span>linkedin.com/in/s0oraj</span>
          </div>
          <div className="flex items-center gap-2 text-gray-400">
            <GithubIcon size={14} className="text-[#5DC22D]" />
            <span>github.com/s0oraj</span>
          </div>
          <div className="flex items-center gap-2 text-gray-400">
            <svg className="w-3.5 h-3.5 text-[#5DC22D]" viewBox="0 0 24 24" fill="currentColor">
              <path d="M16.102 17.93l-2.697 2.607c-.466.467-1.111.662-1.823.662s-1.357-.195-1.824-.662l-4.332-4.363c-.467-.467-.702-1.15-.702-1.863s.235-1.357.702-1.824l4.319-4.38c.467-.467 1.125-.645 1.837-.645s1.357.195 1.823.662l2.697 2.606c.514.515 1.111.744 1.715.744.603 0 1.213-.229 1.714-.744.513-.513.744-1.111.744-1.714 0-.631-.244-1.229-.72-1.714l-2.733-2.637c-.841-.841-1.8-1.412-2.849-1.729-1.1-.331-2.264-.331-3.363 0-1.05.317-2.021.888-2.849 1.729l-4.319 4.402c-.841.84-1.412 1.8-1.729 2.849-.316 1.1-.316 2.264 0 3.363.317 1.049.888 2.009 1.729 2.849l4.332 4.332c.841.841 1.8 1.412 2.849 1.729 1.1.331 2.264.331 3.363 0 1.05-.317 2.021-.888 2.849-1.729l2.733-2.637c.476-.485.72-1.083.72-1.714 0-.603-.244-1.202-.72-1.714-.513-.514-1.111-.744-1.714-.744-.604.013-1.19.231-1.715.744z" />
            </svg>
            <span>leetcode.com/s0oraj</span>
          </div>
        </div>
        <div className="flex mt-4 space-x-2">
          <button className="flex items-center bg-[#5DC22D] hover:bg-[#4DA21D] text-black px-4 py-1 rounded-sm font-medium">
            <svg className="w-4 h-4 mr-1" viewBox="0 0 24 24" fill="currentColor">
              <path d="M8 5v14l11-7z"></path>
            </svg>
            Play
          </button>
          <button className="flex items-center bg-gray-700 hover:bg-gray-600 text-white px-4 py-1 rounded-sm font-medium">
            <svg className="w-4 h-4 mr-1" viewBox="0 0 24 24" fill="currentColor">
              <path d="M11 17h2v-6h-2v6zm1-15C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-1-11h2V6h-2v3z"></path>
            </svg>
            More Info
          </button>
        </div>
      </div>
    </div>;
}