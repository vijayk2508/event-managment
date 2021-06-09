/* eslint-disable no-unused-vars */
import { Field, useField } from 'formik'
import React from 'react'
import { FormField, Label } from 'semantic-ui-react'

function TextAreaBox({ label, ...props }) {
  const [field, meta] = useField(props)
  return (
    <FormField error={meta.touched && !!meta.error} key={props.idx}>
      <label>{label}</label>
      <textarea {...field} {...props} />
      {meta.touched && meta.error && (
        <Label basic color='red'>
          {meta.error}
        </Label>
      )}
    </FormField>
  )
}

export default TextAreaBox
