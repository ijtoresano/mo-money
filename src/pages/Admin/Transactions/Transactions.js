/* eslint-disable linebreak-style */
import AltIconAvatar from 'rmw-shell/lib/components/AltIconAvatar'
import EditIcon from '@material-ui/icons/Edit'
import ShopIcon from '@material-ui/icons/Shop'
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

class Transactions extends Component {

  state = {
    category: {}
  }

  renderItem = (key, val) => {
    const { history } = this.props

    const ccid = history.location.state.ccid
    const asid = history.location.state.asid

    const { amount = '', user_description = '' } = val
    val.category.get().then(p => {
      this.setState({category: p.data()})
    })
    return (
      <div key={key}>
        <ListItem
          key={key}
        >
          <AltIconAvatar alt="accountStatements" src={val.photoURL} icon={<ShopIcon />} />
          <ListItemText
            primary={user_description}
            secondary={amount}
            style={{ maxWidth: 250 }}
          />
          {/* <ListItemText
            primary={audited}
            secondary={avoidable}
            style={{ maxWidth: 150 }}
          /> */}
          <ListItemText
            primary={this.state.category.name}
            style={{ maxWidth: 150 }}
          />
          <EditIcon onClick={() => history.push(`/transactions/edit/${key}`, { ccid: ccid, asid: asid })}/>
        </ListItem>
        <Divider variant="inset" />
      </div>
    )
  }

  render() {

    const { history } = this.props

    const ccid = history.location.state.ccid
    const asid = history.location.state.asid

    const filterFields = [
      { name: 'category' },
      { name: 'avoidable' },
      { name: 'premium' },
    ]

    return (
      <CollectionActivity
        name="transactions"
        path={'credit_cards/'+ccid+'/account_statements/'+asid+'/transactions'}
        handleCreateClick={() => history.push('/transactions/create', { ccid: ccid })}
        createGrant="create_transactions"
        filterFields={filterFields}
        renderItem={this.renderItem}
        isGranted={false}
      />
    )
  }
}

Transactions.propTypes = {
  history: PropTypes.object.isRequired,
}

export default compose(
  injectIntl,
  withRouter,
  withTheme
)(Transactions)