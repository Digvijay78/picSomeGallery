import React, {useContext} from "react";
import { Context } from "../component/Context";
import Images from "../component/Images"
import {getClass} from "../component/index"



function Photos() {

    const {allphotos} = useContext(Context)
    // console.log("photo" ,allphotos)
    const imageElements = allphotos.map((img, i) => (
        <Images  key ={img.id} img={img} classname ={getClass(i)} />
    ) )
    
    // console.log(photoElement)
    return(
        <main className="photos">
            {imageElements}
        </main>
    )
}

export default Photos