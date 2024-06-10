import React from 'react';
import { FaGraduationCap } from 'react-icons/fa';

const AcademicLawWriting = () => {
  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <div className="flex justify-center mb-4"><FaGraduationCap className="w-8 h-8 text-blue-500" /></div>
      <img src={`https://picsum.photos/200/200?category=animal`} alt="Academic Law Writing" className="mx-auto w-64 h-48 mb-4 rounded-xl " />
      <h3 className="text-xl font-semibold mb-2 text-center">Academic Law Writing</h3>
      <p className="text-gray-600 text-center">Law Dissertation (Thesis), Assignments, Manuscript Writing & Editing Services</p>
    </div>
  );
};

export default AcademicLawWriting;
