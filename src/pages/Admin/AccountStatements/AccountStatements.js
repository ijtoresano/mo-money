/* eslint-disable linebreak-style */
import AltIconAvatar from 'rmw-shell/lib/components/AltIconAvatar'
import EditIcon from '@material-ui/icons/Edit'
import ReceiptIcon from '@material-ui/icons/Receipt'
import Divider from '@material-ui/core/Divider'
import CollectionActivity from 'rmw-shell/lib/containers/Activities/CollectionActivity'
import ListItem from '@material-ui/core/ListItem'
import ListItemText from '@material-ui/core/ListItemText'
import React, { Component } from 'react'
import { compose } from 'redux'
import { injectIntl } from 'react-intl'
import { withRouter } from 'react-router-dom'
import { withTheme } from '@material-ui/core/styles'
import PropTypes from 'prop-types'

class AccountStatements extends Component {

  

  renderItem = (key, val) => {
    const { history } = this.props

    const ccid = history.location.state.ccid

    const { date = '', currency = '' } = val

    return (
      <div key={key}>
        <ListItem
          key={key}
        >
          <AltIconAvatar onClick={() => history.push('/admin/transactions', {ccid: ccid, asid: key})} alt="accountStatements" src={val.photoURL} icon={<ReceiptIcon />} />
          <ListItemText
            onClick={() => history.push('/admin/transactions', {ccid: ccid, asid: key})}
            primary={currency}
            style={{ maxWidth: 250 }}
          />
          <ListItemText
            onClick={() => history.push('/admin/transactions', {ccid: ccid, asid: key})}
            primary={date.month}
            secondary={date.year}
            style={{ maxWidth: 150 }}
          />
          <EditIcon onClick={() => history.push(`/admin/account_statements/edit/${key}`, { ccid: ccid })}/>
        </ListItem>
        <Divider variant="inset" />
      </div>
    )
  }

  render() {

    const { history } = this.props

    const ccid = history.location.state.ccid


    const filterFields = [
      { name: 'currency' },
      { name: 'month' },
      { name: 'year' },
    ]

    return (
      <CollectionActivity
        name="account_statements"
        path={'credit_cards/'+ccid+'/account_statements'}
        handleCreateClick={() => history.push('/admin/account_statements/create', { ccid: ccid })}
        createGrant="create_account_statement"
        filterFields={filterFields}
        renderItem={this.renderItem}
        isGranted={false}
      />
    )
  }
}

AccountStatements.propTypes = {
  history: PropTypes.object.isRequired,
}

export default compose(
  injectIntl,
  withRouter,
  withTheme
)(AccountStatements)