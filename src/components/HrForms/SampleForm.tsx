'use client'
import * as Yup from 'yup'
import {
  Section,
  Container,
  PageHeaders,
  Form,
  ButtonGroup,
  Button,
} from '@carletonuniversity/rds'
import { useFormik, FormikHelpers, FieldArray } from 'formik'

// Define the form values type
export interface FormValues {
  inputText: string
  textareafield: string
  radio: string
  checkbox: string[]
  startdate: Date | null
  enddate: Date | null
  select: string
  file: File | null
  list: { field1: string; field2: string }[]
}

interface SampleFormProps {
  initialValues: FormValues
}

const SampleForm = ({ initialValues }: SampleFormProps) => {
  // const initialValues: FormValues = {
  //   inputText: '',
  //   textareafield: '',
  //   radio: '',
  //   checkbox: ['no'],
  //   startdate: null,
  //   enddate: null,
  //   select: '',
  //   file: null,
  //   list: [
  //     {
  //       field1: '',
  //       field2: '',
  //     },
  //   ],
  // }

  const validationSchema = Yup.object().shape({
    inputText: Yup.string().required('The field is required'),
    textareafield: Yup.string().required('The field is required'),
    radio: Yup.string().required('The field is required'),
    checkbox: Yup.array().of(Yup.string()).required('The field is required'),
    select: Yup.string().required('The field is required'),
    startdate: Yup.date().nullable().required('Please enter start date'),
    enddate: Yup.date()
      .nullable()
      .when('startdate', (startdate, schema) => {
        if (startdate) {
          return schema.required('Please enter end date')
        }
        return schema
      }),
    file: Yup.mixed().nullable(),
    list: Yup.array().of(
      Yup.object().shape({
        field1: Yup.string().required('The field is required'),
        field2: Yup.string().required('The field is required'),
      }),
    ),
  })

  const sleep = (ms: number) =>
    new Promise((resolve) => setTimeout(resolve, ms))

  const onSubmit = async (
    values: FormValues,
    actions: FormikHelpers<FormValues>,
  ) => {
    actions.setSubmitting(true)
    console.log(values, 'values')
    await sleep(1000)
    alert(JSON.stringify(values, null, 2))
    actions.setSubmitting(false)
  }

  const formikProps = useFormik({
    initialValues,
    validationSchema,
    onSubmit,
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      formikProps.setFieldValue('file', e.target.files[0])
      console.log(formikProps.values.file)
    }
  }

  return (
    <Section maxWidth="7xl" hasProse>
      <Container maxWidth="7xl">
        <PageHeaders
          as="h1"
          header="Forms Fields with Validation"
          content="The example below demonstrates Forms options and validation."
          size="md"
        />
        <Form formikProps={formikProps}>
          <Form.FieldGroup>
            <Form.FieldControl
              control="text"
              label="Input Text"
              name="inputText"
              required
              helper="Helper Text"
              disabled={formikProps.isSubmitting}
              placeholder="Input Text"
            />
            <Form.FieldControl
              control="textarea"
              label="Text Area"
              name="textareafield"
              required
              helper="Helper Text"
              disabled={formikProps.isSubmitting}
              placeholder="Input your text area here"
            />

            <p>
              <span className="text-cu-red">Condition:</span> End Date will be
              required only after there is a start Date
            </p>

            <Form.FieldGroup cols={2}>
              <Form.FieldControl
                required
                control="datetime"
                label="Start Date"
                name="startdate"
                maxDate={formikProps.values.enddate}
                disabled={formikProps.isSubmitting}
              />
              <Form.FieldControl
                required
                control="datetime"
                label="End Date"
                name="enddate"
                minDate={formikProps.values.startdate}
                disabled={formikProps.isSubmitting}
              />
            </Form.FieldGroup>

            <Form.FieldControl
              control="radio"
              label="Radio Options"
              isInline
              name="radio"
              required
              helper="Helper Text"
              options={[
                { value: '1', label: 'Option 1' },
                { value: '2', label: 'Option 2' },
              ]}
              disabled={formikProps.isSubmitting}
            />
            <Form.FieldControl
              control="select"
              label="Select Component"
              name="select"
              options={[
                { value: '', label: '--' },
                { value: '1', label: 'Option 1' },
                { value: '2', label: 'Option 2' },
              ]}
              required
            />
            <Form.FieldControl
              control="checkbox"
              name="checkbox"
              label="I acknowledge the statements above."
              options={[
                {
                  label: 'Yes',
                  value: 'yes',
                },
                {
                  label: 'No',
                  value: 'no',
                },
              ]}
              required
              isInline
              disabled={formikProps.isSubmitting}
            />

            <Form.FieldControl
              control="fileUpload"
              label="Label"
              name="file"
              required
              helper="Helper Text"
              onChange={handleChange}
              accept="application/pdf,application/vnd.ms-excel"
            />
            <h3> Field Array </h3>
            <FieldArray name="list">
              {({ push, remove }) => (
                <div>
                  {formikProps.values.list.map((item, index) => {
                    const listColumn1 = `list[${index}].field1`
                    const listColumn2 = `list[${index}].field2`

                    return (
                      <div
                        key={index}
                        className="mb-8 md:mb-10 last:mb-0 last:md:mb-0"
                      >
                        <PageHeaders
                          as="h3"
                          header={`List ${index + 1}`}
                          size="xs"
                          noUnderline
                        />

                        <Form.FieldGroup cols={3}>
                          <Form.FieldControl
                            control="text"
                            label="List Field1"
                            name={listColumn1}
                            placeholder="List Field1"
                            disabled={formikProps.isSubmitting}
                          />
                          <Form.FieldControl
                            control="text"
                            label="List Field2"
                            name={listColumn2}
                            placeholder="List Field2"
                            disabled={formikProps.isSubmitting}
                          />
                          <div className="mt-8">
                            <ButtonGroup>
                              <Button
                                color="grey"
                                title="Remove"
                                type="button"
                                onClick={() => remove(index)}
                                disabled={formikProps.isSubmitting}
                              />
                            </ButtonGroup>
                          </div>
                        </Form.FieldGroup>
                      </div>
                    )
                  })}
                  <Button
                    title="Add"
                    type="button"
                    onClick={() => push({ field1: '', field2: '' })}
                    disabled={formikProps.isSubmitting}
                  />
                </div>
              )}
            </FieldArray>
          </Form.FieldGroup>
          <ButtonGroup>
            <Button title="Submit" type="submit" />
            <Button title="Reset" color="dark-grey" type="reset" />
          </ButtonGroup>
        </Form>
      </Container>
    </Section>
  )
}

export default SampleForm
