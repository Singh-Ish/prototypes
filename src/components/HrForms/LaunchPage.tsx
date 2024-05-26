'use client'
import { Section, PageHeaders } from '@carletonuniversity/rds'
import LaunchPageForm from './LaunchPageForm'
import LaunchPageTable from './LaunchPageTable'

const LaunchPage = () => {
  return (
    <>
      <Section maxWidth="7xl">
        <PageHeaders as="h1" header="Welcome, Test User" size="md" />
        <LaunchPageForm />
      </Section>
      <Section maxWidth="7xl">
        <PageHeaders as="h2" header="Requisitions" size="sm" />
        <LaunchPageTable />
      </Section>
    </>
  )
}
export default LaunchPage
