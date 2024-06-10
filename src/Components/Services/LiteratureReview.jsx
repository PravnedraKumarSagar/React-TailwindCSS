import React from 'react';
import { FaGraduationCap } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const data = [
  {
    name: 'Literature Review',
    href: "/services/literature-review",
    posts: [
      {
        id: 1,
        title: 'References Collection',
        content: 'Well, you are feeling collapsed and frustrated with collecting the reference for your dissertation. Unquestionably, reference collection is not a simple thing; ',
      },
      {
        id: 2,
        title: "Annotated Bibliography",
        content: 'Are you feeling miserable and frustrated while collecting the references and citations list for your dissertation? Undoubtedly, ',
      },
      {
        id: 3,
        title: 'Conceptual Framework ',
        content: 'Are you looking for ways on how to create a written or visual, conceptual framework? To draw a conceptual map structure, one needs to have a  ',
      },
      {
        id: 4,
        title: "Theorem Development",
        content: 'Are you looking for the theorem development help? Or Finding difficulties in proving your logical consequences for mathematics? We will methodically  ',
      },
      {
        id: 5,
        title: 'Theoretical Framework ',
        content: 'Are you looking for ways on how to create a theoretical framework? You need to develop hypotheses, a framework ',
      },
      {
        id: 6,
        title: "Gap Identification",
        content: 'Are you getting confused on how to conduct a gap analyses for your project? We assist you through the ideal gap analysis to identify the future state, evaluate',
      },
    ],
  },
]
const LiteratureReview = ( ) => {

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

export default LiteratureReview;
