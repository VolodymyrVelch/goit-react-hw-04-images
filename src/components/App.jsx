import { useState } from "react";
import { ImageGallery } from "./ImageGallery/ImageGallery";
import { Searchbar } from "./Searchbar/Searchbar";
import { Main } from './App.styled';



export const App =()=> {

  const [query, setquery] = useState("");

const formSubmitData = (request) => {
    const { query } = request
    return setquery(query)
  }    

    return (
      <Main>
        <Searchbar onSubmit={formSubmitData} />
        <ImageGallery ImageGalleryData={query} />
      </Main>
    );
  };



