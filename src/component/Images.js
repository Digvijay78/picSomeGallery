import React, { useState, useContext} from "react";
import { Context } from "./Context";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart } from '@fortawesome/free-solid-svg-icons'
import { faCartShopping } from '@fortawesome/free-solid-svg-icons'
import { faHeartCircleCheck } from '@fortawesome/free-solid-svg-icons'
import { faCartPlus } from '@fortawesome/free-solid-svg-icons'
import PropTypes from 'prop-types';

 

function Images( {classname,img} ) {

    const [hover, setHover, ] = useState(false)
    const {toggleFavorite, addItem,addToCart , removeItem} = useContext(Context)


    function heart() {
        if(img.isFavorite ) {
            // <FontAwesomeIcon icon="fa-solid fa-heart" onClick={ () => toggleFavorite(img.id)}  className="favorite"/>
        //   <i className="ri-heart-fill favorite" onClick={() => toggleFavorite(img.id)}></i>
         return <i className="favorite" onClick={() => toggleFavorite(img.id)}  ><FontAwesomeIcon icon={faHeartCircleCheck} /> </i>
        }
        
        else if (hover){
            // <FontAwesomeIcon icon="fa-regular fa-heart" onClick={ () => toggleFavorite(img.id)}  className="favorite" />
            //  <i className=" fa-solid fa-heart favorite  favorite" onClick={ () => toggleFavorite(img.id)} > </i>
            // <i className="ri-heart-line favorite" onClick={() => toggleFavorite(img.id)}></i>
           return <i className="favorite" onClick={() => toggleFavorite(img.id)}  > <FontAwesomeIcon icon={faHeart} /></i>
        } 
    }

    function cart(){
        const checkItem = addToCart.some(item => item.id === img.id)
        if(checkItem){
            return<i className="cart"  onClick={ () => removeItem(img.id)}  >  <FontAwesomeIcon icon={faCartPlus} /></i>
        } else if(hover){
            return <i className="cart" onClick={() => addItem(img)} >  <FontAwesomeIcon icon={faCartShopping} /></i>
        }
    }

    
    
    
    
    return (

        <div className={`${classname} image-container`}
        
        onMouseEnter={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
        >
            <img src={img.url} className="image-grid"
            alt =""
            />
            {heart()}
             {cart() }
            
        </div>
    )
    
}

Image.proptotype ={
    classname: PropTypes.string,
    img: PropTypes.shape({
        id : PropTypes.string.isRequired,
        url : PropTypes.string.isRequired,
        isFavorite : PropTypes.bool
    })
}

export default Images