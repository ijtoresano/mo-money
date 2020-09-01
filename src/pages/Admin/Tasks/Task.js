import EditDocumentActivity from 'rmw-shell/lib/containers/Activities/EditDocumentActivity'
import Form from '../../../components/Forms/Admin/Task'
import React from 'react'
import { injectIntl } from 'react-intl'
import PropTypes from 'prop-types'

const name = 'task'
const path = 'tasks'

const Edit = props => {
  const { intl } = props
  const validate = values => {
    const errors = {}

    errors.name = !values.name ? intl.formatMessage({ id: 'error_required_field' }) : ''
    errors.full_name = !values.full_name ? intl.formatMessage({ id: 'error_required_field' }) : ''
    errors.vat = !values.vat ? intl.formatMessage({ id: 'error_required_field' }) : ''

    return errors
  }

  return (
    <EditDocumentActivity
      name={name}
      path={path}
      fireFormProps={{
        validate
      }}
      isGranted={false}
    >
      <Form {...props} />
    </EditDocumentActivity>
  )
}

Edit.propTypes = {
  intl: PropTypes.func.isRequired,
}

export default injectIntl(Edit)
