import { useEffect, useState } from "react"
import { getGifts } from "../helpers/getGifts";

const useFetchGifs = (category) => {
    const [state,setState] = useState({
        data:[],
        loading:true
    });
    
    useEffect(()=>{
        getGifts(category)
        .then((imgs)=>{
            setTimeout(()=>{
                setState({
                    data:imgs,
                    loading:false
                })
            })
        },5000);
    },[category]);
    
    return state;
}

export default useFetchGifs
