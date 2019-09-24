/* eslint-env mocha */
import assert from 'assert';
import FeedbackShop from '../../stores/FeedbackStore';

describe('<FeedbackStore />', () => {
  it('should update name', () => {
    const store = new FeedbackShop();
    const newName = 'Jack';
    store.updateName(newName);

    assert.strictEqual(store.name, newName);
  });

  it('should update comment', () => {
    const store = new FeedbackShop();
    const newComment = 'good';
    store.updateComment(newComment);

    assert.strictEqual(store.comment, newComment);
  });
});

