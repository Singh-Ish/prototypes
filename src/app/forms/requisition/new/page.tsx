import SampleForm, { FormValues } from '@/components/HrForms/SampleForm'

const Page = async () => {
  //initial values

  const initialValues: FormValues = {
    inputText: '',
    textareafield: '',
    radio: '',
    checkbox: ['no'],
    startdate: null,
    enddate: null,
    select: '',
    file: null,
    list: [
      {
        field1: '',
        field2: '',
      },
    ],
  }

  // pass the initial Values
  return <SampleForm initialValues={initialValues} />
}

export default Page
