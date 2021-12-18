import { useEffect, useState } from "react"

const useLaunch = () => {
    const [launch, setLaunch] = useState([])
    useEffect(() => {
        fetch('https://arcane-tor-66544.herokuapp.com/launch')
            .then(res => res.json())
            .then(data => setLaunch(data))
    }, [])
    return launch;
}
export default useLaunch;