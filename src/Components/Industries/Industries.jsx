import React from 'react';
import { Link } from "react-router-dom";
import { FaGraduationCap, FaBusinessTime, FaTools, FaPalette, FaMoneyBillWave, FaDna, FaMedkit, FaDesktop } from 'react-icons/fa';

const industriesData = [
  {
    name: 'Academic Law Writing',
    icon: <FaGraduationCap className="w-8 h-8 text-blue-500" />,
    description: 'Law Dissertation (Thesis), Assignments, Manuscript Writing & Editing Services',
    image:  `https://randomuser.me/api/portraits/men/77.jpg`, // Replace with actual image path
    href: '',
  },
  {
    name: 'Business & Management',
    icon: <FaBusinessTime className="w-8 h-8 text-green-500" />,
    description: 'Business & Management Dissertation (Thesis), Assignments, Manuscript Writing & Editing Services',
    image: `https://source.unsplash.com/${"a-woman-sitting-at-a-desk-writing-on-a-notebook-JT5IUQHtL7E"}`,
    href: '',
  },
  {
    name: 'Engineering & Technology',
    icon: <FaTools className="w-8 h-8 text-yellow-500" />,
    description: 'Engineering & Technology Assignments, Manuscript Writing & Editing Service',
    image: '/images/engineering_technology.jpg', // Replace with actual image path
    href: '',
  },
  {
    name: 'Arts & Humanities',
    icon: <FaPalette className="w-8 h-8 text-purple-500" />,
    description: 'Arts & Humanities (Thesis), Assignments, Manuscript Writing & Editing Services',
    image: '/images/arts_humanities.jpg', // Replace with actual image path
    href: '',
  },
  {
    name: 'Economics & Finance Academic',
    icon: <FaMoneyBillWave className="w-8 h-8 text-blue-500" />,
    description: 'Economics & Finance Dissertation (Thesis), Assignments, Manuscript Writing & Editing',
    image: '/images/economics_finance.jpg', // Replace with actual image path
    href: '',
  },
  {
    name: 'Biological & Life Science',
    icon: <FaDna className="w-8 h-8 text-green-500" />,
    description: 'Biological & Life Science (Thesis), Assignments, Manuscript Writing & Editing',
    image: '/images/biological_life_science.jpg', // Replace with actual image path
    href: '',
  },
  {
    name: 'Medicine & Healthcare',
    icon: <FaMedkit className="w-8 h-8 text-red-500" />,
    description: 'Medicine & Allied Health Dissertation (Thesis), Assignments, Manuscript Writing',
    image: '/images/medicine_healthcare.jpg', // Replace with actual image path
    href: '',
  },
  {
    name: 'Computer Science & Information',
    icon: <FaDesktop className="w-8 h-8 text-indigo-500" />,
    description: 'Computer Science & Information Technology (Thesis), Assignments',
    image: '/images/computer_science_information.jpg', // Replace with actual image path
    href: '',
  },
];

const Industries = () => {
  return (
    <div className="bg-gray-50 mx-auto max-w-7xl lg:px-8 py-10 sm:py-12">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-semibold mb-8 text-center">Industries</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {industriesData.map((industry, index) => (
            <div key={index} className="bg-white rounded-lg shadow-md p-6 hover:bg-gray-200">
                <Link to={industry.href} >
              <div className="flex justify-center mb-4 ">{industry.icon}</div>
              {/* <img src={industry.image} alt={industry.name} className="mx-auto mb-4" /> */}
              <h3 className="text-xl font-semibold mb-2 text-center">{industry.name}</h3>
              <p className="text-gray-600 text-center">{industry.description}</p>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Industries;
