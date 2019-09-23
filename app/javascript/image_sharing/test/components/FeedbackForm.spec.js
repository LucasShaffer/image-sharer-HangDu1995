/* eslint-env mocha */
import React from 'react';
import assert from 'assert';
import { shallow } from 'enzyme';
import FeedbackForm from "../../components/FeedbackForm";
import { Button, Form, Label} from 'reactstrap';
import FeedbackStore from "../../stores/FeedbackStore";
import { expect } from 'chai';

describe('<FeedbackForm />', () => {
  it('should display correctly', () => {
    const store = new FeedbackStore
    const name = 'Jack'
    const comment = 'Good'
    store.updateName(name)
    store.updateComment(comment)

    const wrapper = shallow(< FeedbackForm store={store}/>);

    const form = wrapper.find(Form)
    assert.strictEqual(form.length, 1);

    assert.strictEqual(wrapper.find('.js-name-label').text(), 'Your Name:');

    const name_input = wrapper.find('.js-your-name')
    assert.strictEqual(name_input.length, 1);
    assert.strictEqual(name_input.prop("value"), name);

    assert.strictEqual(wrapper.find('.js-comment-label').text(), 'Your Comment:');

    const comment_input = wrapper.find('.js-your-comment')
    assert.strictEqual(comment_input.length, 1);
    assert.strictEqual(comment_input.prop('value'), comment);

    assert.strictEqual(wrapper.find(Button).length, 1);
  });
});
