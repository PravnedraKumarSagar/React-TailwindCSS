import React from 'react';
import { FaGraduationCap, FaBusinessTime, FaTools, FaPalette, FaMoneyBillWave, FaDna, FaMedkit, FaDesktop } from 'react-icons/fa';

const MedicineHealthcare = () => {
  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <div className="flex justify-center mb-4"><FaMedkit className="w-8 h-8 text-red-500" /></div>
      <img src={`https://picsum.photos/200/200?category=animal`} alt="Medicine & Healthcare" className="mx-auto mb-4 w-64 h-48 rounded-xl" />
      <h3 className="text-xl font-semibold mb-2 text-center">Medicine & Healthcare</h3>
      <p className="text-gray-600 text-center">Medicine & Allied Health Dissertation (Thesis), Assignments, Manuscript Writing</p>
    </div>
  );
};

export default MedicineHealthcare;
  
