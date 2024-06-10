import React from 'react';
import { FaGraduationCap, FaBusinessTime, FaTools, FaPalette, FaMoneyBillWave, FaDna, FaMedkit, FaDesktop } from 'react-icons/fa';


const ComputerScienceInformation = () => {
  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <div className="flex justify-center mb-4"><FaDesktop className="w-8 h-8 text-indigo-500" /></div>
      <img src={`https://picsum.photos/200/200?category=animal`} alt="Computer Science & Information" className="mx-auto mb-4 w-64 h-48 rounded-xl" />
      <h3 className="text-xl font-semibold mb-2 text-center">Computer Science & Information</h3>
      <p className="text-gray-600 text-center">Computer Science & Information Technology (Thesis), Assignments</p>
    </div>
  );
};

export default ComputerScienceInformation;
  
