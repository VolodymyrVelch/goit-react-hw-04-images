// import PropTypes from 'prop-types';

import { Component } from "react"
import { ImageGalleryList } from "./ImageGallery.styled"
import { createRequest } from "components/services/Api"
import { ImageGalleryItem } from "components/ImageGalleryItem/ImageGalleryItem"



export class ImageGallery extends Component {
    state = {
    gallery: []
    } 
    
    componentDidUpdate(prevProps) {
        if (this.props !== prevProps) {
            
            createRequest(this.props.ImageGalleryData)
                .then(respone => {
                    const { data } = respone
                    this.setState(prevState  => ({
                        gallery: [...data.hits]
                        
                    }))
                }) 
                .catch(error=>console.log("error"))
        }
        }


    render() {
        const {gallery}=this.state
        return (
            <ImageGalleryList>
                {gallery.map(({ id, webformatURL, largeImageURL })=>(<ImageGalleryItem key={id}  src={webformatURL} />))}
            </ImageGalleryList>
        )
    }
}


 

