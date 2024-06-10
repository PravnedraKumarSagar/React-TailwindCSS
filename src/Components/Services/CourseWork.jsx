import React from 'react';
import { FaGraduationCap } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const data = [
  {
    name: 'Course Work',
    href: "/services/course-work",
    posts: [
      {
        id: 1,
        title: 'Abstract',
        content: 'Are you facing difficulties in framing the abstract for writing or finding it hard to write crispy and informative abstract for your',
      },
      {
        id: 2,
        title: 'Exam Notes',
        content: 'Obtain an Exam notes writing help at PhD assistance that 100% match your study needs. We support Exam notes writing across a wide range of subjects',
      },
      {
        id: 3,
        title: 'Assignment ',
        content: 'Our well qualified and talented subject matter experts have the capability to handle the challenges facing by students in the various discipline.',
      },
      {
        id: 4,
        title: 'Synopsis Preparation',
        content: 'Our expert and experienced team members are well versed in the Research domain and successfully assisted numerous PhD students in'
      },
      {
        id: 5,
        title: 'Interim Report',
        content: 'Our expert and experienced team members are well versed in the Research domain and successfully assisted numerous Ph.D. students in the preparation',
      },
      {
        id: 6,
        title: 'Power Point',
        content: 'Thesis PowerPoint presentation is effective advertisement tool to highlight the significance of your Research thesis work in a conference meet.',
      },
    ],
  },
];

const CourseWork = () => {
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

export default CourseWork;
