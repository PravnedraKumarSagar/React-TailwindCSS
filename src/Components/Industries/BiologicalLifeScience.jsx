import React from 'react';
import { FaGraduationCap, FaBusinessTime, FaTools, FaPalette, FaMoneyBillWave, FaDna, FaMedkit, FaDesktop } from 'react-icons/fa';


const BiologicalLifeScience = () => {
  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <div className="flex justify-center mb-4"><FaDna className="w-8 h-8 text-green-500" /></div>
      <img src={`https://picsum.photos/200/200?category=animal`} alt="Biological & Life Science" className="mx-auto mb-4 w-64 h-48 rounded-xl" />
      <h3 className="text-xl font-semibold mb-2 text-center">Biological & Life Science</h3>
      <p className="text-gray-600 text-center">Biological & Life Science (Thesis), Assignments, Manuscript Writing & Editing</p>
    </div>
  );
};

export default BiologicalLifeScience;
