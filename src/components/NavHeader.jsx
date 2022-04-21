import { Fragment, useState } from 'react';
import { Dialog, Transition } from '@headlessui/react';
import {
  DesktopComputerIcon,
  HomeIcon,
  MenuIcon,
  PresentationChartLineIcon,
  RssIcon,
  XIcon,
} from '@heroicons/react/outline';

import { ABOUT_ME, PROJECTS, BLOGS, DIGITAL_ART } from '../constants/routes';

const navigation = [
  { name: 'About Me', href: `${ABOUT_ME}`, icon: HomeIcon, current: false },
  { name: 'Projects', href: `${PROJECTS}`, icon: PresentationChartLineIcon, current: false },
  { name: 'Blogs', href: `${BLOGS}`, icon: RssIcon, current: false },
  { name: 'Digital Art', href: `${DIGITAL_ART}`, icon: DesktopComputerIcon, current: false }
];

const secondaryNavigation = [
  { name: '#deployment', href: '/' },
  { name: '#react', href: '/' },
  { name: '#coding', href: '/' },
  { name: '#java', href: '/' },
  { name: '#leetcode', href: '/' },
  { name: '#mernstack', href: '/' },
  { name: '#javascript', href: '/' },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(' ');
}

function checkCurrentPage() {
  const urlVal = window.location.pathname;
  const current = navigation.find(item => item.href === urlVal);
  if (current) {
    current.current = true;
  }
}

checkCurrentPage();

