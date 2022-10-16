import PropTypes from 'prop-types';
import { ImageGallery, Image } from './ImageGalleryItem.styled';
import { Modal } from 'components/Modal/Modal';
import { useState } from 'react';

export const ImageGalleryItem =({smallImg, aleternative, largeImg})=>{

const [showModal, setshowModal] = useState(false);
    
const  toggleModal = () => {
    setshowModal(( showModal ) => ( !showModal));
    }

    return (
        <ImageGallery >
            <Image onClick={toggleModal}  src={smallImg} alt={aleternative} />
            {showModal && <Modal onClose={toggleModal}  largeImg={largeImg} aleternative={aleternative } />}
        </ImageGallery>
    )
}

ImageGalleryItem.propTypes = {
smallImg: PropTypes.string,
aleternative: PropTypes.string,
largeImg: PropTypes.string.isRequired,
};