import React, { Component } from 'react';
import { inject, observer } from 'mobx-react';
import PropTypes from 'prop-types';
import Header from './Header';
import FlashMessage from "./FlashMessage";
import Body from './Body';
import Footer from './Footer';

@observer
class App extends Component {
  static propTypes = {
    stores: PropTypes.object.isRequired
  };

  render() {
    const store = this.props.stores.feedbackStore;
    return (
      <div>
        <Header title={'Tell us what you think'} />
        <FlashMessage store={store} />
        <Body store={store} />
        <Footer />
      </div>
    )
  }
}

export default inject(
  'stores'
)(App);
