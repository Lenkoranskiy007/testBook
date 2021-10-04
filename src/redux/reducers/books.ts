
import { Dispatch } from "redux"
import axios from 'axios'

//Типизация для action creator
const SET_ITEMS = 'SET_ITEMS'
const SET_IS_LOADED = 'SET_IS_LOADED'


const initialState: BooksStateType = {
   items: [],
   isLoaded: false
}

//Типизация для книг , которые прилетают с сервака.
export type ItemsApiType = {
  accessInfo : any
  etag: string
  id: string
  kind: string
  saleInfo: any
  searchInfo: {
    textSnippet: string
  }
  selfLink: any
  volumeInfo: {
    allowAnonLogging: boolean
    canonicalVolumeLink: string
    title: string
    categories: string[]
    contentVersion: string
    imageLinks: {
      smallThumbnail: string
      thumbnail: string

    }
    authors: string
    industryIdentifiers: any
    infoLink: string
    language: string
    maturityRating: string
    panelizationSummary: any
    previewLink: string
    printType: string
    publishedDate: string
    readingModes: {
      image: boolean
      text: boolean
    }
  }
}

//Типизация для State
export type BooksStateType = {
  items: ItemsApiType[]
  isLoaded: boolean
}

export const booksReducer = (state: BooksStateType = initialState, action:any) => {
   switch (action.type) {
     case SET_ITEMS: 
     //обновляю  state c книгами , данными ,которые прилетают с сервака.
     return {
       ...state,
       items: action.items 
     }
     case SET_IS_LOADED :
       //при обновлении состояния книг ,показываю загрузку компонента progress
       return {
         ...state,
         isLoaded: action.isLoaded
       }
   
     default:
       return state
   }

   return state
}


//Типизация для setItemsAC
type SetItemsType = {
  type: 'SET_ITEMS'
  items: ItemsApiType
}
//Типизация для setIsLoadedAC
type SetIsLoadedType = {
  type : 'SET_IS_LOADED'
  isLoaded: boolean
}



const setItemsAC = (items: ItemsApiType): SetItemsType => {
 return {type: SET_ITEMS, items}
}
const setIsLoadedAC = (isLoaded: boolean): SetIsLoadedType => {
  return {type: SET_IS_LOADED, isLoaded}
} 




//thunk - делаю запрос на сервер , и получаю книги, исходя из тех данных которых ввел клиент.
export const fetchItemsTC = (booksName: string, categories: string, relevance: string) => {
  
  return (dispatch: Dispatch) => {
    dispatch(setIsLoadedAC(true))
    axios.get(`https://www.googleapis.com/books/v1/volumes?q=${booksName}+subject=${categories}&orderBy=${relevance}&key=AIzaSyChwIGBgq4bs41X9C1FHNxtcg0tgU-rATo`).then(res => {  
     dispatch(setItemsAC(res.data.items))
     console.log(res.data.items)
     dispatch(setIsLoadedAC(false))
     }).catch(err => {
       console.log(err)
       
   
      })
  }
}


//thunk - делаю запрос на сервер  и получаю книги для отрисовки на главной странице. Данные захардкодил.
export const getItemsTC = () => {
  return (dispatch: Dispatch) => {
    dispatch(setIsLoadedAC(true))
   axios.get(`https://www.googleapis.com/books/v1/volumes?q='Программирование'&maxResults=40`).then(res => {
    dispatch(setItemsAC (res.data.items))
    dispatch(setIsLoadedAC(false))

   })
}
}

// https://www.googleapis.com/books/v1/volumes?q=${booksName}+subject:${categories}&orderBy=relevance&key=AIzaSyChwIGBgq4bs41X9C1FHNxtcg0tgU-rATo









