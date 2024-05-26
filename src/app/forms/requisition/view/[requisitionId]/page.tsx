'use server'

import SingleRequisition from '@/components/HrForms/SingleRequisition'

export default async function Page({
  params,
}: {
  params: { requisitionId: number }
}) {
  return <SingleRequisition />
}
