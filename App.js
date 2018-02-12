import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { addNavigationHelpers, StackNavigator } from 'react-navigation';

import { addListener } from './src/utils/redux';
import routes from './src/routes';

export const AppNavigator = StackNavigator(routes);

type Props = {
  dispatch: PropTypes.func.isRequired,
  nav: PropTypes.object.isRequired,
}

const mapStateToProps = state => ({
  nav: state.nav,
});

const AppWithNavigationState = (props: Props) => {
  const { dispatch, nav } = props;
  return (
    <AppNavigator
      navigation={addNavigationHelpers({
        dispatch,
        state: nav,
        addListener,
      })}
    />
  );
};

export default connect(mapStateToProps)(AppWithNavigationState);
