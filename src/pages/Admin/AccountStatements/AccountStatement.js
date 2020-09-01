import EditDocumentActivity from 'rmw-shell/lib/containers/Activities/EditDocumentActivity'
import Form from '../../../components/Forms/Admin/AccountStatement'
import React from 'react'
import { injectIntl } from 'react-intl'
import PropTypes from 'prop-types'

const name = 'account_statement'


const Edit = props => {
  const { intl, history } = props
  const ccid = history.location.state.ccid
  const path = 'credit_cards/'+ccid+'/account_statements'
  const validate = values => {
    const errors = {date: {}}
    const date = values.date
    errors.date.month = !date || !date.month ? intl.formatMessage({ id: 'error_required_field' }) : (date.month < 1 || date.month > 12) ? intl.formatMessage({ id: 'error_invalid_value' }) : ''
    errors.date.year = !date || !date.year ? intl.formatMessage({ id: 'error_required_field' }) : date.year < 2000 ? intl.formatMessage({ id: 'error_invalid_value' }) : ''
    errors.currency = !values.currency ? intl.formatMessage({ id: 'error_required_field' }) : ''
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
  intl: PropTypes.object.isRequired,
  history: PropTypes.object.isRequired,
}

export default injectIntl(Edit)
