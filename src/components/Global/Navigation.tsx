'use client'
import React, { useCallback, useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import {
  Disclosure,
  DisclosureButton,
  Menu,
  MenuButton,
  Transition,
  MenuItems,
  MenuItem,
  DisclosurePanel,
  Popover,
  PopoverButton,
  PopoverPanel,
} from '@headlessui/react'
import {
  XMarkIcon,
  Bars3Icon,
  BellIcon,
  ChevronDownIcon,
} from '@heroicons/react/16/solid'
import Image from 'next/image'
import { PhoneIcon, PlayCircleIcon } from '@heroicons/react/20/solid'

import {
  ArrowPathIcon,
  ChartPieIcon,
  CursorArrowRaysIcon,
  FingerPrintIcon,
  SquaresPlusIcon,
} from '@heroicons/react/24/outline'

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(' ')
}

export default function Navigation() {
  const pathname = usePathname()

  const [, setOpen] = useState(false)

  const callback = useCallback(
    (itemOpen: boolean) => {
      setOpen(itemOpen)
    },
    [setOpen],
  )

  const Title =
    pathname === '/'
      ? 'Prototype'
      : pathname.startsWith('/events')
        ? 'Prototype - Events'
        : ''

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
  ]

  // const NavDataSingle = [
  //   {
  //     href: '/events',
  //     title: 'Events',
  //     // submenu: [
  //     //   {
  //     //     href: '/events/homepage-one',
  //     //     title: 'Events Homepage',
  //     //   },
  //     //   {
  //     //     href: '#',
  //     //     title: 'Graduate Programs',
  //     //   },
  //     //   {
  //     //     href: '#',
  //     //     title: 'Executive Education',
  //   },
  // ]

  // const EventSingle = [
  //   {
  //     href: '/events',
  //     title: 'Events Home',
  //   },
  //   {
  //     href: '/forms',
  //     title: 'Forms',
  //   },
  //   {
  //     href: '#',
  //     title: 'Single Event Page',
  //     submenu: [
  //       {
  //         href: '/events/single-cutheme',
  //         title: 'Single Cutheme Style',
  //       },
  //       {
  //         href: '/events/single-image',
  //         title: 'Single Page Image Banner',
  //       },
  //       {
  //         href: '/events/single-light',
  //         title: 'Single Page without Image Banner',
  //       },
  //     ],
  //   },
  // ]

  return (
    <>
      <Disclosure as="nav" className="bg-white shadow">
        {({ open }) => (
          <>
            <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
              <div className="relative flex h-16 justify-between">
                <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                  {/* Mobile menu button */}
                  <DisclosureButton className="relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
                    <span className="absolute -inset-0.5" />
                    <span className="sr-only">Open main menu</span>
                    {open ? (
                      <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                    ) : (
                      <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                    )}
                  </DisclosureButton>
                </div>
                <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
                  <div className="flex flex-shrink-0 items-center">
                    <Link href="/" className="cu-topbar--logo">
                      Ish - Prototype - logo
                    </Link>
                  </div>
                  <div className="hidden sm:ml-6 sm:flex sm:space-x-8">
                    {NavItems.map((item) => {
                      return item.submenu && item.submenu.length > 0 ? (
                        <>
                          <Popover
                            className="relative items-center z-100"
                            key={item.title}
                          >
                            <PopoverButton
                              className={classNames(
                                pathname === item.href
                                  ? 'border-cu-red text-gray-900'
                                  : 'border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700',
                                'inline-flex items-center border-b-2 px-1 pt-1 text-sm font-medium',
                              )}
                            >
                              <span>{item.title}</span>
                              <ChevronDownIcon
                                className="h-5 w-5"
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
                              <PopoverPanel className="absolute left-1/2 z-10 mt-5 flex w-screen max-w-max -translate-x-1/2 px-4">
                                <div className="w-screen max-w-xs flex-auto overflow-hidden rounded-3xl bg-white text-sm leading-6 shadow-lg ring-1 ring-gray-900/5">
                                  <div className="p-4">
                                    {item.submenu.map((item) => (
                                      <div
                                        key={item.title}
                                        className="group relative flex gap-x-6 rounded-lg p-4 hover:bg-gray-50"
                                      >
                                        <div>
                                          <Link
                                            href={item.href}
                                            className="font-semibold text-gray-900"
                                          >
                                            {item.title}
                                            <span className="absolute inset-0" />
                                          </Link>
                                        </div>
                                      </div>
                                    ))}
                                  </div>
                                </div>
                              </PopoverPanel>
                            </Transition>
                          </Popover>
                        </>
                      ) : (
                        <Link
                          key={item.href}
                          href={item.href}
                          className={classNames(
                            pathname === item.href
                              ? 'border-cu-red text-gray-900'
                              : 'border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700',
                            'inline-flex items-center border-b-2 px-1 pt-1 text-sm font-medium',
                          )}
                        >
                          {item.title}
                        </Link>
                      )
                    })}
                  </div>
                </div>
                <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                  <button
                    type="button"
                    className="relative rounded-full bg-white p-1 text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                  >
                    <span className="absolute -inset-1.5" />
                    <span className="sr-only">View notifications</span>
                    <BellIcon className="h-6 w-6" aria-hidden="true" />
                  </button>

                  {/* Profile dropdown */}
                  <Menu as="div" className="relative ml-3">
                    <div>
                      <MenuButton className="relative flex rounded-full bg-white text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">
                        <span className="absolute -inset-1.5" />
                        <span className="sr-only">Open user menu</span>
                        <Image
                          className="h-8 w-8 rounded-full"
                          src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                          alt=""
                          width={32} // h-8 in tailwind is 32px
                          height={32} // w-8 in tailwind is 32px
                          style={{ borderRadius: '50%' }}
                        />
                      </MenuButton>
                    </div>
                    <Transition
                      enter="transition ease-out duration-200"
                      enterFrom="transform opacity-0 scale-95"
                      enterTo="transform opacity-100 scale-100"
                      leave="transition ease-in duration-75"
                      leaveFrom="transform opacity-100 scale-100"
                      leaveTo="transform opacity-0 scale-95"
                    >
                      <MenuItems className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                        <MenuItem>
                          {({ active }) => (
                            <a
                              href="#"
                              className={classNames(
                                active ? 'bg-gray-100' : '',
                                'block px-4 py-2 text-sm text-gray-700',
                              )}
                            >
                              Your Profile
                            </a>
                          )}
                        </MenuItem>
                        <MenuItem>
                          {({ active }) => (
                            <a
                              href="#"
                              className={classNames(
                                active ? 'bg-gray-100' : '',
                                'block px-4 py-2 text-sm text-gray-700',
                              )}
                            >
                              Settings
                            </a>
                          )}
                        </MenuItem>
                        <MenuItem>
                          {({ active }) => (
                            <a
                              href="#"
                              className={classNames(
                                active ? 'bg-gray-100' : '',
                                'block px-4 py-2 text-sm text-gray-700',
                              )}
                            >
                              Sign out
                            </a>
                          )}
                        </MenuItem>
                      </MenuItems>
                    </Transition>
                  </Menu>
                </div>
              </div>
            </div>

            <DisclosurePanel className="sm:hidden">
              <div className="space-y-1 pb-4 pt-2">
                {NavItems.map((item) => (
                  <DisclosureButton
                    key={item.href}
                    as={Link}
                    href={item.href}
                    className={classNames(
                      pathname === item.href
                        ? 'bg-indigo-50 border-cu-red text-indigo-700'
                        : 'border-transparent text-gray-500 hover:border-gray-300 hover:bg-gray-50 hover:text-gray-700',
                      'block border-l-4 py-2 pl-3 pr-4 text-base font-medium',
                    )}
                  >
                    {item.title}
                  </DisclosureButton>
                ))}
              </div>
            </DisclosurePanel>
          </>
        )}
      </Disclosure>
    </>
  )
}
