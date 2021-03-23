import { useState } from "react"

const useLocalStorage = <T = any>(key: string, initialValue: unknown): [T, Function] => {
    const [_value, _setValue] = useState<T>(() => {
        try {
            const item = window.localStorage.getItem(key)
            return item ? JSON.parse(item) : initialValue
        } catch (error) {
            return initialValue
        }
    })

    const setValue = (value: T) => {
        try {
            _setValue(value)

            window.localStorage.setItem(
                key,
                JSON.stringify(value)
            )
        } catch (error) {

        }
    }

    return [
        _value,
        setValue
    ]
}

export {
    useLocalStorage
}