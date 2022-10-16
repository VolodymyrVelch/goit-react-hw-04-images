import PropTypes from 'prop-types';
import { useEffect, useState } from "react"
import { ImageGalleryList } from "./ImageGallery.styled"
import { createRequest } from "components/services/Api"
import { ImageGalleryItem } from "components/ImageGalleryItem/ImageGalleryItem"
import { Button } from "components/Button/Button"
import { Loader } from "components/Loader/Loader"
import { SearchRequest, Error } from 'components/error&request/error&request';
import Notiflix from "notiflix"


export const ImageGallery = ({ImageGalleryData}) => {
    const [gallery, setgallery] = useState([]);
    const [totalHits, settotalHits] = useState(null);
    const [page, setpage] = useState(1);
    const [status, setstatus] = useState('idle');
    
useEffect(() => {
    if ( ImageGalleryData !== '') {
        setstatus("pending")
        createRequest(ImageGalleryData)
            .then(respone => {
                const { data } = respone
                if (data.hits.length === 0) {
                Notiflix.Notify.failure('Your request has not reach a goal');
                }
                setgallery([...data.hits])
                settotalHits(data.totalHits)
                setpage(2)
                setstatus("resolved")
            })
            .catch(_=>setstatus("rejected"))
    }
}, [ImageGalleryData]);

 
    
const loadMore = () => {
        createRequest(ImageGalleryData, page)
        .then(respone => {
            const { data } = respone
            setgallery(prevState=> [...prevState, ...data.hits])
            setpage(prevState=> prevState + 1)
            setstatus("resolved")
                }) 
            .catch(_=>setstatus("rejected"))
    }


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
                            smallImg={webformatURL}
                            largeImg={largeImageURL}
                            aleternative={tags}
                            
                        />))}
                    </ImageGalleryList>
                    {totalHits>=12*page && <Button loadMore={loadMore}/>}   
                </>
                )
            }
        }


ImageGallery.propTypes = {
ImageGalleryData: PropTypes.string.isRequired,
};