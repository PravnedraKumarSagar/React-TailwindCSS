import r1 from "../../assets/r1.jpg";
import r2 from "../../assets/r2.jpg";
import r3 from "../../assets/r3.jpg";

import about from "../../assets/about.png";
import guarantee from "../../assets/guarantee.png";
import mentoring from "../../assets/mentoring.png";
import { Link } from "react-router-dom";

import { FaUsers, FaCheckCircle, FaUserTie } from 'react-icons/fa'; 

const tag = [
  {
    title: 'Who We Are?',
    subtitle: 'Trust, Quality, and Customer Care.',
    Url: 'https://www.phdassistance.com/',
    imageUrl: about,
  },
  {
    title: 'Our Guarantees',
    subtitle: 'We Deliver What We Promise.',
    Url: 'https://phdassistance.netlify.app/',
    imageUrl: guarantee,
  },
  {
    title: 'Our Mentors',
    subtitle: 'Intellectual, Passionate, and Highly Collaborative.',
    Url: '',
    imageUrl: mentoring,
  },
];

const lists = [
  {
    title: 'Research Mentoring, Data Analytics and Consulting Services',
    subtitle: 'Empowering your journey with expert guidance, insightful analysis, and strategic consulting',
    imageUrl: r1,
  },
  {
    title: 'Our core lies in Tutoring and Mentoring',
    subtitle: 'Fostering growth through personalized guidance and mentorship',
    imageUrl: r2,
  },
  {
    title: 'High Commendable PhD Research',
    subtitle: 'Elevating academia through exemplary research and scholarly excellence.',
    imageUrl: r3,
  },
];

export default function Mentors() {
  return (
    <div className="relative isolate overflow-hidden bg-white py-10">
        <div
          className="hidden sm:absolute sm:top-20 sm:right-1/2 sm:-z-10 sm:mr-10 sm:block sm:transform-gpu sm:blur-3xl"
          aria-hidden="true"
        >
          <div
            className="aspect-[1097/845] w-[68.5625rem] bg-gradient-to-tr from-[#ff4694] to-[#776fff] opacity-20"
            style={{
              clipPath:
                'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
            }}
          />
        </div>
        <div
          className="absolute top-[28rem] left-1/2 -z-10 -translate-x-1/2 transform-gpu blur-3xl sm:top-[28rem] sm:ml-16 sm:translate-x-0 sm:transform-gpu"
          aria-hidden="true"
        >
          <div
            className="aspect-[1097/845] w-[68.5625rem] bg-gradient-to-tr from-[#ff4694] to-[#776fff] opacity-20"
            style={{
              clipPath:
                'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
            }}
          />
        </div>

        <div className="sm:bg-neutral-200 px-6 py-6 sm:rounded-e-full">
          <div className="max-w-7xl mx-auto grid grid-cols-1 gap-8 px-6 lg:px-8 lg:py-8 md:grid-cols-3">
            {tag.map((tag, index) => (
              <div key={index} className="bg-white grid sm:flex items-center rounded-lg overflow-hidden shadow-md hover:translate-y-1 hover:bg-gray-100">
                <div className="ml-6">
                  {index === 0 && <FaUsers className="h-12 w-12 text-yellow-500" />} 
                  {index === 1 && <FaCheckCircle className="h-12 w-12 text-green-500" />}
                  {index === 2 && <FaUserTie className="h-12 w-12 text-blue-500" />} 
                </div>
                <div className="p-6">
                  <h2 className="text-2xl font-semibold text-gray-900">{tag.title}</h2>
                  <p className="mt-3 text-md text-gray-700">{tag.subtitle}</p>
                  <Link to={tag.Url} className="text-sm font-semibold leading-6 text-gray-900">
                    Learn more <span aria-hidden="true">→</span>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>

      <div className="text-center max-w-7xl mx-auto m-24 gap-8 px-6 lg:px-8 ">
        <h1 className="text-3xl sm:text-4xl font-semibold text-gray-900 lg:px-8">
          Explore Our Quality Procedures for Unparalleled Excellence</h1>
        <p className="mt-6 text-lg leading-8 text-gray-600">
          The motive of PhD Assistance is to enable scholars and take them out of tough situations along with providing them full satisfaction. In addition, we also offer university (only UGC recognized) admission support for various national and international universities, selection of guides/supervisor (UGC recognized), job placement for scholars who have successfully completed and pursuing their PhDs.</p>
      </div>

      <div className="max-w-7xl mx-auto m-16 grid grid-cols-1 gap-8 px-6 lg:px-8 sm:grid-cols-2 md:grid-cols-3">
        {lists.map((list, index) => (
          <div key={index} className="bg-white rounded-lg overflow-hidden shadow-md">
            <img className="w-full h-48 sm:h-64 object-cover hover:h-72" src={list.imageUrl} alt={list.title} />
            <div className="p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-2">{list.title}</h3>
              <p className="text-gray-700">{list.subtitle}</p>
            </div>
          </div>
        ))}
      </div>

    </div> 
  );
}
