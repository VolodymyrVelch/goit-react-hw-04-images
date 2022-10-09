// import PropTypes from 'prop-types';

import { Component } from "react"
import { ImageGalleryList } from "./ImageGallery.styled"
import { createRequest } from "components/services/Api"
import { ImageGalleryItem } from "components/ImageGalleryItem/ImageGalleryItem"
import { Button } from "components/Button/Button"


export class ImageGallery extends Component {
    state = {
        gallery: [],
        totalHits: null,
        page: 1,
        showModal:false

    } 
    
    componentDidUpdate(prevProps) {
        if (this.props !== prevProps) {
            
            createRequest(this.props.ImageGalleryData)
                .then(respone => {
                    const { data } = respone
                    this.setState(_=> ({
                        gallery: [...data.hits],
                        totalHits: data.totalHits,
                        page: 2
                    }))
                }) 
                .catch(error=>console.log("error"))
        }
    }
    loadMore = () => {
        createRequest(this.props.ImageGalleryData, this.state.page)
        .then(respone => {
            
            const { data } = respone
            this.setState(prevState  => ({
                gallery: [...prevState.gallery, ...data.hits],
                page: prevState.page + 1,
                        
                    }))
                }) 
                .catch(error=>console.log("error"))
    }




    render() {
        const {gallery, totalHits, page}=this.state
        return (
            <>
            <ImageGalleryList>
                    {gallery.map(({ id, webformatURL, largeImageURL, tags }) =>
                    (<ImageGalleryItem
                        key={id}
                        src={webformatURL}
                        largeImg={largeImageURL}
                        aleternative={tags}
                        
                    />))}
                    
            </ImageGalleryList>
             {totalHits>=12*page&& <Button loadMore={ this.loadMore}/>}   
            </>
        )
    }
}


 

