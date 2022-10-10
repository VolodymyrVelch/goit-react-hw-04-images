import PropTypes from 'prop-types';
import { Component } from "react"
import { ImageGalleryList } from "./ImageGallery.styled"
import { createRequest } from "components/services/Api"
import { ImageGalleryItem } from "components/ImageGalleryItem/ImageGalleryItem"
import { Button } from "components/Button/Button"
import { Loader } from "components/Loader/Loader"
import { SearchRequest, Error } from 'components/error&request/error&request';
import Notiflix from "notiflix"


export class ImageGallery extends Component {
    
      static propTypes = {
      ImageGalleryData: PropTypes.string.isRequired,
    };

    state = {
        gallery: [],
        totalHits: null,
        page: 1,
        showModal:false,
        status: 'idle',
    } 
    
    componentDidUpdate(prevProps) {
        if (this.props !== prevProps) {
            this.setState({ status: "pending" })
            createRequest(this.props.ImageGalleryData)
                .then(respone => {
                    const { data } = respone
                    if (data.hits.length === 0) {
                    Notiflix.Notify.failure('Your request has not reach a goal');
                    }
                    this.setState(_ => ({
                        gallery: [...data.hits],
                        totalHits: data.totalHits,
                        page: 2,
                        status: "resolved"
                    }))
                })
                .catch(error=>this.setState({ status: "rejected" , error}))
        }
    }
    loadMore = () => {
        createRequest(this.props.ImageGalleryData, this.state.page)
        .then(respone => {
            const { data } = respone
            this.setState(prevState  => ({
                gallery: [...prevState.gallery, ...data.hits],
                page: prevState.page + 1,
                status: "resolved"
                    }))
                }) 
                .catch(error=>this.setState({ status: "rejected" , error}))
    }

    render() {
        const { gallery, totalHits, page, status } = this.state
        if (status === 'idle') {
            return <SearchRequest/>;
        }
        if (status === 'rejected') {
            return <Error/>;
        }
        if (status === "pending") {
          return  <Loader/>
            
        }
        if (status === "resolved") {
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
                    {totalHits>=12*page && <Button loadMore={ this.loadMore}/>}   
                </>
                )
            }
        }
}
