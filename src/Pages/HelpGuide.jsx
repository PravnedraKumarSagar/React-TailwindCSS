import React from 'react';

const categories = [
  {
    title: "Health & Medical",
    items: [
      "Nursing",
      "Clinical Pharmacology",
      "Public Health",
      "Food Science & Nutrition",
      "Complementary & Alternative Medicine",
      "Psychology & Psychiatry",
      "Politics & Sociology"
    ]
  },
  {
    title: "Biological & Science",
    items: [
      "Agricultural Sciences",
      "Biochemistry & Bioinformatics",
      "Cancer / Oncology",
      "Genetics",
      "Medical / Clinical Science",
      "Obstetrics, Gynecology & Reproduction",
      "Molecular Biology",
      "Neuroscience / Neurology",
      "Physiology & Sports Science",
      "Public Health & Epidemiology",
      "Immunology",
      "Biotechnology"
    ]
  },
  {
    title: "Engineering",
    items: [
      "Biomedical Engineering",
      "Environmental Engineering",
      "Civil & Structural Engineering",
      "Chemical Engineering",
      "Manufacturing & Materials Science",
      "Nanotechnology",
      "Mechanical Engineering",
      "Software Engineering",
      "Telecommunications",
      "Electrical & Electronic",
      "Data Mining / Image Mining / Cloud Computing",
      "Computer Science Engineering"
    ]
  },
  {
    title: "Business & Management & Humanities",
    items: [
      "Development Studies",
      "Education",
      "Human Resource Management",
      "IT / Strategic Marketing",
      "Social Work, Social Policy & Administration",
      "Modern Languages & Linguistics",
      "Philosophy",
      "Health Sciences",
      "The Middle East & African Studies (MENA)",
      "Architecture & The Built Environment"
    ]
  },
  {
    title: "Finance & Others",
    items: [
      "Accounting & Finance",
      "Marketing",
      "Tourism & Hospitality",
      "English",
      "History",
      "Classics & Ancient History",
      "Law",
      "Operational Research"
    ]
  }
];

const HelpGuide = () => {
  return (
    <div className="bg-gray-100">
      <div className="max-w-7xl mx-auto px-6 sm:py-12 lg:px-8 py-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-6 text-center">Help Guide</h1>
        <p className="text-lg text-gray-700 mb-8 text-center">Explore our help guide to find assistance on various topics.</p>
        {categories.map(category => (
          <div key={category.title} className="mb-8">
            <h2 className="text-2xl font-bold text-blue-900 mb-4">{category.title}</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {category.items.map(item => (
                <div key={item} className="relative bg-white shadow-lg rounded-lg p-4 border border-gray-100 transition duration-300 ease-in-out hover:bg-gray-100 hover:border-b-black hover:border-2">
                  <p className="text-lg font-normal text-gray-800">{item}</p>
                  <div className="absolute bottom-0 left-0 w-full h-1 bg-black opacity-0 transition-opacity duration-300 ease-in-out group-hover:opacity-100"></div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HelpGuide;
