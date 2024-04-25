import { useEffect, useRef } from "react"

export function useClickOutside(callbeck) {

    const ref = useRef(null)

    useEffect(() => {

        const handleClickOutSide = (e) => {
            if (ref.current && !ref.current.contains(e.target)) {
                callbeck()
            }
        }
        const body = document.getElementById("body")
        body.addEventListener("click", handleClickOutSide)
        return () => body.removeEventListener("click", handleClickOutSide)

    }, [ref])

    return [ref]
}
