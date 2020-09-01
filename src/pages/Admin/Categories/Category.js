import EditDocumentActivity from 'rmw-shell/lib/containers/Activities/EditDocumentActivity'
import Form from '../../../components/Forms/Admin/Category'
import React from 'react'
import { injectIntl } from 'react-intl'
import PropTypes from 'prop-types'

const name = 'category'
const path = 'categories'

const Edit = props => {
  const { intl } = props
  const validate = values => {
    const errors = {}

    errors.name = !values.name ? intl.formatMessage({ id: 'error_required_field' }) : ''
    errors.public = !values.public ? intl.formatMessage({ id: 'error_required_field' }) : ''
    errors.uid = values.public === false && !values.uid ? intl.formatMessage({ id: 'error_required_field' }) : ''

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
