import { useEffect, useState } from "react"

const useDinner=()=>{
    const[dinner,setDinner]=useState([])
    useEffect(()=>{
        fetch('http://localhost:5000/dinner')
        .then(res=>res.json())
        .then(data=>setDinner(data))
    },[])
    return dinner;
}
export default useDinner;