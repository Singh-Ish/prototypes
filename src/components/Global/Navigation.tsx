'use client'
import React from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import {
  Popover,
  PopoverButton,
  PopoverPanel,
  Transition,
} from '@headlessui/react'
import { ChevronDownIcon } from '@heroicons/react/20/solid'

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(' ')
}

const NavItems = [
  { href: '/', title: 'Prototypes' },
  {
    href: '/events',
    title: 'Events',
    submenu: [
      {
        href: '/events/single-cutheme',
        title: 'Single Cutheme Style',
      },
      {
        href: '/events/single-image',
        title: 'Single Page Image Banner',
      },
      {
        href: '/events/single-light',
        title: 'Single Page without Image Banner',
      },
    ],
  },
  { href: '/forms', title: 'Forms' },
  { href: '/about', title: 'About Me' },
]

export default function Navigation() {
  const pathname = usePathname()

  return (
    <nav className="bg-white shadow">
      <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
        <div className="relative flex h-16 justify-between">
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <Link href="/" className="text-lg font-semibold">
                Logo
              </Link>
            </div>
            <div className="hidden sm:ml-6 sm:flex sm:space-x-8">
              {NavItems.map((item) =>
                item.submenu ? (
                  <Popover key={item.title} className="relative">
                    <PopoverButton
                      className={classNames(
                        pathname.startsWith(item.href)
                          ? 'border-cu-red text-gray-900'
                          : 'border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700',
                        'inline-flex items-center border-b-2 px-1 pt-1 pb-2 text-sm font-medium',
                      )}
                    >
                      <span className="mb-2">{item.title}</span>
                      <ChevronDownIcon
                        className="ml-1 h-5 w-5 mb-2"
                        aria-hidden="true"
                      />
                    </PopoverButton>

                    <Transition
                      enter="transition ease-out duration-200"
                      enterFrom="opacity-0 translate-y-1"
                      enterTo="opacity-100 translate-y-0"
                      leave="transition ease-in duration-150"
                      leaveFrom="opacity-100 translate-y-0"
                      leaveTo="opacity-0 translate-y-1"
                    >
                      <PopoverPanel className="absolute z-10 mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5">
                        <div className="py-1">
                          {item.submenu.map((subItem) => (
                            <Link
                              key={subItem.title}
                              href={subItem.href}
                              className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                            >
                              {subItem.title}
                            </Link>
                          ))}
                        </div>
                      </PopoverPanel>
                    </Transition>
                  </Popover>
                ) : (
                  <Link
                    key={item.href}
                    href={item.href}
                    className={classNames(
                      pathname === item.href
                        ? 'border-cu-red text-gray-900'
                        : 'border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700',
                      'inline-flex items-center border-b-2 px-1 pt-1 pb-2 text-sm font-medium',
                    )}
                  >
                    <span className="mb-2">{item.title}</span>
                  </Link>
                ),
              )}
            </div>
          </div>
        </div>
      </div>
    </nav>
  )
}
