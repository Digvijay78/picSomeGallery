import React,{useContext, useState} from "react"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import PropTypes from "prop-types"
import { faTrashCan } from '@fortawesome/free-solid-svg-icons'
import  {faXmark}  from '@fortawesome/free-solid-svg-icons'
import { Context } from "./Context"

function CartItem ( {item} ) {
  const {removeItem} = useContext(Context)
const [updateBin , setUpdateBin] = useState(<FontAwesomeIcon icon={faXmark} />)
 
function changebin (){
  setUpdateBin(<FontAwesomeIcon icon={faTrashCan} /> )
}

function againChange (){
  setUpdateBin(<FontAwesomeIcon icon={faXmark} />)
}

    return (
        <div className="cart-item">
        <i className="trash" onClick={() => removeItem(item.id)} onMouseEnter={changebin} onMouseLeave={againChange} > {updateBin} </i>
        <img src={item.url} width="130px" />
        <p className="price" >$5.99</p>
    </div>
    )
}

CartItem.propTypes ={
  item : PropTypes.shape({
    url : PropTypes.string.isRequired
  })
}

export default CartItem