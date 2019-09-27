/* eslint-env mocha */
import assert from 'assert';
import sinon from 'sinon';
import { FeedbackStore } from '../../stores/FeedbackStore';
import { PostFeedbackService } from '../../services/PostFeedbackService';

describe('<FeedbackStore />', () => {
  it('should update name', () => {
    const store = new FeedbackStore();
    const newName = 'Jack';
    store.updateName(newName);

    assert.strictEqual(store.name, newName);
  });

  it('should update comment', () => {
    const store = new FeedbackStore();
    const newComment = 'good';
    store.updateComment(newComment);

    assert.strictEqual(store.comment, newComment);
  });

  it('should set response', () => {
    const store = new FeedbackStore();
    const newResponse = 'ok';
    store.setResponse(newResponse);

    assert.strictEqual(store.response, newResponse);
  });

  it('should reset form', () => {
    const store = new FeedbackStore();
    store.updateName('Jack');
    store.updateComment('Good');

    store.resetForm();

    assert.strictEqual(store.name, '');
    assert.strictEqual(store.comment, '');
  });

  it('should start service', () => {
    const sandbox = sinon.createSandbox();

    const stubFeedback = sandbox.stub(PostFeedbackService.prototype, 'postFeedback');

    const store = new FeedbackStore();
    store.startService();

    sandbox.assert.called(stubFeedback);

    sandbox.restore();
  });
});

