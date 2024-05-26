import { Form, ButtonGroup, Button } from '@carletonuniversity/rds'
import { FormikHelpers, useFormik } from 'formik'
import React, { MouseEventHandler } from 'react'
import * as Yup from 'yup'

const status = [
  { value: 'A', label: 'All' },
  { value: 'M', label: 'My Pending' },
  { value: 'S', label: 'Saved' },
  { value: 'P', label: 'In Progress' },
  { value: 'F', label: 'Financial Approval Complete' },
  { value: 'C', label: 'Complete' },
  { value: 'X', label: 'Cancelled' },
  { value: 'D', label: 'Declined' },
  { value: 'Z', label: 'Processed by Payroll' },
  { value: 'N', label: 'Returned for Correction' },
  { value: 'T', label: 'Terminated' },
]

const LaunchPageForm = () => {
  type IInput = {
    select: string
    startdate: Date | null
    enddate: Date | null
  }

  const InputInitialValues: IInput = {
    select: '',
    startdate: null,
    enddate: null,
  }

  const InputValidationSchema = Yup.object().shape({
    select: Yup.string().required('The field is required'),
    startdate: Yup.date().nullable(),
    enddate: Yup.date()
      .nullable()
      .min(Yup.ref('startdate'), 'End date must be after start date'),
  })

  const onSubmit = async (values: IInput, actions: FormikHelpers<IInput>) => {
    actions.setSubmitting(true)
    alert(JSON.stringify(values, null, 2))
    actions.setSubmitting(false)
  }

  const onReset: MouseEventHandler<HTMLButtonElement> = () => {
    formikProps.resetForm()
  }

  const formikProps = useFormik<IInput>({
    initialValues: InputInitialValues,
    validationSchema: InputValidationSchema,
    onSubmit,
  })

  return (
    <Form formikProps={formikProps}>
      <Form.FieldGroup cols={3}>
        <Form.FieldControl
          control="select"
          label="Status"
          name="select"
          options={status}
          required
        />
        <Form.FieldControl
          control="datetime"
          label="Start Date"
          name="startdate"
          maxDate={formikProps.values.enddate}
          disabled={formikProps.isSubmitting}
        />
        <Form.FieldControl
          control="datetime"
          label="End Date"
          name="enddate"
          minDate={formikProps.values.startdate}
          disabled={formikProps.isSubmitting}
        />
      </Form.FieldGroup>
      <ButtonGroup>
        <Button title="Submit" type="submit" />
        <Button title="Reset" type="reset" color="grey" onClick={onReset} />
      </ButtonGroup>
    </Form>
  )
}

export default LaunchPageForm
