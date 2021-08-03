export const movieApi = axios.create({
  baseURL: 'https://api.nasa.gov/planetary/apod',
  timeout: 5000
})
