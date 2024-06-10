import React from 'react';
import { FaGraduationCap, FaBusinessTime, FaTools, FaPalette, FaMoneyBillWave, FaDna, FaMedkit, FaDesktop } from 'react-icons/fa';


const ArtsHumanities = () => {
  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <div className="flex justify-center mb-4"><FaPalette className="w-8 h-8 text-purple-500" /></div>
      <img src={`https://picsum.photos/200/200?category=animal`} className="mx-auto w-64 h-48 mb-4 rounded-xl " />
      <h3 className="text-xl font-semibold mb-2 text-center">Arts & Humanities</h3>
      <p className="text-gray-600 text-center">Arts & Humanities (Thesis), Assignments, Manuscript Writing & Editing Services</p>
    </div>
  );
};

export default ArtsHumanities;
