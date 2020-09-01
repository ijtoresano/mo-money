import EditDocumentActivity from 'rmw-shell/lib/containers/Activities/EditDocumentActivity'
import Form from '../../../components/Forms/Admin/Transaction'
import React from 'react'
import { injectIntl } from 'react-intl'
import PropTypes from 'prop-types'

const name = 'transaction'


const Edit = props => {
  const { intl, history } = props
  const ccid = history.location.state.ccid
  const asid = history.location.state.asid
  const path = 'credit_cards/'+ccid+'/account_statements/'+asid+'/transactions'
  const validate = values => {
    const errors = {date: {}}
    errors.amount = !values.amount ? intl.formatMessage({ id: 'error_required_field' }) : ''
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
