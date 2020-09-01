import React from 'react'
import isGranted from 'rmw-shell/lib/utils/auth'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { Route, Redirect } from 'react-router'

export const AdminRoute = ({
  isAuthorised,
  component: Component,
  isGranted,
  ...rest
}) => (
  <Route
    {...rest}
    render={props => {
      if ((isAuthorised && isGranted('administration'))) {
        return <Component {...props} />
      } else if (isAuthorised) {
        return (
          <Redirect
            to={{
              pathname:
                '/about'
            }}
          />)
      } else {
        return (
          <Redirect
            to={{
              pathname:
                '/signin',
              search: `from=${props.location.pathname}`,
              state: { from: props.location }
            }}
          />
        )
      }
    }}
  />
)


AdminRoute.propTypes = {
  isAuthorised: PropTypes.bool.isRequired,
  type: PropTypes.string,
  isGranted: PropTypes.func.isRequired,
  component: PropTypes.func,
  fallbackComponent: PropTypes.object
}

const mapStateToProps = state => {
  const { auth } = state
  console.log(state)
  return {
    isAuthorised: auth.isAuthorised,
    isGranted: grant => isGranted(state, grant)
  }
}

export default connect(mapStateToProps)(AdminRoute)