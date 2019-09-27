import { action, observable } from 'mobx';
import { PostFeedbackService } from '../services/PostFeedbackService';

export class FeedbackStore {
  /* Implement your feedback store*/
  @observable name = '';
  @observable comment = '';
  @observable response = null;

  @action
  updateName(name) {
    this.name = name;
  }

  @action
  updateComment(comment) {
    this.comment = comment;
  }

  @action
  resetForm() {
    this.name = '';
    this.comment = '';
  }

  @action
  setResponse(response) {
    this.response = response;
  }

  @action
  startService() {
    const service = new PostFeedbackService(this);
    service.postFeedback();
  }
}

export default FeedbackStore;
