import React from 'react';
import { FaGraduationCap } from 'react-icons/fa';
import { MdEmail, MdPhone } from 'react-icons/md';

const PHDResearchMethodology = () => {
  return (
    <div className="bg-white rounded-lg mx-auto max-w-7xl px-6 lg:px-8 shadow-md p-6">
      <div className="flex justify-center mb-4">
        <FaGraduationCap className="w-8 h-8 text-blue-500" />
      </div>
      <h2 className="text-2xl font-semibold mb-4 text-center">Ph.D. Research Methodology</h2>
      <p className="text-gray-700 mb-6">
        Doing Ph.D. Research is a scientific, methodological way of finding answers to hypothetical questions. Research
        methodology gives direction for conducting your thesis and affects your results and conclusions.
      </p>
      <h3 className="text-lg font-semibold mb-2">Research Methodologies Covered:</h3>
      <ul className="list-disc list-inside mb-6">
        <li>Qualitative Research</li>
        <li>Quantitative Research</li>
        <li>Grounded theory designs</li>
        <li>Narrative research designs</li>
        {/* Add more research methodologies */}
      </ul>
      <h3 className="text-lg font-semibold mb-2">Service Features:</h3>
      <ul className="list-disc list-inside mb-6">
        <li>Research design</li>
        <li>Sampling</li>
        <li>Sample size determination</li>
        {/* Add more service features */}
      </ul>
      <div className="flex items-center mb-6">
        <MdEmail className="w-6 h-6 mr-2 text-gray-600" />
        <a href="mailto:info@phdassistance.com" className="text-blue-500 hover:underline">info@phdassistance.com</a>
      </div>
      <div className="flex items-center">
        <MdPhone className="w-6 h-6 mr-2 text-gray-600" />
        <span className="text-gray-600">+91-9176966446</span>
      </div>
    </div>
  );
};

export default PHDResearchMethodology;
