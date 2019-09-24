/* eslint-env mocha */
import { shallow } from 'enzyme';
import { Button, Form } from 'reactstrap';
import React from 'react';
import assert from 'assert';
import FeedbackForm from '../../components/FeedbackForm';
import FeedbackShop from '../../stores/FeedbackStore';


describe('<FeedbackForm />', () => {
  it('should display correctly', () => {
    const store = new FeedbackShop();
    const name = 'Jack';
    const comment = 'Good';
    store.updateName(name);
    store.updateComment(comment);

    const wrapper = shallow(<FeedbackForm store={store} />);

    const form = wrapper.find(Form);
    assert.strictEqual(form.length, 1);

    assert.strictEqual(wrapper.find('.js-name-label').length, 1);

    const nameInput = wrapper.find('.js-your-name');
    assert.strictEqual(nameInput.length, 1);
    assert.strictEqual(nameInput.prop('value'), name);

    assert.strictEqual(wrapper.find('.js-comment-label').length, 1);

    const commentInput = wrapper.find('.js-your-comment');
    assert.strictEqual(commentInput.length, 1);
    assert.strictEqual(commentInput.prop('value'), comment);

    assert.strictEqual(wrapper.find(Button).length, 1);
  });
});