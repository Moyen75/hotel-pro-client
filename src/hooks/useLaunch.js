import { useEffect, useState } from "react"

const useLaunch = () => {
    const [launch, setLaunch] = useState([])
    useEffect(() => {
        fetch('http://localhost:5000/launch')
            .then(res => res.json())
            .then(data => setLaunch(data))
    }, [])
    return launch;
}
export default useLaunch;