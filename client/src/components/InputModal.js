import React from 'react';
import { Button, Modal, Input } from 'semantic-ui-react';

class InputModal extends React.Component {
  state = {
    modalOpen: false
  }

  handleOpen = () => {
    this.setState({ modalOpen: true });
  };

  handleClose = () => {
    this.setState({ modalOpen: false });
  };

  render() {
    return (
      <Modal
      trigger={<Button onClick={this.handleOpen}>Customize Timers</Button>}
      open={this.state.modalOpen}
      onClose={this.handleClose}
    >
      <Modal.Header>Customize Timers</Modal.Header>
      <Modal.Content>
        <Input
          name="customWork"
          onChange={this.props.onInputChange}
          placeholder="Enter Work Minutes..."
          onKeyPress={(e) => allowNumbersOnly(e) }
        />
        <Input
          name="customBreak"
          onChange={this.onInputChange}
          placeholder="Enter Break Minutes..."
          onKeyPress={(e) => allowNumbersOnly(e) }
        />
      </Modal.Content>
      <Modal.Actions>
        <Button onClick={this.handleClose}>Submit</Button>
      </Modal.Actions>
    </Modal>
    )
  }
}

const allowNumbersOnly = (e) => {
  let code = (e.which) ? e.which : e.keyCode;
  if (code > 31 && (code < 48 || code > 57)) {
      e.preventDefault();
  }
}

export default InputModal;
