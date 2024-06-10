import { useState } from "react";
import { Disclosure, Menu, Transition } from "@headlessui/react";
import { Bars3Icon, XMarkIcon, MagnifyingGlassIcon, ChevronDownIcon } from "@heroicons/react/24/outline";
import icon from "../../assets/icon.png";
import { Link } from "react-router-dom";
import { FaPhone, FaEnvelope } from 'react-icons/fa';

const navigation = [
  { name: "About Us", href: "/about", current: false, hasSubMenu: false },
  {
    name: "Services",
    href: "/services",
    current: false,
    hasSubMenu: true,
    subMenuItems: [
      { name: "PHD Dissertation", href: "/services/dissertation" },
      { name: "Course Work", href: "/services/course-work" },
      { name: "Literature Review", href: "/services/literature-review" },
      { name: "PHD Research Methodology", href: "/services/research-methodology" },
      { name: "Data Analytics", href: "/services/analytics" },
      { name: "Editing Services", href: "/services/editing" },
      { name: "Manuscript", href: "/services/manuscript" },
      { name: "Courses", href: "/services/courses" },
    ],
  },
  {
    name: "Industries",
    href: "/industries",
    current: false,
    hasSubMenu: true,
    subMenuItems: [
      { name: "Academic Law Writing", href: "/industries/academic-law-writing" },
      { name: "Business & Management", href: "/industries/business-management" },
      { name: "Engineering & Technology", href: "/industries/engineering-technology" },
      { name: "Arts & Humanities", href: "/industries/arts-humanities" },
      { name: "Economics & Finance Academic", href: "/industries/economics-finance-academic" },
      { name: "Biological & Life Science", href: "/industries/biological-life-science" },
      { name: "Medicine & Healthcare", href: "/industries/medicine-healthcare" },
      { name: "Computer Science & Information", href: "/industries/computer-science-information" },
    ],
  },
  { name: "Pricing", href: "/pricing", current: false, hasSubMenu: false },
  { name: "Help-Guide", href: "/help-guide", current: false, hasSubMenu: false },
  {
    name: "Hire a Research Assistant",
    href: "/research-assistant",
    current: false,
    hasSubMenu: false,
  },
  { name: "Contact Us", href: "/contact", current: false, hasSubMenu: false },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Navbar() {
  const [openSubMenu, setOpenSubMenu] = useState(null);

  return (
    <>
    <div className="bg-indigo-600">
      <p className="relative flex h-10 items-center justify-center px-4 text-xs sm:text-sm font-medium text-white sm:px-6 lg:px-8">
      <FaPhone className="mr-1 text-white" /> +91-9176966446 <span className="mx-1">|</span> <FaEnvelope className="mr-1 text-white" /> info@phdassistance.com
      </p>
    </div>
    
    <header className="sticky top-0 left-0 w-full bg-gray-900 z-50 shadow-xl border-t-2 border-indigo-600">
      <Disclosure as="nav" className="bg-gray-900">
        {({ open }) => (
          <>
            
            <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
              <div className="relative z-10 flex h-16 items-center justify-between">
                <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                  {/* Mobile menu button*/}
                  <Disclosure.Button className="relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                    <span className="absolute -inset-0.5" />
                    <span className="sr-only">Open main menu</span>
                    {open ? (
                      <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                    ) : (
                      <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                    )}
                  </Disclosure.Button>
                </div>
                <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
                  <div className="flex flex-shrink-0 items-center text-white font-bold">
                    <Link to="/" className="flex items-center">
                      <img 
                        className="h-8 w-auto filter invert"
                        src={icon}
                        alt="PHD Assistance"
                      />PHD Assistance
                    </Link>
                  </div>
                  <div className="hidden sm:ml-6 sm:block z-10">
                    <div className="flex space-x-4">
                      {navigation.map((item) => (
                        <div
                          key={item.name}
                          className="flex items-center  text-gray-300"
                        >
                          {item.hasSubMenu ? (
                            <Menu
                              as="div"
                              className="relative"
                              onMouseEnter={() => setOpenSubMenu(item.name)}
                              onMouseLeave={() => setOpenSubMenu(null)}
                            >
                              <div>
                                <Menu.Button
                                  className="flex items-center  text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                                  onClick={() =>
                                    setOpenSubMenu(
                                      openSubMenu === item.name ? null : item.name
                                    )
                                  }
                                >
                                  <Link to={item.href}>
                                  <span>{item.name}</span>
                                  </Link>
                                  <ChevronDownIcon
                                    className="ml-1 -mr-1 h-5 w-5 text-gray-400"
                                    aria-hidden="true"
                                  />
                                </Menu.Button>
                              </div>
                              <Transition
                                show={openSubMenu === item.name}
                                enter="transition ease-out duration-100"
                                enterFrom="transform opacity-0 scale-95"
                                enterTo="transform opacity-100 scale-100"
                                leave="transition ease-in duration-75"
                                leaveFrom="transform opacity-100 scale-100"
                                leaveTo="transform opacity-0 scale-95"
                              >
                                <Menu.Items
                                  static
                                  className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
                                >
                                  {item.subMenuItems.map((subMenuItem) => (
                                    <Menu.Item key={subMenuItem.name}>
                                      {({ active }) => (
                                        <Link
                                          to={subMenuItem.href}
                                          className={
                                            "block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                                          }
                                        >
                                          {subMenuItem.name}
                                        </Link>
                                      )}
                                    </Menu.Item>
                                  ))}
                                </Menu.Items>
                              </Transition>
                            </Menu>
                          ) : (
                            <Link
                              to={item.href}
                              className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                              aria-current={item.current ? "page" : undefined}
                            >
                              {item.name}
                            </Link>
                          )}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
                <div className="flex lg:ml-6 items-center">
                  <a href="#" className="p-2 text-gray-400 hover:text-gray-500">
                    <span className="sr-only">Search</span>
                    <MagnifyingGlassIcon className="h-6 w-6" aria-hidden="true" />
                  </a>
                </div>
              </div>
            </div>
            <Disclosure.Panel className="sm:hidden">
              <div className="space-y-1 px-2 pb-3 pt-2">
                {navigation.map((item) => (
                  <Disclosure.Button
                    key={item.name}
                    as="a"
                    href={item.href}
                    className={classNames(
                      item.current
                        ? "bg-gray-900 text-white"
                        : "text-gray-300 hover:bg-gray-700 hover:text-white",
                      "block rounded-md px-3 py-2 text-base font-medium"
                    )}
                    aria-current={item.current ? "page" : undefined}
                  >
                    {item.name}
                  </Disclosure.Button>
                ))}
              </div>
            </Disclosure.Panel>
          </>
        )}
      </Disclosure>
    </header>
    </>
  );
}
