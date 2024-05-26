import SampleForm, { FormValues } from '@/components/HrForms/SampleForm'

export default async function Page({
  params,
}: {
  params: { requisitionId: number }
}) {
  const initialValues: FormValues = {
    inputText: 'sample Input ',
    textareafield: 'The Text arear for inputing the values ',
    radio: '2',
    checkbox: ['yes'],
    startdate: new Date('2024-05-26T04:00:00.000Z'), //'2024-05-26T04:00:00.000Z',
    enddate: new Date('2024-07-12T04:00:00.000Z'), //'2024-07-12T04:00:00.000Z',
    select: '1',
    file: null,
    list: [
      {
        field1: 'List 1',
        field2: 'Field',
      },
    ],
  }

  return <SampleForm initialValues={initialValues} />
}
