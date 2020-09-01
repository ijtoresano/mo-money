import React from 'react'
import FormControl from '@material-ui/core/FormControl'
import Checkbox from '@material-ui/core/Checkbox'
import FormControlLabel from '@material-ui/core/FormControlLabel'
import FormHelperText from '@material-ui/core/FormHelperText'
import PropTypes from 'prop-types'

const renderFromHelper = ({ touched, error }) => {
  if (!(touched && error)) {
    return
  } else {
    return <FormHelperText>{touched && error}</FormHelperText>
  }
}

export const CheckboxLabeled = ({input, label, meta: {touched, error}, styles, ...custom}) => {
  const safeStyles = styles ? styles : {}
  return (
    <FormControl style={safeStyles.FormControl} error={touched && error}>
      <FormControlLabel {...input} {...custom} 
        control={<Checkbox checked={!!input.value} {...input} {...custom} />} 
        label={label} />
      {renderFromHelper({ touched, error })}
    </FormControl>
  )
}

CheckboxLabeled.propTypes = {
  input: PropTypes.object.isRequired,
  label: PropTypes.string,
  meta: PropTypes.object.isRequired,
  styles: PropTypes.object,
}


export default CheckboxLabeled
