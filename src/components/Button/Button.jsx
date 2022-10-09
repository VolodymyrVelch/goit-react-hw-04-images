// import PropTypes from 'prop-types';
import { LoadMore } from "./Button.styled";

export const Button = ({ loadMore }) => {
    return <LoadMore onClick={loadMore}>Load more</LoadMore>;
} 