const API_KEY = import.meta.env.VITE_APP_MOVIE_API_KEY

const BASE_URL = 'https://api.themoviedb.org/3/'
const language = '&language=en-US'

export const fetchUrl = (platform, category, page)=> {
    return `${BASE_URL}${platform}/${category}?api_key=${API_KEY}${language}&page=${page}`
}

export const searchUrl = (keyword, page)=> {
    return `${BASE_URL}search/multi?api_key=${API_KEY}${language}&query=${keyword}&page=${page}`
}

export const getDetailsUrl = (platform, id)=> {
    return `${BASE_URL}${platform}/${id}?api_key=${API_KEY}${language}&append_to_response=videos,credits`
}