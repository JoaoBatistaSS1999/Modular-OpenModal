import classes from "./App.module.css";
import Modal from "./Modal";
import React, { useState } from "react";

function App() {
  const [isOpen, setOpen] = useState(false);

  const handleOpenModal = () => {
    setOpen(true);
  };
  const handleCloseModal = () => {
    setOpen(false);
  };

  return (
    <React.Fragment>
      <div className={classes.container}>
        <header className={classes.header}>
          <button className={classes.button} onClick={handleOpenModal}>
            Open Modal
          </button>
        </header>
        <div className={classes.content}></div>
      </div>
      <Modal open={isOpen} onClose={handleCloseModal}>
        <h4>I used a React Portal to render this component propertly.</h4>
        <p>(You can also click outside to close this modal!)</p>
      </Modal>
    </React.Fragment>
  );
}

export default App;
