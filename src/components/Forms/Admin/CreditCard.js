import PropTypes from 'prop-types'
import React, { Component } from 'react'
import TextField from 'rmw-shell/lib/components/ReduxFormFields/TextField'
import SelectField from '../../../lib/Forms/SelectField'
import { Field, reduxForm, formValueSelector } from 'redux-form'
import { connect } from 'react-redux'
import { injectIntl } from 'react-intl'
import { setDialogIsOpen } from 'rmw-shell/lib/store/dialogs/actions'
import { withRouter } from 'react-router-dom'
import { withTheme } from '@material-ui/core/styles'
import MenuItem from '@material-ui/core/MenuItem'
import banks from '../../../lib/Forms/banks.json' 
import networks from '../../../lib/Forms/networks.json'

class Form extends Component {
  render() {
    const { handleSubmit, intl, initialized, users } = this.props

    return (
      <form
        onSubmit={handleSubmit}
        style={{
          height: '100%',
          width: '100%',
          alignItems: 'strech',
          display: 'flex',
          flexWrap: 'wrap',
          justifyContent: 'center'
        }}
      >
        <button type="submit" style={{ display: 'none' }} />

        <div style={{ margin: 15, display: 'flex', flexDirection: 'column' }}>
          <div>
            <Field
              name="bank"
              styles={{FormControl: {width: '100%'}} }
              disabled={!initialized}
              component={SelectField}
              placeholder={intl.formatMessage({ id: 'bank_hint' })}
              label={intl.formatMessage({ id: 'bank_label' })}>
              <MenuItem value=''></MenuItem> 
              {banks.map((b) => b.supported ? <MenuItem key={b.SBIFcode} value={b.name}>{b.name}</MenuItem> : null)} 
            </Field>
          </div>

          <div>
            <Field
              name="name"
              disabled={!initialized}
              component={TextField}
              placeholder={intl.formatMessage({ id: 'name_hint' })}
              label={intl.formatMessage({ id: 'name_label' })}
            />
          </div>

          <div>
            <Field
              name="network"
              styles={{FormControl: {width: '100%'}} }
              disabled={!initialized}
              component={SelectField}
              placeholder={intl.formatMessage({ id: 'network_hint' })}
              label={intl.formatMessage({ id: 'network_label' })}>
              <MenuItem value=''></MenuItem> 
              {networks.map((n) => <MenuItem key={n.name} value={n.name}>{n.name}</MenuItem>)} 
            </Field>
          </div>
          <div>
            <Field
              name="uid"
              styles={{FormControl: {width: '100%'}} }
              disabled={!initialized}
              component={SelectField}
              placeholder={intl.formatMessage({ id: 'user_hint' })}
              label={intl.formatMessage({ id: 'user_label' })}>
              <MenuItem value=''></MenuItem> 
              {users.map((u) =>  <MenuItem key={u.key} value={u.key}>{u.val.displayName}</MenuItem>)} 
            </Field>
          </div>
        </div>
      </form>
    )
  }
}

Form.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
  intl: PropTypes.func.isRequired,
  initialized: PropTypes.bool.isRequired,
  setDialogIsOpen: PropTypes.func.isRequired,
  dialogs: PropTypes.object.isRequired,
  match: PropTypes.object.isRequired,
  users: PropTypes.object.isRequired,
}

const selector = formValueSelector('credit_card')

const mapStateToProps = state => {
  const { intl, vehicleTypes, lists, dialogs } = state

  return {
    intl,
    vehicleTypes,
    users: lists.users,
    dialogs,
    photoURL: selector(state, 'photoURL')
  }
}

export default connect(
  mapStateToProps,
  { setDialogIsOpen }
)(injectIntl(withRouter(withTheme(reduxForm({ form: 'credit_card' })(Form)))))
