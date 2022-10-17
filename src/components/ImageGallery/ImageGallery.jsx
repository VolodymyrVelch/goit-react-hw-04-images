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
    const [gallery, setGallery] = useState([]);
    const [totalHits, setTotalHits] = useState(null);
    const [page, setPage] = useState(1);
    const [status, setStatus] = useState('idle');
    
useEffect(() => {
    if ( ImageGalleryData !== '') {
        setStatus("pending")
        createRequest(ImageGalleryData)
            .then(respone => {
                const { data } = respone
                if (data.hits.length === 0) {
                Notiflix.Notify.failure('Your request has not reach a goal');
                }
                setGallery([...data.hits])
                setTotalHits(data.totalHits)
                setPage(2)
                setStatus("resolved")
            })
            .catch(_=>setStatus("rejected"))
    }
}, [ImageGalleryData]);

 
    
const loadMore = () => {
        createRequest(ImageGalleryData, page)
        .then(respone => {
            const { data } = respone
            setGallery(prevState=> [...prevState, ...data.hits])
            setPage(prevState=> prevState + 1)
            setStatus("resolved")
                }) 
            .catch(_=>setStatus("rejected"))
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