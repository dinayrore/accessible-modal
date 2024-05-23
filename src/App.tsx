import {
  Button,
  Modal,
  ModalContent,
  ModalFooter,
} from "@deque/cauldron-react";
import { useModal } from "./hooks/useModal";

const App = () => {
  const { show, toggleModal } = useModal();

  return (
    <div className="center-content">
      <h1 className="App-header">Accessible Modal Example</h1>
      <p>
        A{" "}
        <a
          href="https://www.w3.org/TR/WCAG22/#dfn-keyboard-interface"
          target="terms"
        >
          keyboard interface
        </a>{" "}
        allows users to provide keystroke inputs to programs.
      </p>
      <Button
        className="styled-button"
        variant="secondary"
        onClick={toggleModal}
      >
        Toggle Modal
      </Button>
      <p>
        Ensuring keyboard control for all functionality is{" "}
        <span>
          <strong>Sufficient</strong> to meet{" "}
          <a href="https://www.w3.org/WAI/WCAG22/Understanding/keyboard">
            2.1.1: Keyboard
          </a>
        </span>
        .
      </p>{" "}
      <Modal
        className="modal"
        heading={<h2 className="Dialog__heading">Accessible Modal</h2>}
        show={show}
        onClose={toggleModal}
        closeButtonText=""
      >
        <ModalContent>
          Use the keyboard to navigate the modal content.
        </ModalContent>
        <ModalFooter>
          <Button className="styled-button" onClick={toggleModal}>
            Ok
          </Button>
        </ModalFooter>
      </Modal>
    </div>
  );
};

export default App;
