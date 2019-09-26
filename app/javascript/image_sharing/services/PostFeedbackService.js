import { post } from '../utils/helper';

export class PostFeedbackService {
  /* Implement your service */
  constructor(store) {
    this.store = store;
    this.data = {
      name: store.name,
      comment: store.comment
    };
  }

  postFeedback() {
    return post('http://localhost:3000/api/feedbacks', this.data).then(() => {
      this.store.setResponse(true, 'Your comment is added successfully!');
      this.store.resetForm();
    })
      .catch(() => {
        this.store.setResponse(true, 'Something is not right...');
      });
  }
}

export default PostFeedbackService;
