import { useField } from 'formik'
import React from 'react'
import { FormField, Label } from 'semantic-ui-react'

function TextInputBox({ label, ...props }) {
  const [field, meta] = useField(props)
  console.log('TextInputBox', field, meta)
  return (
    <FormField error={meta.touched && !!meta.error} key={props.idx}>
      {/* <Field
        type={item.type}
        placeholder={item.placeholder}
        name={item.name}
        value={values[item.name]}
        onChange={handleChange}
      />
      <ErrorMessage
        name={item.name}
        render={error => <Label basic color='red' content={error} />}
      /> */}
      <label>{label}</label>
      <input {...field} {...props}></input>
      {/* {meta.touched && meta.error && (
        <Label basic color='red'>
          {meta.error}
        </Label>
      )} */}
    </FormField>
  )
}

export default TextInputBox
