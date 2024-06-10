import React from 'react';
import { FaGraduationCap } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const data = [
  {
    name: 'Dissertation',
    href: "/services/dissertation",
    posts: [
      {
        id: 1,
        title: 'Ph.D. Topic Selection',
        content: "Looking for the original and Well-Researched PhD Research Topic Selection? Do you want to conduct brainstorming sessions with our",
      },
      {
        id: 2,
        title: "Problem Identification ",
        content: "Are you facing difficulties in identifying the research problems? Whether are you looking to narrowing or clarifying the ",
      },
      {
        id: 3,
        title: "Research Proposal ",
        content: "Are you facing difficulties in identifying the research problems? Whether are you looking to narrowing or clarifying the ",
      },
      {
        id: 4,
        title: "Pilot Study ",
        content: "Finding a way to conduct a best preliminary study with the help of assistance to estimate cost, time, feasibility, effect size, and adverse",
      },
      {
        id: 5,
        title: "Ph.D. Dissertation (Full) ",
        content: "Are you looking for an expert Ph.D. writer for specific subjects of a doctoral degree? Then’ You’ve reached the right destination. ",
      },
      {
        id: 6,
        title: "Ph.D. Dissertation (Part) ",
        content: "Are you looking to avail PhD Dissertation part like only to write abstract, literature review, methodology, materials and methods, findings   ",
      },
      {
        id: 7,
        title: "Viva Voce",
        content: "Are you concerned about how to attempt face-to-face viva voce in front of your supervisor and authorized committee? Feeling worried how to overcome the",
      },
    ],
  },
]
const PHDDissertation = ( ) => {

  return (
    <div className="bg-white rounded-lg mx-auto max-w-7xl px-6 lg:px-8 shadow-md p-6">
      <div className="flex justify-center mb-4">
        <FaGraduationCap className="w-8 h-8 text-blue-500" />
      </div>
      {data.map(({ name, posts }) => (
        <React.Fragment key={name}>
          <h3 className="text-xl font-semibold mb-2 text-center">{name}</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {posts.map((post) => (
              <div key={post.id} className="bg-gray-100 rounded-lg p-4 hover:bg-slate-200">
                <Link to={post.href}>
                  <h4 className="text-lg font-semibold mb-2">{post.title}</h4>
                  <p className="text-gray-600">{post.content}</p>
                </Link>
              </div>
            ))}
          </div>
        </React.Fragment>
      ))}
    </div>
  );
};

export default PHDDissertation;
