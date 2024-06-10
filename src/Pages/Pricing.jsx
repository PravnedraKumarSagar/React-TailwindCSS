import { CheckIcon } from "@heroicons/react/20/solid";
import pricingImage from '../assets/2.jpg';

const includedFeatures = [
  "*Conditions Apply:",
  "Flexible Pricing Options Based on Your Requirements",
  "Expert Guidance and Support Throughout Your Journey",
  "Direct Communication with Experienced Advisors",
];

const content = [
  {
    Service: 'PhD Topic Selection',
    Criteria: '(2-3 topics)',
    USprice: '$250',
    INprice: '₹18,000*',
  },
  {
    Service: 'PhD Proposal',
    Criteria: '(1500 -2000 words)',
    USprice: '$490',
    INprice: '₹34,000*',
  },
  {
    Service: 'PhD Literature Review',
    Criteria: '(5,500 –6,000 words)',
    USprice: '$685',
    INprice: '₹47,500*',
  },
  {
    Service: 'PhD Research Methodology',
    Criteria: '(4500 words)',
    USprice: '$633',
    INprice: '₹43,700*',
  },
  {
    Service: 'PhD Statistical Analysis',
    Criteria: '(Contact Us)',
    USprice: '$830',
    INprice: '₹57,600*',
  },
  {
    Service: 'PhD Manuscript',
    Criteria: '(2000 -2500 words)',
    USprice: '$980',
    INprice: '₹69,300*',
  },
  {
    Service: 'PhD Dissertation Editing',
    Criteria: '(12,000 -14,000 words)',
    USprice: '$1,440',
    INprice: '₹99,950*',
  },
  {
    Service: 'PhD Thesis',
    Criteria: '(25,000 words)',
    USprice: '$1,940',
    INprice: '₹1,37,000*',
  },
  {
    Service: 'PhD Coursework',
    Criteria: '(2500 words)',
    USprice: '$390',
    INprice: '₹27,000*',
  },
];

export default function Pricing() {
  return (
    <div className="mx-auto max-w-7xl px-6 lg:px-8 py-8 sm:py-12">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          <div className="text-center lg:text-left">
            <h2 className="text-3xl lg:text-4xl font-bold text-black leading-tight mb-4">
              Affordable and Flexible Pricing Options
            </h2>
            <p className="text-md lg:text-lg text-gray-700 leading-relaxed mb-6">
              Choose from a range of services designed to meet your needs and budget. Our transparent pricing ensures you get expert guidance and support at competitive rates.
            </p>
            <ul className="text-md text-gray-600 mb-8">
              {includedFeatures.map((feature, index) => (
                <li key={index} className="flex items-center mb-2">
                  <CheckIcon className="h-4 w-4 mr-2 text-emerald-300" />
                  {feature}
                </li>
              ))}
            </ul>
            <button className="bg-white text-blue-900 font-bold py-2 px-6 rounded-full shadow-lg hover:bg-blue-400 transition duration-300">Contact Us</button>
          </div>
          <div className="hidden lg:block">
            <img src={pricingImage} alt="Pricing" className="rounded-lg shadow-lg" />
          </div>
        </div>
        <div className="mt-12">
          <div className="overflow-x-auto">
            <table className="w-full table-auto bg-white rounded-lg shadow-lg">
              <thead className="bg-gray-200 text-gray-700 uppercase text-sm leading-normal">
                <tr>
                  <th className="py-3 px-6 text-left">Service</th>
                  <th className="py-3 px-6 text-left">Criteria</th>
                  <th className="py-3 px-6 text-center">Price in US$</th>
                  <th className="py-3 px-6 text-center">Price in Rupees</th>
                </tr>
              </thead>
              <tbody className="text-gray-500 text-base font-normal">
                {content.map((item, index) => (
                  <tr key={index} className={index % 2 === 0 ? "bg-gray-100" : ""}>
                    <td className="py-3 px-6 text-left">{item.Service}</td>
                    <td className="py-3 px-6 text-left">{item.Criteria}</td>
                    <td className="py-3 px-6 text-center">{item.USprice}</td>
                    <td className="py-3 px-6 text-center">{item.INprice}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
