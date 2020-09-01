import AltIconAvatar from 'rmw-shell/lib/components/AltIconAvatar'
import CollectionActivity from 'rmw-shell/lib/containers/Activities/CollectionActivity'
import Divider from '@material-ui/core/Divider'
import ListItem from '@material-ui/core/ListItem'
import ListItemText from '@material-ui/core/ListItemText'
import CategoryIcon from '@material-ui/icons/Category'
import React, { Component } from 'react'
import { compose } from 'redux'
import { injectIntl } from 'react-intl'
import { withRouter } from 'react-router-dom'
import { withTheme } from '@material-ui/core/styles'

class Categories extends Component {
  renderItem = (key, val) => {
    const { history } = this.props

    const { name = '', uid = '', photoURL = '' } = val

    return (
      <div key={key}>
        <ListItem onClick={() => history.push(`/admin/categories/edit/${key}`)} key={key}>
          <AltIconAvatar alt="task" src={photoURL} icon={<CategoryIcon />} />
          <ListItemText primary={name} secondary={uid} style={{ minWidth: 120 }} />
          <ListItemText primary={'Public: '+ val.public.toString() } style={{ minWidth: 120 }} />
        </ListItem>
        <Divider variant="inset" />
      </div>
    )
  }

  render() {
    const filterFields = [{ name: 'name' }, { public: 'public' }]

    return (
      <CollectionActivity
        name="categories"
        createGrant="create_category"
        filterFields={filterFields}
        renderItem={this.renderItem}
        isGranted={false}
      />
    )
  }
}

export default compose(
  injectIntl,
  withRouter,
  withTheme
)(Categories)
