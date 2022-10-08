import axios from "axios";

axios.defaults.baseURL = 'https://pixabay.com/api/';
const API_KEY = '29405183-239080ff925ad4e27b7a65791'


export async function createRequest(search, page = 1) {
    // console.log(search)
    const searchParams = `?q=${search}&page=${page}&key=${API_KEY}&image_type=photo&orientation=horizontal&per_page=12`
    const response = await axios.get(searchParams)
    return response
  }


// export const addMaterial = async values => {
//     // const response = await axios.get(`${baseURL}/?key=${apiKey}&?q=cat&page=1&image_type=photo&orientation=horizontal&per_page=12`) 
//     const response = await axios.get(`https://pixabay.com/api/?q=cat&page=1&key=${apiKey}&image_type=photo&orientation=horizontal&per_page=12`) 
//     console.log(response)
// }
// console.log(addMaterial)

// id - унікальний ідентифікатор
// webformatURL - посилання на маленьке зображення для списку карток
// largeImageURL - посилання на велике зображення для модального вікна