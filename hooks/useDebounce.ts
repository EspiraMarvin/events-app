import { useEffect, useState } from "react";

function useDebounce<T>(value: T, delay: number) {
    const [debouncedValue, setDebouncedValue] = useState<T>(value)

    useEffect(() => {
        const handler = setTimeout(() => {
            setDebouncedValue(value)
        }, delay)

        return () => { 
            // clean up- clears/cancel the timeout if the value changes
            clearTimeout(handler)
        }
    }, [value, delay])

    return debouncedValue

}

export default useDebounce