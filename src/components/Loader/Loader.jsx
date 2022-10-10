// import PropTypes from 'prop-types';
import { FadeLoader } from "react-spinners"
import { LoaderWrapper } from "./Loader.styled"

export const Loader = () => {
    
    return (
        <LoaderWrapper>
            <FadeLoader
            color="rgba(54, 70, 214, 1)"
            aria-label="Loading Spinner"
            data-testid="loader"
            margin-left="auto"
            margin-right="auto"
          />
        </LoaderWrapper>
    )
} 