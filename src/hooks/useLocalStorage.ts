import { useEffect, useState } from "react"

export function useLocalStorage<StorageType>(key: string, initialValue: StorageType | (() => StorageType)) {
{/* <T> is generic type, it is whatever is passed to useLocalStore hook which is array of CartItems. and initial value will be this type or function that returns this type */}
    const [value, setValue] = useState<StorageType>(() => {
        const jsonValue = localStorage.getItem(key)
        if (jsonValue != null) return JSON.parse(jsonValue)

        if (typeof initialValue === "function") {
            return (initialValue as () => StorageType)()
        } else {
            return initialValue
        }
        {/* This logic will the get value from localStorage or get the initial value thats passed in */}
    })

    {/* save to localStorage anytime key or value changes */}
    useEffect(() => {
        localStorage.setItem(key, JSON.stringify(value))
    }, [key, value])

    return [value, setValue] as [typeof value, typeof setValue]
}
