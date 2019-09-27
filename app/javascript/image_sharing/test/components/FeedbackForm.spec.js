/* eslint-env mocha */
import sinon from 'sinon';
import { shallow } from 'enzyme';
import { Button, Form } from 'reactstrap';
import React from 'react';
import assert from 'assert';
import FeedbackForm from '../../components/FeedbackForm';


describe('<FeedbackForm />', () => {
  it('should display correctly', () => {
    const store = {
      name: 'Jack',
      comment: 'Good'
    };

    const wrapper = shallow(<FeedbackForm store={store} />);

    const form = wrapper.find(Form);
    assert.strictEqual(form.length, 1);

    assert.strictEqual(wrapper.find('.js-name-label').length, 1);

    const nameInput = wrapper.find('.js-your-name');
    assert.strictEqual(nameInput.length, 1);
    assert.strictEqual(nameInput.prop('value'), store.name);

    assert.strictEqual(wrapper.find('.js-comment-label').length, 1);

    const commentInput = wrapper.find('.js-your-comment');
    assert.strictEqual(commentInput.length, 1);
    assert.strictEqual(commentInput.prop('value'), store.comment);

    assert.strictEqual(wrapper.find(Button).length, 1);
  });

  it('should start post feedback service', () => {
    const sandbox = sinon.createSandbox();

    const store = {
      startService: sandbox.stub(),
    };

    const wrapper = shallow(<FeedbackForm store={store} />);

    wrapper.find(Button).simulate('click');

    sandbox.assert.called(store.startService);

    sandbox.restore();
  });
});
