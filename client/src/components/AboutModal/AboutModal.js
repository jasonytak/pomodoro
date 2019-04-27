import './AboutModal.css';
import React from 'react';
import { Button, Modal } from 'semantic-ui-react';

class AboutModal extends React.Component {
  state = {
    modalOpen: false
  };

  handleOpen = () => {
    this.setState({ modalOpen: true });
  };

  handleClose = () => {
    this.setState({ modalOpen: false });
  };

  render() {
    return (
      <Modal
        trigger={<Button onClick={this.handleOpen}>WHAT IS THIS?</Button>}
        open={this.state.modalOpen}
        onClose={this.handleClose}
        size="small"
        className="about-modal"
      >
        <Modal.Header>What is the pomodoro technique?</Modal.Header>
        <Modal.Content>
          <p>
            The Pomodoro Technique was developed by Francesco Cirillo. The idea
            is to use a timer to break down work into intervals. Traditionally
            the work period is 25 minutes followed by 5 minutes of break time.
          </p>
          <p>
            Each interval is known as a pomodoro, derived from the Italian word
            for "tomato", after the tomato-shaped timer that Cirillo used.
          </p>
        </Modal.Content>
      </Modal>
    );
  }
}

export default AboutModal;
