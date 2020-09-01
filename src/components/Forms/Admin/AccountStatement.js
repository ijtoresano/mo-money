import PropTypes from 'prop-types'
import React, { Component } from 'react'
import TextField from 'rmw-shell/lib/components/ReduxFormFields/TextField'
import SelectField from '../../../lib/Forms/SelectField'
import { Field, reduxForm } from 'redux-form'
import { connect } from 'react-redux'
import { injectIntl } from 'react-intl'
import { setDialogIsOpen } from 'rmw-shell/lib/store/dialogs/actions'
import { withRouter } from 'react-router-dom'
import { withTheme } from '@material-ui/core/styles'
import MenuItem from '@material-ui/core/MenuItem'
import currencies from '../../../lib/Forms/currencies.json'

class Form extends Component {
  render() {
    const { handleSubmit, intl, initialized } = this.props

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
              name="date.month"
              disabled={!initialized}
              type="number"
              component={TextField}
              placeholder={intl.formatMessage({ id: 'month_hint' })}
              label={intl.formatMessage({ id: 'month_label' })}
            />
          </div>
          <div>
            <Field
              name="date.year"
              type="number"
              disabled={!initialized}
              component={TextField}
              placeholder={intl.formatMessage({ id: 'year_hint' })}
              label={intl.formatMessage({ id: 'year_label' })}
            />
          </div>
          <div>
            <Field
              name="currency"
              styles={{FormControl: {width: '100%'}} }
              disabled={!initialized}
              component={SelectField}
              placeholder={intl.formatMessage({ id: 'currency_hint' })}
              label={intl.formatMessage({ id: 'currency_label' })}>
              <MenuItem value=''></MenuItem> 
              {currencies.map((c) => <MenuItem key={c.code} value={c.code}>{intl.formatMessage({ id: c.name })}</MenuItem>)} 
            </Field>
          </div>
          <div>
          </div>
        </div>
      </form>
    )
  }
}

Form.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
  intl: PropTypes.object.isRequired,
  initialized: PropTypes.bool.isRequired,
  setDialogIsOpen: PropTypes.func.isRequired,
  dialogs: PropTypes.object.isRequired,
  match: PropTypes.object.isRequired,
}


const mapStateToProps = state => {
  const { intl, dialogs } = state

  return {
    intl,
    dialogs,
  }
}

export default connect(
  mapStateToProps,
  { setDialogIsOpen }
)(injectIntl(withRouter(withTheme(reduxForm({ form: 'account_statement' })(Form)))))
