/* eslint-disable no-unused-vars */
import { Field, useField } from 'formik'
import React from 'react'
import { FormField, Label, Select } from 'semantic-ui-react'

function SelectInputBox({ label, ...props }) {
  const [field, meta, helpers] = useField(props)
  return (
    <FormField error={meta.touched && !!meta.error} key={props.idx}>
      <label>{label}</label>
      <Select
        clearable
        value={field.value || null}
        onBlur={() => helpers.setTouched(true)}
        onChange={(e, d) => helpers.setValue(d.value)}
        {...props}
      />
      {meta.touched && meta.error && (
        <Label basic color='red'>
          {meta.error}
        </Label>
      )}
    </FormField>
  )
}

export default SelectInputBox
