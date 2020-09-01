/* eslint-disable linebreak-style */
import AltIconAvatar from 'rmw-shell/lib/components/AltIconAvatar'
import EditIcon from '@material-ui/icons/Edit'
import CreditCardIcon from '@material-ui/icons/CreditCard'
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


class CreditCards extends Component {
  renderItem = (key, val) => {
    const { history } = this.props

    const { bank = '', name = '', network = '', uid = '' } = val

    return (
      <div key={key}>
        <ListItem
          key={key}
        >
          <AltIconAvatar onClick={() => history.push('/admin/account_statements', { ccid: key })} alt="creditCards" src={val.photoURL} icon={<CreditCardIcon />} />
          <ListItemText
            onClick={() => history.push('/admin/account_statements', { ccid: key })}
            primary={name}
            secondary={uid}
            style={{ maxWidth: 250 }}
          />
          <ListItemText
            onClick={() => history.push('/admin/account_statements', { ccid: key })}
            primary={bank}
            secondary={network}
            style={{ maxWidth: 150 }}
          />
          <EditIcon onClick={() => history.push(`/admin/credit_cards/edit/${key}`)}/>
        </ListItem>
        <Divider variant="inset" />
      </div>
    )
  }

  render() {
    const filterFields = [
      { name: 'bank' },
      { name: 'name' },
      { name: 'network' },
      { name: 'uid'},
    ]

    return (
      <CollectionActivity
        name="credit_cards"
        createGrant="create_credit_card"
        filterFields={filterFields}
        renderItem={this.renderItem}
        isGranted={false}
      />
    )
  }
}

CreditCards.propTypes = {
  history: PropTypes.object.isRequired
}

export default compose(
  injectIntl,
  withRouter,
  withTheme
)(CreditCards)