'use client'
import React, { useCallback, useState } from 'react'
import { LinkProvider, Nav, Search } from '@carletonuniversity/rds'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { SearchData } from '@/data/SearchData'

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
        ? ' Prototype - Events '
        : ''

  const NavDataSingle = [
    {
      href: '/events',
      title: 'Events',
      // submenu: [
      //   {
      //     href: '/events/homepage-one',
      //     title: 'Events Homepage',
      //   },
      //   {
      //     href: '#',
      //     title: 'Graduate Programs',
      //   },
      //   {
      //     href: '#',
      //     title: 'Executive Education',
    },
  ]

  const EventSingle = [
    {
      href: '/events',
      title: 'Events Home',
    },
    {
      href: '/events/homepage-one',
      title: 'Events Homepage',
    },
    {
      href: '#',
      title: 'Single Event Page',
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
  ]

  return (
    <>
      {/* <div className="flex gap-7 mx-auto items-center  max-w-7xl h-16 mt-6 px-2">
        <div className="flex float-left">
          <Link href="/" className="cu-topbar--logo">
            Ish - Prototype - logo
          </Link>
        </div>
        <Link href="/" className={`${pathname === '/' ? 'text-cu-red' : ''}`}>
          Home
        </Link>
        <Link
          href="/events"
          className={`${pathname === '/newpayroll' ? 'text-cu-red' : ''}`}
        >
          Events
        </Link>
      </div> */}

      <LinkProvider type={Link}>
        <Nav navType="primary">
          <Nav.Logo title={` ${Title} `} link="/" />
          <Nav.Primary>
            <Nav.Menu
              menu={
                pathname === '/'
                  ? NavDataSingle
                  : pathname.startsWith('/events')
                    ? EventSingle
                    : NavDataSingle
              }
            />
            <Nav.Aside LoggedOutUser={true}>
              {/* <Search sourceData={SearchData} callback={callback} /> */}
            </Nav.Aside>
          </Nav.Primary>
        </Nav>
      </LinkProvider>
    </>
  )
}
