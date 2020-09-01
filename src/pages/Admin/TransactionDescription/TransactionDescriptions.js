import AltIconAvatar from 'rmw-shell/lib/components/AltIconAvatar'
import CollectionActivity from 'rmw-shell/lib/containers/Activities/CollectionActivity'
import Divider from '@material-ui/core/Divider'
import ListItem from '@material-ui/core/ListItem'
import ListItemText from '@material-ui/core/ListItemText'
import DescriptionIcon from '@material-ui/icons/Description'
import React, { Component } from 'react'
import { compose } from 'redux'
import { injectIntl } from 'react-intl'
import { withRouter } from 'react-router-dom'
import { withTheme } from '@material-ui/core/styles'
import PropTypes from 'prop-types'

class TransactionDescriptions extends Component {
  renderItem = (key, val) => {
    const { history } = this.props

    const { native_description = '', uid = '', user_description = '', count = '' } = val

    return (
      <div key={key}>
        <ListItem
          onClick={() => history.push(`/transaction_descriptions/edit/${key}`)}
          key={key}
        >
          <AltIconAvatar  alt="creditCards" src={val.photoURL} icon={<DescriptionIcon />} />
          <ListItemText
            primary={native_description}
            secondary={user_description}
            style={{ maxWidth: 250 }}
          />
          <ListItemText
            primary={uid}
            secondary={count}
            style={{ maxWidth: 150 }}
          />
        </ListItem>
        <Divider variant="inset" />
      </div>
    )
  }

  render() {
    const filterFields = [{ statement_description: 'statement_description' }, { uid: 'uid' }]

    return (
      <CollectionActivity
        name="transaction_descriptions"
        createGrant="create_transaction_description"
        filterFields={filterFields}
        renderItem={this.renderItem}
        isGranted={false}
      />
    )
  }
}

TransactionDescriptions.propTypes = {
  history: PropTypes.object.isRequired
}

export default compose(
  injectIntl,
  withRouter,
  withTheme
)(TransactionDescriptions)
