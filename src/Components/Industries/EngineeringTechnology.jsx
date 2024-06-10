import React from 'react';
import { FaGraduationCap, FaBusinessTime, FaTools, FaPalette, FaMoneyBillWave, FaDna, FaMedkit, FaDesktop } from 'react-icons/fa';

const EngineeringTechnology = () => {
  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <div className="flex justify-center mb-4"><FaTools className="w-8 h-8 text-yellow-500" /></div>
      <img src={`https://picsum.photos/200/200?category=animal`} alt="Engineering & Technology" className="mx-auto mb-4 w-64 h-48 rounded-xl" />
      <h3 className="text-xl font-semibold mb-2 text-center">Engineering & Technology</h3>
      <p className="text-gray-600 text-center">Engineering & Technology Assignments, Manuscript Writing & Editing Service</p>
    </div>
  );
};

export default EngineeringTechnology;
