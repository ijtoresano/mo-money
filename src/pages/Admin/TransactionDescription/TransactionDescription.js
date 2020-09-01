
import EditDocumentActivity from 'rmw-shell/lib/containers/Activities/EditDocumentActivity'
import Form from '../../../components/Forms/Admin/TransactionDescription'
import React from 'react'
import { injectIntl } from 'react-intl'
import PropTypes from 'prop-types'

const name = 'transaction_description'
const path = 'transaction_descriptions'

const Edit = props => {
  const { intl } = props
  const validate = values => {
    const errors = {}

    errors.user_description = !values.user_description ? intl.formatMessage({ id: 'error_required_field' }) : ''
    errors.native_description = !values.native_description ? intl.formatMessage({ id: 'error_required_field' }) : ''
    errors.uid = !values.uid ? intl.formatMessage({ id: 'error_required_field' }) : ''
    errors.count = !values.count ? intl.formatMessage({ id: 'error_required_field' }) : ''
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
