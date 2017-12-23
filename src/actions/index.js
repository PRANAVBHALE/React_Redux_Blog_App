import axios from 'axios'

export const FETCH_POSTS = 'fetch_posts'
export const Create_POST = 'create_post'
export const FETCH_POST = 'fetch_post'



const ROOT_URL = 'http://reduxblog.herokuapp.com/api'
const API_KEY = '?key=pranav123'

export function fetchPosts() {

  //debugger

  const request  = axios.get(`${ROOT_URL}/posts${API_KEY}`)

  return {
    type:FETCH_POSTS,
    payload:request
  }
}


export function createPost(values,callback){
  const request  = axios.post(`${ROOT_URL}/posts${API_KEY}`,values)
    .then(()=>callback())
  return {
    type:Create_POST,
    payload:request
  }
}

export function fetchPost(id){
  debugger
  const request  = axios.get(`${ROOT_URL}/posts/${id}${API_KEY}`)


  return {
    type:FETCH_POST,
    payload:request
  }




}
