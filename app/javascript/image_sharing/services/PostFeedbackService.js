import { post } from "../utils/helper";

export class PostFeedbackService {
  constructor(store, params) {
    this.store = store;
    this.params = params;
  }

  postFeedback = () => {
    return post('api/feedbacks', this.params)
      .then(data => {
        this.setFlashMessage('success', data.message);
        this.resetForm();
      })
      .catch(() => {
        this.setFlashMessage('danger', 'Something went wrong, please try again later');
      });
  };

  setFlashMessage(status, msg) {
    this.store.setResponse(status, msg);
  }

  resetForm() {
    this.store.resetForm();
  }
}

export default PostFeedbackService;
