import axios from "axios";

axios.defaults.baseURL = 'https://pixabay.com/api/';
const API_KEY = '29405183-239080ff925ad4e27b7a65791'


export async function createRequest(search, page = 1) {
    // console.log(search)
    const searchParams = `?q=${search}&page=${page}&key=${API_KEY}&image_type=photo&orientation=horizontal&per_page=12`
    const response = await axios.get(searchParams)
    return response
  }
