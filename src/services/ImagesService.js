import { AppState } from "../AppState"
import { api } from "./AxiosService"
import { Image } from "../Models/Image"

class ImagesService{
 
async getImages(query){
  try {
    const res = await api.get('apod?api_key=QAQa5Qb0cwe6M47jdwK4B5R4gGh049oDquYXnYMF&date='+ query)
    console.log(res.data)
    AppState.activeImage = new Image(res.data)
  } catch (error) {
    console.error(error)
  }
}

// setActiveImage(image){
//   console.log('setting image', image)
//   AppState.activeImage = image
// }


}

export const imagesService = new ImagesService()
