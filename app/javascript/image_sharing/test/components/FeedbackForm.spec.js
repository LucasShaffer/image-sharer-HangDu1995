/* eslint-env mocha */
import 'jsdom-global/register';
import React from 'react';
import { shallow, configure } from 'enzyme';
import { expect } from 'chai';
import FeedbackForm from '../../components/FeedbackForm';
import PostFeedbackService from '../../services/PostFeedbackService';
import { Form, Button } from 'reactstrap';
import Adapter from 'enzyme-adapter-react-16';
import sinon from 'sinon';
configure({ adapter: new Adapter() });

describe('<FeedbackForm />', () => {
  it('should render correctly', () => {
    const dummyStore = {
      userName: 'John Doe',
      comments: 'This is a comment'
    };
    const onClick = sinon.spy();

    const wrapper = shallow(<FeedbackForm store={dummyStore} onClick={onClick} />);
    const form = wrapper.find(Form);

    expect(form).to.have.length(1);

    const userNameInput = form.find('.username-input');
    expect(userNameInput).to.have.length(1);
    expect(userNameInput.prop('value')).to.equal('John Doe');
    const commentInput = form.find('.comment-input');
    expect(commentInput).to.have.length(1);
    expect(commentInput.prop('value')).to.equal('This is a comment');

    const button = form.find(Button);
    expect(button).to.have.length(1);
  });

  it('should call service when click', () => {
    const dummyStore = {};
    const onClick = sinon.spy();
    const wrapper = shallow(<FeedbackForm store={dummyStore} onClick={onClick} />);
    const button = wrapper.find(Button);

    button.simulate('click');
    sinon.assert.calledOnce(onClick);
  })
});
