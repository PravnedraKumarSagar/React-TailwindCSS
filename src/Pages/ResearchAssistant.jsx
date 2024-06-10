import React from 'react';
import { FaEnvelope } from 'react-icons/fa';

const ResearchAssistant = () => {
  return (
    <div className="bg-gray-100 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:text-center">
          <h2 className="text-3xl sm:text-4xl font-semibold text-gray-900 mb-4">Hiring a Research Assistant</h2>
          <p className="text-lg text-gray-700 mb-8">Conducting Research work is an integral part of research scholar that requires in-depth knowledge of the research study, research methodology, research planning, execution and creative writing skills. There are many challenges a researcher face ranging from choosing an appropriate research topic, choosing the right method, data collection, compilation, and dealing with the statistical data analytical techniques for arriving at the relevant research findings.</p>
          <div className="flex justify-center">
            <a href="mailto:info@phdassistance.com" className="inline-flex items-center justify-center px-4 py-2 border border-transparent text-base leading-6 font-medium rounded-md text-white bg-blue-600 hover:bg-blue-500 focus:outline-none focus:border-blue-700 focus:shadow-outline-blue active:bg-blue-700 transition ease-in-out duration-150 mr-4">
              <FaEnvelope className="mr-2" /> Quick Contact
            </a>
          </div>
        </div>
        <div className="mt-10">
          <h3 className="text-2xl font-semibold text-gray-900 mb-4">Services Offered by Research Assistant</h3>
          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <li className="flex items-start">
              <div className="flex-shrink-0">
                <svg className="h-6 w-6 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                </svg>
              </div>
              <p className="ml-3 text-base leading-6 text-gray-700">To identify research gap</p>
            </li>
            <li className="flex items-start">
              <div className="flex-shrink-0">
                <svg className="h-6 w-6 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                </svg>
              </div>
              <p className="ml-3 text-base leading-6 text-gray-700">To formulate appropriate but generic topic based on the gap identified</p>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ResearchAssistant;
