import PropTypes from 'prop-types'
import React, { Component } from 'react'
import TextField from 'rmw-shell/lib/components/ReduxFormFields/TextField'
import SelectField from '../../../lib/Forms/SelectField'
import Checkbox from 'rmw-shell/lib/components/ReduxFormFields/Checkbox'
import { Field, reduxForm } from 'redux-form'
import { connect } from 'react-redux'
import { injectIntl } from 'react-intl'
import { setDialogIsOpen } from 'rmw-shell/lib/store/dialogs/actions'
import { withRouter } from 'react-router-dom'
import { withTheme } from '@material-ui/core/styles'
import MenuItem from '@material-ui/core/MenuItem'


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
              name="name"
              disabled={!initialized}
              component={TextField}
              placeholder={intl.formatMessage({ id: 'name_hint' })}
              label={intl.formatMessage({ id: 'name_label' })}
            />
          </div>
          <div>
            <Field
              name="public"
              disabled={!initialized}
              component={Checkbox}
              placeholder={intl.formatMessage({ id: 'public_hint' })}
              label={intl.formatMessage({ id: 'public_label' })}
            />
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
  intl: PropTypes.object.isRequired,
  initialized: PropTypes.bool.isRequired,
  setDialogIsOpen: PropTypes.func.isRequired,
  dialogs: PropTypes.object.isRequired,
  match: PropTypes.object.isRequired,
  users: PropTypes.object.isRequired,
}


const mapStateToProps = state => {
  const { intl, dialogs, lists } = state

  return {
    intl,
    dialogs,
    users: lists.users,

  }
}

export default connect(
  mapStateToProps,
  { setDialogIsOpen }
)(injectIntl(withRouter(withTheme(reduxForm({ form: 'category' })(Form)))))
