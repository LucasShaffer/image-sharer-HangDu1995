/* eslint-env mocha */
import 'jsdom-global/register';
import React from 'react';
import { expect } from 'chai';
import FeedbackStore from '../../stores/FeedbackStore';

describe('FeedbackStore', () => {
  it('should set user name', () => {
    const store = new FeedbackStore();
    store.setUserName('abc');
    expect(store.userName).to.equal('abc');
  });

  it('should set comments', () => {
    const store = new FeedbackStore();
    store.setComments('abc');
    expect(store.comments).to.equal('abc');
  });

  it('should set response', () => {
    const store = new FeedbackStore();
    store.setResponse('success', 'hello world');
    expect(store.response.status).to.equal('success');
    expect(store.response.message).to.equal('hello world');
  });

  it('should reset form', () => {
    const store = new FeedbackStore();
    store.setUserName('abc');
    store.setComments('thanks');
    expect(store.userName).to.equal('abc');
    expect(store.comments).to.equal('thanks');

    store.resetForm();
    expect(store.userName).to.equal('');
    expect(store.comments).to.equal('');
  });
});