const NavHeader = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <>
      <div>
        {/* Static sidebar for mobile */}
        <Transition.Root show={sidebarOpen} as={Fragment}>
          <Dialog as="div" className="fixed inset-0 flex z-40 md:hidden" onClose={setSidebarOpen}>
            <Transition.Child
              as={Fragment}
              enter="transition-opacity ease-linear duration-300"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="transition-opacity ease-linear duration-300"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <Dialog.Overlay className="fixed inset-0 bg-gray-600 bg-opacity-75" />
            </Transition.Child>
            <Transition.Child
              as={Fragment}
              enter="transition ease-in-out duration-300 transform"
              enterFrom="-translate-x-full"
              enterTo="translate-x-0"
              leave="transition ease-in-out duration-300 transform"
              leaveFrom="translate-x-0"
              leaveTo="-translate-x-full"
            >
              <div className="relative flex-1 flex flex-col max-w-xs w-full bg-slate-50">
                <Transition.Child
                  as={Fragment}
                  enter="ease-in-out duration-300"
                  enterFrom="opacity-0"
                  enterTo="opacity-100"
                  leave="ease-in-out duration-300"
                  leaveFrom="opacity-100"
                  leaveTo="opacity-0"
                >
                  <div className="absolute top-0 right-0 -mr-12 pt-2">
                    <button
                      type="button"
                      className="ml-1 flex items-center justify-center h-10 w-10 rounded-full focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
                      onClick={() => setSidebarOpen(false)}
                    >
                      <span className="sr-only">Close sidebar</span>
                      <XIcon className="h-6 w-6 text-white" aria-hidden="true" />
                    </button>
                  </div>
                </Transition.Child>
                <div className="flex-1 h-0 pt-5 pb-4 overflow-y-auto">
                  <div className="flex-shrink-0 flex items-center px-4">
                    <span className='inline-block space-x-2'>
                      <img
                        className="h-8 w-auto"
                        src="/images/shahpreetk-logo.png"
                        alt="Preet Shah logo"
                      />
                    </span>
                    <span className='inline-block space-x-2 pl-2 text-slate-600 text-xl font-semibold'>
                      <h2>Preet Shah</h2>
                    </span>
                  </div>
                  <nav className="mt-5 px-2 space-y-1">
                    <div className="space-y-1">
                      {navigation.map((item) => (
                        <a
                          key={item.name}
                          href={item.href}
                          className={classNames(
                            item.current ? 'bg-slate-300 text-slate-900' : 'text-slate-600 hover:bg-slate-800 hover:text-slate-200',
                            'group flex items-center px-2 py-2 text-sm font-medium rounded-md'
                          )}
                        >
                          <item.icon
                            className={classNames(
                              item.current ? 'text-slate-500' : 'text-slate-400 group-hover:text-slate-500',
                              'mr-3 flex-shrink-0 h-6 w-6'
                            )}
                            aria-hidden="true"
                          />
                          {item.name}
                        </a>
                      ))}
                    </div>
                    <div className="space-y-1 pt-4">
                      <h3 className="px-3 text-xs font-semibold text-gray-500 uppercase tracking-wider" id="favourites-headline">
                        Favourites
                      </h3>
                      <div className="space-y-1" role="group" aria-labelledby="favourites-headline">
                        {secondaryNavigation.map((item) => (
                          <a
                            key={item.name}
                            href={item.href}
                            className="group flex items-center px-3 py-2 text-sm font-medium text-slate-600 rounded-md hover:text-slate-200 hover:bg-slate-800 transition ease-in-out delay-75 duration-300 hover:-translate-y-1 hover:scale-105"
                          >
                            <span className="truncate">{item.name}</span>
                          </a>
                        ))}
                      </div>
                    </div>
                  </nav>
                </div>
              </div>
            </Transition.Child>
            <div className="flex-shrink-0 w-14">{/* Force sidebar to shrink to fit close icon */}</div>
          </Dialog>
        </Transition.Root>
        {/* End of static sidebar for mobile */}

        {/* Static sidebar for desktop */}
        <div className="hidden md:flex md:w-64 md:flex-col md:fixed md:inset-y-0">
          {/* Sidebar component, swap this element with another sidebar if you like */}
          <div className="flex flex-col flex-grow border-r border-gray-200 pt-5 pb-4 bg-slate-50 overflow-y-auto">
            <div className="flex items-center flex-shrink-0 px-4">
              <span className='inline-block space-x-2'>
                <img
                  className="h-8 w-auto"
                  src="/images/shahpreetk-logo.png"
                  alt="Preet Shah logo"
                />
              </span>
              <span className='inline-block space-x-2 pl-2'>
                <h2>Preet Shah</h2>
              </span>
            </div>
            <div className="mt-5 flex-grow flex flex-col">
              <nav className="flex-1 px-2 space-y-8 bg-slate-50" aria-label="Sidebar">
                <div className="space-y-1">
                  {navigation.map((item) => (
                    <a
                      key={item.name}
                      href={item.href}
                      className={classNames(
                        item.current ? 'bg-slate-300 text-slate-900' : 'text-slate-600 hover:bg-slate-800 hover:text-slate-200',
                        'group flex items-center px-2 py-2 text-sm font-medium rounded-md'
                      )}
                    >
                      <item.icon
                        className={classNames(
                          item.current ? 'text-slate-500' : 'text-slate-400 group-hover:text-slate-500',
                          'mr-3 flex-shrink-0 h-6 w-6'
                        )}
                        aria-hidden="true"
                      />
                      {item.name}
                    </a>
                  ))}
                </div>
                <div className="space-y-1">
                  <h3 className="px-3 text-xs font-semibold text-slate-500 uppercase tracking-wider" id="favourites-headline">
                    Favourites
                  </h3>
                  <div className="space-y-1" role="group" aria-labelledby="favourites-headline">
                    {secondaryNavigation.map((item) => (
                      <a
                        key={item.name}
                        href={item.href}
                        className="group flex items-center px-3 py-2 text-sm font-medium text-slate-600 rounded-md hover:text-slate-200 hover:bg-slate-800 transition ease-in-out delay-75 duration-300 hover:-translate-y-1 hover:scale-105"
                      >
                        <span className="truncate">{item.name}</span>
                      </a>
                    ))}
                  </div>
                </div>
              </nav>
            </div>
          </div>
          {/* End of sidebar */}
        </div>

        <div className="md:pl-64 flex flex-col flex-1">
          <div className="sticky top-0 z-10 md:hidden pl-1 pt-1 sm:pl-3 sm:pt-3">
            <span className='inline-block text-center justify-center space-x-2'>
              <button
                type="button"
                className="ml-2 -mt-0.5 h-12 w-12 inline-flex items-center justify-center rounded-md text-gray-500 hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-slate-500"
                onClick={() => setSidebarOpen(true)}
              >
                <span className="sr-only">Open sidebar</span>
                <MenuIcon className="h-6 w-6" aria-hidden="true" />
              </button>
            </span>
            <span className='inline-block align-top space-x-2 space-y-2'>
              <h1 className='space-x-2 space-y-2 my-3 pl-1 font-semibold'>Menu</h1>
            </span>
          </div>
        </div>
      </div>
    </>
  );
};

export default NavHeader;