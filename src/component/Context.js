import React from "react";
import {createContext, useEffect, useState } from "react";

const Context = createContext();

function ContextProvider(props) {


const [allphotos , setAllPhotos] = useState([])
const [addToCart, setAddToCart] = useState([])

const url = "https://raw.githubusercontent.com/bobziroll/scrimba-react-bootcamp-images/master/images.json"
useEffect( () =>{
   fetch(url)
   .then(res => res.json() )
   .then(data => setAllPhotos(data))
},[] )

  function toggleFavorite(id) {

    
    const uppArr = allphotos.map( photos => {
      
        if(photos.id === id){
            return{
                ...photos, isFavorite:!photos.isFavorite  
            }
         }

         return photos
    }) 
    setAllPhotos(uppArr);
    
  }

  function addItem(newItems){
    setAddToCart(prevItems => [...prevItems, newItems])
  }
    
  function removeItem(id){
    setAddToCart(prevItems => prevItems.filter(item => item.id !== id))
  }

  function emptyCartItem(){
    setAddToCart([])
  }
    

    return(
        <Context.Provider value={{allphotos, toggleFavorite, addItem, addToCart , removeItem, emptyCartItem}} >
            {props.children}
        </Context.Provider>
    )
}

export {ContextProvider, Context}
