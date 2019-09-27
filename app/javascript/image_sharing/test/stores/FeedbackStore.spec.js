/* eslint-env mocha */
import assert from 'assert';
import sinon from 'sinon';
import { FeedbackStore } from '../../stores/FeedbackStore';


describe('<FeedbackStore />', () => {
  const sandbox = sinon.createSandbox();

  afterEach(() => {
    sandbox.restore();
  });

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

  it('should submit feedback when response ', () => {
    const fakeService = {
      postFeedback: sandbox.stub().resolves({ success: true })
    };

    const store = new FeedbackStore(fakeService);
    store.submitFeedback();

    sandbox.assert.called(fakeService.postFeedback);
  });

  it('should send response when service succeeds', () => {
    const fakeService = {
      postFeedback: sandbox.stub().resolves({ success: true })
    };

    const store = new FeedbackStore(fakeService);
    store.updateName('Jack');
    store.updateComment('Good');

    return store.submitFeedback().then(() => {
      sandbox.assert.called(fakeService.postFeedback);
      assert.strictEqual(store.response, 'Your comment is added successfully!');
      assert.strictEqual(store.name, '');
      assert.strictEqual(store.comment, '');
    });
  });

  it('should send response when service fails', () => {
    const fakeService = {
      postFeedback: sandbox.stub().resolves({ success: false })
    };

    const store = new FeedbackStore(fakeService);
    store.updateName('Jack');
    store.updateComment('Good');

    return store.submitFeedback().then(() => {
      sandbox.assert.called(fakeService.postFeedback);
      assert.strictEqual(store.response, 'Something is not right...');
      assert.strictEqual(store.name, 'Jack');
      assert.strictEqual(store.comment, 'Good');
    });
  });
});

