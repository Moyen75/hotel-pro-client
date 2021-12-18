import { useEffect, useState } from "react"

const useBreakfast = () => {
    const [breakfast, setBreakfast] = useState([])
    useEffect(() => {
        fetch('https://arcane-tor-66544.herokuapp.com/breakfast')
            .then(res => res.json())
            .then(data => setBreakfast(data))
    }, [breakfast])
    return breakfast;
}
export default useBreakfast;