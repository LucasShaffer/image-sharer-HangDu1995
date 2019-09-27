/* eslint-env mocha */
import { shallow } from 'enzyme';
import { Alert } from 'reactstrap';
import React from 'react';
import assert from 'assert';
import FlashMessage from '../../components/FlashMessage';


describe('<FlashMessage />', () => {
  it('should display alert message', () => {
    const store = {
      response: 'whatever'
    };

    const wrapper = shallow(<FlashMessage store={store} />);
    const alert = wrapper.find(Alert);
    assert.strictEqual(alert.length, 1);
    assert.strictEqual(alert.children().text(), store.response);
  });

  it('should not display alert message', () => {
    const store = {
      response: null
    };

    const wrapper = shallow(<FlashMessage store={store} />);
    const alert = wrapper.find(Alert);
    assert.strictEqual(alert.length, 0);
  });
});
