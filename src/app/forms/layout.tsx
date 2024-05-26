'use client'
import React from 'react'
import { Main, Section } from '@carletonuniversity/rds'

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Main>
        <Section maxWidth="7xl" hasProse>
          {children}
        </Section>
      </Main>
    </>
  )
}
