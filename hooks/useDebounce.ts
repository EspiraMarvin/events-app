import { useEffect, useState, useDeferredValue } from "react"

function useDebounce<T>(value: T, delay: number) {
  const [debouncedValue, setDebouncedValue] = useState<T>(value)
  const debounced = useDeferredValue(debouncedValue)

  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedValue(debounced)
    }, delay)

    return () => {
      // clean up- clears/cancel the timeout if the value changes
      clearTimeout(handler)
    }
  }, [debounced, delay])

  return debouncedValue
}

export default useDebounce
