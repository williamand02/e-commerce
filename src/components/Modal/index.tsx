import { Dispatch, SetStateAction } from "react";
import Button from "../Button";
import { InconClose } from "../Icons";

import "./styles.scss";

interface ModalProps {
  closeModal: Dispatch<SetStateAction<boolean>>;
  action: any;
}

const Modal = (props: ModalProps) => {
  return (
    <div className="Modal">
      <div className="Modal__container">
        <Button
          round
          onClick={() => props.closeModal(false)}
          className="Close-rounded"
          color="white"
        >
          {InconClose}
        </Button>
        <div className="Modal__container__title">
          <h1>Deseja excluir o cadastro?</h1>
        </div>
        <div className="Modal__container__body">
          <p>Ao excluir todos os dados serão perdidos</p>
        </div>
        <div className="Modal__container__footer">
          <Button onClick={() => props.closeModal(false)}>Cancel</Button>
          <Button onClick={() => props.action(props.action.id)} color="red">
            Continue
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Modal;
