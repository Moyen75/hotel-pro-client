import { useEffect, useState } from "react"

const useDinner = () => {
    const [dinner, setDinner] = useState([])
    useEffect(() => {
        fetch('https://arcane-tor-66544.herokuapp.com/dinner')
            .then(res => res.json())
            .then(data => setDinner(data))
    }, [])
    return dinner;
}
export default useDinner;