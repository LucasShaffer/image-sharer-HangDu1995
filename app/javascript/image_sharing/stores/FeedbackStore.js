import { action, observable } from 'mobx';
import { PostFeedbackService } from '../services/PostFeedbackService';

export class FeedbackStore {
  /* Implement your feedback store*/
  @observable name = '';
  @observable comment = '';
  @observable response = null;

  constructor(service = new PostFeedbackService()) {
    this.service = service;
  }

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
  submitFeedback() {
    const data = {
      name: this.name,
      comment: this.comment
    };

    return this.service.postFeedback(data).then((response) => {
      if (response.success) {
        this.setResponse('Your comment is added successfully!');
        this.resetForm();
      } else {
        this.setResponse('Something is not right...');
      }
    });
  }
}

export default FeedbackStore;
