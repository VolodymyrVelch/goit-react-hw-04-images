import { Component } from "react";
import { Button } from "./Button/Button";
import { ImageGallery } from "./ImageGallery/ImageGallery";

import { Loader } from "./Loader/Loader";
import { Modal } from "./Modal/Modal";
import { Searchbar } from "./Searchbar/Searchbar";
import { Main } from './App.styled';



// https://pixabay.com/api/?q=cat&page=1&key=your_key&image_type=photo&orientation=horizontal&per_page=12
export class App extends Component {
  state = {
    query: '',
    data: []
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
        
        <Loader />
        <Button />
        <Modal />
      </Main>
    );
  };
}

  // async componentDidUpdate(search , page = 1 ) {
  //   const searchParams = `?q=${this.state.search}&page=1&key=${API_KEY}&image_type=photo&orientation=horizontal&per_page=12`
  //   try {
  //     const response = await axios.get(searchParams)
  //     const data = response.data
  //     return this.setState({ data })
  //   }
  //   catch (error) {
      
  //   }
  // }