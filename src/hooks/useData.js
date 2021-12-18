import { useEffect, useState } from "react"

const useData = () => {
    const [foods, setFoods] = useState([])
    useEffect(() => {
        fetch('https://arcane-tor-66544.herokuapp.com/foods')
            .then(res => res.json())
            .then(data => setFoods(data))
    }, [])
    return foods;
}
export default useData;