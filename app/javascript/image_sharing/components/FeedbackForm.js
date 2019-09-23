import { observer } from 'mobx-react';
import { Button, Form, FormGroup, Input, Label } from 'reactstrap';
import React, { Component } from 'react';
import PropTypes from 'prop-types';


@observer
class FeedbackForm extends Component {
  /* Add Prop Types check*/
  static propTypes = {
    store: PropTypes.object.isRequired
  }

  render() {
    return (
      <Form>
        <FormGroup>
          <Label className="js-name-label">Your Name:</Label>
          <Input
            type="text"
            className="js-your-name"
            onChange={e => this.props.store.updateName(e.target.value)}
            value={this.props.store.name}
            placeholder="please enter your name"
          />
        </FormGroup>
        <FormGroup>
          <Label className="js-comment-label">Your Comment:</Label>
          <Input
            type="textarea"
            className="js-your-comment"
            onChange={e => this.props.store.updateComment(e.target.value)}
            value={this.props.store.comment}
            placeholder="please enter your comment"
          />
        </FormGroup>
        <Button>Submit</Button>
      </Form>
    );
  }
}

export default FeedbackForm;
