import React from 'react';
import { ChartBarIcon, ChartPieIcon } from '@heroicons/react/20/solid';

const DataAnalytics = () => {
  return (
    <div className="bg-gray-100 p-8 rounded-lg shadow-lg mx-auto max-w-7xl">
      <h2 className="text-2xl font-bold mb-4">Data Analytics</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="bg-white p-4 rounded-lg shadow-md flex flex-col items-center">
          <ChartBarIcon className="h-12 w-12 text-blue-500 mb-2" />
          <h3 className="text-lg font-semibold mb-2">Bar Chart</h3>
          <p className="text-gray-600">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </div>
        <div className="bg-white p-4 rounded-lg shadow-md flex flex-col items-center">
          <ChartPieIcon className="h-12 w-12 text-green-500 mb-2" />
          <h3 className="text-lg font-semibold mb-2">Pie Chart</h3>
          <p className="text-gray-600">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </div>
        <div className="bg-white p-4 rounded-lg shadow-md flex flex-col items-center">
          {/* <ChartLineIcon className="h-12 w-12 text-yellow-500 mb-2" /> */}
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-12 w-12 text-yellow-500 mb-2">
            <path fillRule="evenodd" d="M2.25 2.25a.75.75 0 0 0 0 1.5H3v10.5a3 3 0 0 0 3 3h1.21l-1.172 3.513a.75.75 0 0 0 1.424.474l.329-.987h8.418l.33.987a.75.75 0 0 0 1.422-.474l-1.17-3.513H18a3 3 0 0 0 3-3V3.75h.75a.75.75 0 0 0 0-1.5H2.25Zm6.54 15h6.42l.5 1.5H8.29l.5-1.5Zm8.085-8.995a.75.75 0 1 0-.75-1.299 12.81 12.81 0 0 0-3.558 3.05L11.03 8.47a.75.75 0 0 0-1.06 0l-3 3a.75.75 0 1 0 1.06 1.06l2.47-2.47 1.617 1.618a.75.75 0 0 0 1.146-.102 11.312 11.312 0 0 1 3.612-3.321Z" clipRule="evenodd" />
          </svg>

          <h3 className="text-lg font-semibold mb-2">Line Chart</h3>
          <p className="text-gray-600">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </div>
      </div>
    </div>
  );
};

export default DataAnalytics;
