import EditDocumentActivity from 'rmw-shell/lib/containers/Activities/EditDocumentActivity'
import Form from '../../../components/Forms/Admin/CreditCard'
import React from 'react'
import { injectIntl } from 'react-intl'
import PropTypes from 'prop-types'

const name = 'credit_card'
const path = 'credit_cards'

const Edit = props => {
  const { intl } = props
  const validate = values => {
    const errors = {}

    errors.name = !values.name ? intl.formatMessage({ id: 'error_required_field' }) : ''
    errors.bank = !values.bank ? intl.formatMessage({ id: 'error_required_field' }) : ''
    errors.network = !values.network ? intl.formatMessage({ id: 'error_required_field' }) : ''
    errors.uid = !values.uid ? intl.formatMessage({ id: 'error_required_field' }) : ''
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
