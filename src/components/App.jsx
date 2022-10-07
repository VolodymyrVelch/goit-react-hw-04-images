import React from "react";
import { Button } from "./Button/Button";
import { ImageGallery } from "./ImageGallery/ImageGallery";
import { ImageGalleryItem } from "./ImageGalleryItem/ImageGalleryItem";
import { Loader } from "./Loader/Loader";
import { Modal } from "./Modal/Modal";
import { Searchbar } from "./Searchbar/Searchbar";
import { Main } from './App.styled';

export const App = () => {
  return (
    <Main>
      <Searchbar/>
      <ImageGallery/>
      <ImageGalleryItem/>
      <Loader/>
      <Button/>
      <Modal/>
    </Main>
  );
};
