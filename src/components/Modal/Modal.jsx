import PropTypes from 'prop-types';
import { useEffect } from "react";
import { Overlay, ModalImg } from "./Modal.styled";


export const Modal = ({largeImg, aleternative, onClose}) => {
    
  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown);
    return () =>  window.removeEventListener('keydown', handleKeyDown);
  },);
  
  function handleKeyDown(e) {
            if (e.code === 'Escape') {
                onClose();
              }
            };
  
const onBackdropClick = e => {
    if (e.currentTarget === e.target) {
      onClose();
    }
  };

return (<Overlay onClick={onBackdropClick}>
          <ModalImg>
              <img  src={largeImg} alt={aleternative} />
          </ModalImg>
      </Overlay>);
}   

Modal.propTypes = {
  onClose: PropTypes.func.isRequired,
  largeImg: PropTypes.string,
  aleternative: PropTypes.string.isRequired,
};