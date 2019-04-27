import './InputModal.css';
import React from 'react';
import { Button, Modal, Input } from 'semantic-ui-react';

class InputModal extends React.Component {
  state = {
    modalOpen: false
  };

  handleOpen = () => {
    this.setState({ modalOpen: true });
  };

  handleClose = () => {
    this.props.handleSubmit();
    this.setState({ modalOpen: false });
  };

  render() {
    return (
      <Modal
        trigger={<Button onClick={this.handleOpen}>CUSTOMIZE TIMERS</Button>}
        open={this.state.modalOpen}
        onClose={this.handleClose}
        size="tiny"
        className="input-modal"
      >
        <Modal.Header>Customize Timers</Modal.Header>
        <Modal.Content>
          <label>Work Minutes: </label>
          <Input
            name="totalWorkMinutes"
            onChange={this.props.onInputChange}
            placeholder="Enter Minutes..."
            onKeyPress={e => allowNumbersOnly(e)}
            value={this.props.totalWorkMinutes}
          />
          <label>Break Minutes: </label>
          <Input
            name="totalBreakMinutes"
            onChange={this.props.onInputChange}
            placeholder="Enter Minutes..."
            onKeyPress={e => allowNumbersOnly(e)}
            value={this.props.totalBreakMinutes}
          />
        </Modal.Content>
        <Modal.Actions>
          <Button onClick={this.handleClose}>Submit</Button>
        </Modal.Actions>
      </Modal>
    );
  }
}

const allowNumbersOnly = e => {
  let code = e.which ? e.which : e.keyCode;
  if (code > 31 && (code < 48 || code > 57)) {
    e.preventDefault();
  }
};

export default InputModal;
