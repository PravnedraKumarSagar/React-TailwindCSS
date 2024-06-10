import React from "react";

const services = [
  { name: "PHD Dissertation", href: "/services/dissertation" },
  { name: "Course Work", href: "/services/course-work" },
  { name: "Literature Review", href: "/services/literature-review" },
  { name: "PHD Research Methodology", href: "/services/research-methodology" },
  { name: "Data Analytics", href: "/services/analytics" },
  { name: "Editing Services", href: "/services/editing" },
  { name: "Manuscript", href: "/services/manuscript" },
  { name: "Courses", href: "/services/courses" },
];

const links = [
  { name: "About Us", href: "/about" },
  { name: "Pricing", href: "/pricing" },
  { name: "Help-Guide", href: "/help-guide" },
  { name: "Hire a Research Assistant", href: "research-assistant" },
  { name: "Industries", href: "/industries" },
  { name: "Career", href: "#" },
  { name: "Terms and Conditions", href: "#" },
  { name: "Contact Us", href: "/contact" },
];

import { FaInstagram, FaYoutube, FaFacebook, FaTwitter, FaLinkedin } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="text-white bg-gray-900 relative isolate overflow-hidden  ">
      <div
        className="hidden sm:absolute sm:-z-10 sm:block sm:transform-gpu sm:blur-3xl"
        aria-hidden="true"
      >
        <div
          className="aspect-[10/2] w-[48.5625rem] ml-40 bg-gradient-to-tr from-[#ff4694] to-[#776fff] opacity-25"
          style={{
            clipPath:
              "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
          }}
        />
      </div>

      <div className="container mt-6 mx-auto max-w-7xl px-6 py-6 text-center">
        <div className="md:flex md:flex-wrap md:-mx-4">
          <div className="md:w-1/4 md:px-4 mb-6 text-left">
            <h3 className="text-lg font-semibold mb-2">PHD Assistance</h3>
            <p className="text-sm">UK : +44-7537 144372</p>
            <p className="text-sm">India : +91-9176966446</p>
            <p className="text-sm">For existing clients : +91-8754446693</p>
            <p className="text-sm">Customer Care : +91-9384672299</p>
            <p className="text-sm">Email : info@phdassistance.com</p>
          </div>
          <div className="md:w-1/4 md:px-4 mb-6 text-left">
            <h3 className="text-lg font-semibold mb-2">Services</h3>
            {services.map((service, index) => (
              <div key={index}>
                <ul>
                  <li className="flex ">
                    <svg
                      className="h-6 w-5 text-blue-400"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                    <Link to={service.href} className="text-gray-300 hover:text-white">
                      {service.name}
                    </Link>
                  </li>
                </ul>
              </div>
            ))}
          </div>
          <div className="md:w-1/4 md:px-4 mb-6 text-left">
            <h3 className="text-lg font-semibold mb-2">Links</h3>
            {links.map((link, index) => (
              <div key={index}>
                <ul>
                  <li className="flex ">
                    <svg
                      className="h-6 w-5 text-blue-400"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                    <Link to={link.href} className="text-gray-300 hover:text-white">
                      {link.name}
                    </Link>
                  </li>
                </ul>
              </div>
            ))}
          </div>
          <div className="md:w-1/4 md:px-4 mb-6 text-left">
            <h3 className="text-lg font-semibold mb-2">Knowledge Centre</h3>
            <ul>
              <li className="flex">
                <svg
                  className="h-6 w-5 text-blue-400"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M9 5l7 7-7 7"
                  />
                </svg>
                <Link to="/blog" className="text-gray-300 hover:text-white">
                  Blogs
                </Link>
              </li>
              <li className="flex">
                <svg
                  className="h-6 w-5 text-blue-400"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M9 5l7 7-7 7"
                  />
                </svg>
                <a href="#" className="text-gray-300 hover:text-white">
                  FAQs
                </a>
              </li>
              <li className="flex">
                <svg
                  className="h-6 w-5 text-blue-400"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M9 5l7 7-7 7"
                  />
                </svg>
                <a href="#" className="text-gray-300 hover:text-white">
                  Testimonials
                </a>
              </li>
            </ul>
            {/* Social media icons */}
            <div className="flex mt-6">
              {/* Twitter icon */}
              <a href="#" className="mx-3">
              <FaTwitter size={22}/>
              </a>
              {/* Facebook icon */}
              <a href="#" className="mx-3">
              <FaFacebook size={22}/>
              </a>
              {/* Instagram icon */}
              <a href="#" className="mx-3">
              <FaInstagram size={22}/>
              </a>
              {/* LinkedIn icon */}
              <a href="#" className="mx-3">
              <FaLinkedin size={22}/>
              </a>
              {/* WhatsApp icon */}
              <a href="#" className="mx-3">
              <FaWhatsapp size={22}/>
              </a>
              {/* YouTube icon */}
              <a href="#" className="mx-3">
              <FaYoutube size={22}/>
              </a>
            </div>
          </div>
        </div>
      </div>
      <hr />
      <div className="bg-gray-900">
        <div className="container mx-auto px-6 py-3">
          <p className="text-sm text-gray-300 text-center">
            &copy; 2024 Company. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
