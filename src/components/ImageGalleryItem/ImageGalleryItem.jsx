// import PropTypes from 'prop-types';
import { ImageGallery, Image } from './ImageGalleryItem.styled';

export const ImageGalleryItem = ({ id, src }) => {
    return (
        <ImageGallery>
        <Image  src={src} alt="img" />
        </ImageGallery>
    )
}

