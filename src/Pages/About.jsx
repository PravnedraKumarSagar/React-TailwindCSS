import React, { useState } from "react";
import { Tab, TabGroup, TabList, TabPanel, TabPanels } from "@headlessui/react";

const categories = [
  {
    name: "Vision & Mission",
    posts: [
      {
        id: 1,
        title:
          "PhD Assistance aspires to the best research guidance provider in the world through its holistic approach irrespective of subjects, countries, and specializations. To achieve this vision, PhD Assistance approaches each research work through unique methodology and after a lot of discussion between research expertise, professors, data management experts, industry professionals and language & technical editors; we develop the research work. We handle the research works of all the subjects from various countries across the globe. We guide a wide range of researchers who include Research Scholars, Professors and Heads of various departments in prestigious universities, Working Professionals, Entrepreneurs, Industrialists, and students.",
      },
    ],
  },
  {
    name: "Confidentiality and Privacy",
    posts: [
      {
        id: 2,
        title:
          "We ensure that your research data, like your concept, collected data, interview transcripts, printed copies of these works, soft copies, research articles and every document related to your research is confidential and strictly handled only for the internal purposes. We get Non-Disclosure Agreement signed from our expertise who is going to work on your project so that you can be free from hassles in the future. Your data will be kept with us up to six months so that in case if you accidently lost your data (thesis copies, excel sheets) you can get in touch with us for the secured research work of yours. We never use your research works in future from our company or our professional writers or expertise since the copyright of the work is totally for yours because payment dues clearance.",
      },
    ],
  },
  {
    name: "Infrastructure and Security",
    posts: [
      {
        id: 3,
        title:
          "Our team of research expertise is providing this research support for the past 15 years. With an excellent infrastructure equipped with 24-hours power back-up and high-speed internet connectivity, we have access to online databases for accessing the best research sources all over the world. We have an in-house library with a collection of various international standard books which are updated every month as per the curriculum. With specific reference to journal articles, our in-house and online journal databases are at par excellent with some of the popular libraries in Chennai. Our secured CRM software with password protected access ensures your research files are accessed by a limited person. We protect your data from internet phishing or spamming. Thus your research work done at PhD Assistance is secured and safe forever.",
      },
    ],
  },
];
const links = [
  { name: "Our Writers", href: "#" },
  { name: "Our Guarantees", href: "#" },
  { name: "Our values", href: "#" },
  { name: "Customer Testimonials", href: "#" },
  { name: "Work with Us", href: "#" },
];


export default function About() {
  const [showMore, setShowMore] = useState(false);

  const handleShowMoreClick = () => {
    setShowMore(!showMore);
  };

  return (
    <div className="relative isolate overflow-hidden bg-white py-8 sm:py-12">
      
      <div
        className="hidden sm:absolute sm:-top-10 sm:right-1/2 sm:-z-10 sm:mr-10 sm:block sm:transform-gpu sm:blur-3xl"
        aria-hidden="true"
      >
        <div
          className="aspect-[1097/845] w-[68.5625rem] bg-gradient-to-tr from-[#ff4694] to-[#776fff] opacity-20"
          style={{
            clipPath:
              "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
          }}
        />
      </div>
      <div
        className="absolute -top-52 left-1/2 -z-10 -translate-x-1/2 transform-gpu blur-3xl sm:top-[28rem] sm:ml-16 sm:translate-x-0 sm:transform-gpu"
        aria-hidden="true"
      >
        <div
          className="aspect-[1097/845] w-[68.5625rem] bg-gradient-to-tr from-[#ff4694] to-[#776fff] opacity-20"
          style={{
            clipPath:
              "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
          }}
        />
      </div>

      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:mx-0 lg:max-w-none">
          <div className="grid grid-cols-1 gap-x-8 gap-y-6 text-base font-semibold leading-7 text-blue-900 sm:grid-cols-2 md:flex lg:gap-x-10">
            {links.map((link) => (
              <a key={link.name} href={link.href}>
                {link.name} <span aria-hidden="true">&rarr;</span>
              </a>
            ))}
          </div>
        </div>
        <div className="mx-auto flex lg:mx-0">
          <div>
            <h2 className="text-3xl mt-10 font-bold text-black sm:text-4xl">
              About us
            </h2>
            <div
              className={`mt-6 text-base leading-8 text-gray-700 ${
                showMore ? "" : "max-h-30 overflow-hidden"
              }`}
            >
              <p>
                PhD Assistance, is the world’s reputed academic guidance
                provider for the past 15 years have guided more than 4,500 Ph.D.
                scholars and 10,500 Masters Students across the globe. We
                support students, research scholars, entrepreneurs, and
                professionals from various organizations in providing
                consistently high-quality writing and data analytical services
                every time. We value every client and make sure their
                requirements are identified and understood by our specialized
                professionals and analysts, enriched in experience to deliver
                technically sound output within the requested timeframe. Writers
                at PhD Assistance are best referred to as 'Researchers' since
                every topic they handle is unique and challenging.
              </p>
              {showMore && (
                <p>
                  We specialize in handling text and data, i.e., content
                  development and Statistical analysis where the latest
                  statistical applications are exhausted by our expert analysts
                  for determining the outcome of the data analyzed. Qualified
                  and experienced researchers including Ph.D. holders,
                  statisticians, and research analysts offer cutting-edge
                  research consulting and writing services to meet your business
                  information or academic project requirement. Our expertise has
                  a passion towards research and personal assistance as we work
                  closely with you for a very professional and quality output
                  within your stipulated time frame. Our services cover vast
                  areas, and we also support either part or entire research
                  paper/service as per your requirement at competitive prices.
                </p>
              )}
            </div>
            <button
              className="text-blue-500 mt-4"
              onClick={handleShowMoreClick}
            >
              {showMore ? "Show Less" : "Show More"}
            </button>
          </div>
        </div>
        
      </div>
      <div className=" mx-auto max-w-7xl px-6 lg:px-8 py-8 sm:py-12">
        <TabGroup>
          <TabList className="flex gap-4 overflow-x-auto">
            {categories.map(({ name }) => (
              <Tab
                key={name}
                className="text-md sm:text-xl font-bold sm:leading-7 text-blue-900 rounded-full sm:py-1 sm:px-3 focus:outline-none data-[selected]:bg-black/10 data-[hover]:bg-black/5 data-[selected]:data-[hover]:bg-black/10 data-[focus]:outline-1 data-[focus]:outline-black"
              >
                {name}
              </Tab>
            ))}
          </TabList>
          <TabPanels className="mt-3">
            {categories.map(({ name, posts }) => (
              <TabPanel key={name} className="rounded-xl bg-black/5 p-3">
                <ul>
                  {posts.map((post) => (
                    <li
                      key={post.id}
                      className="relative rounded-md p-3 text-sm/6 transition"
                    >
                      <a
                        href="#"
                        className="text-base  leading-8 tracking-tight text-gray-700"
                      >
                        <span className="absolute inset-0" />
                        {post.title}
                      </a>
                    </li>
                  ))}
                </ul>
              </TabPanel>
            ))}
          </TabPanels>
        </TabGroup>
      </div>
    </div>
  );
}
