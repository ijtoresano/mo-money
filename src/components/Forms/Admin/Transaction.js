import PropTypes from 'prop-types'
import React, { Component } from 'react'
import TextField from 'rmw-shell/lib/components/ReduxFormFields/TextField'
import CheckboxLabeled from '../../../lib/Forms/CheckBoxLabeled'
import { Field, reduxForm } from 'redux-form'
import { connect } from 'react-redux'
import { injectIntl } from 'react-intl'
import { setDialogIsOpen } from 'rmw-shell/lib/store/dialogs/actions'
import { withRouter } from 'react-router-dom'
import { withTheme } from '@material-ui/core/styles'

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
              name="amount"
              disabled={!initialized}
              type="number"
              component={TextField}
              placeholder={intl.formatMessage({ id: 'amount_hint' })}
              label={intl.formatMessage({ id: 'amount_label' })}
            />
          </div>
          <div>
            <Field
              name="audited"
              disabled={!initialized}
              component={CheckboxLabeled}
              placeholder={intl.formatMessage({ id: 'audited_hint' })}
              label={intl.formatMessage({ id: 'audited_label' })}
            />
          </div>
          <div>
            <Field
              name="avoidable"
              disabled={!initialized}
              component={CheckboxLabeled}
              placeholder={intl.formatMessage({ id: 'avoidable_hint' })}
              label={intl.formatMessage({ id: 'avoidable_label' })}
            />
          </div>
          <div>
            <Field
              name="premium"
              disabled={!initialized}
              component={CheckboxLabeled}
              placeholder={intl.formatMessage({ id: 'premium_hint' })}
              label={intl.formatMessage({ id: 'premium_label' })}
            />
          </div>
          <div>
            <Field
              name="statement_description"
              disabled={!initialized}
              component={TextField}
              placeholder={intl.formatMessage({ id: 'statement_description_hint' })}
              label={intl.formatMessage({ id: 'statement_description_label' })}
            />
          </div>
          <div>
            <Field
              name="user_description"
              disabled={!initialized}
              component={TextField}
              placeholder={intl.formatMessage({ id: 'user_description_hint' })}
              label={intl.formatMessage({ id: 'user_description_label' })}
            />
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
)(injectIntl(withRouter(withTheme(reduxForm({ form: 'transaction' })(Form)))))
