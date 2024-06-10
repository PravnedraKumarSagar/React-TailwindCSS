import React from 'react';
import { Link } from "react-router-dom";
import { Tab, TabGroup, TabList, TabPanel, TabPanels } from '@headlessui/react'

const categories = [
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
  {
    name: 'Course Work',
    href: "/services/course-work",
    posts: [
      {
        id: 1,
        title: 'Is tech making coffee better or worse?',
        content: 'Jan 7',
      },
      {
        id: 2,
        title: 'The most innovative things happening in coffee',
        content: 'Mar 19',
      },
    ],
  },
  {
    name: 'Literature Review',
    href: "/services/literature-review",
    posts: [
      {
        id: 1,
        title: 'Ask Me Anything: 10 answers to your questions about coffee',
        content: '2d ago',
      },
      {
        id: 2,
        title: "The worst advice we've ever heard about coffee",
        content: '4d ago',
      },
    ],
  },
  {
    name: 'Research Methodology',
     href: "/services/research-methodology",
    posts: [
      {
        id: 1,
        title: 'Does drinking coffee make you smarter?',
        content: '5h ago',
      },
      {
        id: 2,
        title: "So you've bought coffee... now what?",
        content: '2h ago',
      },
    ],
  },
  {
    name: 'Analytics',
    href: "/services/analytics",
    posts: [
      {
        id: 1,
        title: 'Is tech making coffee better or worse?',
        content: 'Jan 7',
      },
      {
        id: 2,
        title: 'The most innovative things happening in coffee',
        content: 'Mar 19',
      },
    ],
  },
  {
    name: 'Manuscript',
    href: "/services/manuscript",
    posts: [
      {
        id: 1,
        title: 'Ask Me Anything: 10 answers to your questions about coffee',
        content: '2d ago',
      },
      {
        id: 2,
        title: "The worst advice we've ever heard about coffee",
        content: '4d ago',
      },
    ],
  },
  {
    name: 'Editing',
    href: "/services/editing",
    posts: [
      {
        id: 1,
        title: 'Does drinking coffee make you smarter?',
        content: '5h ago',
      },
      {
        id: 2,
        title: "So you've bought coffee... now what?",
        content: '2h ago',
      },
    ],
  },
  {
    name: 'Animation',
    posts: [
      {
        id: 1,
        title: 'Is tech making coffee better or worse?',
        content: 'Jan 7',
      },
      {
        id: 2,
        title: 'The most innovative things happening in coffee',
        content: 'Mar 19',
      },
    ],
  },
  {
    name: 'Courses',
    href: "/services/courses",
    posts: [
      {
        id: 1,
        title: 'Ask Me Anything: 10 answers to your questions about coffee',
        content: '2d ago',
      },
      {
        id: 2,
        title: "The worst advice we've ever heard about coffee",
        content: '4d ago',
      },
    ],
  },
]

export default function Courses() {
  return (
    <>

    <div className=" justify-center px-4 mx-auto max-w-7xl lg:px-8 py-10 sm:py-12">
      <h1>Courses</h1>
      <div className="max-w-7xl">
        <TabGroup>
          <TabList className="flex gap-4 overflow-x-auto">
            {categories.map(({ name, href }) => (
              <Tab
                key={name}
                className="rounded py-1 px-1 text-lg font-semibold text-black focus:outline-none data-[selected]:bg-black/10 data-[hover]:bg-black/5 data-[selected]:data-[hover]:bg-black/10 data-[focus]:outline-1 data-[focus]:outline-black"
              >
                {/* <Link to={''}> */}
                {name}
                {/* </Link> */}
              </Tab>
            ))}
          </TabList>
          <TabPanels className="mt-3">
            {categories.map(({ name, posts }) => (
              <TabPanel key={name} className="rounded-xl">
                <ul className='grid grid-cols-2'>
                  {posts.map((post) => (
                    <li key={post.id} className="relative rounded-md p-2 m-2 bg-neutral-100 text-md transition hover:bg-black/5">
                      <Link to={''} className="font-bold text-gray-900">
                        <span className="absolute inset-0" />
                        {post.title}
                      </Link>
                      <ul className="flex gap-2 text-black/50" aria-hidden="true">
                        <li>{post.content}</li>
                      </ul>
                    </li>
                  ))}
                </ul>
              </TabPanel>
            ))}
          </TabPanels>
        </TabGroup>
      </div>
    </div>
    </>
  )
}


