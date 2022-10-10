import PropTypes from 'prop-types';
import { ImageGallery, Image } from './ImageGalleryItem.styled';
import { Modal } from 'components/Modal/Modal';
import { Component } from 'react';

export class ImageGalleryItem extends Component{
      static propTypes = {
      src: PropTypes.string,
      aleternative: PropTypes.string,
      largeImg: PropTypes.string.isRequired,
    };


    state= {
    showModal:false
    }
    
    toggleModal = () => {
    this.setState(({ showModal }) => ({
    showModal: !showModal,
    }));
    }
    render() {
    
        const { src, aleternative, largeImg } = this.props
     
            return (
                <ImageGallery >
                    <Image onClick={this.toggleModal}  src={src} alt={aleternative} />
                    {this.state.showModal && <Modal onClose={this.toggleModal}  largeImg={largeImg} aleternative={aleternative } />}
                </ImageGallery>
            )
}
}
    

