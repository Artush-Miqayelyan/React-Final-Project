import { useEffect, useRef } from "react"

export function useClickOutside(callbeck) {

    const ref = useRef(null)

    useEffect(() => {

        const handleClickOutSide = (e) => {
            if (ref.current && !ref.current.contains(e.target)) {
                callbeck()
            }
        }
        const main = document.getElementById("main")
        main.addEventListener("click", handleClickOutSide)
        return () => main.removeEventListener("click", handleClickOutSide)

    }, [ref])

    return [ref]
}
