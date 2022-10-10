import { Component } from "react";
import { ImageGallery } from "./ImageGallery/ImageGallery";
import { Searchbar } from "./Searchbar/Searchbar";
import { Main } from './App.styled';


export class App extends Component {
  state = {
    query: '',
  } 

  formSubmitData = (request) => {
    const { query } = request
    return this.setState({query})
  }    
  
  render() {
    return (
      <Main>
        <Searchbar onSubmit={this.formSubmitData} />
        <ImageGallery ImageGalleryData={this.state.query} />
      </Main>
    );
  };
}


