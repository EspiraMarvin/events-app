import { useEffect, useState } from "react";

function useDebounce(value: any, delay: number) {
    const [debouncedValue, setdDebouncedValue] = useState(value)

    useEffect(() => {
        const handler = setTimeout(() => {
            setdDebouncedValue(value)
        }, delay)

        return () => { 
            // clean up- clears/cancel the timeout if the value changes
            clearTimeout(handler)
        }
    }, [value, delay])

    return debouncedValue

}

export default useDebounce