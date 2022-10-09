import PropTypes from 'prop-types';
import { Component } from "react";
import { Overlay, ModalImg } from "./Modal.styled";


export class Modal extends Component  {
    
    static propTypes = {
      onClose: PropTypes.func.isRequired,
      largeImg: PropTypes.string,
      aleternative: PropTypes.string.isRequired,
    };
    
    componentDidMount() {
    window.addEventListener('keydown', this.handleKeyDown);
  }

  componentWillUnmount() {
    window.removeEventListener('keydown', this.handleKeyDown);
  }

  handleKeyDown = e => {
    if (e.code === 'Escape') {
      this.props.onClose();
    }
  };

  onBackdropClick = e => {
    if (e.currentTarget === e.target) {
      this.props.onClose();
    }
  };


  render() {
      const {largeImg, aleternative} =this.props
      return (<Overlay onClick={this.onBackdropClick}>
                <ModalImg>
                    <img  src={largeImg} alt={aleternative} />
                </ModalImg>
            </Overlay>);
            }   
} 
