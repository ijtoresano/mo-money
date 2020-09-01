import React from 'react'
import FormControl from '@material-ui/core/FormControl'
import InputLabel from '@material-ui/core/InputLabel'
import Select from '@material-ui/core/Select'
import FormHelperText from '@material-ui/core/FormHelperText'
import PropTypes from 'prop-types'

const renderFromHelper = ({ touched, error }) => {
  if (!(touched && error)) {
    return
  } else {
    return <FormHelperText>{touched && error}</FormHelperText>
  }
}

export const SelectField = ({input, label, meta: {touched, error}, children, styles, ...custom}) => {
  const safeStyles = styles ? styles : {}
  return (
    <FormControl style={safeStyles.FormControl} error={touched && error}>
      <InputLabel htmlFor="{label}-native-simple">
        {label}
      </InputLabel>
      <Select
        {...input}
        {...custom}
      >
        {children}
      </Select>
      {renderFromHelper({ touched, error })}
    </FormControl>
  )
}

SelectField.propTypes = {
  input: PropTypes.object.isRequired,
  label: PropTypes.string,
  meta: PropTypes.object.isRequired,
  styles: PropTypes.object,
  children: PropTypes.isRequired,
}

export default SelectField
