'use client'
import React from 'react'
import { Main, Section } from '@carletonuniversity/rds'

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Main>
        <Section hasProse>{children}</Section>
      </Main>
    </>
  )
}
