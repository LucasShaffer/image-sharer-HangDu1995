/* eslint-env mocha */
import { shallow } from 'enzyme';
import React from 'react';
import assert from 'assert';
import FlashMessage from '../../components/FlashMessage';


describe('<FlashMessage />', () => {
  it('should display alert message', () => {
    const store = {
      message: true,
      response: 'whatever'
    };

    const wrapper = shallow(<FlashMessage store={store} />);
    const alert = wrapper.find('.alert');
    assert.strictEqual(alert.length, 1);
    assert.strictEqual(alert.text(), store.response);
  });

  it('should not display alert message', () => {
    const store = {
      message: false,
      response: 'whatever'
    };

    const wrapper = shallow(<FlashMessage store={store} />);
    const alert = wrapper.find('.alert');
    assert.strictEqual(alert.length, 0);
  });
});
